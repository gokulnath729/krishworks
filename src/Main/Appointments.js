import React from "react";
import "./Appointments.css";
import axios from "axios";

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { id: 1, type: "Upcoming Appointments", active: true },
        { id: 2, type: "Past Appointments", active: false },
        { id: 3, type: "Medical Records", active: false },
      ],
      activeTab: 1,
      appointments: {},
    };
  }

  handleActive = (val, id) => {
    let arr = this.state.tabs.map((data) => {
      return { ...data, active: data.type == val ? true : false };
    });
    this.setState({ tabs: arr, activeTab: id });
  };

  componentDidMount() {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
      .then((response) => {
        console.log(response.data);
        this.setState({ appointments: response.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const appointmentData = this.state.appointments;
    const upcomingApp = appointmentData["Upcoming Appointments"];
    const postApp = appointmentData["Post Appointment"];
    const mediRec = appointmentData["Medical Records"];
    console.log(appointmentData);
    return (
      <div className="p-4 appointment-cont">
        <div className="flex secondary-color tab-menu">
          {this.state.tabs.map((data) => {
            return (
              <div
                onClick={() => this.handleActive(data.type, data.id)}
                className={data.active ? "mx-4 active-tabs" : "mx-4"}
              >
                {data.type}
              </div>
            );
          })}
        </div>
        {this.state.activeTab === 1 ? (
          <div className="appointment-list">
            <div className="flex justify-between items-center mx-4 my-2">
              Root Canal Treatment{" "}
              <div className="btn">
                <i class="mr-2 fa-solid fa-chevron-up" />
                Show Previous Treatment
              </div>
            </div>
            <hr />
            {upcomingApp !== undefined && (
              <React.Fragment>
                <div className="flex">
                  <div style={{ marginLeft: "40px" }}>
                    <div className="active-line"></div>
                    <i
                      class="fa-solid fa-circle fa-xs"
                      style={{ color: "#0d53fc" }}
                    />
                    <div className="active-line"></div>
                  </div>
                  <div
                    className="flex px-4 py-2 items-center bg-white"
                    style={{ width: "100%" }}
                  >
                    <div className="text-left" style={{ width: "25%" }}>
                      <div className="date-text mb-1">{upcomingApp.Date}</div>
                      <div className="secondary-color f-normal">
                        {upcomingApp.Time}
                      </div>
                    </div>{" "}
                    <div className="secondary-color text-left f-normal center-data">
                      Treatment
                      <div className="data-text mt-1 f-medium">
                        {upcomingApp.Treatment}
                      </div>
                    </div>
                    <div className="secondary-color text-left f-normal mx-4">
                      Dentist
                      <div className="data-text mt-1 f-normal">
                        {upcomingApp.Dentist}
                      </div>
                    </div>
                    <div className="secondary-color text-left f-normal mx-4">
                      Nurse
                      <div className="data-text mt-1 f-normal">
                        {upcomingApp.Nurse}
                      </div>
                    </div>
                    <div className="primary-color f-normal ml-4">
                      <b>Note</b>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        ) : this.state.activeTab === 2 ? (
          <div className="appointment-list">
            <div className="flex justify-between items-center mx-4 my-2">
              Root Canal Treatment{" "}
              <div className="btn">
                <i class="mr-2 fa-solid fa-chevron-up" />
                Show Previous Treatment
              </div>
            </div>
            <hr />
            {upcomingApp !== undefined && (
              <React.Fragment>
                <div className="flex">
                  <div style={{ marginLeft: "40px" }}>
                    <div className="green-active-line"></div>
                    <i
                      class="fa-solid fa-circle fa-xs"
                      style={{ color: "green" }}
                    />
                    <div className="green-active-line"></div>
                  </div>
                  <div
                    className="flex px-4 py-2 items-center bg-white"
                    style={{ width: "100%" }}
                  >
                    <div className="text-left" style={{ width: "25%" }}>
                      <div className="date-text mb-1">{upcomingApp.Date}</div>
                      <div className="secondary-color f-normal">
                        {upcomingApp.Time}
                      </div>
                    </div>{" "}
                    <div className="secondary-color text-left f-normal center-data">
                      Treatment
                      <div className="data-text mt-1 f-medium">
                        {upcomingApp.Treatment}
                      </div>
                    </div>
                    <div className="secondary-color text-left f-normal mx-4">
                      Dentist
                      <div className="data-text mt-1 f-normal">
                        {upcomingApp.Dentist}
                      </div>
                    </div>
                    <div className="secondary-color text-left f-normal mx-4">
                      Nurse
                      <div className="data-text mt-1 f-normal">
                        {upcomingApp.Nurse}
                      </div>
                    </div>
                    <div className="primary-color f-normal ml-4">
                      <b>Note</b>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Appointments;
