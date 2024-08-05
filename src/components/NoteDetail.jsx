import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

function NoteDetail({ title, body, createdAt }) {
  return (
    <div className="note-detail">
      <h4 className="note-detail__title">{title}</h4>
      <p className="note-detail__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-detail__body">{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
