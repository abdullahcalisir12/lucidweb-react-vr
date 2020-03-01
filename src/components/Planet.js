import React from "react";

export default class Planet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a-sphere
        src={this.props.src}
        color="#fff"
        position={this.props.position}
        side="double"
        radius={this.props.radius}
      />
    );
  }
}