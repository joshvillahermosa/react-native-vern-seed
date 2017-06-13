import { createStore } from 'redux';
import appReducers from './modules';

import defaultNavigationState from './modules/navigation/navigation.default';

/**
 * Constructs default state to be init on app init
 */
const defaultState = {
  ...defaultNavigationState
};

export default createStore(appReducers, defaultState);
