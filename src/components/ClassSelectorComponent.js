import React, { Component } from 'react';

class ClassSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: [{
                id: 0,
                playableClassName: "Hunter",
                classIcon: "assets/images/Hunter_Icon.png",
                classColor: "#ABD473",
                spec1:{name:"Beast Mastery", bg: "assets/images/talents/Hunter/Background/BeastMastery.jpg"}, 
                spec2:{name:"Marksmanship", bg: "assets/images/talents/Hunter/Background/Marksman.jpg"}, 
                spec3:{name:"Survival", bg: "assets/images/talents/Hunter/Background/Survival.jpg"}
            },
            {
                id: 1,
                playableClassName: "Shaman",
                classIcon: "assets/images/Shaman_Icon.png",
                classColor: "#0070DE",
                spec1:{name:"Elemental", bg: "assets/images/talents/Shaman/Background/Elemental.jpg"}, 
                spec2:{name:"Enhancement", bg: "assets/images/talents/Shaman/Background/Enhancement.jpg"}, 
                spec3:{name:"Restoration", bg: "assets/images/talents/Shaman/Background/Restoration.jpg"}
            },
            {
                id: 2,
                playableClassName: "Warlock",
                classIcon: "assets/images/Warlock_Icon.png",
                classColor: "#9482C9",
                spec1:{name:"Affliction", bg: "assets/images/talents/Warlock/Background/Affliction.jpg"}, 
                spec2:{name:"Demonology", bg: "assets/images/talents/Warlock/Background/Demonology.jpg"}, 
                spec3:{name:"Destruction", bg: "assets/images/talents/Warlock/Background/Destruction.jpg"}
            },
            {
                id: 3,
                playableClassName: "Warrior",
                classIcon: "assets/images/Warrior_Icon.png",
                classColor: "#C79C6E",
                spec1:{name:"Arms", bg: "assets/images/talents/Warrior/Background/Arms.jpg"},
                spec2:{name:"Fury", bg: "assets/images/talents/Warrior/Background/Fury.jpg"},
                spec3:{name:"Protection", bg: "assets/images/talents/Warrior/Background/Protection.jpg"}
            },
            {
                id: 4,
                playableClassName: "Rogue",
                classIcon: "assets/images/Rogue_Icon.png",
                classColor: "#FFF569",
                spec1:{name:"Assassination", bg: "assets/images/talents/Rogue/Background/Assassination.jpg"}, 
                spec2:{name:"Combat", bg: "assets/images/talents/Rogue/Background/Combat.jpg"}, 
                spec3:{name:"Subtlety", bg: "assets/images/talents/Rogue/Background/Subtlety.jpg"}
            },
            {
                id: 5,
                playableClassName: "Priest",
                classIcon: "assets/images/Priest_Icon.png",
                classColor: "#FFFFFF",
                spec1:{name:"Discipline", bg: "assets/images/talents/Priest/Background/Discipline.jpg"}, 
                spec2:{name:"Holy", bg: "assets/images/talents/Priest/Background/Holy.jpg"}, 
                spec3:{name:"Shadow", bg: "assets/images/talents/Priest/Background/Shadow.jpg"}
            },
            {
                id: 6,
                playableClassName: "Paladin",
                classIcon: "assets/images/Paladin_Icon.png",
                classColor: "#F58CBA",
                spec1:{name:"Holy", bg: "assets/images/talents/Paladin/Background/Holy.jpg"}, 
                spec2:{name:"Protection", bg: "assets/images/talents/Paladin/Background/Protection.jpg"}, 
                spec3:{name:"Retribution", bg: "assets/images/talents/Paladin/Background/Retribution.jpg"}
            },
            {
                id: 7,
                playableClassName: "Mage",
                classIcon: "assets/images/Mage_Icon.png",
                classColor: "#69CCF0",
                spec1:{name:"Arcane", bg: "assets/images/talents/Mage/Background/Arcane.jpg"}, 
                spec2:{name:"Fire", bg: "assets/images/talents/Mage/Background/Fire.jpg"}, 
                spec3:{name:"Frost", bg: "assets/images/talents/Mage/Background/Frost.jpg"}
            },
            {
                id: 8,
                playableClassName: "Druid",
                classIcon: "assets/images/Druid_Icon.png",
                classColor: "#FF7D0A",
                spec1:{name:"Balance", bg: "assets/images/talents/Druid/Background/Balance.jpg"}, 
                spec2:{name:"Feral Combat", bg: "assets/images/talents/Druid/Background/Feral Combat.jpg"}, 
                spec3:{name:"Restoration", bg: "assets/images/talents/Druid/Background/Restoration.jpg"}
            }]
        };
    }

    render() {
        const classSelector = this.state.classes.map(playableClass => {
            return (
                <div className="col mt-5 hovereffect" style={{height: "130px", width: "130px" }}>
                    <img src={playableClass.classIcon} alt={playableClass.playableClassName} className="classIcon img-fluid" style={{border: `2px solid ${playableClass.classColor}`}}/>
                    <h4 style={{color: playableClass.classColor}}>{playableClass.playableClassName}</h4>
                    <div class="overlay" style={{height: "110px", width: "135px" }}>
                        <a class="info" href="#" style={{color: playableClass.classColor, boxShadow: `0 0 5px ${playableClass.classColor}`, border: `2px solid ${playableClass.classColor}`}}>Select</a>
                    </div>
                </div>
            );
        })
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {classSelector}
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassSelector;