const shamanJSX = () => {
  return (
    <div
      style={{ position: "relative", maxWidth: "1010px" }}
      onContextMenu={(e) => e.preventDefault()}
      className="frame-wrapper mx-auto"
      id="Shaman"
      onLoad={() => {
        this.rebuildToolTip();
      }}
    >
      <div className="row" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <div className="col-sm-12">
          <button
            onClick={this.resetPoints}
            type="button"
            className="btn btn-success btn-shaman mb-2 mt-2"
            style={{ display: "inline-block", marginLeft: "6px" }}
          >
            Reset
          </button>
        </div>
        <div className="col-sm-4"></div>
        <div
          className="col-sm-4 mx-auto"
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
          <h5
            style={{
              color: "white",
              display: "inline-block",
              marginLeft: "6px",
            }}
          >
            Points Spent:
          </h5>
          <h5
            id="total-points"
            style={{
              color: "white",
              display: "inline-block",
              marginLeft: "6px",
              marginTop: "1px",
            }}
          >
            0
          </h5>
        </div>
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
          <h5 id="spec1" style={{ display: "inline-block" }}>
            <img
              style={{
                marginRight: ".5rem",
                borderRadius: "2px",
                border: "1.3px solid white",
              }}
              src={spec1Logo}
            />
            Elemental
          </h5>
          <h5
            style={{
              color: "white",
              display: "inline-block",
              marginLeft: "2px",
            }}
            id="point-counter1"
          >
            (0)
          </h5>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ConvectionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ConvectionToolTip = ref)}
                data-tip={Shaman[0].toolTip[0]}
                id="1"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={Convection}
                alt=""
              />

              <span className="talentPoints req-00-s1">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ConcussionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ConcussionToolTip = ref)}
                data-tip={Shaman[1].toolTip[0]}
                id="2"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={Concussion}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.EarthsGraspToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EarthsGraspToolTip = ref)}
                data-tip={Shaman[2].toolTip[0]}
                id="3"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={EarthsGrasp}
                alt=""
              />

              <span className="talentPoints req-05-s1">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ElementalWardingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ElementalWardingToolTip = ref)}
                data-tip={Shaman[3].toolTip[0]}
                id="4"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ElementalWarding}
                alt=""
              />

              <span className="talentPoints req-05-s1">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.CallOfFlameToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CallOfFlameToolTip = ref)}
                data-tip={Shaman[4].toolTip[0]}
                id="5"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={CallOfFlame}
                alt=""
              />

              <span className="talentPoints req-05-s1">0/3</span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ElementalFocusToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ElementalFocusToolTip = ref)}
                data-tip={Shaman[5].toolTip[0]}
                id="6"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ElementalFocus}
                alt=""
              />

              <span className="talentPoints req-10-s1">0/1</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ReverberationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ReverberationToolTip = ref)}
                data-tip={Shaman[6].toolTip[0]}
                id="7"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Reverberation}
                alt=""
              />

              <span className="talentPoints req-10-s1">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.CallOfThunderToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CallOfThunderToolTip = ref)}
                data-tip={Shaman[7].toolTip[0]}
                id="8"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={CallOfThunder}
                alt=""
              />

              <span id="subsReq1Spec1" className="talentPoints req-10-s1">
                0/5
              </span>
              <img
                className="lgArrowPaladin"
                src={DownSilverLarge}
                alt=""
                id="arrwReq1Spec1"
              />
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedFireTotemsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedFireTotemsToolTip = ref)}
                data-tip={Shaman[8].toolTip[0]}
                id="9"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedFireTotems}
                alt=""
              />

              <span className="talentPoints req-15-s1">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.EyeOfTheStormToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EyeOfTheStormToolTip = ref)}
                data-tip={Shaman[9].toolTip[0]}
                id="10"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={EyeOfTheStorm}
                alt=""
              />

              <span className="talentPoints req-15-s1">0/3</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ElementalDevastationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ElementalDevastationToolTip = ref)}
                data-tip={Shaman[10].toolTip[0]}
                id="11"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ElementalDevastation}
                alt=""
              />

              <span className="talentPoints req-15-s1">0/3</span>
            </div>
          </div>

          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.StormReachToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.StormReachToolTip = ref)}
                data-tip={Shaman[11].toolTip[0]}
                id="12"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={StormReach}
                alt=""
              />

              <span className="talentPoints req-20-s1">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ElementalFuryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ElementalFuryToolTip = ref)}
                data-tip={Shaman[12].toolTip[0]}
                id="13"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ElementalFury}
                alt=""
              />

              <span id="subsReq2Spec1" className="talentPoints req-20-s1">
                0/1
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
                alt=""
                id="arrwReq2Spec1"
              />
            </div>
            <div style={{ zIndex: "0" }} className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.UnrelentingStormToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.UnrelentingStormToolTip = ref)}
                data-tip={Shaman[13].toolTip[0]}
                id="14"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={UnrelentingStorm}
                alt=""
              />

              <span className="talentPoints req-20-s1">0/5</span>
            </div>
          </div>

          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ElementalPrecisionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ElementalPrecisionToolTip = ref)}
                data-tip={Shaman[14].toolTip[0]}
                id="15"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ElementalPrecision}
                alt=""
              />

              <span className="talentPoints req-25-s1">0/3</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.LightningMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.LightningMasteryToolTip = ref)}
                data-tip={Shaman[15].toolTip[0]}
                id="16"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={LightningMastery}
                alt=""
              />

              <span id="prioReq1Spec1" className="talentPoints req-25-s1">
                0/5
              </span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ElementalMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ElementalMasteryToolTip = ref)}
                data-tip={Shaman[16].toolTip[0]}
                id="17"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ElementalMastery}
                alt=""
              />

              <span id="prioReq2Spec1" className="talentPoints req-30-s1">
                0/1
              </span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ElementalShieldsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ElementalShieldsToolTip = ref)}
                data-tip={Shaman[17].toolTip[0]}
                id="18"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ElementalShields}
                alt=""
              />

              <span className="talentPoints req-30-s1">0/3</span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.LightningOverloadToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.LightningOverloadToolTip = ref)}
                data-tip={Shaman[18].toolTip[0]}
                id="19"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={LightningOverload}
                alt=""
              />

              <span id="subsReq3Spec1" className="talentPoints req-35-s1">
                0/5
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
                alt=""
                id="arrwReq3Spec1"
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.TotemOfWrathToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TotemOfWrathToolTip = ref)}
                data-tip={Shaman[19].toolTip[0]}
                id="20"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={TotemOfWrath}
                alt=""
              />

              <span id="prioReq3Spec1" className="talentPoints req-40-s1">
                0/1
              </span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${spec2BG})`,
            maxWidth: "305px",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
          className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
          id="Col2"
        >
          <h5 id="spec2" style={{ display: "inline-block" }}>
            <img
              style={{
                marginRight: ".5rem",
                borderRadius: "2px",
                border: "1.3px solid white",
              }}
              src={spec2Logo}
            />
            Enhancement
          </h5>
          <h5
            style={{
              color: "white",
              display: "inline-block",
              marginLeft: "2px",
            }}
            id="point-counter2"
          >
            (0)
          </h5>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.AncestralKnowledgeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AncestralKnowledgeToolTip = ref)}
                data-tip={Shaman[20].toolTip[0]}
                id="21"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={AncestralKnowledge}
                alt=""
              />

              <span className="talentPoints req-00-s2">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ShieldSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShieldSpecializationToolTip = ref)}
                data-tip={Shaman[21].toolTip[0]}
                id="22"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={ShieldSpecialization}
                alt=""
              />

              <span className="talentPoints req-00-s2">0/5</span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.GuardianTotemsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.GuardianTotemsToolTip = ref)}
                data-tip={Shaman[22].toolTip[0]}
                id="23"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={GuardianTotems}
                alt=""
              />

              <span className="talentPoints req-05-s2">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ThunderingStrikesToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ThunderingStrikesToolTip = ref)}
                data-tip={Shaman[23].toolTip[0]}
                id="24"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ThunderingStrikes}
                alt=""
              />

              <span id="subsReq1Spec2" className="talentPoints req-05-s2">
                0/5
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
                alt=""
                id="arrwReq1Spec2"
              />
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedGhostWolfToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedGhostWolfToolTip = ref)}
                data-tip={Shaman[24].toolTip[0]}
                id="25"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedGhostWolf}
                alt=""
              />

              <span className="talentPoints req-05-s2">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedLightningShieldToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedLightningShieldToolTip = ref)}
                data-tip={Shaman[25].toolTip[0]}
                id="26"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedLightningShield}
                alt=""
              />

              <span className="talentPoints req-05-s2">0/3</span>
            </div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.EnhancingTotemsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EnhancingTotemsToolTip = ref)}
                data-tip={Shaman[26].toolTip[0]}
                id="27"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={EnhancingTotems}
                alt=""
              />

              <span className="talentPoints req-10-s2">0/2</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ShamanisticFocusToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShamanisticFocusToolTip = ref)}
                data-tip={Shaman[27].toolTip[0]}
                id="28"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ShamanisticFocus}
                alt=""
              />

              <span className="talentPoints req-10-s2">0/1</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.AnticipationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AnticipationToolTip = ref)}
                data-tip={Shaman[28].toolTip[0]}
                id="29"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Anticipation}
                alt=""
              />

              <span className="talentPoints req-10-s2">0/5</span>
            </div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.FlurryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FlurryToolTip = ref)}
                data-tip={Shaman[29].toolTip[0]}
                id="30"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Flurry}
                alt=""
              />

              <span id="prioReq1Spec2" className="talentPoints req-15-s2">
                0/5
              </span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ToughnessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ToughnessToolTip = ref)}
                data-tip={Shaman[30].toolTip[0]}
                id="31"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Toughness}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedWeapontotemsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedWeapontotemsToolTip = ref)}
                data-tip={Shaman[31].toolTip[0]}
                id="32"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedWeapontotems}
                alt=""
              />

              <span className="talentPoints req-20-s2">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.SpiritWeaponsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SpiritWeaponsToolTip = ref)}
                data-tip={Shaman[32].toolTip[0]}
                id="33"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={SpiritWeapons}
                alt=""
              />

              <span id="subsReq3Spec2" className="talentPoints req-20-s2">
                0/1
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
                alt=""
                id="arrwReq3Spec2"
              />
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ElementalWeaponsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ElementalWeaponsToolTip = ref)}
                data-tip={Shaman[33].toolTip[0]}
                id="34"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ElementalWeapons}
                alt=""
              />

              <span id="subsReq2Spec2" className="talentPoints req-20-s2">
                0/3
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
                alt=""
                id="arrwReq2Spec2"
              />
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.MentalQuicknessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MentalQuicknessToolTip = ref)}
                data-tip={Shaman[34].toolTip[0]}
                id="35"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={MentalQuickness}
                alt=""
              />

              <span className="talentPoints req-25-s2">0/3</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.WeaponMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.WeaponMasteryToolTip = ref)}
                data-tip={Shaman[35].toolTip[0]}
                id="36"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={WeaponMastery}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.DualWieldSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DualWieldSpecializationToolTip = ref)}
                data-tip={Shaman[36].toolTip[0]}
                id="37"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={DualWieldSpecialization}
                alt=""
              />

              <span id="prioReq4Spec2" className="talentPoints req-30-s2">
                0/3
              </span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.DualWieldToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DualWieldToolTip = ref)}
                data-tip={Shaman[37].toolTip[0]}
                id="38"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={DualWield}
                alt=""
              />

              <span
                id="prioReq3Spec2 subsReq4Spec2"
                className="talentPoints req-30-s2"
              >
                0/1
              </span>
              <img
                className="leftArrow"
                src={LeftSilverSmall}
                alt=""
                id="arrwReq4Spec2"
              />
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.StormstrikeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.StormstrikeToolTip = ref)}
                data-tip={Shaman[38].toolTip[0]}
                id="39"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Stormstrike}
                alt=""
              />

              <span id="prioReq2Spec2" className="talentPoints req-30-s2">
                0/1
              </span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.UnleashedRageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.UnleashedRageToolTip = ref)}
                data-tip={Shaman[39].toolTip[0]}
                id="40"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={UnleashedRage}
                alt=""
              />

              <span className="talentPoints req-35-s2">0/5</span>
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ShamanisticRageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShamanisticRageToolTip = ref)}
                data-tip={Shaman[40].toolTip[0]}
                id="41"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ShamanisticRage}
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
            backgroundImage: `url(${spec3BG})`,
            maxWidth: "305px",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
          className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
          id="Col3"
        >
          <h5 id="spec3" style={{ display: "inline-block" }}>
            <img
              style={{
                marginRight: ".5rem",
                borderRadius: "2px",
                border: "1.3px solid white",
              }}
              src={spec3Logo}
            />
            Restoration
          </h5>
          <h5
            style={{
              color: "white",
              display: "inline-block",
              marginLeft: "2px",
            }}
            id="point-counter3"
          >
            (0)
          </h5>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedHealingWaveToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedHealingWaveToolTip = ref)}
                data-tip={Shaman[41].toolTip[0]}
                id="42"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={ImprovedHealingWave}
                alt=""
              />

              <span className="talentPoints req-00-s3">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.TidalFocusToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TidalFocusToolTip = ref)}
                data-tip={Shaman[42].toolTip[0]}
                id="43"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={TidalFocus}
                alt=""
              />

              <span className="talentPoints req-00-s3">0/5</span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedReincarnationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedReincarnationToolTip = ref)}
                data-tip={Shaman[43].toolTip[0]}
                id="44"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedReincarnation}
                alt=""
              />

              <span className="talentPoints req-05-s3">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.AncestralHealingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AncestralHealingToolTip = ref)}
                data-tip={Shaman[44].toolTip[0]}
                id="45"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={AncestralHealing}
                alt=""
              />

              <span className="talentPoints req-05-s3">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.TotemicFocusToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TotemicFocusToolTip = ref)}
                data-tip={Shaman[45].toolTip[0]}
                id="46"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={TotemicFocus}
                alt=""
              />

              <span className="talentPoints req-05-s3">0/5</span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.NaturesGuidanceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.NaturesGuidanceToolTip = ref)}
                data-tip={Shaman[46].toolTip[0]}
                id="47"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={NaturesGuidance}
                alt=""
              />

              <span className="talentPoints req-10-s3">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.HealingFocusToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HealingFocusToolTip = ref)}
                data-tip={Shaman[47].toolTip[0]}
                id="48"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={HealingFocus}
                alt=""
              />

              <span className="talentPoints req-10-s3">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.TotemicMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TotemicMasteryToolTip = ref)}
                data-tip={Shaman[48].toolTip[0]}
                id="49"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={TotemicMastery}
                alt=""
              />

              <span className="talentPoints req-10-s3">0/1</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.HealingGraceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HealingGraceToolTip = ref)}
                data-tip={Shaman[49].toolTip[0]}
                id="50"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={HealingGrace}
                alt=""
              />

              <span className="talentPoints req-10-s3">0/3</span>
            </div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.RestorativeTotemsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.RestorativeTotemsToolTip = ref)}
                data-tip={Shaman[50].toolTip[0]}
                id="51"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={RestorativeTotems}
                alt=""
              />

              <span id="subsReq1Spec3" className="talentPoints req-15-s3">
                0/5
              </span>
              <img
                className="lgArrowPaladin"
                src={DownSilverLarge}
                alt=""
                id="arrwReq1Spec3"
              />
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.TidalMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TidalMasteryToolTip = ref)}
                data-tip={Shaman[51].toolTip[0]}
                id="52"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={TidalMastery}
                alt=""
              />

              <span className="talentPoints req-15-s3">0/5</span>
            </div>

            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.HealingWayToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HealingWayToolTip = ref)}
                data-tip={Shaman[52].toolTip[0]}
                id="53"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={HealingWay}
                alt=""
              />

              <span className="talentPoints req-20-s3">0/3</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.NaturesSwiftnessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.NaturesSwiftnessToolTip = ref)}
                data-tip={Shaman[53].toolTip[0]}
                id="54"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={NaturesSwiftness}
                alt=""
              />

              <span className="talentPoints req-20-s3">0/1</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.FocusedMindToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FocusedMindToolTip = ref)}
                data-tip={Shaman[54].toolTip[0]}
                id="55"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={FocusedMind}
                alt=""
              />

              <span className="talentPoints req-20-s3">0/3</span>
            </div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.PurificationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PurificationToolTip = ref)}
                data-tip={Shaman[55].toolTip[0]}
                id="56"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Purification}
                alt=""
              />

              <span className="talentPoints req-25-s3">0/5</span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ManaTideTotemToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ManaTideTotemToolTip = ref)}
                data-tip={Shaman[56].toolTip[0]}
                id="57"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ManaTideTotem}
                alt=""
              />

              <span id="prioReq1Spec3" className="talentPoints req-30-s3">
                0/1
              </span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.NaturesGuardianToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.NaturesGuardianToolTip = ref)}
                data-tip={Shaman[57].toolTip[0]}
                id="58"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={NaturesGuardian}
                alt=""
              />

              <span className="talentPoints req-30-s3">0/5</span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.NaturesBlessingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.NaturesBlessingToolTip = ref)}
                data-tip={Shaman[58].toolTip[0]}
                id="59"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={NaturesBlessing}
                alt=""
              />

              <span id="subsReq2Spec3" className="talentPoints req-35-s3">
                0/3
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
                alt=""
                id="arrwReq2Spec3"
              />
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedChainHealToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedChainHealToolTip = ref)}
                data-tip={Shaman[59].toolTip[0]}
                id="60"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedChainHeal}
                alt=""
              />

              <span className="talentPoints req-35-s3">0/2</span>
            </div>
            <div className="col col-xs-3"></div>
          </div>
          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.EarthShieldToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EarthShieldToolTip = ref)}
                data-tip={Shaman[60].toolTip[0]}
                id="61"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={EarthShield}
                alt=""
              />

              <span id="prioReq2Spec3" className="talentPoints req-40-s3">
                0/1
              </span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
