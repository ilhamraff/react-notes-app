import React from "react";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getNote } from "../utils/network-data";

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: null,
    };
  }

  async componentDidMount() {
    const result = await getNote(this.props.id);

    if (result.error) {
      this.setState({ note: null });
    } else {
      this.setState({ note: result.data });
    }
  }

  render() {
    if (this.state.note === null) {
      return <p>Tidak ada Catatan</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
