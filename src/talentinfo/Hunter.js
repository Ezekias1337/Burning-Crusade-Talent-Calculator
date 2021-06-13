import React, { Component } from 'react';

class Hunter extends Component {
    constructor(props){
        super(props);
        this.state = {
        specData: [{
            spec1: {name: "Beast Mastery"},
            spec2: {name: "Marksman"},
            spec3: {name: "Survival"}
        }]
        };
    }
}

export default Hunter;
