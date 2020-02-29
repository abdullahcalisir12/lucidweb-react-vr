import planetStore from "./planetStore";
import {CREATE_PLANET, DELETE_PLANET} from "./planetTypes";

const planetReducer = (state = { ...planetStore }, action) => {
  switch (action.type) {
    case `${CREATE_PLANET}_FULFILLED`:
      console.log('create planet');
      break;
    case DELETE_PLANET:
      console.log('delete planet');
      break;
    default:
      break;
  }
  return state;
};

export default planetReducer;