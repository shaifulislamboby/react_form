import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class Danke extends Component {

  render() {
    return (
      <div className="appWrapper dashboard-wrapper">
        <div className="appMainWrapper">
          <div className="appMain-container">
            <h1>Danke Schön !</h1>
            <h3>Unten sehen Sie die Daten, die Sie eingegeben haben</h3>
            <p><b>Vorname: </b>{this.props.location.state.fristname}</p>
            <p><b>Nachname: </b>{this.props.location.state.lastname}</p>
            <p><b>E-Mail:</b> {this.props.location.state.email}</p>
            <p><b>Passwort: </b>{this.props.location.state.password}</p>
            <p><b>Anschrift: </b>{this.props.location.state.address}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Danke);
