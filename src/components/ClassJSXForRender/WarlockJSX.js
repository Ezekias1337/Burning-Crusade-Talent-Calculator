const warlockJSX = () => {
  return (
    <div
      style={{ position: "relative", maxWidth: "1010px" }}
      onContextMenu={(e) => e.preventDefault()}
      className="frame-wrapper mx-auto"
      id="Warlock"
      onLoad={() => {
        this.rebuildToolTip();
      }}
    >
      <div className="row" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <div className="col-sm-12">
          <button
            onClick={this.resetPoints}
            type="button"
            className="btn btn-success btn-warlock mb-2 mt-2"
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
            Affliction
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
                  ReactTooltip.show(this.SuppressionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SuppressionToolTip = ref)}
                data-tip={Warlock[0].toolTip[0]}
                id="1"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={Suppression}
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
                  ReactTooltip.show(this.ImprovedCorruptionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedCorruptionToolTip = ref)}
                data-tip={Warlock[1].toolTip[0]}
                id="2"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={ImprovedCorruption}
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
                  ReactTooltip.show(this.ImprovedCurseOfWeaknessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedCurseOfWeaknessToolTip = ref)}
                data-tip={Warlock[2].toolTip[0]}
                id="3"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedCurseOfWeakness}
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
                  ReactTooltip.show(this.ImprovedDrainSoulToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedDrainSoulToolTip = ref)}
                data-tip={Warlock[3].toolTip[0]}
                id="4"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedDrainSoul}
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
                  ReactTooltip.show(this.ImprovedLifeTapToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedLifeTapToolTip = ref)}
                data-tip={Warlock[4].toolTip[0]}
                id="5"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedLifeTap}
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
                  ReactTooltip.show(this.SoulSiphonToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SoulSiphonToolTip = ref)}
                data-tip={Warlock[5].toolTip[0]}
                id="6"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={SoulSiphon}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedCurseOfAgonyToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedCurseOfAgonyToolTip = ref)}
                data-tip={Warlock[6].toolTip[0]}
                id="7"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedCurseOfAgony}
                alt=""
              />

              <span className="talentPoints req-10-s1">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.FelConcentrationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FelConcentrationToolTip = ref)}
                data-tip={Warlock[7].toolTip[0]}
                id="8"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={FelConcentration}
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
                  ReactTooltip.show(this.AmplifyCurseToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AmplifyCurseToolTip = ref)}
                data-tip={Warlock[8].toolTip[0]}
                id="9"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={AmplifyCurse}
                alt=""
              />

              <span id="subsReq1Spec1" className="talentPoints req-10-s1">
                0/1
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
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
                  ReactTooltip.show(this.GrimReachToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.GrimReachToolTip = ref)}
                data-tip={Warlock[9].toolTip[0]}
                id="10"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={GrimReach}
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
                  ReactTooltip.show(this.NightfallToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.NightfallToolTip = ref)}
                data-tip={Warlock[10].toolTip[0]}
                id="11"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Nightfall}
                alt=""
              />

              <span className="talentPoints req-15-s1">0/2</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.EmpoweredCorruptionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EmpoweredCorruptionToolTip = ref)}
                data-tip={Warlock[11].toolTip[0]}
                id="12"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedCorruption}
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
                  ReactTooltip.show(this.ShadowEmbraceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShadowEmbraceToolTip = ref)}
                data-tip={Warlock[12].toolTip[0]}
                id="13"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ShadowEmbrace}
                alt=""
              />

              <span className="talentPoints req-20-s1">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.SiphonLifeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SiphonLifeToolTip = ref)}
                data-tip={Warlock[13].toolTip[0]}
                id="14"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={SiphonLife}
                alt=""
              />

              <span id="subsReq2Spec1" className="talentPoints req-20-s1">
                0/1
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
                alt=""
                id="arrwReq2Spec1"
              />
            </div>

            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.CurseOfExhaustionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CurseOfExhaustionToolTip = ref)}
                data-tip={Warlock[14].toolTip[0]}
                id="15"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={CurseOfExhaustion}
                alt=""
              />

              <span id="prioReq1Spec1" className="talentPoints req-20-s1">
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
                  ReactTooltip.show(this.ShadowMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShadowMasteryToolTip = ref)}
                data-tip={Warlock[15].toolTip[0]}
                id="16"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ShadowMastery}
                alt=""
              />

              <span id="prioReq2Spec1" className="talentPoints req-25-s1">
                0/5
              </span>
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
                  ReactTooltip.show(this.ContagionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ContagionToolTip = ref)}
                data-tip={Warlock[16].toolTip[0]}
                id="17"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Contagion}
                alt=""
              />

              <span id="subsReq3Spec1" className="talentPoints req-30-s1">
                0/5
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
                alt=""
                id="arrwReq3Spec1"
              />
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.DarkPactToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DarkPactToolTip = ref)}
                data-tip={Warlock[17].toolTip[0]}
                id="18"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={DarkPact}
                alt=""
              />

              <span className="talentPoints req-30-s1">0/1</span>
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
                  ReactTooltip.show(this.ImprovedHowlOfTerrorToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedHowlOfTerrorToolTip = ref)}
                data-tip={Warlock[18].toolTip[0]}
                id="19"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedHowlOfTerror}
                alt=""
              />

              <span className="talentPoints req-35-s1">0/2</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.MaledictionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MaledictionToolTip = ref)}
                data-tip={Warlock[19].toolTip[0]}
                id="20"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Malediction}
                alt=""
              />

              <span className="talentPoints req-35-s1">0/3</span>
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
                  ReactTooltip.show(this.UnstableAfflictionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.UnstableAfflictionToolTip = ref)}
                data-tip={Warlock[20].toolTip[0]}
                id="21"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={UnstableAffliction}
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
            Demonology
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
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedHealthStoneToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedHealthStoneToolTip = ref)}
                data-tip={Warlock[21].toolTip[0]}
                id="22"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={ImprovedHealthStone}
                alt=""
              />

              <span className="talentPoints req-00-s2">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedImpToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedImpToolTip = ref)}
                data-tip={Warlock[22].toolTip[0]}
                id="23"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={ImprovedImp}
                alt=""
              />

              <span className="talentPoints req-00-s2">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.DemonicEmbraceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DemonicEmbraceToolTip = ref)}
                data-tip={Warlock[23].toolTip[0]}
                id="24"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={DemonicEmbrace}
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
                  ReactTooltip.show(this.ImprovedHealthFunnelToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedHealthFunnelToolTip = ref)}
                data-tip={Warlock[24].toolTip[0]}
                id="25"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedHealthFunnel}
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
                  ReactTooltip.show(this.ImprovedVoidwalkerToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedVoidwalkerToolTip = ref)}
                data-tip={Warlock[25].toolTip[0]}
                id="26"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedVoidwalker}
                alt=""
              />

              <span className="talentPoints req-05-s2">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.FelIntellectToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FelIntellectToolTip = ref)}
                data-tip={Warlock[26].toolTip[0]}
                id="27"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={FelIntellect}
                alt=""
              />

              <span className="talentPoints req-05-s2">0/3</span>
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
                  ReactTooltip.show(this.ImprovedSuccubusToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedSuccubusToolTip = ref)}
                data-tip={Warlock[27].toolTip[0]}
                id="28"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedSuccubus}
                alt=""
              />

              <span className="talentPoints req-10-s2">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.FelDominationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FelDominationToolTip = ref)}
                data-tip={Warlock[28].toolTip[0]}
                id="29"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={FelDomination}
                alt=""
              />

              <span id="subsReq1Spec2" className="talentPoints req-10-s2">
                0/1
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
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
                  ReactTooltip.show(this.FelStaminaToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FelStaminaToolTip = ref)}
                data-tip={Warlock[29].toolTip[0]}
                id="30"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={FelStamina}
                alt=""
              />

              <span className="talentPoints req-10-s2">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.DemonicAegisToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DemonicAegisToolTip = ref)}
                data-tip={Warlock[30].toolTip[0]}
                id="31"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={DemonicAegis}
                alt=""
              />

              <span className="talentPoints req-10-s2">0/3</span>
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
                  ReactTooltip.show(this.MasterSummonerToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MasterSummonerToolTip = ref)}
                data-tip={Warlock[31].toolTip[0]}
                id="32"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={MasterSummoner}
                alt=""
              />

              <span id="prioReq1Spec2" className="talentPoints req-15-s2">
                0/2
              </span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.UnholyPowerToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.UnholyPowerToolTip = ref)}
                data-tip={Warlock[32].toolTip[0]}
                id="33"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={UnholyPower}
                alt=""
              />

              <span id="subsReq2Spec2" className="talentPoints req-15-s2">
                0/5
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
                  ReactTooltip.show(this.ImprovedEnslaveDemonToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedEnslaveDemonToolTip = ref)}
                data-tip={Warlock[33].toolTip[0]}
                id="34"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedEnslaveDemon}
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
                  ReactTooltip.show(this.DemonicSacrificeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DemonicSacrificeToolTip = ref)}
                data-tip={Warlock[34].toolTip[0]}
                id="35"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={DemonicSacrifice}
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
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.MasterConjurorToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MasterConjurorToolTip = ref)}
                data-tip={Warlock[35].toolTip[0]}
                id="36"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={MasterConjuror}
                alt=""
              />

              <span className="talentPoints req-20-s2">0/2</span>
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
                  ReactTooltip.show(this.ManaFeedToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ManaFeedToolTip = ref)}
                data-tip={Warlock[36].toolTip[0]}
                id="37"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ManaFeed}
                alt=""
              />

              <span className="talentPoints req-25-s2">0/3</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.MasterDemonologistToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MasterDemonologistToolTip = ref)}
                data-tip={Warlock[37].toolTip[0]}
                id="38"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={MasterDemonologist}
                alt=""
              />

              <span id="prioReq2Spec2" className="talentPoints req-25-s2">
                0/5
              </span>
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
                  ReactTooltip.show(this.DemonicResilienceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DemonicResilienceToolTip = ref)}
                data-tip={Warlock[38].toolTip[0]}
                id="39"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={DemonicResilience}
                alt=""
              />

              <span className="talentPoints req-30-s2">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.SoulLinkToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SoulLinkToolTip = ref)}
                data-tip={Warlock[39].toolTip[0]}
                id="40"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={SoulLink}
                alt=""
              />

              <span id="prioReq3Spec2" className="talentPoints req-30-s2">
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
                  ReactTooltip.show(this.DemonicKnowledgeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DemonicKnowledgeToolTip = ref)}
                data-tip={Warlock[40].toolTip[0]}
                id="41"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={DemonicKnowledge}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.DemonicTacticsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DemonicTacticsToolTip = ref)}
                data-tip={Warlock[41].toolTip[0]}
                id="42"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={DemonicTactics}
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
                  ReactTooltip.show(this.SummonFelguardToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SummonFelguardToolTip = ref)}
                data-tip={Warlock[42].toolTip[0]}
                id="43"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={SummonFelguard}
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
            Destruction
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
                  ReactTooltip.show(this.ImprovedShadowBoltToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedShadowBoltToolTip = ref)}
                data-tip={Warlock[43].toolTip[0]}
                id="44"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={ImprovedShadowBolt}
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
                  ReactTooltip.show(this.CataclysmToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CataclysmToolTip = ref)}
                data-tip={Warlock[44].toolTip[0]}
                id="45"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={Cataclysm}
                alt=""
              />

              <span className="talentPoints req-00-s3">0/5</span>
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
                  ReactTooltip.show(this.BaneToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BaneToolTip = ref)}
                data-tip={Warlock[45].toolTip[0]}
                id="46"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Bane}
                alt=""
              />

              <span className="talentPoints req-05-s3">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.AftermathToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AftermathToolTip = ref)}
                data-tip={Warlock[46].toolTip[0]}
                id="47"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Aftermath}
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
                  ReactTooltip.show(this.ImprovedFireboltToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedFireboltToolTip = ref)}
                data-tip={Warlock[47].toolTip[0]}
                id="48"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedFirebolt}
                alt=""
              />

              <span className="talentPoints req-10-s3">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedLashOfPainToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedLashOfPainToolTip = ref)}
                data-tip={Warlock[48].toolTip[0]}
                id="49"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedLashOfPain}
                alt=""
              />

              <span className="talentPoints req-10-s3">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.DevastationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DevastationToolTip = ref)}
                data-tip={Warlock[49].toolTip[0]}
                id="50"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Devastation}
                alt=""
              />

              <span id="subsReq1Spec3" className="talentPoints req-10-s3">
                0/5
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
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
                  ReactTooltip.show(this.ShadowburnToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShadowburnToolTip = ref)}
                data-tip={Warlock[50].toolTip[0]}
                id="51"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Shadowburn}
                alt=""
              />

              <span className="talentPoints req-10-s3">0/1</span>
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
                  ReactTooltip.show(this.IntensityToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.IntensityToolTip = ref)}
                data-tip={Warlock[51].toolTip[0]}
                id="52"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Intensity}
                alt=""
              />

              <span id="subsReq2Spec3" className="talentPoints req-15-s3">
                0/2
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
                  ReactTooltip.show(this.DestructiveReachToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DestructiveReachToolTip = ref)}
                data-tip={Warlock[52].toolTip[0]}
                id="53"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={DestructiveReach}
                alt=""
              />

              <span className="talentPoints req-15-s3">0/2</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedSearingPainToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedSearingPainToolTip = ref)}
                data-tip={Warlock[53].toolTip[0]}
                id="54"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedSearingPain}
                alt=""
              />

              <span className="talentPoints req-15-s3">0/3</span>
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
                  ReactTooltip.show(this.PyroclasmToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PyroclasmToolTip = ref)}
                data-tip={Warlock[54].toolTip[0]}
                id="55"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Pyroclasm}
                alt=""
              />

              <span id="prioReq2Spec3" className="talentPoints req-20-s3">
                0/2
              </span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedImmolateToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedImmolateToolTip = ref)}
                data-tip={Warlock[55].toolTip[0]}
                id="56"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedImmolate}
                alt=""
              />

              <span id="subsReq3Spec3" className="talentPoints req-20-s3">
                0/5
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
                alt=""
                id="arrwReq3Spec3"
              />
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.RuinToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.RuinToolTip = ref)}
                data-tip={Warlock[56].toolTip[0]}
                id="57"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Ruin}
                alt=""
              />

              <span id="prioReq1Spec3" className="talentPoints req-20-s3">
                0/1
              </span>
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
                  ReactTooltip.show(this.NetherProtectionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.NetherProtectionToolTip = ref)}
                data-tip={Warlock[57].toolTip[0]}
                id="58"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={NetherProtection}
                alt=""
              />

              <span className="talentPoints req-25-s3">0/3</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.EmberstormToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EmberstormToolTip = ref)}
                data-tip={Warlock[58].toolTip[0]}
                id="59"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Emberstorm}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.BacklashToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BacklashToolTip = ref)}
                data-tip={Warlock[59].toolTip[0]}
                id="60"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Backlash}
                alt=""
              />

              <span className="talentPoints req-30-s3">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ConflagrateToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ConflagrateToolTip = ref)}
                data-tip={Warlock[60].toolTip[0]}
                id="61"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Conflagrate}
                alt=""
              />

              <span id="prioReq3Spec3" className="talentPoints req-30-s3">
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
                  ReactTooltip.show(this.SoulLeechToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SoulLeechToolTip = ref)}
                data-tip={Warlock[61].toolTip[0]}
                id="62"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={SoulLeech}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ShadowAndFlameToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShadowAndFlameToolTip = ref)}
                data-tip={Warlock[62].toolTip[0]}
                id="63"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ShadowAndFlame}
                alt=""
              />

              <span id="subsReq4Spec3" className="talentPoints req-35-s3">
                0/5
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
                alt=""
                id="arrwReq4Spec3"
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
                  ReactTooltip.show(this.ShadowfuryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShadowfuryToolTip = ref)}
                data-tip={Warlock[63].toolTip[0]}
                id="64"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Shadowfury}
                alt=""
              />

              <span id="prioReq4Spec3" className="talentPoints req-40-s3">
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
