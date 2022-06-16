import { TalentButton } from "../../components/TalentButton";
import { ClassColorButton } from "../../components/classColorButton";
import { SpecCounter } from "../../components/specCounter";
import { TotalCounter } from "../../components/totalCounter";
//Functions import
import { rebuildToolTip } from "../../functions/rebuildToolTip";

//Class specific image import
import spec1BG from "../../images/talents/Hunter/Background/BeastMastery.jpg";
import spec2BG from "../../images/talents/Hunter/Background/Marksman.jpg";
import spec3BG from "../../images/talents/Hunter/Background/Survival.jpg";
import spec1Logo from "../../images/talents/Hunter/Spec1Logo.jpg";
import spec2Logo from "../../images/talents/Hunter/Spec2Logo.jpg";
import spec3Logo from "../../images/talents/Hunter/Spec3Logo.jpg";

//Spec1 Images

import AnimalHandler from "../../images/talents/Hunter/Progression/spec1/AnimalHandler.jpg";
import CatlikeReflexes from "../../images/talents/Hunter/Progression/spec1/CatlikeReflexes.jpg";
import Frenzy from "../../images/talents/Hunter/Progression/spec1/Frenzy.jpg";
import Intimidation from "../../images/talents/Hunter/Progression/spec1/Intimidation.jpg";
import UnleashedFury from "../../images/talents/Hunter/Progression/spec1/UnleashedFury.jpg";
import EnduranceTraining from "../../images/talents/Hunter/Progression/spec1/EnduranceTraining.jpg";
import ImprovedAspectHawk from "../../images/talents/Hunter/Progression/spec1/ImprovedAspectHawk.jpg";
import Pathfinding from "../../images/talents/Hunter/Progression/spec1/Pathfinding.jpg";
import BestialDiscipline from "../../images/talents/Hunter/Progression/spec1/BestialDiscipline.jpg";
import FerociousInspiration from "../../images/talents/Hunter/Progression/spec1/FerociousInspiration.jpg";
import ImprovedAspectMonkey from "../../images/talents/Hunter/Progression/spec1/ImprovedAspectMonkey.jpg";
import SerpentsSwiftness from "../../images/talents/Hunter/Progression/spec1/SerpentsSwiftness.jpg";
import BestialSwiftness from "../../images/talents/Hunter/Progression/spec1/BestialSwiftness.jpg";
import Ferocity from "../../images/talents/Hunter/Progression/spec1/Ferocity.jpg";
import ImprovedMendPet from "../../images/talents/Hunter/Progression/spec1/ImprovedMendPet.jpg";
import SpiritBond from "../../images/talents/Hunter/Progression/spec1/SpiritBond.jpg";
import FocusedFire from "../../images/talents/Hunter/Progression/spec1/FocusedFire.jpg";
import ThickHide from "../../images/talents/Hunter/Progression/spec1/ThickHide.jpg";
import ImprovedRevivePet from "../../images/talents/Hunter/Progression/spec1/ImprovedRevivePet.jpg";
import BestialWrath from "../../images/talents/Hunter/Progression/spec1/BestialWrath.jpg";
import TheBeastWithin from "../../images/talents/Hunter/Progression/spec1/BeastWithin.jpg";

//Spec2 Images

import AimedShot from "../../images/talents/Hunter/Progression/spec2/AimedShot.jpg";
import Efficiency from "../../images/talents/Hunter/Progression/spec2/Efficiency.jpg";
import ImprovedStings from "../../images/talents/Hunter/Progression/spec2/ImprovedStings.jpg";
import RapidKilling from "../../images/talents/Hunter/Progression/spec2/RapidKilling.jpg";
import BarrageAndImprovedBarrage from "../../images/talents/Hunter/Progression/spec2/BarrageAndImprovedBarrage.jpg";
import GoForTheThroat from "../../images/talents/Hunter/Progression/spec2/GoForTheThroat.jpg";
import LethalShots from "../../images/talents/Hunter/Progression/spec2/LethalShots.jpg";
import ScatterShot from "../../images/talents/Hunter/Progression/spec2/ScatterShot.jpg";
import CarefulAim from "../../images/talents/Hunter/Progression/spec2/CarefulAim.jpg";
import ImprovedArcaneShot from "../../images/talents/Hunter/Progression/spec2/ImprovedArcaneShot.jpg";
import MasterMarksman from "../../images/talents/Hunter/Progression/spec2/MasterMarksman.jpg";
import SilencingShot from "../../images/talents/Hunter/Progression/spec2/SilencingShot.jpg";
import CombatExperience from "../../images/talents/Hunter/Progression/spec2/CombatExperience.jpg";
import ImprovedConcussiveShot from "../../images/talents/Hunter/Progression/spec2/ImprovedConcussiveShot.jpg";
import MortalShots from "../../images/talents/Hunter/Progression/spec2/MortalShots.jpg";
import TrueshotAura from "../../images/talents/Hunter/Progression/spec2/TrueshotAura.jpg";
import ConcussiveBarrage from "../../images/talents/Hunter/Progression/spec2/ConcussiveBarrage.jpg";
import ImprovedHuntersMark from "../../images/talents/Hunter/Progression/spec2/ImprovedHuntersMark.jpg";
import RangedWeaponSpecialization from "../../images/talents/Hunter/Progression/spec2/RangedWeaponSpecialization.jpg";

//Spec3 Images

import CleverTraps from "../../images/talents/Hunter/Progression/spec3/CleverTraps.jpg";
import ExposeWeakness from "../../images/talents/Hunter/Progression/spec3/ExposeWeakness.jpg";
import KillerInstinct from "../../images/talents/Hunter/Progression/spec3/KillerInstinct.jpg";
import Resourcefulness from "../../images/talents/Hunter/Progression/spec3/Resourcefulness.jpg";
import ThrillOfTheHunt from "../../images/talents/Hunter/Progression/spec3/ThrillOfTheHunt.jpg";
import Counterattack from "../../images/talents/Hunter/Progression/spec3/Counterattack.jpg";
import HawkEye from "../../images/talents/Hunter/Progression/spec3/HawkEye.jpg";
import LightningReflexes from "../../images/talents/Hunter/Progression/spec3/LightningReflexes.jpg";
import SavageStrikes from "../../images/talents/Hunter/Progression/spec3/SavageStrikes.jpg";
import TrapMastery from "../../images/talents/Hunter/Progression/spec3/TrapMastery.jpg";
import Deflection from "../../images/talents/Hunter/Progression/spec3/Deflection.jpg";
import HumanoidSlaying from "../../images/talents/Hunter/Progression/spec3/HumanoidSlaying.jpg";
import MasterTactician from "../../images/talents/Hunter/Progression/spec3/MasterTactician.jpg";
import Surefooted from "../../images/talents/Hunter/Progression/spec3/Surefooted.jpg";
import WyvernSting from "../../images/talents/Hunter/Progression/spec3/WyvernSting.jpg";
import Deterrence from "../../images/talents/Hunter/Progression/spec3/Deterrence.jpg";
import ImprovedFeignDeath from "../../images/talents/Hunter/Progression/spec3/ImprovedFeignDeath.jpg";
import MonsterSlaying from "../../images/talents/Hunter/Progression/spec3/MonsterSlaying.jpg";
import SurvivalInstincts from "../../images/talents/Hunter/Progression/spec3/SurvivalInstincts.jpg";
import Entrapment from "../../images/talents/Hunter/Progression/spec3/Entrapment.jpg";
import ImprovedWingClip from "../../images/talents/Hunter/Progression/spec3/ImprovedWingClip.jpg";
import Readiness from "../../images/talents/Hunter/Progression/spec3/Readiness.jpg";
import Survivalist from "../../images/talents/Hunter/Progression/spec3/Survivalist.jpg";

import "../../css/vanilla_css/playable-class.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
/* import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/allActions"; */

export const HunterJSX = () => {
  /* const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addPointsSpec1 } = bindActionCreators(actionCreators, dispatch); */

  return (
    <div
      style={{ position: "relative", maxWidth: "1010px" }}
      onContextMenu={(e) => e.preventDefault()}
      className="frame-wrapper mx-auto"
      id="Hunter"
      onLoad={() => {
        rebuildToolTip();
      }}
    >
      <div className="row" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <div className="col-sm-12">
          <ClassColorButton playableClass="hunter" />
        </div>
        <div className="col-sm-4"></div>
        <TotalCounter />
        <div className="col-sm-4"></div>
      </div>

      <div
        className="row ml-3 mr-3 mb-3 mx-auto"
        style={{ maxWidth: "1010px" }}
      >
        <div
          style={{
            backgroundImage: `url(${spec1BG})`,
            maxWidth: "305px",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
          className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
          id="Col1"
        >
          <SpecCounter spec="1" specName="Beast Mastery" logo={spec1Logo} />

          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={ImprovedAspectHawk}
              talentName="ImprovedAspectHawkToolTip"
              req="0"
              spec="1"
              maxPoints="5"
              playableClass="Hunter"
              id="1"
            />
            <TalentButton
              imgSrc={EnduranceTraining}
              talentName="EnduranceTrainingToolTip"
              req="0"
              spec="1"
              maxPoints="5"
              playableClass="Hunter"
              id="2"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={FocusedFire}
              talentName="FocusedFireToolTip"
              req="5"
              spec="1"
              maxPoints="2"
              playableClass="Hunter"
              id="3"
            />
            <TalentButton
              imgSrc={ImprovedAspectMonkey}
              talentName="ImprovedAspectMonkeyToolTip"
              req="5"
              spec="1"
              maxPoints="3"
              playableClass="Hunter"
              id="4"
            />
            <TalentButton
              imgSrc={ThickHide}
              talentName="ThickHideToolTip"
              req="5"
              spec="1"
              maxPoints="3"
              playableClass="Hunter"
              id="5"
            />
            <TalentButton
              imgSrc={ImprovedRevivePet}
              talentName="ImprovedRevivePetToolTip"
              req="5"
              spec="1"
              maxPoints="2"
              playableClass="Hunter"
              id="6"
            />
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={Pathfinding}
              talentName="PathfindingToolTip"
              req="10"
              spec="1"
              maxPoints="2"
              playableClass="Hunter"
              id="7"
            />
            <TalentButton
              imgSrc={BestialSwiftness}
              talentName="BestialSwiftnessToolTip"
              req="10"
              spec="1"
              maxPoints="1"
              playableClass="Hunter"
              id="8"
            />
            <TalentButton
              imgSrc={UnleashedFury}
              talentName="UnleashedFuryToolTip"
              req="10"
              spec="1"
              maxPoints="5"
              playableClass="Hunter"
              id="9"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={ImprovedMendPet}
              talentName="ImprovedMendPetToolTip"
              req="15"
              spec="1"
              maxPoints="2"
              playableClass="Hunter"
              id="10"
            />
            <TalentButton
              imgSrc={Ferocity}
              talentName="FerocityToolTip"
              req="15"
              spec="1"
              maxPoints="5"
              playableClass="Hunter"
              parentTalent={["1"]}
              arrows={[
                {
                  arrowType: "downMedium",
                  color: "silver",
                  parentTalent: "1",
                  spec: "1",
                },
              ]}
              id="11"
            />
            <div className="col col-xs-3"></div>
          </div>

          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={SpiritBond}
              talentName="SpiritBondToolTip"
              req="20"
              spec="1"
              maxPoints="2"
              playableClass="Hunter"
              id="12"
            />
            <TalentButton
              imgSrc={Intimidation}
              talentName="IntimidationToolTip"
              req="20"
              spec="1"
              maxPoints="1"
              playableClass="Hunter"
              parentTalent={["2"]}
              arrows={[
                {
                  arrowType: "downMedium",
                  color: "silver",
                  parentTalent: "2",
                  spec: "1",
                },
              ]}
              id="13"
            />
            <div style={{ zIndex: "0" }} className="col col-xs-3"></div>
            <TalentButton
              imgSrc={BestialDiscipline}
              talentName="BestialDisciplineToolTip"
              req="20"
              spec="1"
              maxPoints="2"
              playableClass="Hunter"
              id="14"
            />
          </div>

          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={AnimalHandler}
              talentName="AnimalHandlerToolTip"
              req="25"
              spec="1"
              maxPoints="2"
              playableClass="Hunter"
              id="15"
            />
            <div style={{ zIndex: "0" }} className="col col-xs-3"></div>
            <TalentButton
              imgSrc={Frenzy}
              talentName="FrenzyToolTip"
              req="25"
              spec="1"
              maxPoints="5"
              playableClass="Hunter"
              childTalent={["1"]}
              id="16"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={FerociousInspiration}
              talentName="FerociousInspirationToolTip"
              req="30"
              spec="1"
              maxPoints="3"
              playableClass="Hunter"
              id="17"
            />
            <TalentButton
              imgSrc={BestialWrath}
              talentName="BestialWrathToolTip"
              req="30"
              spec="1"
              maxPoints="1"
              playableClass="Hunter"
              childTalent={["2"]}
              parentTalent={["3"]}
              arrows={[
                {
                  arrowType: "downMedium",
                  color: "silver",
                  parentTalent: "3",
                  spec: "1",
                },
              ]}
              id="18"
            />
            <TalentButton
              imgSrc={CatlikeReflexes}
              talentName="CatlikeReflexesToolTip"
              req="30"
              spec="1"
              maxPoints="3"
              playableClass="Hunter"
              id="19"
            />

            <div className="col col-xs-3"></div>
          </div>
          <div
            style={{ zIndex: 0 }}
            className="row talent-row talent-row-inner"
          >
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={SerpentsSwiftness}
              talentName="SerpentsSwiftnessToolTip"
              req="35"
              spec="1"
              maxPoints="5"
              playableClass="Hunter"
              id="20"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={TheBeastWithin}
              talentName="TheBeastWithinToolTip"
              req="40"
              spec="1"
              maxPoints="5"
              playableClass="Hunter"
              childTalent={["3"]}
              id="21"
            />
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${spec2BG})`,
            maxWidth: "305px",
          }}
          className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
          id="Col2"
        >
          <SpecCounter spec="2" specName="Marksmanship" logo={spec2Logo} />
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={ImprovedConcussiveShot}
              talentName="ImprovedConcussiveShotToolTip"
              req="0"
              spec="2"
              maxPoints="5"
              playableClass="Hunter"
              id="22"
            />
            <TalentButton
              imgSrc={LethalShots}
              talentName="LethalShotsToolTip"
              req="0"
              spec="2"
              maxPoints="5"
              playableClass="Hunter"
              id="23"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={ImprovedHuntersMark}
              talentName="ImprovedHuntersMarkToolTip"
              req="5"
              spec="2"
              maxPoints="5"
              playableClass="Hunter"
              id="24"
            />
            <TalentButton
              imgSrc={Efficiency}
              talentName="EfficiencyToolTip"
              req="5"
              spec="2"
              maxPoints="5"
              playableClass="Hunter"
              id="25"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={GoForTheThroat}
              talentName="GoForTheThroatToolTip"
              req="10"
              spec="2"
              maxPoints="2"
              playableClass="Hunter"
              id="26"
            />
            <TalentButton
              imgSrc={ImprovedArcaneShot}
              talentName="ImprovedArcaneShotToolTip"
              req="10"
              spec="2"
              maxPoints="5"
              playableClass="Hunter"
              id="27"
            />
            <TalentButton
              imgSrc={AimedShot}
              talentName="AimedShotToolTip"
              req="10"
              spec="2"
              maxPoints="1"
              playableClass="Hunter"
              id="28"
              parentTalent={["1"]}
              arrows={[
                {
                  arrowType: "downSmall",
                  color: "silver",
                  parentTalent: "1",
                  spec: "2",
                },
              ]}
            />
            <TalentButton
              imgSrc={RapidKilling}
              talentName="RapidKillingToolTip"
              req="10"
              spec="2"
              maxPoints="2"
              playableClass="Hunter"
              id="29"
            />
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={ImprovedStings}
              talentName="ImprovedStingsToolTip"
              req="15"
              spec="2"
              maxPoints="5"
              playableClass="Hunter"
              id="30"
            />
            <TalentButton
              imgSrc={MortalShots}
              talentName="MortalShotsToolTip"
              req="15"
              spec="2"
              maxPoints="5"
              playableClass="Hunter"
              childTalent={["1"]}
              id="31"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={ConcussiveBarrage}
              talentName="ConcussiveBarrageToolTip"
              req="20"
              spec="2"
              maxPoints="3"
              playableClass="Hunter"
              id="32"
            />
            <TalentButton
              imgSrc={ScatterShot}
              talentName="ScatterShotToolTip"
              req="20"
              spec="2"
              maxPoints="1"
              playableClass="Hunter"
              id="33"
              parentTalent={["2"]}
              arrows={[
                {
                  arrowType: "downMedium",
                  color: "silver",
                  parentTalent: "2",
                  spec: "2",
                },
              ]}
            />
            <TalentButton
              imgSrc={BarrageAndImprovedBarrage}
              talentName="BarrageToolTip"
              req="20"
              spec="2"
              maxPoints="3"
              playableClass="Hunter"
              id="34"
              parentTalent={["3"]}
              arrows={[
                {
                  arrowType: "downMedium",
                  color: "silver",
                  parentTalent: "3",
                  spec: "2",
                },
              ]}
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={CombatExperience}
              talentName="CombatExperienceToolTip"
              req="25"
              spec="2"
              maxPoints="2"
              playableClass="Hunter"
              id="35"
            />
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={RangedWeaponSpecialization}
              talentName="RangedWeaponSpecializationToolTip"
              req="25"
              spec="2"
              maxPoints="5"
              playableClass="Hunter"
              id="36"
            />
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={CarefulAim}
              talentName="CarefulAimToolTip"
              req="30"
              spec="2"
              maxPoints="3"
              playableClass="Hunter"
              id="37"
            />
            <TalentButton
              imgSrc={TrueshotAura}
              talentName="TrueshotAuraToolTip"
              req="30"
              spec="2"
              maxPoints="1"
              playableClass="Hunter"
              childTalent={["2"]}
              id="38"
            />
            <TalentButton
              imgSrc={BarrageAndImprovedBarrage}
              talentName="BarrageAndImprovedBarrageToolTip"
              req="30"
              spec="2"
              maxPoints="3"
              playableClass="Hunter"
              childTalent={["3"]}
              id="39"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={MasterMarksman}
              talentName="MasterMarksmanToolTip"
              req="35"
              spec="2"
              maxPoints="5"
              playableClass="Hunter"
              id="40"
              parentTalent={["4"]}
              arrows={[
                {
                  arrowType: "downSmall",
                  color: "silver",
                  parentTalent: "4",
                  spec: "2",
                },
              ]}
            />
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={SilencingShot}
              talentName="SilencingShotToolTip"
              req="40"
              spec="2"
              maxPoints="1"
              playableClass="Hunter"
              childTalent={["4"]}
              id="41"
            />
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${spec3BG})`,
            maxWidth: "305px",
          }}
          className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
          id="Col3"
        >
          <SpecCounter spec="3" specName="Survival" logo={spec3Logo} />
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={MonsterSlaying}
              talentName="MonsterSlayingToolTip"
              req="0"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="42"
            />
            <TalentButton
              imgSrc={HumanoidSlaying}
              talentName="HumanoidSlayingToolTip"
              req="0"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="43"
            />
            <TalentButton
              imgSrc={HawkEye}
              talentName="HawkEyeToolTip"
              req="0"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="44"
            />
            <TalentButton
              imgSrc={SavageStrikes}
              talentName="SavageStrikesToolTip"
              req="0"
              spec="3"
              maxPoints="2"
              playableClass="Hunter"
              id="45"
            />
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={Entrapment}
              talentName="EntrapmentToolTip"
              req="5"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="46"
            />
            <TalentButton
              imgSrc={Deflection}
              talentName="DeflectionToolTip"
              req="5"
              spec="3"
              maxPoints="5"
              playableClass="Hunter"
              id="47"
            />
            <TalentButton
              imgSrc={ImprovedWingClip}
              talentName="ImprovedWingClipToolTip"
              req="5"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="48"
            />

            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={CleverTraps}
              talentName="CleverTrapsToolTip"
              req="10"
              spec="3"
              maxPoints="2"
              playableClass="Hunter"
              id="49"
            />
            <TalentButton
              imgSrc={Survivalist}
              talentName="SurvivalistToolTip"
              req="10"
              spec="3"
              maxPoints="5"
              playableClass="Hunter"
              id="50"
            />
            <TalentButton
              imgSrc={Deterrence}
              talentName="DeterrenceToolTip"
              req="10"
              spec="3"
              maxPoints="1"
              playableClass="Hunter"
              id="51"
              parentTalent={["1"]}
              arrows={[
                {
                  arrowType: "downMedium",
                  color: "silver",
                  parentTalent: "1",
                  spec: "3",
                },
              ]}
            />

            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={TrapMastery}
              talentName="TrapMasteryToolTip"
              req="15"
              spec="3"
              maxPoints="2"
              playableClass="Hunter"
              id="52"
            />
            <TalentButton
              imgSrc={Surefooted}
              talentName="SurefootedToolTip"
              req="15"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="53"
            />

            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={ImprovedFeignDeath}
              talentName="ImprovedFeignDeathToolTip"
              req="15"
              spec="3"
              maxPoints="2"
              playableClass="Hunter"
              id="54"
            />
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={SurvivalInstincts}
              talentName="SurvivalInstinctsToolTip"
              req="20"
              spec="3"
              maxPoints="2"
              playableClass="Hunter"
              id="55"
            />
            <TalentButton
              imgSrc={KillerInstinct}
              talentName="KillerInstinctToolTip"
              req="20"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="56"
              parentTalent={["2"]}
              arrows={[
                {
                  arrowType: "downMedium",
                  color: "silver",
                  parentTalent: "2",
                  spec: "3",
                },
              ]}
            />
            <TalentButton
              imgSrc={Counterattack}
              talentName="CounterattackToolTip"
              req="20"
              spec="3"
              maxPoints="1"
              playableClass="Hunter"
              childTalent={["1"]}
              id="57"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={Resourcefulness}
              talentName="ResourcefulnessToolTip"
              req="25"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="58"
            />
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={LightningReflexes}
              talentName="LightningReflexesToolTip"
              req="25"
              spec="3"
              maxPoints="5"
              playableClass="Hunter"
              id="59"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <TalentButton
              imgSrc={ThrillOfTheHunt}
              talentName="ThrillOfTheHuntToolTip"
              req="30"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="60"
            />
            <TalentButton
              imgSrc={WyvernSting}
              talentName="WyvernStingToolTip"
              req="30"
              spec="3"
              maxPoints="1"
              playableClass="Hunter"
              childTalent={["2"]}
              id="61"
            />
            <TalentButton
              imgSrc={ExposeWeakness}
              talentName="ExposeWeaknessToolTip"
              req="30"
              spec="3"
              maxPoints="3"
              playableClass="Hunter"
              id="62"
            />
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={MasterTactician}
              talentName="MasterTacticianToolTip"
              req="35"
              spec="3"
              maxPoints="5"
              playableClass="Hunter"
              id="63"
              parentTalent={["3"]}
              arrows={[
                {
                  arrowType: "downSmall",
                  color: "silver",
                  parentTalent: "3",
                  spec: "3",
                },
              ]}
            />
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <TalentButton
              imgSrc={Readiness}
              talentName="ReadinessToolTip"
              req="40"
              spec="3"
              maxPoints="1"
              playableClass="Hunter"
              childTalent={["3"]}
              id="64"
            />
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
