const hunterJSX = () => {
  return (
    <div
      style={{ position: "relative", maxWidth: "1010px" }}
      onContextMenu={(e) => e.preventDefault()}
      className="frame-wrapper mx-auto"
      id="Hunter"
      onLoad={() => {
        this.rebuildToolTip();
      }}
    >
      <div className="row" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <div className="col-sm-12">
          <button
            onClick={this.resetPoints}
            type="button"
            className="btn btn-success btn-hunter mb-2 mt-2"
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
            Beast Mastery
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
                  ReactTooltip.show(this.ImprovedAspectHawkToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedAspectHawkToolTip = ref)}
                data-tip={Hunter[0].toolTip[0]}
                id="1"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={ImprovedAspectHawk}
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
                  ReactTooltip.show(this.EnduranceTrainingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EnduranceTrainingToolTip = ref)}
                data-tip={Hunter[1].toolTip[0]}
                id="2"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={EnduranceTraining}
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
                  ReactTooltip.show(this.FocusedFireToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FocusedFireToolTip = ref)}
                data-tip={Hunter[2].toolTip[0]}
                id="3"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={FocusedFire}
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
                  ReactTooltip.show(this.ImprovedAspectMonkeyToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedAspectMonkeyToolTip = ref)}
                data-tip={Hunter[3].toolTip[0]}
                id="4"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedAspectMonkey}
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
                  ReactTooltip.show(this.ThickHideToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ThickHideToolTip = ref)}
                data-tip={Hunter[4].toolTip[0]}
                id="5"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ThickHide}
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
                  ReactTooltip.show(this.ImprovedRevivePetToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedRevivePetToolTip = ref)}
                data-tip={Hunter[5].toolTip[0]}
                id="6"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedRevivePet}
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
                  ReactTooltip.show(this.PathfindingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PathfindingToolTip = ref)}
                data-tip={Hunter[6].toolTip[0]}
                id="7"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Pathfinding}
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
                  ReactTooltip.show(this.BestialSwiftnessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BestialSwiftnessToolTip = ref)}
                data-tip={Hunter[7].toolTip[0]}
                id="8"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={BestialSwiftness}
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
                  ReactTooltip.show(this.UnleashedFuryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.UnleashedFuryToolTip = ref)}
                data-tip={Hunter[8].toolTip[0]}
                id="9"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={UnleashedFury}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedMendPetToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedMendPetToolTip = ref)}
                data-tip={Hunter[9].toolTip[0]}
                id="10"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedMendPet}
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
                  ReactTooltip.show(this.FerocityToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FerocityToolTip = ref)}
                data-tip={Hunter[10].toolTip[0]}
                id="11"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Ferocity}
                alt=""
              />

              <span id="subsReq1Spec1" className="talentPoints req-15-s1">
                0/5
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

          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.SpiritBondToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SpiritBondToolTip = ref)}
                data-tip={Hunter[11].toolTip[0]}
                id="12"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={SpiritBond}
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
                  ReactTooltip.show(this.IntimidationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.IntimidationToolTip = ref)}
                data-tip={Hunter[12].toolTip[0]}
                id="13"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Intimidation}
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
                  ReactTooltip.show(this.BestialDisciplineToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BestialDisciplineToolTip = ref)}
                data-tip={Hunter[13].toolTip[0]}
                id="14"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={BestialDiscipline}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.AnimalHandlerToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AnimalHandlerToolTip = ref)}
                data-tip={Hunter[14].toolTip[0]}
                id="15"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={AnimalHandler}
                alt=""
              />

              <span className="talentPoints req-25-s1">0/2</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.FrenzyToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FrenzyToolTip = ref)}
                data-tip={Hunter[15].toolTip[0]}
                id="16"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Frenzy}
                alt=""
              />

              <span id="prioReq1Spec1" className="talentPoints req-25-s1">
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
                  ReactTooltip.show(this.FerociousInspirationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FerociousInspirationToolTip = ref)}
                data-tip={Hunter[16].toolTip[0]}
                id="17"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={FerociousInspiration}
                alt=""
              />

              <span className="talentPoints req-30-s1">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.BestialWrathToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BestialWrathToolTip = ref)}
                data-tip={Hunter[17].toolTip[0]}
                id="18"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={BestialWrath}
                alt=""
              />

              <span
                id="subsReq3Spec1 prioReq2Spec1"
                className="talentPoints req-30-s1"
              >
                0/1
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
                  ReactTooltip.show(this.CatlikeReflexesToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CatlikeReflexesToolTip = ref)}
                data-tip={Hunter[18].toolTip[0]}
                id="19"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={CatlikeReflexes}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.SerpentsSwiftnessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SerpentsSwiftnessToolTip = ref)}
                data-tip={Hunter[19].toolTip[0]}
                id="20"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={SerpentsSwiftness}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.BeastWithinToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BeastWithinToolTip = ref)}
                data-tip={Hunter[20].toolTip[0]}
                id="21"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={TheBeastWithin}
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
            Marksmanship
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
                  ReactTooltip.show(this.ImprovedConcussiveShotToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedConcussiveShotToolTip = ref)}
                data-tip={Hunter[21].toolTip[0]}
                id="22"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={ImprovedConcussiveShot}
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
                  ReactTooltip.show(this.LethalShotsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.LethalShotsToolTip = ref)}
                data-tip={Hunter[22].toolTip[0]}
                id="23"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={LethalShots}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedHuntersMarkToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedHuntersMarkToolTip = ref)}
                data-tip={Hunter[23].toolTip[0]}
                id="24"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedHuntersMark}
                alt=""
              />

              <span className="talentPoints req-05-s2">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.EfficiencyToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EfficiencyToolTip = ref)}
                data-tip={Hunter[24].toolTip[0]}
                id="25"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Efficiency}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.GoForTheThroatToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.GoForTheThroatToolTip = ref)}
                data-tip={Hunter[25].toolTip[0]}
                id="26"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={GoForTheThroat}
                alt=""
              />

              <span className="talentPoints req-10-s2">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedArcaneShotToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedArcaneShotToolTip = ref)}
                data-tip={Hunter[26].toolTip[0]}
                id="27"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedArcaneShot}
                alt=""
              />

              <span className="talentPoints req-10-s2">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.AimedShotToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AimedShotToolTip = ref)}
                data-tip={Hunter[27].toolTip[0]}
                id="28"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={AimedShot}
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
                  ReactTooltip.show(this.RapidKillingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.RapidKillingToolTip = ref)}
                data-tip={Hunter[28].toolTip[0]}
                id="29"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={RapidKilling}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedStingsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedStingsToolTip = ref)}
                data-tip={Hunter[29].toolTip[0]}
                id="30"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedStings}
                alt=""
              />

              <span className="talentPoints req-15-s2">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.MortalShotsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MortalShotsToolTip = ref)}
                data-tip={Hunter[30].toolTip[0]}
                id="31"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={MortalShots}
                alt=""
              />

              <span id="prioReq1Spec2" className="talentPoints req-15-s2">
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
                  ReactTooltip.show(this.ConcussiveBarrageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ConcussiveBarrageToolTip = ref)}
                data-tip={Hunter[31].toolTip[0]}
                id="32"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ConcussiveBarrage}
                alt=""
              />

              <span className="talentPoints req-20-s2">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ScatterShotToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ScatterShotToolTip = ref)}
                data-tip={Hunter[32].toolTip[0]}
                id="33"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ScatterShot}
                alt=""
              />

              <span id="subsReq2Spec2" className="talentPoints req-20-s2">
                0/1
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
                alt=""
                id="arrwReq2Spec2"
              />
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.BarrageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BarrageToolTip = ref)}
                data-tip={Hunter[33].toolTip[0]}
                id="34"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={BarrageAndImprovedBarrage}
                alt=""
              />

              <span id="subsReq3Spec2" className="talentPoints req-20-s2">
                0/3
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.CombatExperienceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CombatExperienceToolTip = ref)}
                data-tip={Hunter[34].toolTip[0]}
                id="35"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={CombatExperience}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.RangedWeaponSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.RangedWeaponSpecializationToolTip = ref)}
                data-tip={Hunter[35].toolTip[0]}
                id="36"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={RangedWeaponSpecialization}
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
                  ReactTooltip.show(this.CarefulAimToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CarefulAimToolTip = ref)}
                data-tip={Hunter[36].toolTip[0]}
                id="37"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={CarefulAim}
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
                  ReactTooltip.show(this.TrueshotAuraToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TrueshotAuraToolTip = ref)}
                data-tip={Hunter[37].toolTip[0]}
                id="38"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={TrueshotAura}
                alt=""
              />

              <span id="prioReq2Spec2" className="talentPoints req-30-s2">
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
                  ReactTooltip.show(this.BarrageAndImprovedBarrageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BarrageAndImprovedBarrageToolTip = ref)}
                data-tip={Hunter[38].toolTip[0]}
                id="39"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={BarrageAndImprovedBarrage}
                alt=""
              />

              <span id="prioReq3Spec2" className="talentPoints req-30-s2">
                0/3
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
                  ReactTooltip.show(this.MasterMarksmanToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MasterMarksmanToolTip = ref)}
                data-tip={Hunter[39].toolTip[0]}
                id="40"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={MasterMarksman}
                alt=""
              />

              <span id="subsReq4Spec2" className="talentPoints req-35-s2">
                0/5
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.SilencingShotToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SilencingShotToolTip = ref)}
                data-tip={Hunter[40].toolTip[0]}
                id="41"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={SilencingShot}
                alt=""
              />

              <span id="prioReq4Spec2" className="talentPoints req-40-s2">
                0/1
              </span>
            </div>
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
          <h5 id="spec3" style={{ display: "inline-block" }}>
            <img
              style={{
                marginRight: ".5rem",
                borderRadius: "2px",
                border: "1.3px solid white",
              }}
              src={spec3Logo}
            />
            Survival
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
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.MonsterSlayingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MonsterSlayingToolTip = ref)}
                data-tip={Hunter[41].toolTip[0]}
                id="42"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={MonsterSlaying}
                alt=""
              />

              <span className="talentPoints req-00-s3">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.HumanoidSlayingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HumanoidSlayingToolTip = ref)}
                data-tip={Hunter[42].toolTip[0]}
                id="43"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={HumanoidSlaying}
                alt=""
              />

              <span className="talentPoints req-00-s3">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.HawkEyeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HawkEyeToolTip = ref)}
                data-tip={Hunter[43].toolTip[0]}
                id="44"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={HawkEye}
                alt=""
              />

              <span className="talentPoints req-00-s3">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.SavageStrikesToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SavageStrikesToolTip = ref)}
                data-tip={Hunter[44].toolTip[0]}
                id="45"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={SavageStrikes}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.EntrapmentToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EntrapmentToolTip = ref)}
                data-tip={Hunter[45].toolTip[0]}
                id="46"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Entrapment}
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
                  ReactTooltip.show(this.DeflectionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DeflectionToolTip = ref)}
                data-tip={Hunter[46].toolTip[0]}
                id="47"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Deflection}
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
                  ReactTooltip.show(this.ImprovedWingClipToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedWingClipToolTip = ref)}
                data-tip={Hunter[47].toolTip[0]}
                id="48"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedWingClip}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.CleverTrapsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CleverTrapsToolTip = ref)}
                data-tip={Hunter[48].toolTip[0]}
                id="49"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={CleverTraps}
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
                  ReactTooltip.show(this.SurvivalistToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SurvivalistToolTip = ref)}
                data-tip={Hunter[49].toolTip[0]}
                id="50"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Survivalist}
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
                  ReactTooltip.show(this.DeterrenceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DeterrenceToolTip = ref)}
                data-tip={Hunter[50].toolTip[0]}
                id="51"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Deterrence}
                alt=""
              />

              <span id="subsReq1Spec3" className="talentPoints req-10-s3">
                0/1
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.TrapMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TrapMasteryToolTip = ref)}
                data-tip={Hunter[51].toolTip[0]}
                id="52"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={TrapMastery}
                alt=""
              />

              <span className="talentPoints req-15-s3">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.SurefootedToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SurefootedToolTip = ref)}
                data-tip={Hunter[52].toolTip[0]}
                id="53"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Surefooted}
                alt=""
              />

              <span className="talentPoints req-15-s3">0/3</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedFeignDeathToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedFeignDeathToolTip = ref)}
                data-tip={Hunter[53].toolTip[0]}
                id="54"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedFeignDeath}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.SurvivalInstinctsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SurvivalInstinctsToolTip = ref)}
                data-tip={Hunter[54].toolTip[0]}
                id="55"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={SurvivalInstincts}
                alt=""
              />

              <span className="talentPoints req-20-s3">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.KillerInstinctToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.KillerInstinctToolTip = ref)}
                data-tip={Hunter[55].toolTip[0]}
                id="56"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={KillerInstinct}
                alt=""
              />

              <span id="subsReq2Spec3" className="talentPoints req-20-s3">
                0/3
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
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
                  ReactTooltip.show(this.CounterattackToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CounterattackToolTip = ref)}
                data-tip={Hunter[56].toolTip[0]}
                id="57"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Counterattack}
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
                  ReactTooltip.show(this.ResourcefulnessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ResourcefulnessToolTip = ref)}
                data-tip={Hunter[57].toolTip[0]}
                id="58"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Resourcefulness}
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
                  ReactTooltip.show(this.LightningReflexesToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.LightningReflexesToolTip = ref)}
                data-tip={Hunter[58].toolTip[0]}
                id="59"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={LightningReflexes}
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
                  ReactTooltip.show(this.ThrillOfTheHuntToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ThrillOfTheHuntToolTip = ref)}
                data-tip={Hunter[59].toolTip[0]}
                id="60"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ThrillOfTheHunt}
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
                  ReactTooltip.show(this.WyvernStingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.WyvernStingToolTip = ref)}
                data-tip={Hunter[60].toolTip[0]}
                id="61"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={WyvernSting}
                alt=""
              />

              <span id="prioReq2Spec3" className="talentPoints req-30-s3">
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
                  ReactTooltip.show(this.ExposeWeaknessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ExposeWeaknessToolTip = ref)}
                data-tip={Hunter[61].toolTip[0]}
                id="62"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ExposeWeakness}
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
                  ReactTooltip.show(this.MasterTacticianToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MasterTacticianToolTip = ref)}
                data-tip={Hunter[62].toolTip[0]}
                id="63"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={MasterTactician}
                alt=""
              />

              <span id="subsReq3Spec3" className="talentPoints req-35-s3">
                0/5
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
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
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ReadinessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ReadinessToolTip = ref)}
                data-tip={Hunter[63].toolTip[0]}
                id="64"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Readiness}
                alt=""
              />

              <span id="prioReq3Spec3" className="talentPoints req-40-s3">
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
