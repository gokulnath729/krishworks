import React from "react";
import gauge from "../images/gauge.png";
import calendar from "../images/calendar.png";
import message from "../images/message.png";
import avatar from "../images/avatar.png";
import settings from "../images/settings.png";
import money from "../images/money.png";
import axios from "axios";

import "./Leftpanel.css";
class Leftpanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorData: {},
      list: [
        { img: gauge, type: "Overview", active: false },
        { img: calendar, type: "Calendar", active: false },
        { img: avatar, type: "Patient List", active: true },
        { img: message, type: "Messages", active: false },
        { img: money, type: "Payment Information", active: false },
        { img: settings, type: "Settings", active: false },
      ],
    };
  }

  handleActive = (val) => {
    let arr = this.state.list.map((data) => {
      return { ...data, active: data.type == val ? true : false };
    });
    this.setState({ list: arr });
  };

  componentDidMount() {
    axios
      .get(" https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
      .then((response) => {
        this.setState({ doctorData: response.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const docData = this.state.doctorData;
    return (
      <React.Fragment>
        <div
          style={{ background: "white" }}
          className={this.props.panelOpen ? "left-panel-cont" : ""}
        >
          {this.props.panelOpen
            ? this.state.list.map((data) => {
                return (
                  <div
                    className={
                      data.active
                        ? "nav-active-opt cursor-pointer"
                        : "nav-opt cursor-pointer"
                    }
                    onClick={() => this.handleActive(data.type)}
                  >
                    <img
                      className="mr-4 inline"
                      width={18}
                      src={data.img}
                      alt={data.type}
                    />{" "}
                    <span>{data.type}</span>
                  </div>
                );
              })
            : this.state.list.map((data) => {
                return (
                  <div
                    className={
                      data.active
                        ? "nav-active cursor-pointer"
                        : "nav cursor-pointer"
                    }
                    onClick={() => this.handleActive(data.type)}
                  >
                    <img
                      className="mr-4 inline"
                      width={18}
                      src={data.img}
                      alt={data.type}
                    />{" "}
                  </div>
                );
              })}
          {this.props.panelOpen && (
            <div className="footer">
              <div className="secondary-color f-normal mb-4">
                <i class="fa-solid fa-circle-info mx-3"></i>
                Help
                <i class="fa-solid fa-question mx-1"></i>
              </div>
              <hr />
              <div className="flex items-center px-2">
                <img
                  className="ml-4 my-2 inline"
                  width={30}
                  style={{ borderRadius: "50%" }}
                  src="https://assets.caredash.com/image/AsHB4VJqis2bG33NTqlGn6pL8xk=/caredash-serverless-image-handler/caredash/providers/dr-christopher-crudder-profile-98c15792.jpg"
                  alt="doc"
                />
                <div
                  className="text-left flex justify-around items-center"
                  style={{ width: "80%" }}
                >
                  <div>
                    <div className="f-medium">{docData.name}</div>
                    <div className="f-normal secondary-color">
                      {docData.specification}
                    </div>
                  </div>
                  <i class="fa-solid fa-sm fa-chevron-down secondary-color "></i>
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Leftpanel;
