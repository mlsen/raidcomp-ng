import {List} from 'immutable';
import {combineReducers} from 'redux';

const initialState = {};

function composition(state = initialState, action) {
  switch(action.type) {
    case 'ADD_CHARACTER':
      return state.push(action.name);
    default:
      return state;
  }
}

export default combineReducers({
  composition
});
