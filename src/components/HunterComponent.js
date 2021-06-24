import { contains } from "jquery";
import React, { Component } from "react";

let i = 0;
let iSpec1 = 0;
let iSpec2 = 0;
let iSpec3 = 0;
let loopHappenedBefore = false;

class HunterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  displayMouseOverlay(){
    
    
    if(window.event.target.getElementsByTagName('img')[0]){
      window.event.target.getElementsByTagName('img')[0].style.display = "inline";
    } 

    //window.event.target.getElementsByTagName('img')[0]

  }

  displayMouseOverlayInnerElement(){
    /*window.event.target.nextElementSibling.style.display = "block";*/
    //window.event.target.style.display = "inline";
    window.event.target.previousElementSibling.style.display = "inline";
  }

  hideMouseOverlay(){
    /*window.event.target.nextElementSibling.style.display = "none";*/
    console.log(window.event.target.previousElementSibling)
    window.event.target.previousElementSibling.style.display = "none";
  }

  hideMouseOverlayInnerElement(){
    /*window.event.target.nextElementSibling.style.display = "none";*/
    window.event.target.style.display = "none";
  }

  talentClick() {
    let valueString;
    let specString;
    let pointRequirementString;
    let onePointArray = ["0/1", "1/1"];
    let twoPointArray = ["0/2", "1/2", "2/2"];
    let threePointArray = ["0/3", "1/3", "2/3", "3/3"];
    let fourPointArray = ["0/4", "1/4", "2/4", "3/4", "4/4"];
    let fivePointArray = ["0/5", "1/5", "2/5", "3/5", "4/5", "5/5"];
    let individualPointTracker;

    let spec1Req5 = [];
    let spec1Req10 = [];
    let spec1Req15 = [];
    let spec1Req20 = [];
    let spec1Req25 = [];
    let spec1Req30 = [];
    let spec1Req35 = [];
    let spec1Req40 = [];

    let spec1Req5Output = [];
    let spec1Req10Output = [];
    let spec1Req15Output = [];
    let spec1Req20Output = [];
    let spec1Req25Output = [];
    let spec1Req30Output = [];
    let spec1Req35Output = [];
    let spec1Req40Output = [];

    let spec2Req5 = [];
    let spec2Req10 = [];
    let spec2Req15 = [];
    let spec2Req20 = [];
    let spec2Req25 = [];
    let spec2Req30 = [];
    let spec2Req35 = [];
    let spec2Req40 = [];

    let spec2Req5Output = [];
    let spec2Req10Output = [];
    let spec2Req15Output = [];
    let spec2Req20Output = [];
    let spec2Req25Output = [];
    let spec2Req30Output = [];
    let spec2Req35Output = [];
    let spec2Req40Output = [];

    let spec3Req5 = [];
    let spec3Req10 = [];
    let spec3Req15 = [];
    let spec3Req20 = [];
    let spec3Req25 = [];
    let spec3Req30 = [];
    let spec3Req35 = [];
    let spec3Req40 = [];

    let spec3Req5Output = [];
    let spec3Req10Output = [];
    let spec3Req15Output = [];
    let spec3Req20Output = [];
    let spec3Req25Output = [];
    let spec3Req30Output = [];
    let spec3Req35Output = [];
    let spec3Req40Output = [];

    
    //Get inner text of span element sibling to button user clicks
    valueString = window.event.srcElement.nextElementSibling.nextElementSibling.innerText;
    //Get inner text of element button user clicks and slice to determine spec1, 2, or 3
    specString = window.event.srcElement.nextElementSibling.className;
    console.log(`specString: ${specString}`)
    //
    pointRequirementString = window.event.srcElement.nextElementSibling.nextElementSibling.className.slice(17, 22);
    console.log(`The value of pointRequirementString is: ${pointRequirementString}`)


    //Path taken if user left clicks the button
    if(window.event.button === 0) {
     
      
      
      //if user clicked button in spec 1 tree update point counter for spec 1
        if(specString[4] === "1"){
            console.log("Point used in spec 1");
            iSpec1 = iSpec1 + 1;
            document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
            
            if(iSpec1 >= 40){
              //Gather all elements in tree with 40 point requirement
              spec1Req40 = document.getElementsByClassName("req-40-s1");
              //Iterate through array of elements and push their previous sibling to
              //Req40Output array
              for(let g = 0; g < spec1Req40.length; g++){
                spec1Req40Output.push(spec1Req40[g].previousElementSibling) 
              }
              //Iterate through array to update their class (to update green border color)
              for(let g = 0; g < spec1Req40Output.length; g++){
                if(spec1Req40Output[g].className.includes("inactive-talent")){
                  spec1Req40Output[g].className = "spec1 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec1 >= 35){
              spec1Req35 = document.getElementsByClassName("req-35-s1");
              
              for(let g = 0; g < spec1Req35.length; g++){
                spec1Req35Output.push(spec1Req35[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec1Req35Output.length; g++){
                if(spec1Req35Output[g].className.includes("inactive-talent")){
                  spec1Req35Output[g].className = "spec1 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec1 >= 30){
              spec1Req30 = document.getElementsByClassName("req-30-s1");
              
              for(let g = 0; g < spec1Req30.length; g++){
                spec1Req30Output.push(spec1Req30[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec1Req30Output.length; g++){
                if(spec1Req30Output[g].className.includes("inactive-talent")){
                  spec1Req30Output[g].className = "spec1 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec1 >= 25){
              spec1Req25 = document.getElementsByClassName("req-25-s1");
              
              for(let g = 0; g < spec1Req25.length; g++){
                spec1Req25Output.push(spec1Req25[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec1Req25Output.length; g++){
                if(spec1Req25Output[g].className.includes("inactive-talent")){
                  spec1Req25Output[g].className = "spec1 talentButton active-talent req-active";
                }
              }
            }

            if(iSpec1 >= 20){
              spec1Req20 = document.getElementsByClassName("req-20-s1");
              
              for(let g = 0; g < spec1Req20.length; g++){
                spec1Req20Output.push(spec1Req20[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec1Req20Output.length; g++){
                if(spec1Req20Output[g].className.includes("inactive-talent")){
                  spec1Req20Output[g].className = "spec1 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec1 >= 15){
              spec1Req15 = document.getElementsByClassName("req-15-s1");
              
              for(let g = 0; g < spec1Req15.length; g++){
                spec1Req15Output.push(spec1Req15[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec1Req15Output.length; g++){
                if(spec1Req15Output[g].className.includes("inactive-talent")){
                  spec1Req15Output[g].className = "spec1 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec1 >= 10){
              spec1Req10 = document.getElementsByClassName("req-10-s1");
              
              for(let g = 0; g < spec1Req10.length; g++){
                spec1Req10Output.push(spec1Req10[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec1Req10Output.length; g++){
                if(spec1Req10Output[g].className.includes("inactive-talent")){
                  spec1Req10Output[g].className = "spec1 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec1 >= 5){
              spec1Req5 = document.getElementsByClassName("req-05-s1");
              
              for(let g = 0; g < spec1Req5.length; g++){
                spec1Req5Output.push(spec1Req5[g].previousElementSibling) 
              }
              console.log(spec1Req5Output)
              for(let g = 0; g < spec1Req5Output.length; g++){
                if(spec1Req5Output[g].className.includes("inactive-talent")){
                  spec1Req5Output[g].className = "spec1 talentButton active-talent req-active";
                }
              }
            } 

        } 
        //if user clicked button in spec 2 tree update point counter for spec 2
        else if(specString[4] === "2"){
            console.log("Point used in spec 2");
            iSpec2 = iSpec2 + 1;
            document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;

            if(iSpec2 >= 40){
              //Gather all elements in tree with 40 point requirement
              spec2Req40 = document.getElementsByClassName("req-40-s2");
              //Iterate through array of elements and push their previous sibling to
              //Req40Output array
              for(let g = 0; g < spec2Req40.length; g++){
                spec2Req40Output.push(spec2Req40[g].previousElementSibling) 
              }
              //Iterate through array to update their class (to update green border color)
              for(let g = 0; g < spec2Req40Output.length; g++){
                if(spec2Req40Output[g].className.includes("inactive-talent")){
                  spec2Req40Output[g].className = "spec2 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec2 >= 35){
              spec2Req35 = document.getElementsByClassName("req-35-s2");
              
              for(let g = 0; g < spec2Req35.length; g++){
                spec2Req35Output.push(spec2Req35[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec2Req35Output.length; g++){
                if(spec2Req35Output[g].className.includes("inactive-talent")){
                  spec2Req35Output[g].className = "spec2 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec2 >= 30){
              spec2Req30 = document.getElementsByClassName("req-30-s2");
              
              for(let g = 0; g < spec2Req30.length; g++){
                spec2Req30Output.push(spec2Req30[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec2Req30Output.length; g++){
                if(spec2Req30Output[g].className.includes("inactive-talent")){
                  spec2Req30Output[g].className = "spec2 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec2 >= 25){
              spec2Req25 = document.getElementsByClassName("req-25-s2");
              
              for(let g = 0; g < spec2Req25.length; g++){
                spec2Req25Output.push(spec2Req25[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec2Req25Output.length; g++){
                if(spec2Req25Output[g].className.includes("inactive-talent")){
                  spec2Req25Output[g].className = "spec2 talentButton active-talent req-active";
                }
              }
            }

            if(iSpec2 >= 20){
              spec2Req20 = document.getElementsByClassName("req-20-s2");
              
              for(let g = 0; g < spec2Req20.length; g++){
                spec2Req20Output.push(spec2Req20[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec2Req20Output.length; g++){
                if(spec2Req20Output[g].className.includes("inactive-talent")){
                  spec2Req20Output[g].className = "spec2 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec2 >= 15){
              spec2Req15 = document.getElementsByClassName("req-15-s2");
              
              for(let g = 0; g < spec2Req15.length; g++){
                spec2Req15Output.push(spec2Req15[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec2Req15Output.length; g++){
                if(spec2Req15Output[g].className.includes("inactive-talent")){
                  spec2Req15Output[g].className = "spec2 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec2 >= 10){
              spec2Req10 = document.getElementsByClassName("req-10-s2");
              
              for(let g = 0; g < spec2Req10.length; g++){
                spec2Req10Output.push(spec2Req10[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec2Req10Output.length; g++){
                if(spec2Req10Output[g].className.includes("inactive-talent")){
                  spec2Req10Output[g].className = "spec2 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec2 >= 5){
              spec2Req5 = document.getElementsByClassName("req-05-s2");
              
              for(let g = 0; g < spec2Req5.length; g++){
                spec2Req5Output.push(spec2Req5[g].previousElementSibling) 
              }
              console.log(spec2Req5Output)
              for(let g = 0; g < spec2Req5Output.length; g++){
                if(spec2Req5Output[g].className.includes("inactive-talent")){
                  spec2Req5Output[g].className = "spec2 talentButton active-talent req-active";
                }
              }
            }

        } 
        //if user clicked button in spec 3 tree update point counter for spec 3
        else if(specString[4] === "3"){
            console.log("Point used in spec 3")
            iSpec3 = iSpec3 + 1;
            document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;

            if(iSpec3 >= 40){
              //Gather all elements in tree with 40 point requirement
              spec3Req40 = document.getElementsByClassName("req-40-s3");
              //Iterate through array of elements and push their previous sibling to
              //Req40Output array
              for(let g = 0; g < spec3Req40.length; g++){
                spec3Req40Output.push(spec3Req40[g].previousElementSibling) 
              }
              //Iterate through array to update their class (to update green border color)
              for(let g = 0; g < spec3Req40Output.length; g++){
                if(spec3Req40Output[g].className.includes("inactive-talent")){
                  spec3Req40Output[g].className = "spec3 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec3 >= 35){
              spec3Req35 = document.getElementsByClassName("req-35-s3");
              
              for(let g = 0; g < spec3Req35.length; g++){
                spec3Req35Output.push(spec3Req35[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec3Req35Output.length; g++){
                if(spec3Req35Output[g].className.includes("inactive-talent")){
                  spec3Req35Output[g].className = "spec3 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec3 >= 30){
              spec3Req30 = document.getElementsByClassName("req-30-s3");
              
              for(let g = 0; g < spec3Req30.length; g++){
                spec3Req30Output.push(spec3Req30[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec3Req30Output.length; g++){
                if(spec3Req30Output[g].className.includes("inactive-talent")){
                  spec3Req30Output[g].className = "spec3 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec3 >= 25){
              spec3Req25 = document.getElementsByClassName("req-25-s3");
              
              for(let g = 0; g < spec3Req25.length; g++){
                spec3Req25Output.push(spec3Req25[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec3Req25Output.length; g++){
                if(spec3Req25Output[g].className.includes("inactive-talent")){
                  spec3Req25Output[g].className = "spec3 talentButton active-talent req-active";
                }
              }
            }

            if(iSpec3 >= 20){
              spec3Req20 = document.getElementsByClassName("req-20-s3");
              
              for(let g = 0; g < spec3Req20.length; g++){
                spec3Req20Output.push(spec3Req20[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec3Req20Output.length; g++){
                if(spec3Req20Output[g].className.includes("inactive-talent")){
                  spec3Req20Output[g].className = "spec3 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec3 >= 15){
              spec3Req15 = document.getElementsByClassName("req-15-s3");
              
              for(let g = 0; g < spec3Req15.length; g++){
                spec3Req15Output.push(spec3Req15[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec3Req15Output.length; g++){
                if(spec3Req15Output[g].className.includes("inactive-talent")){
                  spec3Req15Output[g].className = "spec3 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec3 >= 10){
              spec3Req10 = document.getElementsByClassName("req-10-s3");
              
              for(let g = 0; g < spec3Req10.length; g++){
                spec3Req10Output.push(spec3Req10[g].previousElementSibling) 
              }
              
              for(let g = 0; g < spec3Req10Output.length; g++){
                if(spec3Req10Output[g].className.includes("inactive-talent")){
                  spec3Req10Output[g].className = "spec3 talentButton active-talent req-active";
                }
              }
            }
            
            if(iSpec3 >= 5){
              spec3Req5 = document.getElementsByClassName("req-05-s3");
              
              for(let g = 0; g < spec3Req5.length; g++){
                spec3Req5Output.push(spec3Req5[g].previousElementSibling) 
              }
              console.log(spec3Req5Output)
              for(let g = 0; g < spec3Req5Output.length; g++){
                if(spec3Req5Output[g].className.includes("inactive-talent")){
                  spec3Req5Output[g].className = "spec3 talentButton active-talent req-active";
                }
              }
            }
        }
        console.log(`You Left Clicked: !`);
        console.log(window.event.srcElement.nextElementSibling);
        
        /*This switch takes the 3rd char (2nd index) of valueString 
        (inner text of sibling span) as it's argument. Commenting Case 1 only for clarity*/ 
        console.log("Code write before switch")
        console.log(valueString[2])
        switch(valueString[2]){
            //Path taken if talent point has max one point
            case "1":
                //Return first value in array that is greater than current value
                individualPointTracker = onePointArray.filter(
                    (bracket) => 
                    bracket > window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                /*As long as above function was successful (meaning there are more
                elements of onepoint array greater than current value) update the span elements inner
                text*/
                if(typeof(individualPointTracker[0]) !== "undefined"){
                  window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                } 
                
                //Path taken if above arrow function failed
                else {
                    alert("You've already maxed out this talent!");
                    //take away one point from i (global point counter)
                    i = i - 1;
                    /*Here will update spec specific point counter to where it 
                    should be (since user already maxed talent)*/
                    if(specString[4] === "1"){
                        console.log("Point taken back Spec 1");
                        iSpec1 = iSpec1 - 1;
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("One Point Potential");
                
                i = i + 1;
                
                document.getElementById("total-points").innerText = i;
                console.log(i);
                 // If Point is maxed out, change the class to give yellow border
                 if(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]){
                  if(specString[4] === "1"){
                    window.event.srcElement.nextElementSibling.className = "spec1 talentButton maxeds req-active"
                  } if(specString[4] === "2"){
                    window.event.srcElement.nextElementSibling.className = "spec2 talentButton maxeds req-active"
                  } if(specString[4] === "3"){
                    window.event.srcElement.nextElementSibling.className = "spec3 talentButton maxeds req-active"
                  }
                }
                break;
            case "2":
                individualPointTracker = twoPointArray.filter(
                    (bracket) => 
                    bracket > window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                if(typeof(individualPointTracker[0]) !== "undefined"){
                  window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                } else {
                    alert("You've already maxed out this talent!");
                    i = i - 1;
                    if(specString[4] === "1"){
                        console.log("Point taken back Spec 1");
                        iSpec1 = iSpec1 - 1;
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("Two Point Potential");
                i = i + 1;
                document.getElementById("total-points").innerText = i;
                console.log(i);
                 // If Point is maxed out, change the class to give yellow border
                 if(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]){
                  if(specString[4] === "1"){
                    window.event.srcElement.nextElementSibling.className = "spec1 talentButton maxeds req-active"
                  } if(specString[4] === "2"){
                    window.event.srcElement.nextElementSibling.className = "spec2 talentButton maxeds req-active"
                  } if(specString[4] === "3"){
                    window.event.srcElement.nextElementSibling.className = "spec3 talentButton maxeds req-active"
                  }
                }
                break;
            case "3":
                individualPointTracker = threePointArray.filter(
                    (bracket) => 
                    bracket > window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                if(typeof(individualPointTracker[0]) !== "undefined"){
                  window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                } else {
                    alert("You've already maxed out this talent!");
                    i = i - 1;
                    if(specString[4] === "1"){
                        console.log("Point taken back Spec 1");
                        iSpec1 = iSpec1 - 1;
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("Three Point Potential");
                i = i + 1;
                document.getElementById("total-points").innerText = i;
                console.log(i);
                 // If Point is maxed out, change the class to give yellow border
                 if(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]){
                  if(specString[4] === "1"){
                    window.event.srcElement.nextElementSibling.className = "spec1 talentButton maxeds req-active"
                  } if(specString[4] === "2"){
                    window.event.srcElement.nextElementSibling.className = "spec2 talentButton maxeds req-active"
                  } if(specString[4] === "3"){
                    window.event.srcElement.nextElementSibling.className = "spec3 talentButton maxeds req-active"
                  }
                }
                break;
            case "4":
                individualPointTracker = fourPointArray.filter(
                    (bracket) => 
                    bracket > window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                if(typeof(individualPointTracker[0]) !== "undefined"){
                  window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                } else {
                    alert("You've already maxed out this talent!");
                    i = i - 1;
                    if(specString[4] === "1"){
                        console.log("Point taken back Spec 1");
                        iSpec1 = iSpec1 - 1;
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("Four Point Potential");
                i = i + 1;
                document.getElementById("total-points").innerText = i;
                console.log(i);
                 // If Point is maxed out, change the class to give yellow border
                 if(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]){
                  if(specString[4] === "1"){
                    window.event.srcElement.nextElementSibling.className = "spec1 talentButton maxeds req-active"
                  } if(specString[4] === "2"){
                    window.event.srcElement.nextElementSibling.className = "spec2 talentButton maxeds req-active"
                  } if(specString[4] === "3"){
                    window.event.srcElement.nextElementSibling.className = "spec3 talentButton maxeds req-active"
                  }
                }
                break;
            case "5":   
            
            individualPointTracker = fivePointArray.filter(
                    (bracket) => 
                    bracket > window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                    console.log(individualPointTracker)
                if(typeof(individualPointTracker[0]) != "undefined"){
                    
                    window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                    
                } else {
                    alert("You've already maxed out this talent!");
                    i = i - 1;
                    if(specString[4] === "1"){
                        console.log("Point taken back Spec 1");
                        iSpec1 = iSpec1 - 1;
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("Five Point Potential");
                i = i + 1;
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is maxed out, change the class to give yellow border
                if(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]){
                  if(specString[4] === "1"){
                    window.event.srcElement.nextElementSibling.className = "spec1 talentButton maxeds req-active"
                  } if(specString[4] === "2"){
                    window.event.srcElement.nextElementSibling.className = "spec2 talentButton maxeds req-active"
                  } if(specString[4] === "3"){
                    window.event.srcElement.nextElementSibling.className = "spec3 talentButton maxeds req-active"
                  }
                }
                break;
          
        }  
        
      //A Level 70 Player won't have more than 61 talent points
      //if statement alerts user and resets the counter back a point along with the span element
      if(i > 61){
        alert("You don't have any more talent points available!");
        console.log(`The value of loopHappenedBefore is ${loopHappenedBefore}`);
        i = 61;
        
        console.log(specString)
        if(specString[4] === "1") {
          if(loopHappenedBefore === false){
          iSpec1 = iSpec1 - 1;
          i = 61;
          loopHappenedBefore = true;
          document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
          document.getElementById("total-points").innerText = `${i}`;
          
        } else {
          iSpec1 = iSpec1 - 1;
          i = 61;
          document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
          document.getElementById("total-points").innerText = `${i}`;
          
        }

        } if(specString[4] === "2") {
          if(loopHappenedBefore === false){
            iSpec2 = iSpec2 - 1;
            i = 61;
            loopHappenedBefore = true;
            document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
            document.getElementById("total-points").innerText = `${i}`;
            
          } else {
            iSpec2 = iSpec2 - 1;
            i = 61;
            document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
            document.getElementById("total-points").innerText = `${i}`;
            
          }
        } if(specString[4] === "3") {
          if(loopHappenedBefore === false){
            iSpec3 = iSpec3 - 1;
            i = 61;
            loopHappenedBefore = true;
            document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
            document.getElementById("total-points").innerText = `${i}`;
            
          } else {
            iSpec3 = iSpec3 - 1;
            i = 61;
            document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
            document.getElementById("total-points").innerText = `${i}`;
            
          }
        } 

        

        switch(valueString[2]) {
        case "1":
          individualPointTracker = onePointArray.reverse().filter(
            (bracket) => 
            bracket < window.event.srcElement.nextElementSibling.innerText);
          if(typeof(individualPointTracker[0]) !== "undefined"){
            window.event.srcElement.nextElementSibling.innerText = individualPointTracker[0];
          }
          break;
        case "2":
          individualPointTracker = twoPointArray.reverse().filter(
            (bracket) => 
            bracket < window.event.srcElement.nextElementSibling.innerText);
          if(typeof(individualPointTracker[0]) !== "undefined"){
            window.event.srcElement.nextElementSibling.innerText = individualPointTracker[0];
          }
          break;
        case "3":
          individualPointTracker = threePointArray.reverse().filter(
            (bracket) => 
            bracket < window.event.srcElement.nextElementSibling.innerText);
          if(typeof(individualPointTracker[0]) !== "undefined"){
            window.event.srcElement.nextElementSibling.innerText = individualPointTracker[0];
          }
          break;
        case "4":
          individualPointTracker = fourPointArray.reverse().filter(
            (bracket) => 
            bracket < window.event.srcElement.nextElementSibling.innerText);
          if(typeof(individualPointTracker[0]) !== "undefined"){
            window.event.srcElement.nextElementSibling.innerText = individualPointTracker[0];
          }
          break;
        case "5":
          individualPointTracker = fivePointArray.reverse().filter(
            (bracket) => 
            bracket < window.event.srcElement.nextElementSibling.innerText);
          if(typeof(individualPointTracker[0]) !== "undefined"){
            window.event.srcElement.nextElementSibling.innerText = individualPointTracker[0];
          }
          break;
        }

      } 
    } 
    
      //Path taken if user right clicks the button
      else if(window.event.button === 2) {
        //if user right clicked talent in spec1 subtract one point from point tracker if > 0
        if(specString[4] === "1"){
            console.log("Point taken from spec 1");
            if(iSpec1 > 0){
                iSpec1 = iSpec1 - 1;
            }
            
            document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;

            if(iSpec1 < 40){
              spec1Req40 = document.getElementsByClassName("req-40-s1");
              
              for(let g = 0; g < spec1Req40.length; g++){
                spec1Req40Output.push(spec1Req40[g].previousElementSibling) 
              }
              console.log(spec1Req40Output)
              for(let g = 0; g < spec1Req40Output.length; g++){
                if(spec1Req40Output[g].className.includes("active-talent")){
                  spec1Req40Output[g].className = "spec1 talentButton inactive-talent req-inactive";
                }
              }
            }
            
            if(iSpec1 < 35){
              spec1Req35 = document.getElementsByClassName("req-35-s1");
              
              for(let g = 0; g < spec1Req35.length; g++){
                spec1Req35Output.push(spec1Req35[g].previousElementSibling) 
              }
              console.log(spec1Req35Output)
              for(let g = 0; g < spec1Req35Output.length; g++){
                if(spec1Req35Output[g].className.includes("active-talent")){
                  spec1Req35Output[g].className = "spec1 talentButton inactive-talent req-inactive";
                }
              }
            }
            
            if(iSpec1 < 30){
              spec1Req30 = document.getElementsByClassName("req-30-s1");
              
              for(let g = 0; g < spec1Req30.length; g++){
                spec1Req30Output.push(spec1Req30[g].previousElementSibling) 
              }
              console.log(spec1Req30Output)
              for(let g = 0; g < spec1Req30Output.length; g++){
                if(spec1Req30Output[g].className.includes("active-talent")){
                  spec1Req30Output[g].className = "spec1 talentButton inactive-talent req-inactive";
                }
              }
            }
            
            if(iSpec1 < 25){
              spec1Req25 = document.getElementsByClassName("req-25-s1");
              
              for(let g = 0; g < spec1Req25.length; g++){
                spec1Req25Output.push(spec1Req25[g].previousElementSibling) 
              }
              console.log(spec1Req25Output)
              for(let g = 0; g < spec1Req25Output.length; g++){
                if(spec1Req25Output[g].className.includes("active-talent")){
                  spec1Req25Output[g].className = "spec1 talentButton inactive-talent req-inactive";
                }
              }
            }

            if(iSpec1 < 20){
              spec1Req20 = document.getElementsByClassName("req-20-s1");
              
              for(let g = 0; g < spec1Req20.length; g++){
                spec1Req20Output.push(spec1Req20[g].previousElementSibling) 
              }
              console.log(spec1Req20Output)
              for(let g = 0; g < spec1Req20Output.length; g++){
                if(spec1Req20Output[g].className.includes("active-talent")){
                  spec1Req20Output[g].className = "spec1 talentButton inactive-talent req-inactive";
                }
              }
            }

            if(iSpec1 < 15){
              spec1Req15 = document.getElementsByClassName("req-15-s1");
              
              for(let g = 0; g < spec1Req15.length; g++){
                spec1Req15Output.push(spec1Req15[g].previousElementSibling) 
              }
              console.log(spec1Req15Output)
              for(let g = 0; g < spec1Req15Output.length; g++){
                if(spec1Req15Output[g].className.includes("active-talent")){
                  spec1Req15Output[g].className = "spec1 talentButton inactive-talent req-inactive";
                }
              }
            }

            if(iSpec1 < 10){
              spec1Req10 = document.getElementsByClassName("req-10-s1");
              
              for(let g = 0; g < spec1Req10.length; g++){
                spec1Req10Output.push(spec1Req10[g].previousElementSibling) 
              }
              console.log(spec1Req10Output)
              for(let g = 0; g < spec1Req10Output.length; g++){
                if(spec1Req10Output[g].className.includes("active-talent")){
                  spec1Req10Output[g].className = "spec1 talentButton inactive-talent req-inactive";
                }
              }
            }

            if(iSpec1 < 5){
              spec1Req5 = document.getElementsByClassName("req-05-s1");
              
              for(let g = 0; g < spec1Req5.length; g++){
                spec1Req5Output.push(spec1Req5[g].previousElementSibling) 
              }
              console.log(spec1Req5Output)
              for(let g = 0; g < spec1Req5Output.length; g++){
                if(spec1Req5Output[g].className.includes("active-talent")){
                  spec1Req5Output[g].className = "spec1 talentButton inactive-talent req-inactive";
                }
              }
            }
            
        } else if(specString[4] === "2"){
            console.log("Point taken from spec 2");
            if(iSpec2 > 0){
                iSpec2 = iSpec2 - 1;
            }
            document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;

            if(iSpec2 < 40){
              spec2Req40 = document.getElementsByClassName("req-40-s2");
              
              for(let g = 0; g < spec2Req40.length; g++){
                spec2Req40Output.push(spec2Req40[g].previousElementSibling) 
              }
              console.log(spec2Req40Output)
              for(let g = 0; g < spec2Req40Output.length; g++){
                if(spec2Req40Output[g].className.includes("active-talent")){
                  spec2Req40Output[g].className = "spec2 talentButton inactive-talent req-inactive";
                }
              }
            }
            
            if(iSpec2 < 35){
              spec2Req35 = document.getElementsByClassName("req-35-s2");
              
              for(let g = 0; g < spec2Req35.length; g++){
                spec2Req35Output.push(spec2Req35[g].previousElementSibling) 
              }
              console.log(spec2Req35Output)
              for(let g = 0; g < spec2Req35Output.length; g++){
                if(spec2Req35Output[g].className.includes("active-talent")){
                  spec2Req35Output[g].className = "spec2 talentButton inactive-talent req-inactive";
                }
              }
            }
            
            if(iSpec2 < 30){
              spec2Req30 = document.getElementsByClassName("req-30-s2");
              
              for(let g = 0; g < spec2Req30.length; g++){
                spec2Req30Output.push(spec2Req30[g].previousElementSibling) 
              }
              console.log(spec2Req30Output)
              for(let g = 0; g < spec2Req30Output.length; g++){
                if(spec2Req30Output[g].className.includes("active-talent")){
                  spec2Req30Output[g].className = "spec2 talentButton inactive-talent req-inactive";
                }
              }
            }
            
            if(iSpec2 < 25){
              spec2Req25 = document.getElementsByClassName("req-25-s2");
              
              for(let g = 0; g < spec2Req25.length; g++){
                spec2Req25Output.push(spec2Req25[g].previousElementSibling) 
              }
              console.log(spec2Req25Output)
              for(let g = 0; g < spec2Req25Output.length; g++){
                if(spec2Req25Output[g].className.includes("active-talent")){
                  spec2Req25Output[g].className = "spec2 talentButton inactive-talent req-inactive";
                }
              }
            }

            if(iSpec2 < 20){
              spec2Req20 = document.getElementsByClassName("req-20-s2");
              
              for(let g = 0; g < spec2Req20.length; g++){
                spec2Req20Output.push(spec2Req20[g].previousElementSibling) 
              }
              console.log(spec2Req20Output)
              for(let g = 0; g < spec2Req20Output.length; g++){
                if(spec2Req20Output[g].className.includes("active-talent")){
                  spec2Req20Output[g].className = "spec2 talentButton inactive-talent req-inactive";
                }
              }
            }

            if(iSpec2 < 15){
              spec2Req15 = document.getElementsByClassName("req-15-s2");
              
              for(let g = 0; g < spec2Req15.length; g++){
                spec2Req15Output.push(spec2Req15[g].previousElementSibling) 
              }
              console.log(spec2Req15Output)
              for(let g = 0; g < spec2Req15Output.length; g++){
                if(spec2Req15Output[g].className.includes("active-talent")){
                  spec2Req15Output[g].className = "spec2 talentButton inactive-talent req-inactive";
                }
              }
            }

            if(iSpec2 < 10){
              spec2Req10 = document.getElementsByClassName("req-10-s2");
              
              for(let g = 0; g < spec2Req10.length; g++){
                spec2Req10Output.push(spec2Req10[g].previousElementSibling) 
              }
              console.log(spec2Req10Output)
              for(let g = 0; g < spec2Req10Output.length; g++){
                if(spec2Req10Output[g].className.includes("active-talent")){
                  spec2Req10Output[g].className = "spec2 talentButton inactive-talent req-inactive";
                }
              }
            }

            if(iSpec2 < 5){
              spec2Req5 = document.getElementsByClassName("req-05-s2");
              
              for(let g = 0; g < spec2Req5.length; g++){
                spec2Req5Output.push(spec2Req5[g].previousElementSibling) 
              }
              console.log(spec2Req5Output)
              for(let g = 0; g < spec2Req5Output.length; g++){
                if(spec2Req5Output[g].className.includes("active-talent")){
                  spec2Req5Output[g].className = "spec2 talentButton inactive-talent req-inactive";
                }
              }
            }

        } else if(specString[4] === "3"){
            console.log("Point taken from spec 3")
            if(iSpec3 > 0){
                iSpec3 = iSpec3 - 1;
                document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;

                if(iSpec3 < 40){
                  spec3Req40 = document.getElementsByClassName("req-40-s3");
                  
                  for(let g = 0; g < spec3Req40.length; g++){
                    spec3Req40Output.push(spec3Req40[g].previousElementSibling) 
                  }
                  console.log(spec3Req40Output)
                  for(let g = 0; g < spec3Req40Output.length; g++){
                    if(spec3Req40Output[g].className.includes("active-talent")){
                      spec3Req40Output[g].className = "spec3 talentButton inactive-talent req-inactive";
                    }
                  }
                }
                
                if(iSpec3 < 35){
                  spec3Req35 = document.getElementsByClassName("req-35-s3");
                  
                  for(let g = 0; g < spec3Req35.length; g++){
                    spec3Req35Output.push(spec3Req35[g].previousElementSibling) 
                  }
                  console.log(spec3Req35Output)
                  for(let g = 0; g < spec3Req35Output.length; g++){
                    if(spec3Req35Output[g].className.includes("active-talent")){
                      spec3Req35Output[g].className = "spec3 talentButton inactive-talent req-inactive";
                    }
                  }
                }
                
                if(iSpec3 < 30){
                  spec3Req30 = document.getElementsByClassName("req-30-s3");
                  
                  for(let g = 0; g < spec3Req30.length; g++){
                    spec3Req30Output.push(spec3Req30[g].previousElementSibling) 
                  }
                  console.log(spec3Req30Output)
                  for(let g = 0; g < spec3Req30Output.length; g++){
                    if(spec3Req30Output[g].className.includes("active-talent")){
                      spec3Req30Output[g].className = "spec3 talentButton inactive-talent req-inactive";
                    }
                  }
                }
                
                if(iSpec3 < 25){
                  spec3Req25 = document.getElementsByClassName("req-25-s3");
                  
                  for(let g = 0; g < spec3Req25.length; g++){
                    spec3Req25Output.push(spec3Req25[g].previousElementSibling) 
                  }
                  console.log(spec3Req25Output)
                  for(let g = 0; g < spec3Req25Output.length; g++){
                    if(spec3Req25Output[g].className.includes("active-talent")){
                      spec3Req25Output[g].className = "spec3 talentButton inactive-talent req-inactive";
                    }
                  }
                }
    
                if(iSpec3 < 20){
                  spec3Req20 = document.getElementsByClassName("req-20-s3");
                  
                  for(let g = 0; g < spec3Req20.length; g++){
                    spec3Req20Output.push(spec3Req20[g].previousElementSibling) 
                  }
                  console.log(spec3Req20Output)
                  for(let g = 0; g < spec3Req20Output.length; g++){
                    if(spec3Req20Output[g].className.includes("active-talent")){
                      spec3Req20Output[g].className = "spec3 talentButton inactive-talent req-inactive";
                    }
                  }
                }
    
                if(iSpec3 < 15){
                  spec3Req15 = document.getElementsByClassName("req-15-s3");
                  
                  for(let g = 0; g < spec3Req15.length; g++){
                    spec3Req15Output.push(spec3Req15[g].previousElementSibling) 
                  }
                  console.log(spec3Req15Output)
                  for(let g = 0; g < spec3Req15Output.length; g++){
                    if(spec3Req15Output[g].className.includes("active-talent")){
                      spec3Req15Output[g].className = "spec3 talentButton inactive-talent req-inactive";
                    }
                  }
                }
    
                if(iSpec3 < 10){
                  spec3Req10 = document.getElementsByClassName("req-10-s3");
                  
                  for(let g = 0; g < spec3Req10.length; g++){
                    spec3Req10Output.push(spec3Req10[g].previousElementSibling) 
                  }
                  console.log(spec3Req10Output)
                  for(let g = 0; g < spec3Req10Output.length; g++){
                    if(spec3Req10Output[g].className.includes("active-talent")){
                      spec3Req10Output[g].className = "spec3 talentButton inactive-talent req-inactive";
                    }
                  }
                }
    
                if(iSpec3 < 5){
                  spec3Req5 = document.getElementsByClassName("req-05-s3");
                  
                  for(let g = 0; g < spec3Req5.length; g++){
                    spec3Req5Output.push(spec3Req5[g].previousElementSibling) 
                  }
                  console.log(spec3Req5Output)
                  for(let g = 0; g < spec3Req5Output.length; g++){
                    if(spec3Req5Output[g].className.includes("active-talent")){
                      spec3Req5Output[g].className = "spec3 talentButton inactive-talent req-inactive";
                    }
                  }
                }
            }
        }
        console.log(`You Right Clicked: !`);
        console.log(window.event.srcElement.nextElementSibling);
        
        /*This switch takes the 3rd char (2nd index) of valueString 
        (inner text of sibling span) as it's argument. Commenting Case 1 only for clarity*/
        switch(valueString[2]){
            case "1":
                /* First reverses onePointArray, then returns first element of array
                less than current span elements value*/
                individualPointTracker = onePointArray.reverse().filter(
                    (bracket) => 
                    bracket < window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                /*As long as above function was successful (meaning there are more
                elements of onepoint array lesser than current value) update the span elements inner
                text*/
                if(typeof(individualPointTracker[0]) !== "undefined"){
                  window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                    //Check which spec tree user clicked in before updating value
                    if(specString[4] === "1"){
                        console.log("Point taken back Spec 1");
                        
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                       
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                } else {
                    alert("You have no points in this talent to remove!")
                    i = i + 1;
                    
                    if(specString[4] === "1"){
                        console.log("Point added back Spec 1");
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point added back Spec 2");
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point added back Spec 3");
                        
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                

                }
                console.log("One Point Potential");
                if(i >= 1){
                    i = i - 1;
                }
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is not maxed out, change the class to give green border
                 
                if(specString[4] === "1"){
                  window.event.srcElement.nextElementSibling.className = "spec1 talentButton active-talent req-active"
                } if(specString[4] === "2"){
                  window.event.srcElement.nextElementSibling.className = "spec2 talentButton active-talent req-active"
                } if(specString[4] === "3"){
                  window.event.srcElement.nextElementSibling.className = "spec3 talentButton active-talent req-active"
                }

                break;
            case "2":
                individualPointTracker = twoPointArray.reverse().filter(
                    (bracket) => 
                    bracket < window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                if(typeof(individualPointTracker[0]) !== "undefined"){
                    
                  window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                } else {
                    alert("You have no points in this talent to remove!")
                    i = i + 1;
                }
                console.log("Two Point Potential");
                if(i >= 1){
                    i = i - 1;
                }
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is not maxed out, change the class to give green border
                 
                if(specString[4] === "1"){
                  window.event.srcElement.nextElementSibling.className = "spec1 talentButton active-talent req-active"
                } if(specString[4] === "2"){
                  window.event.srcElement.nextElementSibling.className = "spec2 talentButton active-talent req-active"
                } if(specString[4] === "3"){
                  window.event.srcElement.nextElementSibling.className = "spec3 talentButton active-talent req-active"
                }
                break;
            case "3":
                individualPointTracker = threePointArray.reverse().filter(
                    (bracket) => 
                    bracket < window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                if(typeof(individualPointTracker[0]) !== "undefined"){
                    
                  window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                } else {
                    alert("You have no points in this talent to remove!")
                    i = i + 1;
                }
                console.log("Three Point Potential");
                if(i >= 1){
                    i = i - 1;
                }
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is not maxed out, change the class to give green border
                 
                if(specString[4] === "1"){
                  window.event.srcElement.nextElementSibling.className = "spec1 talentButton active-talent req-active"
                } if(specString[4] === "2"){
                  window.event.srcElement.nextElementSibling.className = "spec2 talentButton active-talent req-active"
                } if(specString[4] === "3"){
                  window.event.srcElement.nextElementSibling.className = "spec3 talentButton active-talent req-active"
                }
                break;
            case "4":
                individualPointTracker = fourPointArray.reverse().filter(
                    (bracket) => 
                    bracket < window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                if(typeof(individualPointTracker[0]) !== "undefined"){
                    
                  window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                } else {
                    alert("You have no points in this talent to remove!")
                    i = i + 1;
                }
                console.log("Four Point Potential");
                if(i >= 1){
                    i = i - 1;
                }
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is not maxed out, change the class to give green border
                if(specString[4] === "1"){
                  window.event.srcElement.nextElementSibling.className = "spec1 talentButton active-talent req-active"
                } if(specString[4] === "2"){
                  window.event.srcElement.nextElementSibling.className = "spec2 talentButton active-talent req-active"
                } if(specString[4] === "3"){
                  window.event.srcElement.nextElementSibling.className = "spec3 talentButton active-talent req-active"
                }
                break;
            case "5":
                individualPointTracker = fivePointArray.reverse().filter(
                    (bracket) => 
                    bracket < window.event.srcElement.nextElementSibling.nextElementSibling.innerText);
                if(typeof(individualPointTracker[0]) !== "undefined"){
                    
                    window.event.srcElement.nextElementSibling.nextElementSibling.innerText = individualPointTracker[0];
                } else {
                    alert("You have no points in this talent to remove!")
                    i = i + 1;
                }
                console.log("Five Point Potential");
                if(i >= 1){
                    i = i - 1;
                }
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is not maxed out, change the class to give green border
                 
                if(specString[4] === "1"){
                  window.event.srcElement.nextElementSibling.className = "spec1 talentButton active-talent req-active"
                } if(specString[4] === "2"){
                  window.event.srcElement.nextElementSibling.className = "spec2 talentButton active-talent req-active"
                } if(specString[4] === "3"){
                  window.event.srcElement.nextElementSibling.className = "spec3 talentButton active-talent req-active"
                }
                

                break;
        }  
    }
}

  resetPoints(){
      let z;
      let y;
      
      let spanArray = document.querySelectorAll(".talentPoints");
      let spanArrayPotential1 = [];
      let spanArrayPotential2 = [];
      let spanArrayPotential3 = [];
      let spanArrayPotential4 = [];
      let spanArrayPotential5 = [];

      let onePointArray = ["0/1", "1/1"];
      let twoPointArray = ["0/2", "1/2", "2/2"];
      let threePointArray = ["0/3", "1/3", "2/3", "3/3"];
      let fourPointArray = ["0/4", "1/4", "2/4", "3/4", "4/4"];
      let fivePointArray = ["0/5", "1/5", "2/5", "3/5", "4/5", "5/5"];

     
      console.log("Beginning of reset test")
      for(y = 0; y < spanArray.length; y++){
        if(!(spanArray[y].className[17] === "0" && spanArray[y].className[18] === "0")){
          console.log(spanArray[y].previousElementSibling)
          if(spanArray[y].previousElementSibling.className[4] === "1"){
            spanArray[y].previousElementSibling.className = "spec1 talentButton inactive-talent req-inactive";
          } if(spanArray[y].previousElementSibling.className[4] === "2"){
            spanArray[y].previousElementSibling.className = "spec2 talentButton inactive-talent req-inactive";
          } if(spanArray[y].previousElementSibling.className[4] === "3"){
            spanArray[y].previousElementSibling.className = "spec3 talentButton inactive-talent req-inactive";
          }
        } 

        if(spanArray[y].className[17] === "0" && spanArray[y].className[18] === "0"){
          console.log(spanArray[y].previousElementSibling)
          if(spanArray[y].previousElementSibling.className[4] === "1"){
            spanArray[y].previousElementSibling.className = "spec1 talentButton active-talent req-active";
          } if(spanArray[y].previousElementSibling.className[4] === "2"){
            spanArray[y].previousElementSibling.className = "spec2 talentButton active-talent req-active";
          } if(spanArray[y].previousElementSibling.className[4] === "3"){
            spanArray[y].previousElementSibling.className = "spec3 talentButton active-talent req-active";
          }
        }
        
      }

       /* Iterate through array of all talent buttons and split them
      into separate arrays based off the 3rd char of the string*/
      
      for(z = 0; z < spanArray.length; z++){
        if(spanArray[z].innerText[2] === "1"){
            spanArrayPotential1.push(spanArray[z]);
        } if(spanArray[z].innerText[2] === "2"){
            spanArrayPotential2.push(spanArray[z]);
        } if(spanArray[z].innerText[2] === "3"){
            spanArrayPotential3.push(spanArray[z]);
        } if(spanArray[z].innerText[2] === "4"){
            spanArrayPotential4.push(spanArray[z]);
        } if(spanArray[z].innerText[2] === "5"){
            spanArrayPotential5.push(spanArray[z]);
        }
      }

      /* Iterate through all of separate arrays of span elements and set their value
      back to their original values (index[0] of their respective valuePointArray) */
      for(y = 0; y < spanArrayPotential1.length; y++){
        spanArrayPotential1[y].innerText = onePointArray[0];
      } for(y = 0; y < spanArrayPotential2.length; y++){
        spanArrayPotential2[y].innerText = twoPointArray[0];
      } for(y = 0; y < spanArrayPotential3.length; y++){
        spanArrayPotential3[y].innerText = threePointArray[0];
      } for(y = 0; y < spanArrayPotential4.length; y++){
        spanArrayPotential4[y].innerText = fourPointArray[0];
      } for(y = 0; y < spanArrayPotential5.length; y++){
        spanArrayPotential5[y].innerText = fivePointArray[0];
      }
    //Resets all counter variables to 0/false
    i = 0;
    iSpec1 = 0;
    iSpec2 = 0;
    iSpec3 = 0;
    loopHappenedBefore = false;
    //Resets inner text value of DOM counters back to 0.
    document.getElementById("total-points").innerText = `${i}`;
    document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
    document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
    document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
    
    console.log("Reset Points!");

  }
  
  render() {
    return (
      <div style={{position: "relative"}} onContextMenu={(e) => e.preventDefault()} className="frame-wrapper">
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6" style={{ color: "#e1eef4"}}>
                <h5 style={{ color: "#e1eef4", left: "50%" }}>
                    Points Spent: 
                </h5>
                <h5 id="total-points" style={{ color: "#e1eef4" }}>
                    0
                </h5>
            </div>
            <div className="col-sm-3"></div>
        </div>

        
        <button onClick={this.resetPoints} type="button" className="mx-auto btn btn-success ml-4 mb-4 mt-2">
          Reset
        </button>
        <div style={{ maxWidth: "1150px" }} className="row">
          <div className="col">
            <h5 style={{ color: "#e1eef4" }} id="point-counter1">
              Spec 1: 0 
            </h5>
          </div>
          <div className="col">
            <h5 style={{ color: "#e1eef4" }} id="point-counter2">
              Spec 2: 0
            </h5>
          </div>
          <div className="col">
            <h5 style={{ color: "#e1eef4" }} id="point-counter3">
              Spec 3: 0
            </h5>
          </div>
        </div>

        <div className="row talent-frame ml-3 mr-3">
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "assets/images/talents/Hunter/Background/BeastMastery.jpg"
              })`,
            }}
            className="col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
            id="Col1"
          >
            <h5 id="spec1">Beast Mastery</h5>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton active-talent req-active"
                  src="assets/images/talents/Hunter/Progression/spec1/ImprovedAspectHawk.jpg"
                  alt=""
                />
                

                <span className="talentPoints req-00-s1">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton active-talent req-active"
                  src="assets/images/talents/Hunter/Progression/spec1/EnduranceTraining.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-00-s1">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/FocusedFire.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-05-s1">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/ImprovedAspectMonkey.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-05-s1">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/ThickHide.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-05-s1">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/ImprovedRevivePet.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-05-s1">0/2</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/Pathfinding.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s1">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/BestialSwiftness.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s1">0/1</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/UnleashedFury.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s1">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/ImprovedMendPet.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-15-s1">0/2</span>
              </div>
              <div className="col col-xs-3">
                   <img 
                    onMouseEnter={this.displayMouseOverlayInnerElement}
                    onMouseLeave={this.hideMouseOverlayInnerElement}
                    onMouseDown={this.talentClick}
                    className="talentHover"
                    src="assets/images/Item_Hover.png"
                    style={{display: "none"}}
                  />
                  <img
                    onMouseEnter={this.displayMouseOverlay}
                    onMouseLeave={this.hideMouseOverlay}
                    className="spec1 talentButton inactive-talent req-inactive"
                    src="assets/images/talents/Hunter/Progression/spec1/Ferocity.jpg"
                    alt=""
                  />
                 
                  <span className="talentPoints req-15-s1">0/5</span>
                  <img
                    className="medArrow"
                    src="assets/images/DownSilverMedium.png"
                    alt=""
                  />
              </div>

              <div className="col col-xs-3"></div>
            </div>

            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/SpiritBond.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-20-s1">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/Intimidation.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-20-s1">0/1</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                />
              </div>
              <div style={{ zIndex: "0" }} className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/BestialDiscipline.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-20-s1">0/2</span>
              </div>
            </div>

            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/AnimalHandler.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-25-s1">0/2</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/Frenzy.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-25-s1">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/FerociousInspiration.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-30-s1">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/BestialWrath.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-30-s1">0/1</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                />
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/CatlikeReflexes.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-30-s1">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/SerpentsSwiftness.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-35-s1">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec1/BeastWithin.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-40-s1">0/1</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "assets/images/talents/Hunter/Background/Marksman.jpg"
              })`,
            }}
            className="col-sm-12 col-xs-12 col-lg-4 col-md-6 col-xl-4 talent-frame talent-bg"
            id="Col2"
          >
            <h5 id="spec2">Marksmanship</h5>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton active-talent req-active"
                  src="assets/images/talents/Hunter/Progression/spec2/ImprovedConcussiveShot.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-00-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton active-talent req-active"
                  src="assets/images/talents/Hunter/Progression/spec2/LethalShots.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-00-s2">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/ImprovedHuntersMark.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-05-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/Efficiency.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-05-s2">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/GoForTheThroat.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s2">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/ImprovedArcaneShot.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/AimedShot.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s2">0/1</span>
                <img
                  className="smArrow"
                  src="assets/images/DownSilverSmall.png"
                  alt=""
                />
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/RapidKilling.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s2">0/2</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/ImprovedStings.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-15-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/MortalShots.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-15-s2">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/ConcussiveBarrage.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-20-s2">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/ScatterShot.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-20-s2">0/1</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                />
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/BarrageAndImprovedBarrage.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-20-s2">0/3</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                />
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/CombatExperience.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-25-s2">0/2</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/RangedWeaponSpecialization.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-25-s2">0/5</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/CarefulAim.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-30-s2">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/TrueshotAura.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-30-s2">0/1</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/BarrageAndImprovedBarrage.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-30-s2">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/MasterMarksman.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-35-s2">0/5</span>
                <img
                  className="smArrow"
                  src="assets/images/DownSilverSmall.png"
                  alt=""
                />
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec2/SilencingShot.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-40-s2">0/1</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "assets/images/talents/Hunter/Background/Survival.jpg"
              })`,
            }}
            className="col-sm-12 col-xs-12 col-lg-4 col-md-6 col-xl-4 talent-frame talent-bg"
            id="Col3"
          >
            <h5 id="spec3">Survival</h5>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton active-talent req-active"
                  src="assets/images/talents/Hunter/Progression/spec3/MonsterSlaying.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-00-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton active-talent req-active"
                  src="assets/images/talents/Hunter/Progression/spec3/HumanoidSlaying.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-00-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton active-talent req-active"
                  src="assets/images/talents/Hunter/Progression/spec3/HawkEye.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-00-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton active-talent req-active"
                  src="assets/images/talents/Hunter/Progression/spec3/SavageStrikes.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-00-s3">0/2</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/Entrapment.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-05-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/Deflection.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-05-s3">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/ImprovedWingClip.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-05-s3">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/CleverTraps.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s3">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/Survivalist.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s3">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/Deterrence.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-10-s3">0/1</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                />
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/TrapMastery.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-15-s3">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/Surefooted.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-15-s3">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/ImprovedFeignDeath.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-15-s3">0/2</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/SurvivalInstincts.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-20-s3">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/KillerInstinct.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-20-s3">0/3</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                />
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/CounterAttack.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-20-s3">0/1</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/Resourcefulness.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-25-s3">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/LightningReflexes.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-25-s3">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/ThrillOfTheHunt.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-30-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/WyvernSting.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-30-s3">0/1</span>
              </div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/ExposeWeakness.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-30-s3">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/MasterTactician.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-35-s3">0/5</span>
                <img
                  className="smArrow"
                  src="assets/images/DownSilverSmall.png"
                  alt=""
                />
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img 
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={this.talentClick}
                  className="talentHover"
                  src="assets/images/Item_Hover.png"
                  style={{display: "none"}}
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src="assets/images/talents/Hunter/Progression/spec3/Readiness.jpg"
                  alt=""
                />
                
                <span className="talentPoints req-40-s3">0/1</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HunterComponent;
