import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props){
        super(props);
        this.state = [];
    }

    render () {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h4 style={{color: "#e1eef4"}}>Intellectual Property Reserved to Blizzard Entertainment</h4>
                    </div>
                </div>
            </div>
        );
    }

}

export default FooterComponent;