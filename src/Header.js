import React from "react";
import logo from "./images/logo.png";
import user from "./images/user-b.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let patientData = this.props.patientData;
    return (
      <React.Fragment>
        <div className="header-cont">
          <div
            className="flex items-center"
            style={{ background: "white", width: "25%" }}
          >
            <img src={logo} alt="logo" className="cursor-pointer" />
            <i
              onClick={this.props.handlePanel}
              className="fas fa-solid fa-bars secondary-color ml-3 pr-2"
            />
          </div>
          <div className="flex items-center header-right">
            <img className="mx-4" src={user} alt="user" />
            <div style={{ fontSize: "24px", fontWeight: "600" }}>
              {patientData.name}
            </div>
            <input type="text" className="search-box" placeholder="Search" />
            <i className="fa-solid fa-2x fa-circle-plus mx-3 primary-color"></i>
            <span>
              <i class="fa-solid fa-2xs fa-circle noti"></i>
              <i
                className="fa-solid fa-1x fa-bell secondary-color mr-4"
                style={{
                  padding: "10px",
                  background: "white",
                  borderRadius: "50px",
                }}
              ></i>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
