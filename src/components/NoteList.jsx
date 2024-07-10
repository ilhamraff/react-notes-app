import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, archived }) {
  if (notes.length === 0) {
    return <p className="note-list__empty">Tidak ada catatan.</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          archived={archived}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
