import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      id: +new Date(),
      archived: false,
      createdAt: new Date().toISOString(),
      titleLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= this.state.titleLimit) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    if (this.state.title.trim() === "" && this.state.body.trim() === "") {
      alert("Judul dan Isi Catatan harus diisi");
      return;
    }

    const { title, body, id, archived, createdAt } = this.state;
    this.props.addNote({
      title,
      body,
      id,
      archived,
      createdAt,
    });

    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    const titleCharsLeft = this.state.titleLimit - this.state.title.length;
    return (
      <form
        action=""
        className="note-input"
        onSubmit={this.onSubmitEventHandler}
      >
        <h2>Tambah Note</h2>
        <p className="note-input__title-char-limit">
          Sisa karakter: {titleCharsLeft}{" "}
        </p>
        <input
          type="text"
          placeholder="Masukan Judul Catatan ..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          name="body"
          id="body"
          placeholder="Masukan Isi Catatan ..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        ></textarea>
        <button type="submit">Buat Catatan</button>
      </form>
    );
  }
}

NoteInput.propsTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
