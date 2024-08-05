import React from "react";
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";
import { useSearchParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/network-data";
import AppContext from "../contexts/AppContext";
import ContentLoader from "react-content-loader";
import MyLoader from "../components/Loader";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [archivedNotes, setArchivedNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const { locale } = React.useContext(AppContext);

  React.useEffect(() => {
    async function fetchNotes() {
      setIsLoading(true);
      const { data: activeNotes } = await getActiveNotes();
      const { data: archivedNotes } = await getArchivedNotes();
      setTimeout(() => {
        setNotes(activeNotes);
        setArchivedNotes(archivedNotes);
        setIsLoading(false);
      }, 3000);
    }

    fetchNotes();
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    const { data: dataArchived } = await getArchivedNotes();
    setNotes(data);
    setArchivedNotes(dataArchived);
  }

  async function onArchiveHandler(id) {
    await archiveNote(id);
    const { data } = await getActiveNotes();
    const { data: dataArchived } = await getArchivedNotes();
    setNotes(data);
    setArchivedNotes(dataArchived);
  }

  async function onUnarchiveHandler(id) {
    await unarchiveNote(id);
    const { data } = await getActiveNotes();
    const { data: dataArchived } = await getArchivedNotes();
    setNotes(data);
    setArchivedNotes(dataArchived);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );
  const filteredArchivedNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (isLoading) {
    return (
      <section className="home-page">
        <NoteSearch keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <MyLoader />
      </section>
    );
  }

  return (
    <section className="home-page">
      <NoteSearch keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <h2>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
      <NoteList
        notes={filteredNotes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        archived={false}
      />
      <h2>{locale === "id" ? "Catatan Arsip" : "Archive Notes"}</h2>
      <NoteList
        notes={filteredArchivedNotes}
        onDelete={onDeleteHandler}
        onArchive={onUnarchiveHandler}
        archived={true}
      />
    </section>
  );
}

export default HomePage;
