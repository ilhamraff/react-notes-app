import React from "react";
import PropTypes from "prop-types";

function ArchiveButton({ id, onArchive, isArchived }) {
  return (
    <button className="note-item__archive" onClick={() => onArchive(id)}>
      {isArchived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
