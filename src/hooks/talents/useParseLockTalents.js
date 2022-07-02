import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/allActions";

export const useParseUnlockTalents = (
  parentTalentProps,
  preReqInfoObject,
  specNumber
) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    lockSpec1Req1,
    lockSpec1Req2,
    lockSpec1Req3,
    lockSpec1Req4,
    lockSpec1Req5,
    lockSpec1Req6,
    lockSpec1Req7,
    lockSpec2Req1,
    lockSpec2Req2,
    lockSpec2Req3,
    lockSpec2Req4,
    lockSpec2Req5,
    lockSpec2Req6,
    lockSpec2Req7,
    lockSpec3Req1,
    lockSpec3Req2,
    lockSpec3Req3,
    lockSpec3Req4,
    lockSpec3Req5,
    lockSpec3Req6,
    lockSpec3Req7,
  } = bindActionCreators(actionCreators, dispatch);

  for (const item of parentTalentProps) {
    // Spec 1
    if (preReqInfoObject.spec === "1") {
      /* console.log("INSIDE SPEC 1 OF FOR LOOP");
          console.log("item: ", item) */
      switch (item) {
        case "1":
          lockSpec1Req1();
          break;
        case "2":
          lockSpec1Req2();
          break;
        case "3":
          lockSpec1Req3();
          break;
        case "4":
          lockSpec1Req4();
          break;
        case "5":
          lockSpec1Req5();
          break;
        case "6":
          lockSpec1Req6();
          break;
        case "7":
          lockSpec1Req7();
          break;
        default:
          break;
      }
    }
    // Spec 2
    if (preReqInfoObject.spec === "2") {
      switch (item) {
        case "1":
          lockSpec2Req1();
          break;
        case "2":
          lockSpec2Req2();
          break;
        case "3":
          lockSpec2Req3();
          break;
        case "4":
          lockSpec2Req4();
          break;
        case "5":
          lockSpec2Req5();
          break;
        case "6":
          lockSpec2Req6();
          break;
        case "7":
          lockSpec2Req7();
          break;
        default:
          break;
      }
    }
    // Spec 3
    if (preReqInfoObject.spec === "3") {
      switch (item) {
        case "1":
          lockSpec3Req1();
          break;
        case "2":
          lockSpec3Req2();
          break;
        case "3":
          lockSpec3Req3();
          break;
        case "4":
          lockSpec3Req4();
          break;
        case "5":
          lockSpec3Req5();
          break;
        case "6":
          lockSpec3Req6();
          break;
        case "7":
          lockSpec3Req7();
          break;
        default:
          break;
      }
    }
  }
};
