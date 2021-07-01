import { contains } from "jquery";
import React, { Component } from "react";



/* 
    bug  1
    when clicking on talent that is maxed out, if one point away from threshold,
    talent buttons in new point threshold become active (in talent click function)
*/

/* 
    bug 2
    right clicking and setting button to inactive doesn't revert
    arrow color (in talent click function)
*/

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
    /*window.event.xtarget.nextElementSibling.style.display = "block";*/
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
    let arrowChecker;

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

    
    
    function addGreenBorderSpec1(){
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
          if(spec1Req40Output[g].className.includes("inactive-talent") && !(spec1Req40Output[g].nextElementSibling.id.includes("prioReq")) && !(spec1Req40Output[g].className.includes("maxeds"))){
            spec1Req40Output[g].className = "spec1 talentButton active-talent req-active";
          }

          if(spec1Req40Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec1();
          }
        }
      }
      
      if(iSpec1 >= 35){
        spec1Req35 = document.getElementsByClassName("req-35-s1");
        
        for(let g = 0; g < spec1Req35.length; g++){
          spec1Req35Output.push(spec1Req35[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec1Req35Output.length; g++){
          if(spec1Req35Output[g].className.includes("inactive-talent") && !(spec1Req35Output[g].nextElementSibling.id.includes("prioReq"))  && !(spec1Req35Output[g].className.includes("maxeds"))){
            spec1Req35Output[g].className = "spec1 talentButton active-talent req-active";
          }

          if(spec1Req35Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec1();
          }
        }
      }
      
      if(iSpec1 >= 30){
        spec1Req30 = document.getElementsByClassName("req-30-s1");
        
        for(let g = 0; g < spec1Req30.length; g++){
          spec1Req30Output.push(spec1Req30[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec1Req30Output.length; g++){
          if(spec1Req30Output[g].className.includes("inactive-talent") && !(spec1Req30Output[g].nextElementSibling.id.includes("prioReq"))  && !(spec1Req30Output[g].className.includes("maxeds"))){
            spec1Req30Output[g].className = "spec1 talentButton active-talent req-active";
          }

          if(spec1Req30Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec1();
          }
        }
      }
      
      if(iSpec1 >= 25){
        spec1Req25 = document.getElementsByClassName("req-25-s1");
        
        for(let g = 0; g < spec1Req25.length; g++){
          spec1Req25Output.push(spec1Req25[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec1Req25Output.length; g++){
          if(spec1Req25Output[g].className.includes("inactive-talent") && !(spec1Req25Output[g].nextElementSibling.id.includes("prioReq"))  && !(spec1Req25Output[g].className.includes("maxeds"))){
            spec1Req25Output[g].className = "spec1 talentButton active-talent req-active";
          }

          if(spec1Req25Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec1();
          }
        }
      }

      if(iSpec1 >= 20){
        spec1Req20 = document.getElementsByClassName("req-20-s1");
        
        for(let g = 0; g < spec1Req20.length; g++){
          spec1Req20Output.push(spec1Req20[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec1Req20Output.length; g++){
          if(spec1Req20Output[g].className.includes("inactive-talent") && !(spec1Req20Output[g].nextElementSibling.id.includes("prioReq"))  && !(spec1Req20Output[g].className.includes("maxeds"))){
            spec1Req20Output[g].className = "spec1 talentButton active-talent req-active";
          }

          if(spec1Req20Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec1();
          }
        }
      }
      
      if(iSpec1 >= 15){
        spec1Req15 = document.getElementsByClassName("req-15-s1");
        
        for(let g = 0; g < spec1Req15.length; g++){
          spec1Req15Output.push(spec1Req15[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec1Req15Output.length; g++){
          if(spec1Req15Output[g].className.includes("inactive-talent") && !(spec1Req15Output[g].nextElementSibling.id.includes("prioReq"))  && !(spec1Req15Output[g].className.includes("maxeds"))){
            spec1Req15Output[g].className = "spec1 talentButton active-talent req-active";
          }

          if(spec1Req15Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec1();
          }
        }
      }
      
      if(iSpec1 >= 10){
        spec1Req10 = document.getElementsByClassName("req-10-s1");
        
        for(let g = 0; g < spec1Req10.length; g++){
          spec1Req10Output.push(spec1Req10[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec1Req10Output.length; g++){
          if(spec1Req10Output[g].className.includes("inactive-talent") && !(spec1Req10Output[g].nextElementSibling.id.includes("prioReq"))  && !(spec1Req10Output[g].className.includes("maxeds"))){
            spec1Req10Output[g].className = "spec1 talentButton active-talent req-active";
          }

          if(spec1Req10Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec1();
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
          if(spec1Req5Output[g].className.includes("inactive-talent") && !(spec1Req5Output[g].nextElementSibling.id.includes("prioReq"))  && !(spec1Req5Output[g].className.includes("maxeds"))){
            spec1Req5Output[g].className = "spec1 talentButton active-talent req-active";
          }

          if(spec1Req5Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec1();
          }
        }
      }
    }

    function addGreenBorderSpec2(){
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
          if(spec2Req40Output[g].className.includes("inactive-talent") && !(spec2Req40Output[g].nextElementSibling.id.includes("prioReq")) && !(spec2Req40Output[g].className.includes("maxeds"))){
            spec2Req40Output[g].className = "spec2 talentButton active-talent req-active";
          }
          if(spec2Req40Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec2();
          }
        }
      }
      
      if(iSpec2 >= 35){
        spec2Req35 = document.getElementsByClassName("req-35-s2");
        
        for(let g = 0; g < spec2Req35.length; g++){
          spec2Req35Output.push(spec2Req35[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec2Req35Output.length; g++){
          if(spec2Req35Output[g].className.includes("inactive-talent") && !(spec2Req35Output[g].nextElementSibling.id.includes("prioReq")) && !(spec2Req35Output[g].className.includes("maxeds"))){
            spec2Req35Output[g].className = "spec2 talentButton active-talent req-active";
          }
          if(spec2Req35Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec2();
          }
        }
      }
      
      if(iSpec2 >= 30){
        spec2Req30 = document.getElementsByClassName("req-30-s2");
        
        for(let g = 0; g < spec2Req30.length; g++){
          spec2Req30Output.push(spec2Req30[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec2Req30Output.length; g++){
          if(spec2Req30Output[g].className.includes("inactive-talent") && !(spec2Req30Output[g].nextElementSibling.id.includes("prioReq")) && !(spec2Req30Output[g].className.includes("maxeds"))){
            spec2Req30Output[g].className = "spec2 talentButton active-talent req-active";
          }
          /*if(spec2Req30Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec2();
          }*/
        }
      }
      
      if(iSpec2 >= 25){
        spec2Req25 = document.getElementsByClassName("req-25-s2");
        
        for(let g = 0; g < spec2Req25.length; g++){
          spec2Req25Output.push(spec2Req25[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec2Req25Output.length; g++){
          if(spec2Req25Output[g].className.includes("inactive-talent") && !(spec2Req25Output[g].nextElementSibling.id.includes("prioReq")) && !(spec2Req25Output[g].className.includes("maxeds"))){
            spec2Req25Output[g].className = "spec2 talentButton active-talent req-active";
          }
          if(spec2Req25Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec2();
          }
        }
      }

      if(iSpec2 >= 20){
        spec2Req20 = document.getElementsByClassName("req-20-s2");
        
        for(let g = 0; g < spec2Req20.length; g++){
          spec2Req20Output.push(spec2Req20[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec2Req20Output.length; g++){
          if(spec2Req20Output[g].className.includes("inactive-talent") && !(spec2Req20Output[g].nextElementSibling.id.includes("prioReq")) && !(spec2Req20Output[g].className.includes("maxeds"))){
            spec2Req20Output[g].className = "spec2 talentButton active-talent req-active";
          }
          if(spec2Req20Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec2();
          }
        }
      }
      
      if(iSpec2 >= 15){
        spec2Req15 = document.getElementsByClassName("req-15-s2");
        
        for(let g = 0; g < spec2Req15.length; g++){
          spec2Req15Output.push(spec2Req15[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec2Req15Output.length; g++){
          if(spec2Req15Output[g].className.includes("inactive-talent") && !(spec2Req15Output[g].nextElementSibling.id.includes("prioReq")) && !(spec2Req15Output[g].className.includes("maxeds"))){
            spec2Req15Output[g].className = "spec2 talentButton active-talent req-active";
          }
          if(spec2Req15Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec2();
          }
        }
        

      }
      
      if(iSpec2 >= 10){
        spec2Req10 = document.getElementsByClassName("req-10-s2");
        
        for(let g = 0; g < spec2Req10.length; g++){
          spec2Req10Output.push(spec2Req10[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec2Req10Output.length; g++){
          if(spec2Req10Output[g].className.includes("inactive-talent") && !(spec2Req10Output[g].nextElementSibling.id.includes("prioReq")) && !(spec2Req10Output[g].className.includes("maxeds"))){
            spec2Req10Output[g].className = "spec2 talentButton active-talent req-active";
          }
          if(spec2Req10Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec2();
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
          if(spec2Req5Output[g].className.includes("inactive-talent") && !(spec2Req5Output[g].nextElementSibling.id.includes("prioReq")) && !(spec2Req5Output[g].className.includes("maxeds"))){
            spec2Req5Output[g].className = "spec2 talentButton active-talent req-active";
          }
          if(spec2Req5Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec2();
          }
        }
      }
    }

    function addGreenBorderSpec3(){
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
          if(spec3Req40Output[g].className.includes("inactive-talent") && !(spec3Req40Output[g].nextElementSibling.id.includes("prioReq")) && !(spec3Req40Output[g].className.includes("maxeds"))){
            spec3Req40Output[g].className = "spec3 talentButton active-talent req-active";
          }

          if(spec3Req40Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec3();
          }
        }
      }
      
      if(iSpec3 >= 35){
        spec3Req35 = document.getElementsByClassName("req-35-s3");
        
        for(let g = 0; g < spec3Req35.length; g++){
          spec3Req35Output.push(spec3Req35[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec3Req35Output.length; g++){
          if(spec3Req35Output[g].className.includes("inactive-talent") && !(spec3Req35Output[g].nextElementSibling.id.includes("prioReq")) && !(spec3Req35Output[g].className.includes("maxeds"))){
            spec3Req35Output[g].className = "spec3 talentButton active-talent req-active";
          }

          if(spec3Req35Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec3();
          }
        }
      }
      
      if(iSpec3 >= 30){
        spec3Req30 = document.getElementsByClassName("req-30-s3");
        
        for(let g = 0; g < spec3Req30.length; g++){
          spec3Req30Output.push(spec3Req30[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec3Req30Output.length; g++){
          if(spec3Req30Output[g].className.includes("inactive-talent") && !(spec3Req30Output[g].nextElementSibling.id.includes("prioReq")) && !(spec3Req30Output[g].className.includes("maxeds"))){
            spec3Req30Output[g].className = "spec3 talentButton active-talent req-active";
          }
          if(spec3Req30Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec3();
          }
        }
      }
      
      if(iSpec3 >= 25){
        spec3Req25 = document.getElementsByClassName("req-25-s3");
        
        for(let g = 0; g < spec3Req25.length; g++){
          spec3Req25Output.push(spec3Req25[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec3Req25Output.length; g++){
          if(spec3Req25Output[g].className.includes("inactive-talent") && !(spec3Req25Output[g].nextElementSibling.id.includes("prioReq")) && !(spec3Req25Output[g].className.includes("maxeds"))){
            spec3Req25Output[g].className = "spec3 talentButton active-talent req-active";
          }
          if(spec3Req25Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec3();
          }
        }
      }

      if(iSpec3 >= 20){
        spec3Req20 = document.getElementsByClassName("req-20-s3");
        
        for(let g = 0; g < spec3Req20.length; g++){
          spec3Req20Output.push(spec3Req20[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec3Req20Output.length; g++){
          if(spec3Req20Output[g].className.includes("inactive-talent") && !(spec3Req20Output[g].nextElementSibling.id.includes("prioReq")) && !(spec3Req20Output[g].className.includes("maxeds"))){
            spec3Req20Output[g].className = "spec3 talentButton active-talent req-active";
          }
          
          if(spec3Req20Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec3();
          }
        }
      }
      
      if(iSpec3 >= 15){
        spec3Req15 = document.getElementsByClassName("req-15-s3");
        
        for(let g = 0; g < spec3Req15.length; g++){
          spec3Req15Output.push(spec3Req15[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec3Req15Output.length; g++){
          if(spec3Req15Output[g].className.includes("inactive-talent") && !(spec3Req15Output[g].nextElementSibling.id.includes("prioReq")) && !(spec3Req15Output[g].className.includes("maxeds"))){
            spec3Req15Output[g].className = "spec3 talentButton active-talent req-active";
          }

          if(spec3Req15Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec3();
          }
        }
      }
      
      if(iSpec3 >= 10){
        spec3Req10 = document.getElementsByClassName("req-10-s3");
        
        for(let g = 0; g < spec3Req10.length; g++){
          spec3Req10Output.push(spec3Req10[g].previousElementSibling) 
        }
        
        for(let g = 0; g < spec3Req10Output.length; g++){
          if(spec3Req10Output[g].className.includes("inactive-talent") && !(spec3Req10Output[g].nextElementSibling.id.includes("prioReq")) && !(spec3Req10Output[g].className.includes("maxeds"))){
            spec3Req10Output[g].className = "spec3 talentButton active-talent req-active";
          }

          if(spec3Req10Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec3();
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
          if(spec3Req5Output[g].className.includes("inactive-talent") && !(spec3Req5Output[g].nextElementSibling.id.includes("prioReq")) && !(spec3Req5Output[g].className.includes("maxeds"))){
            spec3Req5Output[g].className = "spec3 talentButton active-talent req-active";
          }

          if(spec3Req5Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec3();
          }
        }
      }
    }

    function removeGreenBorderSpec1(){
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
    }

    function removeGreenBorderSpec2(){
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
    }

    function removeGreenBorderSpec3(){
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

    function addYellowBorder(){
      if(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]){
        if(specString[4] === "1"){
          window.event.srcElement.nextElementSibling.className = "spec1 talentButton maxeds req-active"
        } if(specString[4] === "2"){
          window.event.srcElement.nextElementSibling.className = "spec2 talentButton maxeds req-active"
        } if(specString[4] === "3"){
          window.event.srcElement.nextElementSibling.className = "spec3 talentButton maxeds req-active"
        }
      }
    }
    
    function removeYellowBorderSpec1(){
      window.event.srcElement.nextElementSibling.className = "spec1 talentButton active-talent req-active";
    }

    function removeYellowBorderSpec2(){
      window.event.srcElement.nextElementSibling.className = "spec2 talentButton active-talent req-active";
    }

    function removeYellowBorderSpec3(){
      window.event.srcElement.nextElementSibling.className = "spec3 talentButton active-talent req-active";
    }

    function turnArrowSilver(){
      
    }

    function turnArrowGoldOnClick(){
      
      function ArrowGold(){
        if(arrowChecker.includes("sm")){
          window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src = "assets/images/DownGoldSmall.png"
        } if(arrowChecker.includes("med")){
          window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src = "assets/images/DownGoldMedium.png"
        } if(arrowChecker.includes("lg")){
          window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src = "assets/images/DownGold.png"
        } 
      }

      if(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]){

        if(window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling){
          arrowChecker = window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.className;
          console.log("arrowChecker is: ")
          console.log(arrowChecker)

          console.log(window.event.srcElement.nextElementSibling.nextElementSibling.id);
          //////////////////////////////////////////////////////////////////////////////////////////////
          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq1Spec1") && document.querySelector('[id*="prioReq1Spec1"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq1Spec1"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec1 >= 40){
                    document.querySelector('[id*="prioReq1Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq2Spec1") && document.querySelector('[id*="prioReq2Spec1"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq2Spec1"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec1 >= 40){
                    document.querySelector('[id*="prioReq2Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq3Spec1") && document.querySelector('[id*="prioReq3Spec1"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq3Spec1"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec1 >= 40){
                    document.querySelector('[id*="prioReq3Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq4Spec1") && document.querySelector('[id*="prioReq4Spec1"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq4Spec1"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec1 >= 40){
                    document.querySelector('[id*="prioReq4Spec1"]').previousElementSibling.className = "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq1Spec2") && document.querySelector('[id*="prioReq1Spec2"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq1Spec2"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec2 >= 40){
                    document.querySelector('[id*="prioReq1Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq2Spec2") && document.querySelector('[id*="prioReq2Spec2"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq2Spec2"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec2 >= 40){
                    document.querySelector('[id*="prioReq2Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq3Spec2") && document.querySelector('[id*="prioReq3Spec2"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq3Spec2"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec2 >= 40){
                    document.querySelector('[id*="prioReq3Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq4Spec2") && document.querySelector('[id*="prioReq4Spec2"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq4Spec2"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec2 >= 40){
                    document.querySelector('[id*="prioReq4Spec2"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq1Spec3") && document.querySelector('[id*="prioReq1Spec3"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq1Spec3"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec3"]').previousElementSibling.className = "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec3"]').previousElementSibling.className = "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec3"]').previousElementSibling.className = "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec3"]').previousElementSibling.className = "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec3"]').previousElementSibling.className = "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec3"]').previousElementSibling.className = "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq1Spec3"]').previousElementSibling.className = "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec3 >= 40){
                    document.querySelector('[id*="prioReq1Spec3"]').previousElementSibling.className = "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq2Spec3") && document.querySelector('[id*="prioReq2Spec3"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq2Spec3"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq2Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec3 >= 40){
                    document.querySelector('[id*="prioReq2Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq3Spec3") && document.querySelector('[id*="prioReq3Spec3"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq3Spec3"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq3Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec3 >= 40){
                    document.querySelector('[id*="prioReq3Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if(window.event.srcElement.nextElementSibling.nextElementSibling.id.includes("subsReq4Spec3") && document.querySelector('[id*="prioReq4Spec3"]').previousElementSibling.className.includes("req-inactive")){
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector('[id*="prioReq4Spec3"]').className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr)

            switch(altStr){
              case "5":
                buttonsArray = document.getElementsByClassName("req-05-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                
                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active")){
                    document.querySelector('[id*="prioReq4Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if(button.previousElementSibling.className.includes("req-active") || iSpec3 >= 40){
                    document.querySelector('[id*="prioReq4Spec3"]').previousElementSibling.className = "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    { break; }
                  }
                }
                break;
            }
            
            
          }

        }
    }


  }
  //If Arrow should turn gold because iSpec1/2/3 is high enough, but
  //element clicked wasnt the arrow connected to arrow
  function turnArrowGoldIndirectlySpec1(){
    console.log("Arrow Gold Indirectly");
    console.log(window.event.srcElement.nextElementSibling.nextElementSibling)
    //counter variable
    let g;
    //This variable determines which if statement we enter
    let reqVariable;



    if(iSpec1 >= 40){
      reqVariable = 40;
    } else if(iSpec1 >= 35){
      reqVariable = 35;
    } else if(iSpec1 >= 30){
      reqVariable = 30;
    } else if(iSpec1 >= 25){
      reqVariable = 25;
    } else if(iSpec1 >= 20){
      reqVariable = 20;
    } else if(iSpec1 >= 15){
      reqVariable = 15;
    } else if(iSpec1 >= 10){
      reqVariable = 10;
    } else if(iSpec1 >= 5){
      reqVariable = 5;
    }

    console.log(`Yo the Reqvariable is here! ${reqVariable}`);

    //Commenting reqVariable = 5 case only
    //////////////////////////////////////////////////////////////////////////////////

    if(reqVariable === 5){
      //iterate through elements with this class name
      for(g = 0; g < document.getElementsByClassName("req-5-s1").length; g++){
        if(spec1Req5Output[g].nextElementSibling){
          //only execute if the id includes prioReq... and if the button above it is maxed out (yellow border)
          if(spec1Req5Output[g].nextElementSibling.id.includes("prioReq1Spec1") && document.querySelector('[id*="subsReq1Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            //applying this class name enables the button and gives green border
            if(!spec1Req5Output[g].className.includes("maxeds")){
              spec1Req5Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec1");
            //switch determines class name of arrow, and replaces it with gold equivalent
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req5Output[g].nextElementSibling.id.includes("prioReq2Spec1") && document.querySelector('[id*="subsReq2Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req5Output[g].className.includes("maxeds")){
              spec1Req5Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req5Output[g].nextElementSibling.id.includes("prioReq3Spec1") && document.querySelector('[id*="subsReq3Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req5Output[g].className.includes("maxeds")){
              spec1Req5Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec1Req5Output[g].nextElementSibling.id.includes("prioReq4Spec1") && document.querySelector('[id*="subsReq4Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req5Output[g].className.includes("maxeds")){
              spec1Req5Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////

    if(reqVariable === 10){
      for(g = 0; g < document.getElementsByClassName("req-10-s1").length; g++){
        if(spec1Req10Output[g].nextElementSibling){
          if(spec1Req10Output[g].nextElementSibling.id.includes("prioReq1Spec1") && document.querySelector('[id*="subsReq1Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req10Output[g].className.includes("maxeds")){
              spec1Req10Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req10Output[g].nextElementSibling.id.includes("prioReq2Spec1") && document.querySelector('[id*="subsReq2Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req10Output[g].className.includes("maxeds")){
              spec1Req10Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req10Output[g].nextElementSibling.id.includes("prioReq3Spec1") && document.querySelector('[id*="subsReq3Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req10Output[g].className.includes("maxeds")){
              spec1Req10Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec1Req10Output[g].nextElementSibling.id.includes("prioReq4Spec1") && document.querySelector('[id*="subsReq4Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req10Output[g].className.includes("maxeds")){
              spec1Req10Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////

    if(reqVariable === 15){
      for(g = 0; g < document.getElementsByClassName("req-15-s1").length; g++){
        if(spec1Req15Output[g].nextElementSibling){
          if(spec1Req15Output[g].nextElementSibling.id.includes("prioReq1Spec1") && document.querySelector('[id*="subsReq1Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req15Output[g].className.includes("maxeds")){
              spec1Req15Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req15Output[g].nextElementSibling.id.includes("prioReq2Spec1") && document.querySelector('[id*="subsReq2Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req15Output[g].className.includes("maxeds")){
              spec1Req15Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req15Output[g].nextElementSibling.id.includes("prioReq3Spec1") && document.querySelector('[id*="subsReq3Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req15Output[g].className.includes("maxeds")){
              spec1Req15Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec1Req15Output[g].nextElementSibling.id.includes("prioReq4Spec1") && document.querySelector('[id*="subsReq4Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req15Output[g].className.includes("maxeds")){
              spec1Req15Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////
    
    if(reqVariable === 20){
      for(g = 0; g < document.getElementsByClassName("req-20-s1").length; g++){
        if(spec1Req20Output[g].nextElementSibling){
          if(spec1Req20Output[g].nextElementSibling.id.includes("prioReq1Spec1") && document.querySelector('[id*="subsReq1Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req20Output[g].className.includes("maxeds")){
              spec1Req20Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req20Output[g].nextElementSibling.id.includes("prioReq2Spec1") && document.querySelector('[id*="subsReq2Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req20Output[g].className.includes("maxeds")){
              spec1Req20Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req20Output[g].nextElementSibling.id.includes("prioReq3Spec1") && document.querySelector('[id*="subsReq3Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req20Output[g].className.includes("maxeds")){
              spec1Req20Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec1Req20Output[g].nextElementSibling.id.includes("prioReq4Spec1") && document.querySelector('[id*="subsReq4Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req20Output[g].className.includes("maxeds")){
              spec1Req20Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////
      
    if(reqVariable === 25){
        for(g = 0; g < document.getElementsByClassName("req-25-s1").length; g++){
          if(spec1Req25Output[g].nextElementSibling){
            if(spec1Req25Output[g].nextElementSibling.id.includes("prioReq1Spec1") && document.querySelector('[id*="subsReq1Spec1"]').previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec1Req25Output[g].className.includes("maxeds")){
                spec1Req25Output[g].className = "spec1 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec1");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if(spec1Req25Output[g].nextElementSibling.id.includes("prioReq2Spec1") && document.querySelector('[id*="subsReq2Spec1"]').previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec1Req25Output[g].className.includes("maxeds")){
                spec1Req25Output[g].className = "spec1 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec1");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if(spec1Req25Output[g].nextElementSibling.id.includes("prioReq3Spec1") && document.querySelector('[id*="subsReq3Spec1"]').previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec1Req25Output[g].className.includes("maxeds")){
                spec1Req25Output[g].className = "spec1 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec1");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if(spec1Req25Output[g].nextElementSibling.id.includes("prioReq4Spec1") && document.querySelector('[id*="subsReq4Spec1"]').previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec1Req25Output[g].className.includes("maxeds")){
                spec1Req25Output[g].className = "spec1 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec1");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }


          }
        }
      }

          //////////////////////////////////////////////////////////////////////////////////
      
    if(reqVariable === 30){
      for(g = 0; g < document.getElementsByClassName("req-30-s1").length; g++){
        if(spec1Req30Output[g].nextElementSibling){
          if(spec1Req30Output[g].nextElementSibling.id.includes("prioReq1Spec1") && document.querySelector('[id*="subsReq1Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req30Output[g].className.includes("maxeds")){
              spec1Req30Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req30Output[g].nextElementSibling.id.includes("prioReq2Spec1") && document.querySelector('[id*="subsReq2Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req30Output[g].className.includes("maxeds")){
              spec1Req30Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
            
          }

          if(spec1Req30Output[g].nextElementSibling.id.includes("prioReq3Spec1") && document.querySelector('[id*="subsReq3Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req30Output[g].className.includes("maxeds")){
              spec1Req30Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec1Req30Output[g].nextElementSibling.id.includes("prioReq4Spec1") && document.querySelector('[id*="subsReq4Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req30Output[g].className.includes("maxeds")){
              spec1Req30Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
        }
      }
    }

        //////////////////////////////////////////////////////////////////////////////////
      
        if(reqVariable === 35){
          for(g = 0; g < document.getElementsByClassName("req-35-s1").length; g++){
            if(spec1Req35Output[g].nextElementSibling){
              if(spec1Req35Output[g].nextElementSibling.id.includes("prioReq1Spec1") && document.querySelector('[id*="subsReq1Spec1"]').previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec1Req35Output[g].className.includes("maxeds")){
                  spec1Req35Output[g].className = "spec1 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq1Spec1");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
  
              if(spec1Req35Output[g].nextElementSibling.id.includes("prioReq2Spec1") && document.querySelector('[id*="subsReq2Spec1"]').previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec1Req35Output[g].className.includes("maxeds")){
                  spec1Req35Output[g].className = "spec1 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq2Spec1");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
  
              if(spec1Req35Output[g].nextElementSibling.id.includes("prioReq3Spec1") && document.querySelector('[id*="subsReq3Spec1"]').previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold 35")
                if(!spec1Req35Output[g].className.includes("maxeds")){
                  spec1Req35Output[g].className = "spec1 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq3Spec1");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
              if(spec1Req35Output[g].nextElementSibling.id.includes("prioReq4Spec1") && document.querySelector('[id*="subsReq4Spec1"]').previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec1Req35Output[g].className.includes("maxeds")){
                  spec1Req35Output[g].className = "spec1 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq4Spec1");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
            }
          }
        }

            //////////////////////////////////////////////////////////////////////////////////
      
    if(reqVariable === 40){
      for(g = 0; g < document.getElementsByClassName("req-40-s1").length; g++){
        if(spec1Req40Output[g].nextElementSibling){
          if(spec1Req40Output[g].nextElementSibling.id.includes("prioReq1Spec1") && document.querySelector('[id*="subsReq1Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req40Output[g].className.includes("maxeds")){
              spec1Req40Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req40Output[g].nextElementSibling.id.includes("prioReq2Spec1") && document.querySelector('[id*="subsReq2Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req40Output[g].className.includes("maxeds")){
              spec1Req40Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec1Req40Output[g].nextElementSibling.id.includes("prioReq3Spec1") && document.querySelector('[id*="subsReq3Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req40Output[g].className.includes("maxeds")){
              spec1Req40Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec1");
            
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec1Req40Output[g].nextElementSibling.id.includes("prioReq4Spec1") && document.querySelector('[id*="subsReq4Spec1"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec1Req40Output[g].className.includes("maxeds")){
              spec1Req40Output[g].className = "spec1 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec1");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

  }

  function turnArrowGoldIndirectlySpec2(){
    console.log("Arrow Gold Indirectly");
    console.log(window.event.srcElement.nextElementSibling.nextElementSibling)
    //counter variable
    let g;
    //This variable determines which if statement we enter
    let reqVariable;

    if(iSpec2 >= 40){
      reqVariable = 40;
    } else if(iSpec2 >= 35){
      reqVariable = 35;
    } else if(iSpec2 >= 30){
      reqVariable = 30;
    } else if(iSpec2 >= 25){
      reqVariable = 25;
    } else if(iSpec2 >= 20){
      reqVariable = 20;
    } else if(iSpec2 >= 15){
      reqVariable = 15;
    } else if(iSpec2 >= 10){
      reqVariable = 10;
    } else if(iSpec2 >= 5){
      reqVariable = 5;
    }

    //Commenting reqVariable = 5 case only
    //////////////////////////////////////////////////////////////////////////////////

    if(reqVariable === 5){
      //iterate through elements with this class name
      for(g = 0; g < document.getElementsByClassName("req-5-s2").length; g++){
        if(spec2Req5Output[g].nextElementSibling){
          //only execute if the id includes prioReq... and if the button above it is maxed out (yellow border)
          if(spec2Req5Output[g].nextElementSibling.id.includes("prioReq1Spec2") && document.querySelector('[id*="subsReq1Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            //applying this class name enables the button and gives green border
            if(!spec2Req5Output[g].className.includes("maxeds")){
              spec2Req5Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec2");
            //switch determines class name of arrow, and replaces it with gold equivalent
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req5Output[g].nextElementSibling.id.includes("prioReq2Spec2") && document.querySelector('[id*="subsReq2Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req5Output[g].className.includes("maxeds")){
              spec2Req5Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req5Output[g].nextElementSibling.id.includes("prioReq3Spec2") && document.querySelector('[id*="subsReq3Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req5Output[g].className.includes("maxeds")){
              spec2Req5Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec2Req5Output[g].nextElementSibling.id.includes("prioReq4Spec2") && document.querySelector('[id*="subsReq4Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req5Output[g].className.includes("maxeds")){
              spec2Req5Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////

    if(reqVariable === 10){
      for(g = 0; g < document.getElementsByClassName("req-10-s2").length; g++){
        if(spec2Req10Output[g].nextElementSibling){
          if(spec2Req10Output[g].nextElementSibling.id.includes("prioReq1Spec2") && document.querySelector('[id*="subsReq1Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req10Output[g].className.includes("maxeds")){
              spec2Req10Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req10Output[g].nextElementSibling.id.includes("prioReq2Spec2") && document.querySelector('[id*="subsReq2Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req10Output[g].className.includes("maxeds")){
              spec2Req10Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req10Output[g].nextElementSibling.id.includes("prioReq3Spec2") && document.querySelector('[id*="subsReq3Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req10Output[g].className.includes("maxeds")){
              spec2Req10Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec2Req10Output[g].nextElementSibling.id.includes("prioReq4Spec2") && document.querySelector('[id*="subsReq4Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req10Output[g].className.includes("maxeds")){
              spec2Req10Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////

    if(reqVariable === 15){
      for(g = 0; g < document.getElementsByClassName("req-15-s2").length; g++){
        if(spec2Req15Output[g].nextElementSibling){
          if(spec2Req15Output[g].nextElementSibling.id.includes("prioReq1Spec2") && document.querySelector('[id*="subsReq1Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req15Output[g].className.includes("maxeds")){
              spec2Req15Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req15Output[g].nextElementSibling.id.includes("prioReq2Spec2") && document.querySelector('[id*="subsReq2Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req15Output[g].className.includes("maxeds")){
              spec2Req15Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req15Output[g].nextElementSibling.id.includes("prioReq3Spec2") && document.querySelector('[id*="subsReq3Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req15Output[g].className.includes("maxeds")){
              spec2Req15Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec2Req15Output[g].nextElementSibling.id.includes("prioReq4Spec2") && document.querySelector('[id*="subsReq4Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req15Output[g].className.includes("maxeds")){
              spec2Req15Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////
    
    if(reqVariable === 20){
      for(g = 0; g < document.getElementsByClassName("req-20-s2").length; g++){
        if(spec2Req20Output[g].nextElementSibling){
          if(spec2Req20Output[g].nextElementSibling.id.includes("prioReq1Spec2") && document.querySelector('[id*="subsReq1Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req20Output[g].className.includes("maxeds")){
              spec2Req20Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req20Output[g].nextElementSibling.id.includes("prioReq2Spec2") && document.querySelector('[id*="subsReq2Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req20Output[g].className.includes("maxeds")){
              spec2Req20Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req20Output[g].nextElementSibling.id.includes("prioReq3Spec2") && document.querySelector('[id*="subsReq3Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req20Output[g].className.includes("maxeds")){
              spec2Req20Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec2Req20Output[g].nextElementSibling.id.includes("prioReq4Spec2") && document.querySelector('[id*="subsReq4Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req20Output[g].className.includes("maxeds")){
              spec2Req20Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////
      
    if(reqVariable === 25){
        for(g = 0; g < document.getElementsByClassName("req-25-s2").length; g++){
          if(spec2Req25Output[g].nextElementSibling){
            if(spec2Req25Output[g].nextElementSibling.id.includes("prioReq1Spec2") && document.querySelector('[id*="subsReq1Spec2"]').previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec2Req25Output[g].className.includes("maxeds")){
                spec2Req25Output[g].className = "spec2 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec2");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if(spec2Req25Output[g].nextElementSibling.id.includes("prioReq2Spec2") && document.querySelector('[id*="subsReq2Spec2"]').previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec2Req25Output[g].className.includes("maxeds")){
                spec2Req25Output[g].className = "spec2 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec2");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if(spec2Req25Output[g].nextElementSibling.id.includes("prioReq3Spec2") && document.querySelector('[id*="subsReq3Spec2"]').previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec2Req25Output[g].className.includes("maxeds")){
                spec2Req25Output[g].className = "spec2 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec2");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if(spec2Req25Output[g].nextElementSibling.id.includes("prioReq4Spec2") && document.querySelector('[id*="subsReq4Spec2"]').previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec2Req25Output[g].className.includes("maxeds")){
                spec2Req25Output[g].className = "spec2 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec2");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }


          }
        }
      }

          //////////////////////////////////////////////////////////////////////////////////
      
    if(reqVariable === 30){
      for(g = 0; g < document.getElementsByClassName("req-30-s2").length; g++){
        if(spec2Req30Output[g].nextElementSibling){
          if(spec2Req30Output[g].nextElementSibling.id.includes("prioReq1Spec2") && document.querySelector('[id*="subsReq1Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req30Output[g].className.includes("maxeds")){
              spec2Req30Output[g].className = "spec2 talentButton active-talent req-active";
              }

            let arrow;
            arrow = document.getElementById("arrwReq1Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req30Output[g].nextElementSibling.id.includes("prioReq2Spec2") && document.querySelector('[id*="subsReq2Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            
            if(!spec2Req30Output[g].className.includes("maxeds")){
              spec2Req30Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req30Output[g].nextElementSibling.id.includes("prioReq3Spec2") && document.querySelector('[id*="subsReq3Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req30Output[g].className.includes("maxeds")){
              spec2Req30Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec2Req30Output[g].nextElementSibling.id.includes("prioReq4Spec2") && document.querySelector('[id*="subsReq4Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req30Output[g].className.includes("maxeds")){
              spec2Req30Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
        }
      }
    }

        //////////////////////////////////////////////////////////////////////////////////
      
        if(reqVariable === 35){
          for(g = 0; g < document.getElementsByClassName("req-35-s2").length; g++){
            if(spec2Req35Output[g].nextElementSibling){
              if(spec2Req35Output[g].nextElementSibling.id.includes("prioReq1Spec2") && document.querySelector('[id*="subsReq1Spec2"]').previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec2Req35Output[g].className.includes("maxeds")){
                  spec2Req35Output[g].className = "spec2 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq1Spec2");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
  
              if(spec2Req35Output[g].nextElementSibling.id.includes("prioReq2Spec2") && document.querySelector('[id*="subsReq2Spec2"]').previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec2Req35Output[g].className.includes("maxeds")){
                  spec2Req35Output[g].className = "spec2 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq2Spec2");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
  
              if(spec2Req35Output[g].nextElementSibling.id.includes("prioReq3Spec2") && document.querySelector('[id*="subsReq3Spec2"]').previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec2Req35Output[g].className.includes("maxeds")){
                  spec2Req35Output[g].className = "spec2 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq3Spec2");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
              if(spec2Req35Output[g].nextElementSibling.id.includes("prioReq4Spec2") && document.querySelector('[id*="subsReq4Spec2"]').previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec2Req35Output[g].className.includes("maxeds")){
                  spec2Req35Output[g].className = "spec2 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq4Spec2");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
            }
          }
        }

            //////////////////////////////////////////////////////////////////////////////////
      
    if(reqVariable === 40){
      for(g = 0; g < document.getElementsByClassName("req-40-s2").length; g++){
        if(spec2Req40Output[g].nextElementSibling){
          if(spec2Req40Output[g].nextElementSibling.id.includes("prioReq1Spec2") && document.querySelector('[id*="subsReq1Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req40Output[g].className.includes("maxeds")){
              spec2Req40Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req40Output[g].nextElementSibling.id.includes("prioReq2Spec2") && document.querySelector('[id*="subsReq2Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req40Output[g].className.includes("maxeds")){
              spec2Req40Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec2Req40Output[g].nextElementSibling.id.includes("prioReq3Spec2") && document.querySelector('[id*="subsReq3Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec2Req40Output[g].className.includes("maxeds")){
              spec2Req40Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec2Req40Output[g].nextElementSibling.id.includes("prioReq4Spec2") && document.querySelector('[id*="subsReq4Spec2"]').previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            console.log("yo yo, what's up")
            if(!spec2Req40Output[g].className.includes("maxeds")){
              spec2Req40Output[g].className = "spec2 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec2");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
        }
      }
    }
  }

  function turnArrowGoldIndirectlySpec3(){
    console.log("Arrow Gold Indirectly");
    console.log(window.event.srcElement.nextElementSibling.nextElementSibling)
    //counter variable
    let g;
    //This variable determines which if statement we enter
    let reqVariable;

    if(iSpec3 >= 40){
      reqVariable = 40;
    } else if(iSpec3 >= 35){
      reqVariable = 35;
    } else if(iSpec3 >= 30){
      reqVariable = 30;
    } else if(iSpec3 >= 25){
      reqVariable = 25;
    } else if(iSpec3 >= 20){
      reqVariable = 20;
    } else if(iSpec3 >= 15){
      reqVariable = 15;
    } else if(iSpec3 >= 10){
      reqVariable = 10;
    } else if(iSpec3 >= 5){
      reqVariable = 5;
    }

    //Commenting reqVariable = 5 case only
    //////////////////////////////////////////////////////////////////////////////////

    if(reqVariable === 5){
      //iterate through elements with this class name
      for(g = 0; g < document.getElementsByClassName("req-5-s3").length; g++){
        if(spec2Req5Output[g].nextElementSibling){
          //only execute if the id includes prioReq... and if the button above it is maxed out (yellow border)
          if(spec3Req5Output[g].nextElementSibling.id.includes("prioReq1Spec3") && document.getElementById("subsReq1Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            //applying this class name enables the button and gives green border
            if(!spec3Req5Output[g].className.includes("maxeds")){
              spec3Req5Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec3");
            //switch determines class name of arrow, and replaces it with gold equivalent
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req5Output[g].nextElementSibling.id.includes("prioReq2Spec3") && document.getElementById("subsReq2Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req5Output[g].className.includes("maxeds")){
              spec3Req5Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req5Output[g].nextElementSibling.id.includes("prioReq3Spec3") && document.getElementById("subsReq3Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req5Output[g].className.includes("maxeds")){
              spec3Req5Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec3Req5Output[g].nextElementSibling.id.includes("prioReq4Spec3") && document.getElementById("subsReq4Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req5Output[g].className.includes("maxeds")){
              spec3Req5Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////

    if(reqVariable === 10){
      for(g = 0; g < document.getElementsByClassName("req-10-s3").length; g++){
        if(spec3Req10Output[g].nextElementSibling){
          if(spec3Req10Output[g].nextElementSibling.id.includes("prioReq1Spec3") && document.getElementById("subsReq1Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req10Output[g].className.includes("maxeds")){
              spec3Req10Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req10Output[g].nextElementSibling.id.includes("prioReq2Spec3") && document.getElementById("subsReq2Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req10Output[g].className.includes("maxeds")){
              spec3Req10Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req10Output[g].nextElementSibling.id.includes("prioReq3Spec3") && document.getElementById("subsReq3Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req10Output[g].className.includes("maxeds")){
              spec3Req10Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec3Req10Output[g].nextElementSibling.id.includes("prioReq4Spec3") && document.getElementById("subsReq4Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req10Output[g].className.includes("maxeds")){
              spec3Req10Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////

    if(reqVariable === 15){
      for(g = 0; g < document.getElementsByClassName("req-15-s3").length; g++){
        if(spec3Req15Output[g].nextElementSibling){
          if(spec3Req15Output[g].nextElementSibling.id.includes("prioReq1Spec3") && document.getElementById("subsReq1Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req15Output[g].className.includes("maxeds")){
              spec3Req15Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req15Output[g].nextElementSibling.id.includes("prioReq2Spec3") && document.getElementById("subsReq2Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req15Output[g].className.includes("maxeds")){
              spec3Req15Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req15Output[g].nextElementSibling.id.includes("prioReq3Spec3") && document.getElementById("subsReq3Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req15Output[g].className.includes("maxeds")){
              spec3Req15Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec3Req15Output[g].nextElementSibling.id.includes("prioReq4Spec3") && document.getElementById("subsReq4Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req15Output[g].className.includes("maxeds")){
              spec3Req15Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////
    
    if(reqVariable === 20){
      for(g = 0; g < document.getElementsByClassName("req-20-s3").length; g++){
        if(spec3Req20Output[g].nextElementSibling){
          if(spec3Req20Output[g].nextElementSibling.id.includes("prioReq1Spec3") && document.getElementById("subsReq1Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req20Output[g].className.includes("maxeds")){
              spec3Req20Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req20Output[g].nextElementSibling.id.includes("prioReq2Spec3") && document.getElementById("subsReq2Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req20Output[g].className.includes("maxeds")){
              spec3Req20Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req20Output[g].nextElementSibling.id.includes("prioReq3Spec3") && document.getElementById("subsReq3Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req20Output[g].className.includes("maxeds")){
              spec3Req20Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec3Req20Output[g].nextElementSibling.id.includes("prioReq4Spec3") && document.getElementById("subsReq4Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req20Output[g].className.includes("maxeds")){
              spec3Req20Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }


        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////
      
    if(reqVariable === 25){
        for(g = 0; g < document.getElementsByClassName("req-25-s3").length; g++){
          if(spec3Req25Output[g].nextElementSibling){
            if(spec3Req25Output[g].nextElementSibling.id.includes("prioReq1Spec3") && document.getElementById("subsReq1Spec3").previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec3Req25Output[g].className.includes("maxeds")){
                spec3Req25Output[g].className = "spec3 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec3");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if(spec3Req25Output[g].nextElementSibling.id.includes("prioReq2Spec3") && document.getElementById("subsReq2Spec3").previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec3Req25Output[g].className.includes("maxeds")){
                spec3Req25Output[g].className = "spec3 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec3");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if(spec3Req25Output[g].nextElementSibling.id.includes("prioReq3Spec3") && document.getElementById("subsReq3Spec3").previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec3Req25Output[g].className.includes("maxeds")){
                spec3Req25Output[g].className = "spec3 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec3");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if(spec3Req25Output[g].nextElementSibling.id.includes("prioReq4Spec3") && document.getElementById("subsReq4Spec3").previousElementSibling.className.includes("maxeds")){
              console.log("The arrow above me should be gold")
              if(!spec3Req25Output[g].className.includes("maxeds")){
                spec3Req25Output[g].className = "spec3 talentButton active-talent req-active";
                }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec3");
              
              switch(arrow.className) {
                case "smArrow":
                  arrow.src = "assets/images/DownGoldSmall.png"
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png"
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png"
                  break;

                default:
                  console.log("No arrow class match");
              }
            }


          }
        }
      }

          //////////////////////////////////////////////////////////////////////////////////
      
    if(reqVariable === 30){
      for(g = 0; g < document.getElementsByClassName("req-30-s3").length; g++){
        if(spec3Req30Output[g].nextElementSibling){
          if(spec3Req30Output[g].nextElementSibling.id.includes("prioReq1Spec3") && document.getElementById("subsReq1Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req30Output[g].className.includes("maxeds")){
              spec3Req30Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req30Output[g].nextElementSibling.id.includes("prioReq2Spec3") && document.getElementById("subsReq2Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req30Output[g].className.includes("maxeds")){
              spec3Req30Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req30Output[g].nextElementSibling.id.includes("prioReq3Spec3") && document.getElementById("subsReq3Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req30Output[g].className.includes("maxeds")){
              spec3Req30Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec3Req30Output[g].nextElementSibling.id.includes("prioReq4Spec3") && document.getElementById("subsReq4Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req30Output[g].className.includes("maxeds")){
              spec3Req30Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
        }
      }
    }

        //////////////////////////////////////////////////////////////////////////////////
      
        if(reqVariable === 35){
          for(g = 0; g < document.getElementsByClassName("req-35-s3").length; g++){
            if(spec3Req35Output[g].nextElementSibling){
              if(spec3Req35Output[g].nextElementSibling.id.includes("prioReq1Spec3") && document.getElementById("subsReq1Spec3").previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec3Req35Output[g].className.includes("maxeds")){
                  spec3Req35Output[g].className = "spec3 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq1Spec3");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
  
              if(spec3Req35Output[g].nextElementSibling.id.includes("prioReq2Spec3") && document.getElementById("subsReq2Spec3").previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec3Req35Output[g].className.includes("maxeds")){
                  spec3Req35Output[g].className = "spec3 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq2Spec3");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
  
              if(spec3Req35Output[g].nextElementSibling.id.includes("prioReq3Spec3") && document.getElementById("subsReq3Spec3").previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec3Req35Output[g].className.includes("maxeds")){
                  spec3Req35Output[g].className = "spec3 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq3Spec3");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
              if(spec3Req35Output[g].nextElementSibling.id.includes("prioReq4Spec3") && document.getElementById("subsReq4Spec3").previousElementSibling.className.includes("maxeds")){
                console.log("The arrow above me should be gold")
                if(!spec3Req35Output[g].className.includes("maxeds")){
                  spec3Req35Output[g].className = "spec3 talentButton active-talent req-active";
                  }
                let arrow;
                arrow = document.getElementById("arrwReq4Spec3");
                
                switch(arrow.className) {
                  case "smArrow":
                    arrow.src = "assets/images/DownGoldSmall.png"
                    break;
                  case "medArrow":
                    arrow.src = "assets/images/DownGoldMedium.png"
                    break;
                  case "lgArrow":
                    arrow.src = "assets/images/DownGoldLarge.png"
                    break;
  
                  default:
                    console.log("No arrow class match");
                }
              }
            }
          }
        }

            //////////////////////////////////////////////////////////////////////////////////
      
    if(reqVariable === 40){
      for(g = 0; g < document.getElementsByClassName("req-40-s3").length; g++){
        if(spec3Req40Output[g].nextElementSibling){
          if(spec3Req40Output[g].nextElementSibling.id.includes("prioReq1Spec3") && document.getElementById("subsReq1Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req40Output[g].className.includes("maxeds")){
              spec3Req40Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq1Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req40Output[g].nextElementSibling.id.includes("prioReq2Spec3") && document.getElementById("subsReq2Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req40Output[g].className.includes("maxeds")){
              spec3Req40Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq2Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }

          if(spec3Req40Output[g].nextElementSibling.id.includes("prioReq3Spec3") && document.getElementById("subsReq3Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req40Output[g].className.includes("maxeds")){
              spec3Req40Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq3Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
          if(spec3Req40Output[g].nextElementSibling.id.includes("prioReq4Spec3") && document.getElementById("subsReq4Spec3").previousElementSibling.className.includes("maxeds")){
            console.log("The arrow above me should be gold")
            if(!spec3Req40Output[g].className.includes("maxeds")){
              spec3Req40Output[g].className = "spec3 talentButton active-talent req-active";
              }
            let arrow;
            arrow = document.getElementById("arrwReq4Spec3");
            
            switch(arrow.className) {
              case "smArrow":
                arrow.src = "assets/images/DownGoldSmall.png"
                break;
              case "medArrow":
                arrow.src = "assets/images/DownGoldMedium.png"
                break;
              case "lgArrow":
                arrow.src = "assets/images/DownGoldLarge.png"
                break;

              default:
                console.log("No arrow class match");
            }
          }
        }
      }
    }

  }

  


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
            
            addGreenBorderSpec1();

        } 
        //if user clicked button in spec 2 tree update point counter for spec 2
        else if(specString[4] === "2"){
            console.log("Point used in spec 2");
            iSpec2 = iSpec2 + 1;
            document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;

            addGreenBorderSpec2();

        } 
        //if user clicked button in spec 3 tree update point counter for spec 3
        else if(specString[4] === "3"){
            console.log("Point used in spec 3")
            iSpec3 = iSpec3 + 1;
            document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;

            addGreenBorderSpec3();
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
                        removeGreenBorderSpec1();
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        removeGreenBorderSpec2();
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        removeGreenBorderSpec3();
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("One Point Potential");
                
                i = i + 1;
                
                document.getElementById("total-points").innerText = i;
                console.log(i);
                 // If Point is maxed out, change the class to give yellow border
                 addYellowBorder();
                 turnArrowGoldOnClick();
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
                        removeGreenBorderSpec1();
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        removeGreenBorderSpec2();
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        removeGreenBorderSpec3();
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("Two Point Potential");
                i = i + 1;
                document.getElementById("total-points").innerText = i;
                console.log(i);
                 // If Point is maxed out, change the class to give yellow border
                 addYellowBorder();
                 turnArrowGoldOnClick();
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
                        removeGreenBorderSpec1();
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        removeGreenBorderSpec2();
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        removeGreenBorderSpec3();
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("Three Point Potential");
                i = i + 1;
                document.getElementById("total-points").innerText = i;
                console.log(i);
                 // If Point is maxed out, change the class to give yellow border
                  addYellowBorder();
                  turnArrowGoldOnClick();
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
                        removeGreenBorderSpec1();
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        removeGreenBorderSpec2();
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        removeGreenBorderSpec3();
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("Four Point Potential");
                i = i + 1;
                document.getElementById("total-points").innerText = i;
                console.log(i);
                 // If Point is maxed out, change the class to give yellow border
                 addYellowBorder();
                 turnArrowGoldOnClick();
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
                        removeGreenBorderSpec1();
                        console.log(`iSpec1: ${iSpec1}`)
                        document.getElementById("point-counter1").innerText = `Spec 1: ${iSpec1}`;
                    } else if(specString[4] === "2"){
                        console.log("Point taken back Spec 2");
                        iSpec2 = iSpec2 - 1;
                        removeGreenBorderSpec2();
                        console.log(`iSpec2: ${iSpec2}`)
                        document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
                    } else if(specString[4] === "3"){
                        console.log("Point taken back Spec 3");
                        iSpec3 = iSpec3 - 1;
                        removeGreenBorderSpec3();
                        console.log(`iSpec3: ${iSpec3}`)
                        document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                    }
                }
                console.log("Five Point Potential");
                i = i + 1;
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is maxed out, change the class to give yellow border
                addYellowBorder();
                turnArrowGoldOnClick();
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
            removeGreenBorderSpec1();
            
            
        } else if(specString[4] === "2"){
            console.log("Point taken from spec 2");
            if(iSpec2 > 0){
                iSpec2 = iSpec2 - 1;
            }
            document.getElementById("point-counter2").innerText = `Spec 2: ${iSpec2}`;
            removeGreenBorderSpec2();

            

        } else if(specString[4] === "3"){
            console.log("Point taken from spec 3")
            if(iSpec3 > 0){
                iSpec3 = iSpec3 - 1;
                document.getElementById("point-counter3").innerText = `Spec 3: ${iSpec3}`;
                removeGreenBorderSpec3();

                
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
                     
                      addGreenBorderSpec1();
                      
                    } if(specString[4] === "2"){
                      
                      addGreenBorderSpec2();

                    } if(specString[4] === "3"){
                      
                      addGreenBorderSpec3();
                    }
                    
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
                 
                if(!(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]))
                if(specString[4] === "1"){
                  removeYellowBorderSpec1();
                } if(specString[4] === "2"){
                  removeYellowBorderSpec2();
                } if(specString[4] === "3"){
                  removeYellowBorderSpec3();
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
                    if(specString[4] === "1"){
                      
                      addGreenBorderSpec1();


                    } if(specString[4] === "2"){
                     
                      addGreenBorderSpec2();

                    } if(specString[4] === "3"){
                     
                      addGreenBorderSpec3();
                    }
                }
                console.log("Two Point Potential");
                if(i >= 1){
                    i = i - 1;
                }
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is not maxed out, change the class to give green border
                 
                if(!(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]))
                if(specString[4] === "1"){
                  removeYellowBorderSpec1();
                } if(specString[4] === "2"){
                  removeYellowBorderSpec2();
                } if(specString[4] === "3"){
                  removeYellowBorderSpec3();
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
                    if(specString[4] === "1"){
                      
                      addGreenBorderSpec1();


                    } if(specString[4] === "2"){
                      
                      addGreenBorderSpec2();

                    } if(specString[4] === "3"){
                     
                      addGreenBorderSpec3();
                    }
                }
                
                console.log("Three Point Potential");
                if(i >= 1){
                    i = i - 1;
                }
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is not maxed out, change the class to give green border
                 
                if(!(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]))
                if(specString[4] === "1"){
                  removeYellowBorderSpec1();
                } if(specString[4] === "2"){
                  removeYellowBorderSpec2();
                } if(specString[4] === "3"){
                  removeYellowBorderSpec3();
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
                    if(specString[4] === "1"){
                      
                      addGreenBorderSpec1();


                    } if(specString[4] === "2"){
                      
                      addGreenBorderSpec2();

                    } if(specString[4] === "3"){
                      
                      addGreenBorderSpec3();
                    }
                }
                console.log("Four Point Potential");
                if(i >= 1){
                    i = i - 1;
                }
                document.getElementById("total-points").innerText = i;
                console.log(i);
                // If Point is not maxed out, change the class to give green border
                if(!(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]))
                if(specString[4] === "1"){
                  removeYellowBorderSpec1();
                } if(specString[4] === "2"){
                  removeYellowBorderSpec2();
                } if(specString[4] === "3"){
                  removeYellowBorderSpec3();
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
                    if(specString[4] === "1"){

                      addGreenBorderSpec1();


                    } if(specString[4] === "2"){
                      

                      addGreenBorderSpec2();

                    } if(specString[4] === "3"){
                      

                      addGreenBorderSpec3();
                    }

                    
                    
                }
                console.log("Five Point Potential");
                if(i >= 1){
                    i = i - 1;
                    
                }
                document.getElementById("total-points").innerText = i;
                console.log(i);
                console.log(iSpec1);
                // If Point is not maxed out, change the class to give green border
                
                if(!(window.event.srcElement.nextElementSibling.nextElementSibling.innerText[0] === window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]))
                if(specString[4] === "1"){
                  removeYellowBorderSpec1();
                } if(specString[4] === "2"){
                  removeYellowBorderSpec2();
                } if(specString[4] === "3"){
                  removeYellowBorderSpec3();
                }
                

                break;
        }  
    }
}

  resetPoints(){
      let z;
      let y;
      let arrow;

      let spanArray = document.querySelectorAll(".talentPoints");
      let smArrowArray = document.querySelectorAll(".smArrow");
      let medArrowArray = document.querySelectorAll(".medArrow");
      let lgArrowArray = document.querySelectorAll(".lgArrow");

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

      // Iterate through all arrow elements and set them back to silver

      for (arrow of smArrowArray) {
        arrow.src = "assets/images/DownSilverSmall.png"
      } for (arrow of medArrowArray) {
        arrow.src = "assets/images/DownSilverMedium.png"
      } for (arrow of lgArrowArray) {
        arrow.src = "assets/images/DownSilverLarge.png"
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
              Spec 2: 0
            </h5>
          </div>
          <div className="col">
            <h5 style={{ color: "#e1eef4" }} id="point-counter3">
              Spec 3: 0
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
                 
                  <span id="subsReq1Spec1" className="talentPoints req-15-s1">0/5</span>
                  <img
                    className="medArrow"
                    src="assets/images/DownSilverMedium.png"
                    alt=""
                    id="arrwReq1Spec1"
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
                
                <span id="subsReq2Spec1" className="talentPoints req-20-s1">0/1</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                  id="arrwReq2Spec1"
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
                
                <span id="prioReq1Spec1" className="talentPoints req-25-s1">0/5</span>
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
                
                <span id="subsReq3Spec1 prioReq2Spec1" className="talentPoints req-30-s1">0/1</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                  id="arrwReq3Spec1"
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
                
                <span id="prioReq3Spec1" className="talentPoints req-40-s1">0/1</span>
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
                
                <span id="subsReq1Spec2" className="talentPoints req-10-s2">0/1</span>
                <img
                  className="smArrow"
                  src="assets/images/DownSilverSmall.png"
                  alt=""
                  id="arrwReq1Spec2"
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
                
                <span id="prioReq1Spec2" className="talentPoints req-15-s2">0/5</span>
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
                
                <span id="subsReq2Spec2" className="talentPoints req-20-s2">0/1</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                  id="arrwReq2Spec2"
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
                
                <span id="subsReq3Spec2" className="talentPoints req-20-s2">0/3</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                  id="arrwReq3Spec2"
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
                
                <span id="prioReq2Spec2" className="talentPoints req-30-s2">0/1</span>
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
                
                <span id="prioReq3Spec2" className="talentPoints req-30-s2">0/3</span>
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
                
                <span id="subsReq4Spec2" className="talentPoints req-35-s2">0/5</span>
                <img
                  className="smArrow"
                  src="assets/images/DownSilverSmall.png"
                  alt=""
                  id="arrwReq4Spec2"
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
                
                <span id="prioReq4Spec2" className="talentPoints req-40-s2">0/1</span>
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
                
                <span id="subsReq1Spec3" className="talentPoints req-10-s3">0/1</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                  id="arrwReq1Spec3"
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
                
                <span id="subsReq2Spec3" className="talentPoints req-20-s3">0/3</span>
                <img
                  className="medArrow"
                  src="assets/images/DownSilverMedium.png"
                  alt=""
                  id="arrwReq2Spec3"
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
                
                <span id="prioReq1Spec3" className="talentPoints req-20-s3">0/1</span>
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
                
                <span id="prioReq2Spec3" className="talentPoints req-30-s3">0/1</span>
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
                
                <span id="subsReq3Spec3" className="talentPoints req-35-s3">0/5</span>
                <img
                  className="smArrow"
                  src="assets/images/DownSilverSmall.png"
                  alt=""
                  id="arrwReq3Spec3"
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
                
                <span id="prioReq3Spec3" className="talentPoints req-40-s3">0/1</span>
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