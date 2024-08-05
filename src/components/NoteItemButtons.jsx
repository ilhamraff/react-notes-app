import React from "react";
import PropTypes from "prop-types";
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

NoteItemButtons.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItemButtons;
