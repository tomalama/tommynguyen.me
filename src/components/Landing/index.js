import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Face from "./Face";

class Landing extends Component {
  render() {
    return (
      <div className="Landing__Wrapper">
        <div className="Landing__Header">
          <h1>Tommy Nguyen</h1>
          <h3>
            <a href="https://www.github.com/tomalama/">Github</a> |{" "}
            <a href="https://www.linkedin.com/in/tommynguyen7/">LinkedIn</a> |{" "}
            <a href="https://resume.creddle.io/resume/fst3u4d7hrs">Resume</a> |{" "}
            <a href="mailto:tommynguyen233@gmail.com">Contact</a>
          </h3>
        </div>
        <div className="Landing__Section">
          <div className="Landing__News">
            <h2>What's New?</h2>
            <ul>
              <li>
                Dec/19: Graduating from{" "}
                <a href="https://www.uottawa.ca/">uOttawa</a>
              </li>
              <li>
                May/19: Joined <a href="https://www.ibm.com/ca-en">IBM</a> as a
                CO-OP
              </li>
              <li>
                Sep/15: Started at <a href="https://www.uottawa.ca/">uOttawa</a>
              </li>
            </ul>
          </div>
        </div>
        <BrowserView>
          <Face />
        </BrowserView>
        <MobileView>
          <div className="Landing__Section">
            For the full experience, view on desktop.
          </div>
        </MobileView>
      </div>
    );
  }
}

export default Landing;
