import React from "react";
import "./Notes.css";
import user from "../images/user-b.png";

class Notes extends React.Component {
  render() {
    return (
      <div className="px-1 py-4" style={{ background: "white" }}>
        <div className="flex justify-between mb-2 px-4 f-medium">
          <b>Notes</b>
          <div className="primary-color">See all</div>
        </div>
        <div className="notes-cont">
          <div className="text-left mb-2">
            <div className="my-2">
              <span>--</span>{" "}
              <span>This patient is Lorem Ipsum is simply dummy</span>
            </div>
            <div className="my-2">
              <span>--</span> <span>Lorem Ipsum is simply dummy</span>
            </div>
            <div className="my-2">
              <span>--</span> <span>Has allergic history with Cataflam</span>
            </div>
          </div>
          <button className="note-btn">save note</button>
        </div>
        <div className="f-normal text-left px-4 my-2">
          qui dolorem ipsum quia dolor
          <div className="flex justify-between f-normal secondary-color">
            <div>
              <img
                className="mr-1 inline"
                height={10}
                width={10}
                src={user}
                alt="user"
              />{" "}
              <span>Drg. Mega Nanade</span>{" "}
            </div>
            <div>20 Nov '19</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
