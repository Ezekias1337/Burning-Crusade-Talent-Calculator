const paladinJSX = () => {
  return (
    <div
      style={{ position: "relative", maxWidth: "1010px" }}
      onContextMenu={(e) => e.preventDefault()}
      className="frame-wrapper mx-auto"
      id="Paladin"
      onLoad={() => {
        this.rebuildToolTip();
      }}
    >
      <div className="row" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <div className="col-sm-12">
          <button
            onClick={this.resetPoints}
            type="button"
            className="btn btn-success btn-paladin mb-2 mt-2"
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
            Holy
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
                  ReactTooltip.show(this.DivineStrengthToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DivineStrengthToolTip = ref)}
                data-tip={Paladin[0].toolTip[0]}
                id="1"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={DivineStrength}
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
                  ReactTooltip.show(this.DivineIntellectToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DivineIntellectToolTip = ref)}
                data-tip={Paladin[1].toolTip[0]}
                id="2"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={DivineIntellect}
                alt=""
              />

              <span className="talentPoints req-00-s1">0/5</span>
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
                  ReactTooltip.show(this.SpiritualFocusToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SpiritualFocusToolTip = ref)}
                data-tip={Paladin[2].toolTip[0]}
                id="3"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={SpiritualFocus}
                alt=""
              />

              <span className="talentPoints req-05-s1">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedSealOfRighteousnessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedSealOfRighteousnessToolTip = ref)}
                data-tip={Paladin[3].toolTip[0]}
                id="4"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedSealOfRighteousness}
                alt=""
              />

              <span className="talentPoints req-05-s1">0/5</span>
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
                  ReactTooltip.show(this.HealingLightToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HealingLightToolTip = ref)}
                data-tip={Paladin[4].toolTip[0]}
                id="5"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={HealingLight}
                alt=""
              />

              <span className="talentPoints req-10-s1">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.AuraMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AuraMasteryToolTip = ref)}
                data-tip={Paladin[5].toolTip[0]}
                id="6"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={AuraMastery}
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
                  ReactTooltip.show(this.ImprovedLayOnHandsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedLayOnHandsToolTip = ref)}
                data-tip={Paladin[6].toolTip[0]}
                id="7"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedLayOnHands}
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
                  ReactTooltip.show(this.UnyieldingFaithToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.UnyieldingFaithToolTip = ref)}
                data-tip={Paladin[7].toolTip[0]}
                id="8"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={UnyieldingFaith}
                alt=""
              />

              <span className="talentPoints req-10-s1">0/2</span>
            </div>
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
                  ReactTooltip.show(this.IlluminationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.IlluminationToolTip = ref)}
                data-tip={Paladin[8].toolTip[0]}
                id="9"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Illumination}
                alt=""
              />

              <span id="subsReq1Spec1" className="talentPoints req-15-s1">
                0/5
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
                alt=""
                id="arrwReq1Spec1"
              />
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedBlessingOfWisdomToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedBlessingOfWisdomToolTip = ref)}
                data-tip={Paladin[9].toolTip[0]}
                id="10"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedBlessingOfWisdom}
                alt=""
              />

              <span className="talentPoints req-15-s1">0/2</span>
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
                  ReactTooltip.show(this.PureOfHeartToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PureOfHeartToolTip = ref)}
                data-tip={Paladin[10].toolTip[0]}
                id="11"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={PureOfHeart}
                alt=""
              />

              <span className="talentPoints req-20-s1">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.DivineFavorToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DivineFavorToolTip = ref)}
                data-tip={Paladin[11].toolTip[0]}
                id="12"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={DivineFavor}
                alt=""
              />

              <span
                id="prioReq1Spec1 subsReq2Spec1"
                className="talentPoints req-20-s1"
              >
                0/1
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
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
                  ReactTooltip.show(this.SanctifiedLightToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SanctifiedLightToolTip = ref)}
                data-tip={Paladin[12].toolTip[0]}
                id="13"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={SanctifiedLight}
                alt=""
              />

              <span className="talentPoints req-20-s1">0/3</span>
            </div>
            <div style={{ zIndex: "0" }} className="col col-xs-3"></div>
          </div>

          <div className="row talent-row talent-row-inner">
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.PurifyingPowerToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PurifyingPowerToolTip = ref)}
                data-tip={Paladin[13].toolTip[0]}
                id="14"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={PurifyingPower}
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
                  ReactTooltip.show(this.HolyPowerToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HolyPowerToolTip = ref)}
                data-tip={Paladin[14].toolTip[0]}
                id="15"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={HolyPower}
                alt=""
              />

              <span className="talentPoints req-25-s1">0/5</span>
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
                  ReactTooltip.show(this.LightsGraceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.LightsGraceToolTip = ref)}
                data-tip={Paladin[15].toolTip[0]}
                id="16"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={LightsGrace}
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
                  ReactTooltip.show(this.HolyShockToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HolyShockToolTip = ref)}
                data-tip={Paladin[16].toolTip[0]}
                id="17"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={HolyShock}
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
                  ReactTooltip.show(this.BlessedLifeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BlessedLifeToolTip = ref)}
                data-tip={Paladin[17].toolTip[0]}
                id="18"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={BlessedLife}
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
                  ReactTooltip.show(this.HolyGuidanceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HolyGuidanceToolTip = ref)}
                data-tip={Paladin[18].toolTip[0]}
                id="19"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={HolyGuidance}
                alt=""
              />

              <span className="talentPoints req-35-s1">0/5</span>
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
                  ReactTooltip.show(this.DivineIlluminationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DivineIlluminationToolTip = ref)}
                data-tip={Paladin[19].toolTip[0]}
                id="20"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={DivineIllumination}
                alt=""
              />

              <span className="talentPoints req-40-s1">0/1</span>
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
            Protection
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
                  ReactTooltip.show(this.ImprovedDevotionAuraToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedDevotionAuraToolTip = ref)}
                data-tip={Paladin[20].toolTip[0]}
                id="21"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={ImprovedDevotionAura}
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
                  ReactTooltip.show(this.RedoubtToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.RedoubtToolTip = ref)}
                data-tip={Paladin[21].toolTip[0]}
                id="22"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={Redoubt}
                alt=""
              />

              <span id="subsReq1Spec2" className="talentPoints req-00-s2">
                0/5
              </span>
              <img
                className="medArrow"
                src={DownSilverMedium}
                alt=""
                id="arrwReq1Spec2"
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
                  ReactTooltip.show(this.PrecisionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PrecisionToolTip = ref)}
                data-tip={Paladin[22].toolTip[0]}
                id="23"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Precision}
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
                  ReactTooltip.show(this.GuardiansFavorToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.GuardiansFavorToolTip = ref)}
                data-tip={Paladin[23].toolTip[0]}
                id="24"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={GuardiansFavor}
                alt=""
              />

              <span className="talentPoints req-05-s2">0/2</span>
            </div>
            <div className="col col-xs-3"></div>
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
                data-tip={Paladin[24].toolTip[0]}
                id="25"
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

              <span className="talentPoints req-05-s2">0/5</span>
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
                  ReactTooltip.show(this.BlessingOfKingsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BlessingOfKingsToolTip = ref)}
                data-tip={Paladin[25].toolTip[0]}
                id="26"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={BlessingOfKings}
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
                  ReactTooltip.show(this.ImprovedRighteousFuryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedRighteousFuryToolTip = ref)}
                data-tip={Paladin[26].toolTip[0]}
                id="27"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedRighteousFury}
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
                  ReactTooltip.show(this.ShieldSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShieldSpecializationToolTip = ref)}
                data-tip={Paladin[27].toolTip[0]}
                id="28"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ShieldSpecialization}
                alt=""
              />

              <span id="prioReq1Spec2" className="talentPoints req-10-s2">
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
                  ReactTooltip.show(this.AnticipationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AnticipationToolTip = ref)}
                data-tip={Paladin[28].toolTip[0]}
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
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.StoicismToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.StoicismToolTip = ref)}
                data-tip={Paladin[29].toolTip[0]}
                id="30"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Stoicism}
                alt=""
              />

              <span className="talentPoints req-15-s2">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedHammerOfJusticeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedHammerOfJusticeToolTip = ref)}
                data-tip={Paladin[30].toolTip[0]}
                id="31"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedHammerOfJustice}
                alt=""
              />

              <span className="talentPoints req-15-s2">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedConcentrationAuraToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedConcentrationAuraToolTip = ref)}
                data-tip={Paladin[31].toolTip[0]}
                id="32"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedConcentrationAura}
                alt=""
              />

              <span className="talentPoints req-15-s2">0/3</span>
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
                  ReactTooltip.show(this.SpellWardingToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SpellWardingToolTip = ref)}
                data-tip={Paladin[32].toolTip[0]}
                id="33"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={SpellWarding}
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
                  ReactTooltip.show(this.BlessingOfSanctuaryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BlessingOfSanctuaryToolTip = ref)}
                data-tip={Paladin[33].toolTip[0]}
                id="34"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={BlessingOfSanctuary}
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
                  ReactTooltip.show(this.ReckoningToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ReckoningToolTip = ref)}
                data-tip={Paladin[34].toolTip[0]}
                id="35"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Reckoning}
                alt=""
              />

              <span className="talentPoints req-20-s2">0/5</span>
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
                  ReactTooltip.show(this.SacredDutyToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SacredDutyToolTip = ref)}
                data-tip={Paladin[35].toolTip[0]}
                id="36"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={SacredDuty}
                alt=""
              />

              <span className="talentPoints req-25-s2">0/2</span>
            </div>
            <div className="col col-xs-3"></div>

            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.OneHandedWeaponSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.OneHandedWeaponSpecializationToolTip = ref)}
                data-tip={Paladin[36].toolTip[0]}
                id="37"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={OneHandedWeaponSpecialization}
                alt=""
              />

              <span className="talentPoints req-25-s2">0/5</span>
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
                  ReactTooltip.show(this.HolyShieldToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.HolyShieldToolTip = ref)}
                data-tip={Paladin[37].toolTip[0]}
                id="38"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={HolyShield}
                alt=""
              />

              <span id="prioReq3Spec2" className="talentPoints req-30-s2">
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
                  ReactTooltip.show(this.ImprovedHolyShieldToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedHolyShieldToolTip = ref)}
                data-tip={Paladin[38].toolTip[0]}
                id="39"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={HolyShield}
                alt=""
              />

              <span
                id="prioReq2Spec2 subsReq3Spec2 subsReq4Spec2"
                className="talentPoints req-30-s2"
              >
                0/1
              </span>
              <img
                className="leftArrow"
                src={LeftSilverSmall}
                alt=""
                id="arrwReq3Spec2"
              />
              <img
                className="medArrow"
                src={DownSilverMedium}
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
                  ReactTooltip.show(this.ArdentDefenderToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ArdentDefenderToolTip = ref)}
                data-tip={Paladin[39].toolTip[0]}
                id="40"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ArdentDefender}
                alt=""
              />

              <span className="talentPoints req-30-s2">0/5</span>
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
                  ReactTooltip.show(this.CombatExpertiseToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CombatExpertiseToolTip = ref)}
                data-tip={Paladin[40].toolTip[0]}
                id="41"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={CombatExpertise}
                alt=""
              />

              <span className="talentPoints req-35-s2">0/5</span>
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
                  ReactTooltip.show(this.AvengersShieldToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AvengersShieldToolTip = ref)}
                data-tip={Paladin[41].toolTip[0]}
                id="42"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={AvengersShield}
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
            Retribution
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
                  ReactTooltip.show(this.ImprovedBlessingOfMightToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedBlessingOfMightToolTip = ref)}
                data-tip={Paladin[42].toolTip[0]}
                id="43"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={ImprovedBlessingOfMight}
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
                  ReactTooltip.show(this.BenedictionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BenedictionToolTip = ref)}
                data-tip={Paladin[43].toolTip[0]}
                id="44"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={Benediction}
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
                  ReactTooltip.show(this.ImprovedJudgementToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedJudgementToolTip = ref)}
                data-tip={Paladin[44].toolTip[0]}
                id="45"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedJudgement}
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
                  ReactTooltip.show(this.ImprovedSealOfTheCrusaderToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedSealOfTheCrusaderToolTip = ref)}
                data-tip={Paladin[45].toolTip[0]}
                id="46"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={SanctifiedSeals}
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
                data-tip={Paladin[46].toolTip[0]}
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
                  ReactTooltip.show(this.VindicationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.VindicationToolTip = ref)}
                data-tip={Paladin[47].toolTip[0]}
                id="48"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Vindication}
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
                  ReactTooltip.show(this.ConvictionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ConvictionToolTip = ref)}
                data-tip={Paladin[48].toolTip[0]}
                id="49"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Conviction}
                alt=""
              />

              <span id="subsReq1Spec3" className="talentPoints req-10-s3">
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
                  ReactTooltip.show(this.SealOfCommandToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SealOfCommandToolTip = ref)}
                data-tip={Paladin[49].toolTip[0]}
                id="50"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={SealOfCommand}
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
                  ReactTooltip.show(this.PursuitOfJusticeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PursuitOfJusticeToolTip = ref)}
                data-tip={Paladin[50].toolTip[0]}
                id="51"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={PursuitOfJustice}
                alt=""
              />

              <span className="talentPoints req-10-s3">0/3</span>
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
                  ReactTooltip.show(this.EyeForAnEyeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EyeForAnEyeToolTip = ref)}
                data-tip={Paladin[51].toolTip[0]}
                id="52"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={EyeForAnEye}
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
                  ReactTooltip.show(this.ImprovedRetributionAuraToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedRetributionAuraToolTip = ref)}
                data-tip={Paladin[52].toolTip[0]}
                id="53"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedRetributionAura}
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
                  ReactTooltip.show(this.CrusadeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CrusadeToolTip = ref)}
                data-tip={Paladin[53].toolTip[0]}
                id="54"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Crusade}
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
                  ReactTooltip.show(this.TwoHandedWeaponSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TwoHandedWeaponSpecializationToolTip = ref)}
                data-tip={Paladin[54].toolTip[0]}
                id="55"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={TwoHandedWeaponSpecialization}
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
                  ReactTooltip.show(this.SanctityAuraToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SanctityAuraToolTip = ref)}
                data-tip={Paladin[55].toolTip[0]}
                id="56"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={SanctityAura}
                alt=""
              />

              <span id="subsReq2Spec3" className="talentPoints req-20-s3">
                0/1
              </span>
              <img
                className="rightArrow"
                src={RightSilverSmall}
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
                  ReactTooltip.show(this.ImprovedSanctityAuraToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedSanctityAuraToolTip = ref)}
                data-tip={Paladin[56].toolTip[0]}
                id="57"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={SanctityAura}
                alt=""
              />

              <span id="prioReq2Spec3" className="talentPoints req-20-s3">
                0/2
              </span>
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
                  ReactTooltip.show(this.VengeanceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.VengeanceToolTip = ref)}
                data-tip={Paladin[57].toolTip[0]}
                id="58"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Vengeance}
                alt=""
              />

              <span id="prioReq1Spec3" className="talentPoints req-25-s3">
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
                  ReactTooltip.show(this.SanctifiedJudgementToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SanctifiedJudgementToolTip = ref)}
                data-tip={Paladin[58].toolTip[0]}
                id="59"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedJudgement}
                alt=""
              />

              <span className="talentPoints req-25-s3">0/3</span>
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
                  ReactTooltip.show(this.SanctifiedSealsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SanctifiedSealsToolTip = ref)}
                data-tip={Paladin[59].toolTip[0]}
                id="60"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={SanctifiedSeals}
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
                  ReactTooltip.show(this.RepentanceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.RepentanceToolTip = ref)}
                data-tip={Paladin[60].toolTip[0]}
                id="61"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Repentance}
                alt=""
              />

              <span id="subsReq3Spec3" className="talentPoints req-30-s3">
                0/1
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
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
                  ReactTooltip.show(this.DivinePurposeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DivinePurposeToolTip = ref)}
                data-tip={Paladin[61].toolTip[0]}
                id="62"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={DivinePurpose}
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
                  ReactTooltip.show(this.FanaticismToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FanaticismToolTip = ref)}
                data-tip={Paladin[62].toolTip[0]}
                id="63"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Fanaticism}
                alt=""
              />

              <span id="prioReq3Spec3" className="talentPoints req-35-s3">
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
                  ReactTooltip.show(this.CrusaderStrikeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CrusaderStrikeToolTip = ref)}
                data-tip={Paladin[63].toolTip[0]}
                id="64"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={CrusaderStrike}
                alt=""
              />

              <span className="talentPoints req-40-s3">0/1</span>
            </div>
            <div className="col col-xs-3"></div>
            <div className="col col-xs-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
