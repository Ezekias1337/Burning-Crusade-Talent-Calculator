import "./../css/vanilla_css/playable-class.css";

export const selectClassButton = (props) => {
  return (
    <div
      className="col col-4 mt-3 hovereffect"
      data-theme={this.state.classes[index].playableClassName}
      key={index + item}
    >
      <img
        src={this.state.classes[index].classIcon}
        alt={this.state.classes[index].playableClassName}
        className="classIcon img-fluid"
        style={{
          border: `2px solid ${this.state.classes[index].classColor}`,
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      />
      <h3
        className="mt-2 playable-class-name"
        style={{
          color: this.state.classes[index].classColor,
          fontSize: "150%",
        }}
      >
        {this.state.classes[index].playableClassName}
      </h3>
      <div className="overlay class-icon">
        <Link
          to={"/" + this.state.classes[index].playableClassName}
          className="info"
          id={this.state.classes[index].playableClassName + "Link"}
          style={{
            color: this.state.classes[index].classColor,
            boxShadow: `0 0 5px ${this.state.classes[index].classColor}`,
            border: `2px solid ${this.state.classes[index].classColor}`,
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Select
        </Link>
      </div>
    </div>
  );
};
