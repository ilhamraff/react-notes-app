import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemButtons from "./NoteItemButtons";
import PropTypes from "prop-types";

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
      <NoteItemContent
        id={id}
        createdAt={createdAt}
        title={title}
        body={body}
      />
      <NoteItemButtons
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}

NoteItem.propTypes = {
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItem;
