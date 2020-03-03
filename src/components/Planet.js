import React from "react";

export default class Planet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a-entity animation={this.props.animation}>
        <a-sphere
          src={this.props.src}
          color="#fff"
          position={this.props.position.split(' ').map((item, ind) => ind === 0 ? Number(item) + 0.696340 : item).join(' ')}
          side="double"
          radius={this.props.radius}
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear;"
        >
        </a-sphere>
      </a-entity>
    );
  }
}