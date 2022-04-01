import React from "react";
import axios from "axios";

import "./Files.css";

class Files extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/Files")
      .then((response) => {
        console.log(response.data);
        this.setState({ files: response.data[0].files });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="px-3 py-4 files-cont">
        <div
          className="flex justify-between mb-2 px-4 f-medium"
          style={{ marginBottom: "30px" }}
        >
          <b>Files / Documents</b>
          <div className="primary-color">
            <i class="fa-solid fa-file-circle-plus mr-2"></i>
            <b>Add Files</b>
          </div>
        </div>
        {this.state.files.map((data) => {
          return (
            <div className="file">
              <i class="fa-solid fa-file-lines ml-2 mr-4"></i>
              {data}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Files;
