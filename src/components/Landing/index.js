import React, { Component } from "react";
import Face from "./Face";

class Landing extends Component {
  render() {
    return (
      <div className="Landing__Wrapper">
        <div className="Landing__Header">
          <h1>Tommy Nguyen</h1>
          <h3>
            <a href="https://www.linkedin.com/in/tommynguyen7/">LinkedIn</a> |{" "}
            <a href="https://resume.creddle.io/resume/fst3u4d7hrs">Resume</a> |{" "}
            <a href="mailto:tommynguyen233@gmail.com">Contact</a>
          </h3>
        </div>
        <div className="Landing__Content">
          <div className="Landing__News">
            <h2>What's New?</h2>
            <ul>
              <li>
                Dec/19: Graduating <a href="https://www.uottawa.ca/">uOttawa</a>
              </li>
              <li>
                May/19: Started a new CO-OP at{" "}
                <a href="https://www.ibm.com/ca-en">IBM</a>
              </li>
              <li>
                Sep/15: Started at <a href="https://www.uottawa.ca/">uOttawa</a>
              </li>
            </ul>
          </div>
        </div>
        <Face />
      </div>
    );
  }
}

export default Landing;
