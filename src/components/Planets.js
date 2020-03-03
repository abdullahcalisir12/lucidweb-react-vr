import React from "react";
import Planet from "./Planet";
import {connect} from "react-redux";

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 2,
      mercurySpeed: 47.87,
    }
  }

  render() {
    return (
      <a-entity>
        { this.props.planetReducer.planets.map((planet, key) => <Planet key={key} src={`#${planet.name.toLowerCase()}`} animation={`property: rotation; to: 0 0 360; loop: true; dur: ${this.state.mercurySpeed * 500000 / planet.speed}; easing: linear;`} position={planet.position} radius={planet.radius}/>) }
      </a-entity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    planetReducer: state.planetReducer
  };
};

export default connect(mapStateToProps)(Planets);