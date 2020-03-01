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
      >
      </a-sky>
    );
  }
}