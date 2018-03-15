import {combineReducers} from 'redux';
import trackingReducer from './trackingReducer';
import scormReducer from './scormReducer';
import userProfileReducer from './userProfileReducer';
import waitForUserProfileReducer from './waitForUserProfileReducer';
import passwordCheckerReducer from './passwordCheckerReducer';

const GlobalState = combineReducers({
  password: passwordCheckerReducer,
  tracking:trackingReducer,
  scorm:scormReducer,
  user_profile:userProfileReducer,
  wait_for_user_profile:waitForUserProfileReducer,
});

export default GlobalState;
