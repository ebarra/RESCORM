//first: check weak password-> id: "weak_password"
//second: check medium strong password-> id: "medium_password"
//third: check very strong password-> id: "strong_password"
export const OBJECTIVES_ONE = [
  {id:"strong_password", progress_measure:1, score:1, desc: "comprueba una contraseña segura", passwordchecker_score: [4]}
];


export const OBJECTIVES_FULL = [
  {id:"weak_password", progress_measure:0.33, score:0.2, desc: "comprueba una contraseña débil", passwordchecker_score: [0,1]},
  {id:"medium_password", progress_measure:0.33, score:0.3, desc: "comprueba una contraseña media", passwordchecker_score: [2,3]},
  {id:"strong_password", progress_measure:0.34, score:0.5, desc: "comprueba una contraseña segura", passwordchecker_score: [4]}
];


export const OBJECTIVES = [
  {id:"strong_password", progress_measure:0.33, score:0.3, desc: "comprueba una contraseña segura", passwordchecker_score: [4]},
  {id:"strong_password2", progress_measure:0.33, score:0.3, desc: "comprueba otra contraseña segura diferente", passwordchecker_score: [4]},
  {id:"strong_password3", progress_measure:0.34, score:0.4, desc: "comprueba otra contraseña segura diferente", passwordchecker_score: [4]}
];
