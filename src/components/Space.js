import React from "react";

export default class Space extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <a-sky
        src="#cosmos"
        radius={10000}
        side="double"
        // animation="property: rotation; to: 0 0 360; loop: true; dur: 20000"
      >
        {this.props.children}
      </a-sky>
    );
  }aw
}