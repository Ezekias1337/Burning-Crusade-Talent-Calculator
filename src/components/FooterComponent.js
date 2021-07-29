import React, { Component } from 'react';
import RepeatingTile5 from "../images/Repeating_Tile5.PNG"
import HeaderBG from "../images/BGs/DPuuRd1X0AMTSgq.jpg";

class FooterComponent extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="ml-0 container">
                <div className="row" style={{ width: "110.25%", backgroundColor: "#b9bfb4" }}>
                    <div className="mt-2 col" >
                        <h4>Intellectual Property Reserved to Blizzard Entertainment</h4>
                    </div>
                </div>
            </div>
        );
    }

}

export default FooterComponent;