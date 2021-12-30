const warriorJSX = () => {
  return (
    <div
      style={{ position: "relative", maxWidth: "1010px" }}
      onContextMenu={(e) => e.preventDefault()}
      className="frame-wrapper mx-auto"
      id="Warrior"
      onLoad={() => {
        this.rebuildToolTip();
      }}
    >
      <div className="row" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <div className="col-sm-12">
          <button
            onClick={this.resetPoints}
            type="button"
            className="btn btn-success btn-warrior mb-2 mt-2"
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
            Arms
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
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedHeroicStrikeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedHeroicStrikeToolTip = ref)}
                data-tip={Warrior[0].toolTip[0]}
                id="1"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={ImprovedHeroicStrike}
                alt=""
              />

              <span className="talentPoints req-00-s1">0/3</span>
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
                data-tip={Warrior[1].toolTip[0]}
                id="2"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={Deflection}
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
                  ReactTooltip.show(this.ImprovedRendToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedRendToolTip = ref)}
                data-tip={Warrior[2].toolTip[0]}
                id="3"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton active-talent req-active"
                src={ImprovedRend}
                alt=""
              />

              <span className="talentPoints req-00-s1">0/3</span>
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
                  ReactTooltip.show(this.ImprovedChargeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedChargeToolTip = ref)}
                data-tip={Warrior[3].toolTip[0]}
                id="4"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedCharge}
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
                  ReactTooltip.show(this.IronWillToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.IronWillToolTip = ref)}
                data-tip={Warrior[4].toolTip[0]}
                id="5"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={IronWill}
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
                  ReactTooltip.show(this.ImprovedThunderClapToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedThunderClapToolTip = ref)}
                data-tip={Warrior[5].toolTip[0]}
                id="6"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedThunderClap}
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
                  ReactTooltip.show(this.ImprovedOverpowerToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedOverpowerToolTip = ref)}
                data-tip={Warrior[6].toolTip[0]}
                id="7"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedOverpower}
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
                  ReactTooltip.show(this.AngerManagementToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AngerManagementToolTip = ref)}
                data-tip={Warrior[7].toolTip[0]}
                id="8"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={AngerManagement}
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
                  ReactTooltip.show(this.DeepWoundsToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DeepWoundsToolTip = ref)}
                data-tip={Warrior[8].toolTip[0]}
                id="9"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={DeepWounds}
                alt=""
              />

              <span id="subsReq1Spec1" className="talentPoints req-10-s1">
                0/3
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
                alt=""
                id="arrwReq1Spec1"
              />
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
                  ReactTooltip.show(this.TwoHandedWeaponSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TwoHandedWeaponSpecializationToolTip = ref)}
                data-tip={Warrior[9].toolTip[0]}
                id="10"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={TwoHandedWeaponSpecialization}
                alt=""
              />

              <span className="talentPoints req-15-s1">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImpaleToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImpaleToolTip = ref)}
                data-tip={Warrior[10].toolTip[0]}
                id="11"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={Impale}
                alt=""
              />

              <span id="prioReq1Spec1" className="talentPoints req-15-s1">
                0/2
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
                  ReactTooltip.show(this.PoleaxeSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PoleaxeSpecializationToolTip = ref)}
                data-tip={Warrior[11].toolTip[0]}
                id="12"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={PoleaxeSpecialization}
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
                  ReactTooltip.show(this.DeathWishToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DeathWishToolTip = ref)}
                data-tip={Warrior[12].toolTip[0]}
                id="13"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={DeathWish}
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
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.MaceSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MaceSpecializationToolTip = ref)}
                data-tip={Warrior[13].toolTip[0]}
                id="14"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={MaceSpecialization}
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
                  ReactTooltip.show(this.SwordSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SwordSpecializationToolTip = ref)}
                data-tip={Warrior[14].toolTip[0]}
                id="15"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={SwordSpecialization}
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
                  ReactTooltip.show(this.ImprovedInterceptToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedInterceptToolTip = ref)}
                data-tip={Warrior[15].toolTip[0]}
                id="16"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedIntercept}
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
                  ReactTooltip.show(this.ImprovedHamstringToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedHamstringToolTip = ref)}
                data-tip={Warrior[16].toolTip[0]}
                id="17"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedHamstring}
                alt=""
              />

              <span className="talentPoints req-25-s1">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedDisciplinesToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedDisciplinesToolTip = ref)}
                data-tip={Warrior[17].toolTip[0]}
                id="18"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={ImprovedDisciplines}
                alt=""
              />

              <span className="talentPoints req-25-s1">0/3</span>
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
                  ReactTooltip.show(this.BloodFrenzyToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BloodFrenzyToolTip = ref)}
                data-tip={Warrior[18].toolTip[0]}
                id="19"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={BloodFrenzy}
                alt=""
              />

              <span className="talentPoints req-30-s1">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.MortalStrikeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.MortalStrikeToolTip = ref)}
                data-tip={Warrior[19].toolTip[0]}
                id="20"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={MortalStrike}
                alt=""
              />

              <span
                id="prioReq2Spec1 subsReq3Spec1"
                className="talentPoints req-30-s1"
              >
                0/1
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
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
                  ReactTooltip.show(this.SecondWindToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SecondWindToolTip = ref)}
                data-tip={Warrior[20].toolTip[0]}
                id="21"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={SecondWind}
                alt=""
              />

              <span className="talentPoints req-30-s1">0/2</span>
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
                  ReactTooltip.show(this.ImprovedMortalStrikeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedMortalStrikeToolTip = ref)}
                data-tip={Warrior[21].toolTip[0]}
                id="22"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={MortalStrike}
                alt=""
              />

              <span id="prioReq3Spec1" className="talentPoints req-35-s1">
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
                  ReactTooltip.show(this.EndlessRageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EndlessRageToolTip = ref)}
                data-tip={Warrior[22].toolTip[0]}
                id="23"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec1 talentButton inactive-talent req-inactive"
                src={EndlessRage}
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
            Fury
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
                  ReactTooltip.show(this.BoomingVoiceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BoomingVoiceToolTip = ref)}
                data-tip={Warrior[23].toolTip[0]}
                id="24"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={BoomingVoice}
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
                  ReactTooltip.show(this.CrueltyToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CrueltyToolTip = ref)}
                data-tip={Warrior[24].toolTip[0]}
                id="25"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton active-talent req-active"
                src={Cruelty}
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
                  ReactTooltip.show(this.ImprovedDemoralizingShoutToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedDemoralizingShoutToolTip = ref)}
                data-tip={Warrior[25].toolTip[0]}
                id="26"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedDemoralizingShout}
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
                  ReactTooltip.show(this.UnbridledWrathToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.UnbridledWrathToolTip = ref)}
                data-tip={Warrior[26].toolTip[0]}
                id="27"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={UnbridledWrath}
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
                  ReactTooltip.show(this.ImprovedCleaveToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedCleaveToolTip = ref)}
                data-tip={Warrior[27].toolTip[0]}
                id="28"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedCleave}
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
                  ReactTooltip.show(this.PiercingHowlToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PiercingHowlToolTip = ref)}
                data-tip={Warrior[28].toolTip[0]}
                id="29"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={PiercingHowl}
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
                  ReactTooltip.show(this.BloodCrazeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BloodCrazeToolTip = ref)}
                data-tip={Warrior[29].toolTip[0]}
                id="30"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={BloodCraze}
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
                  ReactTooltip.show(this.CommandingPresenceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.CommandingPresenceToolTip = ref)}
                data-tip={Warrior[30].toolTip[0]}
                id="31"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={CommandingPresence}
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
                  ReactTooltip.show(this.DualWieldSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DualWieldSpecializationToolTip = ref)}
                data-tip={Warrior[31].toolTip[0]}
                id="32"
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

              <span className="talentPoints req-15-s2">0/5</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedExecuteToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedExecuteToolTip = ref)}
                data-tip={Warrior[32].toolTip[0]}
                id="33"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedExecute}
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
                  ReactTooltip.show(this.EnrageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.EnrageToolTip = ref)}
                data-tip={Warrior[33].toolTip[0]}
                id="34"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Enrage}
                alt=""
              />

              <span id="subsReq1Spec2" className="talentPoints req-15-s2">
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
                  ReactTooltip.show(this.ImprovedSlamToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedSlamToolTip = ref)}
                data-tip={Warrior[34].toolTip[0]}
                id="35"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedSlam}
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
                  ReactTooltip.show(this.SweepingStrikesToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.SweepingStrikesToolTip = ref)}
                data-tip={Warrior[35].toolTip[0]}
                id="36"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={SweepingStrikes}
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
                data-tip={Warrior[36].toolTip[0]}
                id="37"
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
                  ReactTooltip.show(this.ImprovedBerserkerRageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedBerserkerRageToolTip = ref)}
                data-tip={Warrior[37].toolTip[0]}
                id="38"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedBerserkerRage}
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
                  ReactTooltip.show(this.FlurryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FlurryToolTip = ref)}
                data-tip={Warrior[38].toolTip[0]}
                id="39"
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

              <span id="prioReq1Spec2" className="talentPoints req-25-s2">
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
                  ReactTooltip.show(this.PrecisionToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.PrecisionToolTip = ref)}
                data-tip={Warrior[39].toolTip[0]}
                id="40"
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

              <span className="talentPoints req-30-s2">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.BloodthirstToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.BloodthirstToolTip = ref)}
                data-tip={Warrior[40].toolTip[0]}
                id="41"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Bloodthirst}
                alt=""
              />

              <span
                id="prioReq2Spec2 subsReq3Spec2"
                className="talentPoints req-30-s2"
              >
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
                  ReactTooltip.show(this.ImprovedWhirlwindToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedWhirlwindToolTip = ref)}
                data-tip={Warrior[41].toolTip[0]}
                id="42"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedWhirlwind}
                alt=""
              />

              <span className="talentPoints req-30-s2">0/2</span>
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
                  ReactTooltip.show(this.ImprovedBerserkerStanceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedBerserkerStanceToolTip = ref)}
                data-tip={Warrior[42].toolTip[0]}
                id="43"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={ImprovedBerserkerStance}
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
                  ReactTooltip.show(this.RampageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.RampageToolTip = ref)}
                data-tip={Warrior[43].toolTip[0]}
                id="44"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec2 talentButton inactive-talent req-inactive"
                src={Rampage}
                alt=""
              />

              <span id="prioReq3Spec2" className="talentPoints req-40-s2">
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
            Protection
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
                  ReactTooltip.show(this.ImprovedBloodrageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedBloodrageToolTip = ref)}
                data-tip={Warrior[44].toolTip[0]}
                id="45"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={ImprovedBloodRage}
                alt=""
              />

              <span className="talentPoints req-00-s3">0/2</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.TacticalMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.TacticalMasteryToolTip = ref)}
                data-tip={Warrior[45].toolTip[0]}
                id="46"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={TacticalMastery}
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
                  ReactTooltip.show(this.AnticipationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.AnticipationToolTip = ref)}
                data-tip={Warrior[46].toolTip[0]}
                id="47"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton active-talent req-active"
                src={Anticipation}
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
                  ReactTooltip.show(this.ShieldSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShieldSpecializationToolTip = ref)}
                data-tip={Warrior[47].toolTip[0]}
                id="48"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ShieldSpecialization}
                alt=""
              />

              <span id="subsReq1Spec3" className="talentPoints req-05-s3">
                0/5
              </span>
              <img
                className="smArrow"
                src={DownSilverSmall}
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
                  ReactTooltip.show(this.ToughnessToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ToughnessToolTip = ref)}
                data-tip={Warrior[48].toolTip[0]}
                id="49"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Toughness}
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
                  ReactTooltip.show(this.LastStandToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.LastStandToolTip = ref)}
                data-tip={Warrior[49].toolTip[0]}
                id="50"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={LastStand}
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
                  ReactTooltip.show(this.ImprovedShieldBlockToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedShieldBlockToolTip = ref)}
                data-tip={Warrior[50].toolTip[0]}
                id="51"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedShieldBlock}
                alt=""
              />

              <span id="prioReq1Spec3" className="talentPoints req-10-s3">
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
                  ReactTooltip.show(this.ImprovedRevengeToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedRevengeToolTip = ref)}
                data-tip={Warrior[51].toolTip[0]}
                id="52"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedRevenge}
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
                  ReactTooltip.show(this.DefianceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DefianceToolTip = ref)}
                data-tip={Warrior[52].toolTip[0]}
                id="53"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Defiance}
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
                  ReactTooltip.show(this.ImprovedSunderArmorToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedSunderArmorToolTip = ref)}
                data-tip={Warrior[53].toolTip[0]}
                id="54"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedSunderArmor}
                alt=""
              />

              <span className="talentPoints req-15-s3">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedDisarmToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedDisarmToolTip = ref)}
                data-tip={Warrior[54].toolTip[0]}
                id="55"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedDisarm}
                alt=""
              />

              <span className="talentPoints req-15-s3">0/3</span>
            </div>
            <div className="col col-xs-3">
              <img
                onMouseEnter={this.displayMouseOverlayInnerElement}
                onMouseLeave={this.hideMouseOverlayInnerElement}
                onMouseDown={() => {
                  this.talentClick();
                  this.toolTipFunction();
                  ReactTooltip.show(this.ImprovedTauntToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedTauntToolTip = ref)}
                data-tip={Warrior[55].toolTip[0]}
                id="56"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedTaunt}
                alt=""
              />

              <span className="talentPoints req-15-s3">0/2</span>
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
                  ReactTooltip.show(this.ImprovedShieldWallToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedShieldWallToolTip = ref)}
                data-tip={Warrior[56].toolTip[0]}
                id="57"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedShieldWall}
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
                  ReactTooltip.show(this.ConcussionBlowToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ConcussionBlowToolTip = ref)}
                data-tip={Warrior[57].toolTip[0]}
                id="58"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ConcussionBlow}
                alt=""
              />

              <span id="subsReq2Spec3" className="talentPoints req-20-s3">
                0/1
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
                  ReactTooltip.show(this.ImprovedShieldBashToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedShieldBashToolTip = ref)}
                data-tip={Warrior[58].toolTip[0]}
                id="59"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedShieldBash}
                alt=""
              />

              <span className="talentPoints req-20-s3">0/2</span>
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
                  ReactTooltip.show(this.ShieldMasteryToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ShieldMasteryToolTip = ref)}
                data-tip={Warrior[59].toolTip[0]}
                id="60"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ShieldMastery}
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
                  ReactTooltip.show(this.OneHandedWeaponSpecializationToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.OneHandedWeaponSpecializationToolTip = ref)}
                data-tip={Warrior[60].toolTip[0]}
                id="61"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={OneHandedWeaponSpecialization}
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
                  ReactTooltip.show(this.ImprovedDefensiveStanceToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ImprovedDefensiveStanceToolTip = ref)}
                data-tip={Warrior[61].toolTip[0]}
                id="62"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ImprovedDefensiveStance}
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
                  ReactTooltip.show(this.ShieldSlamToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.ToolTip = ref)}
                data-tip={Warrior[62].toolTip[0]}
                id="63"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={ShieldSlam}
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
                  ReactTooltip.show(this.FocusedRageToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.FocusedRageToolTip = ref)}
                data-tip={Warrior[63].toolTip[0]}
                id="64"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={FocusedRage}
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
                  ReactTooltip.show(this.VitalityToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.VitalityToolTip = ref)}
                data-tip={Warrior[64].toolTip[0]}
                id="65"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Vitality}
                alt=""
              />

              <span className="talentPoints req-35-s3">0/5</span>
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
                  ReactTooltip.show(this.DevastateToolTip);
                }}
                onTouchEnd={this.talentClick}
                className="talentHover"
                src={overlayImage}
                style={{ display: "none" }}
                ref={(ref) => (this.DevastateToolTip = ref)}
                data-tip={Warrior[65].toolTip[0]}
                id="66"
              />
              <img
                onMouseEnter={this.displayMouseOverlay}
                onMouseLeave={this.hideMouseOverlay}
                onTouchStart={() => {
                  this.displayOverlayMobile();
                }}
                className="spec3 talentButton inactive-talent req-inactive"
                src={Devastate}
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
