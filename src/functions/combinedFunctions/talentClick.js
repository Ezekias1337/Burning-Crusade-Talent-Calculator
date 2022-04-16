import * as helper from "./talentClickHelpers";

export const talentClick = (
  maxPoints,
  playableClass,
  talentInfo,
  id,
  spec,
  [addPointsSpec1, addPointsSpec2, addPointsSpec3, addTotalPoints]
) => {
  let leftOrRightClick;

  if (window.event.button === 0) {
    leftOrRightClick = "left";
  } else if (window.event.button === 2) {
    leftOrRightClick = "right";
  }

  if (leftOrRightClick === "left") {
    let exitFunction = helper.preventAddingPoint();
    if (exitFunction === true) {
      return;
    }

    /*
        Need to prevent adding points if user has spent 61 points already
    */

    /*
        Need to update spec specific counter depending on which tree the
        points are added to and the main point counter
    */

    helper.addPoint(maxPoints);
    helper.toolTipFunction("add", talentInfo, playableClass, id);
    switch (spec) {
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
    }

    /*
        If new point threshold (increments of 5) is reached add green border
        to all elements in that level, need to add handling for druid
        first row
    */

    /*
        If talent is maxed out, give it a gold border. If it has an arrow 
        attached to it, turn it gold
    */
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
