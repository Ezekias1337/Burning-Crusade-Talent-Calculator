import React, { Component } from 'react';

class CalculatorComponent extends Component {
    constructor(props){
        super(props);
        this.state = [];
    }

    render () {
        return (
            <React.Fragment>
                <div className="col" style={{color: "#e1eef4", marginLeft: "15px"}}>
                        <h5 style={{color: "#e1eef4"}}>Points Spent: </h5> 
                        <h5 id="total-points" style={{color: "#e1eef4"}}>0</h5>
                    </div>
                    <button type="button" className="btn btn-success ml-4 mb-4 mt-2">Reset</button>
                    <div className="row">
                        <div className="col">
                            <h5 style={{color: "#e1eef4"}} id="point-counter1">Spec 1:  </h5>
                        </div>
                        <div className="col">
                            <h5 style={{color: "#e1eef4"}} id="point-counter2">Spec 2:  </h5>
                        </div>    
                        <div className="col">
                            <h5 style={{color: "#e1eef4"}} id="point-counter3">Spec 3:  </h5>
                        </div>
                    </div>

                    <div className="row talent-frame ml-3 mr-3">
                        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/images/talents/Hunter/Background/BeastMastery.jpg'})`}} className="col-xs-12 col-md-4 talent-frame talent-bg" id="Col 1">
                            <h5 id="spec1">Beast Mastery</h5>
                            <div className="row talent-row">
                                <img className="talentButton active-talent req-active" src="assets/images/talents/Hunter/Progression/spec1/ImprovedAspectHawk.jpg"/>
                                    <span className="talentPoints req-00-s1">0/5</span>
                                <img className="talentButton active-talent req-active" src="assets/images/talents/Hunter/Progression/spec1/EnduranceTraining.jpg"/>
                                <span className="talentPoints req-00-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/FocusedFire.jpg"/>
                                <span className="talentPoints req-05-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ImprovedAspectMonkey.jpg"/>
                                <span className="talentPoints req-05-s1">0/3</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ThickHide.jpg"/>
                                <span className="talentPoints req-05-s1">0/3</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ImprovedRevivePet.jpg"/>
                                <span className="talentPoints req-05-s1">0/2</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Pathfinding.jpg"/>
                                <span className="talentPoints req-10-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BestialSwiftness.jpg"/>
                                <span className="talentPoints req-10-s1">0/1</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/UnleashedFury.jpg"/>
                                <span className="talentPoints req-10-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ImprovedMendPet.jpg"/>
                                <span className="talentPoints req-15-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Ferocity.jpg"/>
                                <span className="talentPoints req-15-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/SpiritBond.jpg"/>
                                <span className="talentPoints req-20-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Intimidation.jpg"/>
                                <span className="talentPoints req-20-s1">0/1</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BestialDiscipline.jpg"/>
                                <span className="talentPoints req-20-s1">0/2</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/AnimalHandler.jpg"/>
                                <span className="talentPoints req-25-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Frenzy.jpg"/>
                                <span className="talentPoints req-25-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/FerociousInspiration.jpg"/>
                                <span className="talentPoints req-30-s1">0/3</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BestialWrath.jpg"/>
                                <span className="talentPoints req-30-s1">0/1</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/CatlikeReflexes.jpg"/>
                                <span className="talentPoints req-30-s1">0/3</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/SerpentsSwiftness.jpg"/>
                                <span className="talentPoints req-35-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BeastWithin.jpg"/>
                                <span className="talentPoints req-40-s1">0/1</span>
                            </div>
                        </div>
                        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/images/talents/Hunter/Background/Marksman.jpg'})`}} className="col-xs-12 col-md-4 talent-frame talent-bg" id="Col 2">
                            <h5 id="spec2">Marksmanship</h5>
                            <div className="row talent-row">
                                <img className="talentButton active-talent req-active" src="assets/images/talents/Hunter/Progression/spec1/ImprovedAspectHawk.jpg"/>
                                    <span className="talentPoints req-00-s1">0/5</span>
                                <img className="talentButton active-talent req-active" src="assets/images/talents/Hunter/Progression/spec1/EnduranceTraining.jpg"/>
                                <span className="talentPoints req-00-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/FocusedFire.jpg"/>
                                <span className="talentPoints req-05-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ImprovedAspectMonkey.jpg"/>
                                <span className="talentPoints req-05-s1">0/3</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ThickHide.jpg"/>
                                <span className="talentPoints req-05-s1">0/3</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ImprovedRevivePet.jpg"/>
                                <span className="talentPoints req-05-s1">0/2</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Pathfinding.jpg"/>
                                <span className="talentPoints req-10-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BestialSwiftness.jpg"/>
                                <span className="talentPoints req-10-s1">0/1</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/UnleashedFury.jpg"/>
                                <span className="talentPoints req-10-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ImprovedMendPet.jpg"/>
                                <span className="talentPoints req-15-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Ferocity.jpg"/>
                                <span className="talentPoints req-15-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/SpiritBond.jpg"/>
                                <span className="talentPoints req-20-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Intimidation.jpg"/>
                                <span className="talentPoints req-20-s1">0/1</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BestialDiscipline.jpg"/>
                                <span className="talentPoints req-20-s1">0/2</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/AnimalHandler.jpg"/>
                                <span className="talentPoints req-25-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Frenzy.jpg"/>
                                <span className="talentPoints req-25-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/FerociousInspiration.jpg"/>
                                <span className="talentPoints req-30-s1">0/3</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BestialWrath.jpg"/>
                                <span className="talentPoints req-30-s1">0/1</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/CatlikeReflexes.jpg"/>
                                <span className="talentPoints req-30-s1">0/3</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/SerpentsSwiftness.jpg"/>
                                <span className="talentPoints req-35-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BeastWithin.jpg"/>
                                <span className="talentPoints req-40-s1">0/1</span>
                            </div>
                        </div>
                        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/images/talents/Hunter/Background/Survival.jpg'})`}} className="col-xs-12 col-md-4 talent-frame talent-bg" id="Col 3">
                            <h5 id="spec3">Survival</h5>
                            <div className="row talent-row">
                                <img className="talentButton active-talent req-active" src="assets/images/talents/Hunter/Progression/spec1/ImprovedAspectHawk.jpg"/>
                                    <span className="talentPoints req-00-s1">0/5</span>
                                <img className="talentButton active-talent req-active" src="assets/images/talents/Hunter/Progression/spec1/EnduranceTraining.jpg"/>
                                <span className="talentPoints req-00-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/FocusedFire.jpg"/>
                                <span className="talentPoints req-05-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ImprovedAspectMonkey.jpg"/>
                                <span className="talentPoints req-05-s1">0/3</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ThickHide.jpg"/>
                                <span className="talentPoints req-05-s1">0/3</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ImprovedRevivePet.jpg"/>
                                <span className="talentPoints req-05-s1">0/2</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Pathfinding.jpg"/>
                                <span className="talentPoints req-10-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BestialSwiftness.jpg"/>
                                <span className="talentPoints req-10-s1">0/1</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/UnleashedFury.jpg"/>
                                <span className="talentPoints req-10-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/ImprovedMendPet.jpg"/>
                                <span className="talentPoints req-15-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Ferocity.jpg"/>
                                <span className="talentPoints req-15-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/SpiritBond.jpg"/>
                                <span className="talentPoints req-20-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Intimidation.jpg"/>
                                <span className="talentPoints req-20-s1">0/1</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BestialDiscipline.jpg"/>
                                <span className="talentPoints req-20-s1">0/2</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/AnimalHandler.jpg"/>
                                <span className="talentPoints req-25-s1">0/2</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/Frenzy.jpg"/>
                                <span className="talentPoints req-25-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/FerociousInspiration.jpg"/>
                                <span className="talentPoints req-30-s1">0/3</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BestialWrath.jpg"/>
                                <span className="talentPoints req-30-s1">0/1</span>
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/CatlikeReflexes.jpg"/>
                                <span className="talentPoints req-30-s1">0/3</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/SerpentsSwiftness.jpg"/>
                                <span className="talentPoints req-35-s1">0/5</span>
                            </div>
                            <div className="row talent-row">
                                <img className="talentButton inactive-talent req-inactive" src="assets/images/talents/Hunter/Progression/spec1/BeastWithin.jpg"/>
                                <span className="talentPoints req-40-s1">0/1</span>
                            </div>
                        </div>
                    </div>
                    
                    
            </React.Fragment>
        );
    }
}

export default CalculatorComponent;