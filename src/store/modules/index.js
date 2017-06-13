import { combineReducers } from 'redux';

import navigationViewsReducer from './navigation/navigation.reducer';

export default combineReducers({
  views: navigationViewsReducer
});
