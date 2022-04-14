import React from "react";
import { useParams } from "react-router-dom"
import { HunterJSX } from "./ClassJSXForRender/HunterJSX";

export const HunterTestComponent = (() => {
  const talentBuildParams = useParams();
  return (
    <HunterJSX talentBuildParams={talentBuildParams}/>
  )
})

