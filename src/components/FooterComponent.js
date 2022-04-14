import React, { Component } from "react";
import FooterBG from "../images/BGs/DPuuRd1X0AMTSgq.jpg";
import "../css/vanilla_css/footer.css";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id="footer"
        className="container no-gutters footerWrapper"
        style={{ minWidth: "100%" }}
      >
        <div
          className="row"
          style={{
            minHeight: "100px",
            backgroundImage: `url(${FooterBG})`,
            backgroundSize: "cover",
          }}
        >
          <div className="mt-5 col">
            <h4 className="footer" style={{ color: "white" }}>
              Intellectual Property Reserved to Blizzard Entertainment
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
