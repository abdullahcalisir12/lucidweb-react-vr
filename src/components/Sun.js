import React from "react";

export default class Sun extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <a-sphere
        src="#sun"
        color="#fff"
        position="0 0 0"
        repeat="5 5"
        radius={0.696340}
        side="double"
      />
    );
  }
}