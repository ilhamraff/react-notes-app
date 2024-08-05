import React from "react";
import PropTypes from "prop-types";
import AppContext from "../contexts/AppContext";

function NoteSearch({ keyword, keywordChange }) {
  const { locale } = React.useContext(AppContext);

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder={locale === "id" ? "Cari Catatan..." : "Search Notes..."}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

NoteSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default NoteSearch;
