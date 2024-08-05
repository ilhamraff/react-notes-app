import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";

function NoteItemContent({ id, createdAt, title, body }) {
  return (
    <div className="note-item__content">
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <h4 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h4>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemContent;
