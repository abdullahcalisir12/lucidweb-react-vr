import { CREATE_PLANET } from "./planetTypes";

export function createPlanet(planetName) {
  return {
    type: CREATE_PLANET,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(planetName);
      }, 3000);
    })
  };
}