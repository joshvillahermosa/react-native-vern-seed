import {ListView} from 'react-native';
import * as ACTION_CONSTANTS from './navigation.constants';
import defaultNavigationState from './navigation.default';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

/**
 * @function navigationViewsReducer
 * @exports navigationViewsReducer Default
 * @param {array} state Array of Navigation states
 * @param {object} action Action Object
 */
export default function navigationViewsReducer(state = defaultNavigationState, action) {
  switch(action.type) {
    case ACTION_CONSTANTS.ADD_NAVIGATION_VIEW:
      return addNavigationView(state, action)
  }

  return state;
}

function addNavigationView(state, action) {
  const newState = [...state, action.navigationView];
  return dataSource.cloneWithRows(newState);
}
