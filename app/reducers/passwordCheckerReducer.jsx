import * as Utils from '../vendors/Utils.js';
import zxcvbn from 'zxcvbn';
import {INITIAL_STATE} from '../constants/constants';
import {OBJECTIVES} from '../config/objectives.js';



function passwordCheckerReducer(state = INITIAL_STATE.password, action){
  let receivedState;
  switch (action.type){
    case 'START_GAME':
      receivedState = JSON.parse(JSON.stringify(state));
      receivedState = INITIAL_STATE.password;
      receivedState.game_started = true;
      return receivedState;
    case 'RESET_GAME':
      receivedState = JSON.parse(JSON.stringify(state));
      receivedState = INITIAL_STATE.password;
      receivedState.game_started = false;
      return receivedState;
    case 'END_GAME':
      receivedState = JSON.parse(JSON.stringify(state));
      receivedState = INITIAL_STATE.password;
      receivedState.game_ended = true;
      return receivedState;
    case 'RESET_FEEDBACK':
      receivedState = JSON.parse(JSON.stringify(state));
      receivedState.activity_feedback = "";
      receivedState.objectives_repeated = [];
      return receivedState;
    case 'NEW_PASSWORD_TO_CHECK':
      return checkPasswd(state, action);
    default:
      return state;
  }
}


//objectives_accomplished consist of 3 steps (SCORM objectives already added in App.jsx)
//OBJECTIVES array defined in constants
function checkPasswd(state, action){
  //clone state, immutability!
  let receivedState = JSON.parse(JSON.stringify(state));

  let result = zxcvbn(action.password, [action.username]);
  console.log(result);
  receivedState.password = action.password;
  receivedState.crack_times_display.offline_fast_hashing_1e10_per_second = Utils.translateTime(result.crack_times_display.offline_fast_hashing_1e10_per_second);
  receivedState.crack_times_display.offline_slow_hashing_1e4_per_second = Utils.translateTime(result.crack_times_display.offline_slow_hashing_1e4_per_second);
  receivedState.crack_times_display.online_no_throttling_10_per_second = Utils.translateTime(result.crack_times_display.online_no_throttling_10_per_second);
  receivedState.crack_times_display.online_throttling_100_per_hour = Utils.translateTime(result.crack_times_display.online_throttling_100_per_hour);

  receivedState.recommendations = [];
  if(result.feedback.suggestions.length>0){
    result.feedback.suggestions.forEach(function(element) {
      receivedState.recommendations.push(Utils.translate(element));
    });
  }

  receivedState.sequence = result.sequence;
  if(action.password!==""){
    receivedState.conclussion = result.score;
  } else {
    receivedState.conclussion = -1;
  }

  //check password cont
  var lowercase = /[a-z]/;
  var nums = /[0-9]/;
  let uppercase = /[A-Z]/;
  let special = /[$&+,:;=?@#|'<>.^*()%!-_]/;
  let spaces = / /;
  receivedState.contains.lowercase = receivedState.password.match(lowercase);
  receivedState.contains.numbers = receivedState.password.match(nums);
  receivedState.contains.uppercase = receivedState.password.match(uppercase);
  receivedState.contains.special = receivedState.password.match(special);
  receivedState.contains.spaces = receivedState.password.match(spaces);

  //user playing game
  if(receivedState.game_started && !receivedState.game_ended){
      let objectives_left = OBJECTIVES.filter((o)=>{
        for (let i = 0; i < receivedState.objectives_accomplished.length; i++) {
          if(receivedState.objectives_accomplished[i].id===o.id){
            //objective already accomplished
            return false;
          }
        }
        return true;
      });
      let this_try_gets_one_objective = false;
      for (let i = 0; i < objectives_left.length; i++) {
        //get only objectives not accomplished
        if(objectives_left[i].passwordchecker_score.includes(result.score)){
          //add it to objectives_accomplished
          this_try_gets_one_objective = true;
          receivedState.objectives_accomplished.push(objectives_left[i]);
          break;
        }
      }
      if(!this_try_gets_one_objective){
        //if user has checked this kind of password before (twice), we show the feedback modal
        if(receivedState.objectives_repeated.filter((e)=>{return e===result.score}).length>1){
          receivedState.activity_feedback = "Te enseñamos a poner contraseñas más robustas.";
        } else {
          receivedState.objectives_repeated.push(result.score);
        }
      }
      receivedState.number_of_tries += 1;
  }

  return receivedState;
}

export default passwordCheckerReducer;
