import React from 'react';
import './App.css';
import { connect } from "react-redux";
import sun from '../assets/solarSystem/2k_sun.jpg';
import cosmos from '../assets/solarSystem/2k_stars_milky_way.jpg';
import mercury from '../assets/solarSystem/2k_mercury.jpg';
import venus from '../assets/solarSystem/2k_venus_surface.jpg';
import earth from '../assets/solarSystem/2k_earth_daymap.jpg';
import mars from '../assets/solarSystem/2k_mars.jpg';
import jupiter from '../assets/solarSystem/2k_jupiter.jpg';
import saturn from '../assets/solarSystem/2k_saturn.jpg';
import uranus from '../assets/solarSystem/2k_uranus.jpg';
import neptune from '../assets/solarSystem/2k_neptune.jpg';
import Space from "../components/Space";
import Sun from "../components/Sun";
import Planets from "../components/Planets";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <a-scene>
          <a-assets>
            <img id="cosmos" src={cosmos}  alt="cosmos"/>
            <img id="sun" src={sun}  alt="sun"/>

            <img id="mercury" src={mercury}  alt="mercury"/>
            <img id="venus" src={venus}  alt="venus"/>
            <img id="earth" src={earth}  alt="earth"/>
            <img id="mars" src={mars}  alt="mars"/>
            <img id="jupiter" src={jupiter}  alt="jupiter"/>
            <img id="saturn" src={saturn}  alt="saturn"/>
            <img id="uranus" src={uranus}  alt="uranus"/>
            <img id="neptune" src={neptune}  alt="neptune"/>
          </a-assets>

          <Space />
          <Sun />
          <Planets />

          <a-camera position="0 0 5">
          </a-camera>
        </a-scene>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
