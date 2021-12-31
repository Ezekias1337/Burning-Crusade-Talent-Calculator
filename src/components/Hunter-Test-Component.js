import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Alert } from "reactstrap";
import { Hunter } from "../talentinfo/Hunter";
import spec1BG from "../images/talents/Hunter/Background/BeastMastery.jpg";
import spec2BG from "../images/talents/Hunter/Background/Marksman.jpg";
import spec3BG from "../images/talents/Hunter/Background/Survival.jpg";
import spec1Logo from "../images/talents/Hunter/Spec1Logo.jpg";
import spec2Logo from "../images/talents/Hunter/Spec2Logo.jpg";
import spec3Logo from "../images/talents/Hunter/Spec3Logo.jpg";

import overlayImage from "../images/Item_Hover.png";

import DownSilverSmall from "../images/DownSilverSmall.png";
import DownSilverMedium from "../images/DownSilverMedium.png";
import DownSilverLarge from "../images/DownSilverLarge.png";

import DownGoldSmall from "../images/DownGoldSmall.png";
import DownGoldMedium from "../images/DownGoldMedium.png";
import DownGoldLarge from "../images/DownGoldLarge.png";

import LeftSilverSmall from "../images/LeftSilverSmall.png";
import RightSilverSmall from "../images/RightSilverSmall.png";

import LeftGoldSmall from "../images/LeftGoldSmall.png";
import RightGoldSmall from "../images/RightGoldSmall.png";

import AngleArrowSilver from "../images/AngleArrowSilver.png";
import AngleArrowGold from "../images/AngleArrowGold.png";

//Spec1 Images

import AnimalHandler from "../images/talents/Hunter/Progression/spec1/AnimalHandler.jpg";
import CatlikeReflexes from "../images/talents/Hunter/Progression/spec1/CatlikeReflexes.jpg";
import Frenzy from "../images/talents/Hunter/Progression/spec1/Frenzy.jpg";
import Intimidation from "../images/talents/Hunter/Progression/spec1/Intimidation.jpg";
import UnleashedFury from "../images/talents/Hunter/Progression/spec1/UnleashedFury.jpg";
import EnduranceTraining from "../images/talents/Hunter/Progression/spec1/EnduranceTraining.jpg";
import ImprovedAspectHawk from "../images/talents/Hunter/Progression/spec1/ImprovedAspectHawk.jpg";
import Pathfinding from "../images/talents/Hunter/Progression/spec1/Pathfinding.jpg";
import BestialDiscipline from "../images/talents/Hunter/Progression/spec1/BestialDiscipline.jpg";
import FerociousInspiration from "../images/talents/Hunter/Progression/spec1/FerociousInspiration.jpg";
import ImprovedAspectMonkey from "../images/talents/Hunter/Progression/spec1/ImprovedAspectMonkey.jpg";
import SerpentsSwiftness from "../images/talents/Hunter/Progression/spec1/SerpentsSwiftness.jpg";
import BestialSwiftness from "../images/talents/Hunter/Progression/spec1/BestialSwiftness.jpg";
import Ferocity from "../images/talents/Hunter/Progression/spec1/Ferocity.jpg";
import ImprovedMendPet from "../images/talents/Hunter/Progression/spec1/ImprovedMendPet.jpg";
import SpiritBond from "../images/talents/Hunter/Progression/spec1/SpiritBond.jpg";
import FocusedFire from "../images/talents/Hunter/Progression/spec1/FocusedFire.jpg";
import ThickHide from "../images/talents/Hunter/Progression/spec1/ThickHide.jpg";
import ImprovedRevivePet from "../images/talents/Hunter/Progression/spec1/ImprovedRevivePet.jpg";
import BestialWrath from "../images/talents/Hunter/Progression/spec1/BestialWrath.jpg";
import TheBeastWithin from "../images/talents/Hunter/Progression/spec1/BeastWithin.jpg";

//Spec2 Images

import AimedShot from "../images/talents/Hunter/Progression/spec2/AimedShot.jpg";
import Efficiency from "../images/talents/Hunter/Progression/spec2/Efficiency.jpg";
import ImprovedStings from "../images/talents/Hunter/Progression/spec2/ImprovedStings.jpg";
import RapidKilling from "../images/talents/Hunter/Progression/spec2/RapidKilling.jpg";
import BarrageAndImprovedBarrage from "../images/talents/Hunter/Progression/spec2/BarrageAndImprovedBarrage.jpg";
import GoForTheThroat from "../images/talents/Hunter/Progression/spec2/GoForTheThroat.jpg";
import LethalShots from "../images/talents/Hunter/Progression/spec2/LethalShots.jpg";
import ScatterShot from "../images/talents/Hunter/Progression/spec2/ScatterShot.jpg";
import CarefulAim from "../images/talents/Hunter/Progression/spec2/CarefulAim.jpg";
import ImprovedArcaneShot from "../images/talents/Hunter/Progression/spec2/ImprovedArcaneShot.jpg";
import MasterMarksman from "../images/talents/Hunter/Progression/spec2/MasterMarksman.jpg";
import SilencingShot from "../images/talents/Hunter/Progression/spec2/SilencingShot.jpg";
import CombatExperience from "../images/talents/Hunter/Progression/spec2/CombatExperience.jpg";
import ImprovedConcussiveShot from "../images/talents/Hunter/Progression/spec2/ImprovedConcussiveShot.jpg";
import MortalShots from "../images/talents/Hunter/Progression/spec2/MortalShots.jpg";
import TrueshotAura from "../images/talents/Hunter/Progression/spec2/TrueshotAura.jpg";
import ConcussiveBarrage from "../images/talents/Hunter/Progression/spec2/ConcussiveBarrage.jpg";
import ImprovedHuntersMark from "../images/talents/Hunter/Progression/spec2/ImprovedHuntersMark.jpg";
import RangedWeaponSpecialization from "../images/talents/Hunter/Progression/spec2/RangedWeaponSpecialization.jpg";

//Spec3 Images

import CleverTraps from "../images/talents/Hunter/Progression/spec3/CleverTraps.jpg";
import ExposeWeakness from "../images/talents/Hunter/Progression/spec3/ExposeWeakness.jpg";
import KillerInstinct from "../images/talents/Hunter/Progression/spec3/KillerInstinct.jpg";
import Resourcefulness from "../images/talents/Hunter/Progression/spec3/Resourcefulness.jpg";
import ThrillOfTheHunt from "../images/talents/Hunter/Progression/spec3/ThrillOfTheHunt.jpg";
import Counterattack from "../images/talents/Hunter/Progression/spec3/Counterattack.jpg";
import HawkEye from "../images/talents/Hunter/Progression/spec3/HawkEye.jpg";
import LightningReflexes from "../images/talents/Hunter/Progression/spec3/LightningReflexes.jpg";
import SavageStrikes from "../images/talents/Hunter/Progression/spec3/SavageStrikes.jpg";
import TrapMastery from "../images/talents/Hunter/Progression/spec3/TrapMastery.jpg";
import Deflection from "../images/talents/Hunter/Progression/spec3/Deflection.jpg";
import HumanoidSlaying from "../images/talents/Hunter/Progression/spec3/HumanoidSlaying.jpg";
import MasterTactician from "../images/talents/Hunter/Progression/spec3/MasterTactician.jpg";
import Surefooted from "../images/talents/Hunter/Progression/spec3/Surefooted.jpg";
import WyvernSting from "../images/talents/Hunter/Progression/spec3/WyvernSting.jpg";
import Deterrence from "../images/talents/Hunter/Progression/spec3/Deterrence.jpg";
import ImprovedFeignDeath from "../images/talents/Hunter/Progression/spec3/ImprovedFeignDeath.jpg";
import MonsterSlaying from "../images/talents/Hunter/Progression/spec3/MonsterSlaying.jpg";
import SurvivalInstincts from "../images/talents/Hunter/Progression/spec3/SurvivalInstincts.jpg";
import Entrapment from "../images/talents/Hunter/Progression/spec3/Entrapment.jpg";
import ImprovedWingClip from "../images/talents/Hunter/Progression/spec3/ImprovedWingClip.jpg";
import Readiness from "../images/talents/Hunter/Progression/spec3/Readiness.jpg";
import Survivalist from "../images/talents/Hunter/Progression/spec3/Survivalist.jpg";

let i = 0;
let iSpec1 = 0;
let iSpec2 = 0;
let iSpec3 = 0;
let loopHappenedBefore = false;

class HunterTestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
}

<ReactTooltip data-html="true" />;

export default HunterTestComponent;
