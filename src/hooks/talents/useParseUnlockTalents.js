import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/allActions";

export const useParseUnlockTalents = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    unlockSpec1Req1,
    unlockSpec1Req2,
    unlockSpec1Req3,
    unlockSpec1Req4,
    unlockSpec1Req5,
    unlockSpec1Req6,
    unlockSpec1Req7,
    unlockSpec2Req1,
    unlockSpec2Req2,
    unlockSpec2Req3,
    unlockSpec2Req4,
    unlockSpec2Req5,
    unlockSpec2Req6,
    unlockSpec2Req7,
    unlockSpec3Req1,
    unlockSpec3Req2,
    unlockSpec3Req3,
    unlockSpec3Req4,
    unlockSpec3Req5,
    unlockSpec3Req6,
    unlockSpec3Req7,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (props?.arrows) {
      for (const item of props.arrows) {
        let isMaxed = false;
        if (props?.pointsSpent.toString() === props?.maxPoints) {
          isMaxed = true;
        }

        // Parse which action to dispatch based off the parentTalent and spec
        if (isMaxed === true) {
          if (item.spec === "1") {
            switch (item.parentTalent) {
              case "1":
                unlockSpec1Req1();
                break;
              case "2":
                unlockSpec1Req2();
                break;
              case "3":
                unlockSpec1Req3();
                break;
              case "4":
                unlockSpec1Req4();
                break;
              case "5":
                unlockSpec1Req5();
                break;
              case "6":
                unlockSpec1Req6();
                break;
              case "7":
                unlockSpec1Req7();
                break;
              default:
                break;
            }
          } else if (item.spec === "2") {
            switch (item.parentTalent) {
              case "1":
                unlockSpec2Req1();
                break;
              case "2":
                unlockSpec2Req2();
                break;
              case "3":
                unlockSpec2Req3();
              case "4":
                unlockSpec2Req4();
                break;
              case "5":
                unlockSpec2Req5();
                break;
              case "6":
                unlockSpec2Req6();
                break;
              case "7":
                unlockSpec2Req7();
                break;
              default:
                break;
            }
          } else if (item.spec === "3") {
            switch (item.parentTalent) {
              case "1":
                unlockSpec3Req1();
                break;
              case "2":
                unlockSpec3Req2();
                break;
              case "3":
                unlockSpec3Req3();
                break;
              case "4":
                unlockSpec3Req4();
                break;
              case "5":
                unlockSpec3Req5();
                break;
              case "6":
                unlockSpec3Req6();
                break;
              case "7":
                unlockSpec3Req7();
                break;
              default:
                break;
            }
          }
        }
      }
    }
  }, [state, props]);
};
