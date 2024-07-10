import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemButtons from "./NoteItemButtons";

function NoteItem({
  createdAt,
  title,
  body,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div className="note-item">
      <NoteItemContent createdAt={createdAt} title={title} body={body} />
      <NoteItemButtons
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}

export default NoteItem;
