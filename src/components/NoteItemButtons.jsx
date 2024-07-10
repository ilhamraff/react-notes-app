import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemButtons({ id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item__buttons">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} isArchived={archived} />
    </div>
  );
}

export default NoteItemButtons;
