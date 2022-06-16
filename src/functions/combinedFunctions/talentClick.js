import * as helper from "./talentClickHelpers";

export const talentClick = (
  props,
  state,
  [addPointsSpec1, addPointsSpec2, addPointsSpec3, addTotalPoints],
  talentInfo,
  pointsSpent,
  setPointsSpent
) => {
  let leftOrRightClick;

  if (window.event.button === 0) {
    leftOrRightClick = "left";
  } else if (window.event.button === 2) {
    leftOrRightClick = "right";
  }

  if (leftOrRightClick === "left") {
    /* 
      Prevent adding points if talent is unlocked or already maxed
    */
    let exitFunction = helper.preventAddingPoint();
    if (exitFunction === true) {
      return;
    }
    /*
        Prevent adding points if user has spent 61 points already
    */
    if (state?.totalPoints?.points === 61) {
      console.log("61 points already!");
      return;
    }
    /* 
      Update the tooltip
    */
    helper.toolTipFunction("add", talentInfo);
    /*
        Update the point tracker span next to the button
    */
    setPointsSpent(helper.addPoint(props.maxPoints, pointsSpent));
    /*
        Update spec specific counter depending on which tree the
        points are added to and the main point counter
    */
    switch (props.spec) {
      case "1":
        addPointsSpec1(1);
        addTotalPoints(1);
        break;
      case "2":
        addPointsSpec2(1);
        addTotalPoints(1);
        break;
      case "3":
        addPointsSpec3(1);
        addTotalPoints(1);
        break;
      default:
        break;
    }
  } else if (leftOrRightClick === "right") {
    helper.preventRemovingPoint();

    /* 
        This prevents the user from removing points from a talent
        if doing so would bring the points spent in the spec tree lower 
        than any of the elements in the spec (LINE 8175 IN HUNTER COMPONENT)
    */

    /*
        Need to remove points from specific tree counter and main counter
    */

    /*
        Need to parse the string of the source element to determine
        what to update the string value to
        ex.) 2/5 => 1/5 or 3/3 => 2/3      
    */

    /* 
      Need to update the tooltip to reflect the new points value
    */

    /*
        If new point threshold (increments of 5) is remove add green border
        to all elements in that level, need to add handling for druid
        first row
    */

    /*
        If talent is no longer maxed out, give remove gold border,
        If it has an arrow attached to it, revert it to silver 
    */
  }
};
