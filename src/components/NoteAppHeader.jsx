import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ keyword, onSearch }) {
  return (
    <div className="note-app__header">
      <h1>My Notes</h1>
      <NoteSearch keyword={keyword} onSearch={onSearch} />
    </div>
  );
}

export default NoteAppHeader;
