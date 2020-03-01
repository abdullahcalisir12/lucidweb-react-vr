import React from "react";
import Planet from "./Planet";
import {connect} from "react-redux";

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 2
    }
  }

  render() {
    return (
      <a-entity>
        { this.props.planetReducer.planets.map((planet, key) => <Planet key={key} src={`#${planet.name.toLowerCase()}`} position={planet.position} radius={planet.radius}/>) }
      </a-entity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    planetReducer: state.planetReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);