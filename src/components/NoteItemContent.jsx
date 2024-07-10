import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemContent({ createdAt, title, body }) {
  return (
    <div className="note-item__content">
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <h4 className="note-item__title">{title}</h4>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;
