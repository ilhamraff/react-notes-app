import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
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

    this.props.addNote(this.state);
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

export default NoteInput;
