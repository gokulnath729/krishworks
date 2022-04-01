import React from "react";
import Appointments from "./Appointments";
import Files from "./Files";
import Notes from "./Notes";
import "./Patientdetails.css";
class Patientdetails extends React.Component {
  render() {
    let patientData = this.props.patientData;
    return (
      <div style={{ width: "100%" }}>
        <div className="page-title">
          <div className="flex items-baseline">
            <span className="primary-color">Patient List</span>
            <i class="fa-solid fa-chevron-right mx-4" />
            <div className="secondary-color">{patientData.name}</div>
          </div>
          <div>
            <button className="btn">
              <i className="fa-solid fa-sm fa-print secondary-color"></i>
            </button>
            <button className="btn ml-2">
              <i className="fa-solid fa-sm fa-pen-to-square secondary-color mr-2" />{" "}
              Edit Patient
            </button>
          </div>
        </div>
        <div className="main-cont">
          <div className="patient-details-cont">
            <img
              className="mx-auto my-2"
              width={80}
              style={{ borderRadius: "50%" }}
              src={
                "http://starsunfolded.com/wp-content/uploads/2016/12/Angelina-Jolie.jpg"
              }
              alt="propic"
            />
            <div className="pat-name">{patientData.name}</div>
            <div className="secondary-color f-normal">
              {patientData["e-email"]}
            </div>
            <div className="flex my-4">
              <div style={{ width: "75px" }}>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {patientData.Past}
                </div>
                <div className="secondary-color f-normal">Past</div>
              </div>
              <div
                style={{ borderLeft: "2px solid #88949e", paddingLeft: "22px" }}
              >
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {patientData.Upcoming}
                </div>
                <div className="secondary-color f-normal">Upcoming</div>
              </div>
            </div>
            <button className="send-msg-btn">Send Message</button>
          </div>
          <div className="patient-details-cont2 flex flex-wrap">
            <div className="detail-box">
              <b className="secondary-color">Gender</b>
              <div className="over-ellipsis">{patientData.Gender}</div>
            </div>
            <div className="detail-box">
              <b className="secondary-color">Birthday</b>
              <div className="over-ellipsis">{patientData.Birthday}</div>
            </div>
            <div className="detail-box">
              <b className="secondary-color">Phone Number</b>
              <div className="over-ellipsis">
                {" "}
                {patientData["Phone Number"]}
              </div>
            </div>
            <div className="detail-box">
              <b className="secondary-color">Street Address</b>
              <div className="over-ellipsis">
                {patientData["Street Address"]}
              </div>
            </div>
            <div className="detail-box">
              <b className="secondary-color">City</b>
              <div className="over-ellipsis">Cilacap</div>
            </div>
            <div className="detail-box">
              <b className="secondary-color">ZIP Code</b>
              <div className="over-ellipsis">{patientData["ZIP Code"]}</div>
            </div>
            <div className="detail-box">
              <b className="secondary-color">Member Status</b>
              <div className="over-ellipsis">
                {patientData["Member Status"]}
              </div>
            </div>
            <div className="detail-box">
              <b className="secondary-color">Register Date</b>
              <div className="over-ellipsis">
                {patientData["Register Date"]}
              </div>
            </div>
          </div>
          <Notes />
        </div>
        <div className="flex">
          <Appointments />
          <Files />
        </div>
      </div>
    );
  }
}

export default Patientdetails;
