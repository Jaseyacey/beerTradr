import React, { Component } from "react";
import storage from "../Firebase/index";
import Container from "react-bootstrap/Container";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "/b/beertradr.appspot.com/o",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };
  render() {
    return (
  <Container>
      <div className="photoUploadForm">          
          <h3 className="green-text">Add a beer to your collection</h3>     
          <br></br>
        <div className="green-text">
        <br></br>
          <div className="btn">
          <br></br>
            <span>File</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>

        <img
          src={this.state.url || "https://via.placeholder.com/150"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
  </Container>
    );
  }
}

export default ImageUpload;