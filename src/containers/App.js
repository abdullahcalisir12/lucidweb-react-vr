import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { createPlanet } from "../redux/modules/planet/planetAction";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => this.props.createPlanet('Planet')}>Add Planet</button>
          {this.props.planetReducer.planet.name}
        </div>
        {/*<a-scene>*/}
        {/*  <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>*/}
        {/*  <a-sky color="#ECECEC"></a-sky>*/}
        {/*</a-scene>*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    planetReducer: state.planetReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlanet: (planet_name) => {
      dispatch(createPlanet(planet_name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
