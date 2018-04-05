import {TRANSLATIONS} from '../constants/constants';

let next_objective_id = 1;

export function Objective(options){
  // Constructor
  let defaults = {
    id:next_objective_id,
    accomplished:false,
    progress_measure:0,
    score:null,
    accomplished_score:null,
  };
  let _objective = Object.assign({}, defaults, options);

  _objective.progress_measure = Math.max(0, Math.min(1, _objective.progress_measure));

  if(typeof _objective.score === "number"){
    _objective.score = Math.max(0, Math.min(1, _objective.score));
    if(typeof _objective.accomplished_score === "number"){
      _objective.accomplished_score = Math.min(_objective.accomplished_score, _objective.score);
    }
  }

  next_objective_id += 1;
  return _objective;
}

export function ResetObjective(objective){
  if(typeof objective !== "object"){
    return objective;
  }
  objective.accomplished = false;
  objective.accomplished_score = null;
  return objective;
}

export function shuffleArray(array){
  return array.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
}


export function translate(text){
  //console.log(TRANSLATIONS[text]);
  if(TRANSLATIONS[text.toLowerCase()]){
    return TRANSLATIONS[text.toLowerCase()];
  } else {
    return text;
  }
}

export function translateTime(text){
  if(TRANSLATIONS[text]){
    return TRANSLATIONS[text];
  } else {
    return text.replace("second", "segundo").replace("minute", "minuto").replace("hour", "hora").replace("day", "día").replace("week", "semana").replace("months", "meses").replace("month", "mes").replace("year", "año").replace("century", "siglo").replace("centuries", "siglos");
  }
}
