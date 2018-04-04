//first: check weak password-> id: "weak_password"
//second: check medium strong password-> id: "medium_password"
//third: check very strong password-> id: "strong_password"
export const OBJECTIVES = [
  {id:"weak_password", progress_measure:0.33, score:0.2, desc: "comprueba una contraseña débil"},
  {id:"medium_password", progress_measure:0.33, score:0.3, desc: "comprueba una contraseña media"},
  {id:"strong_password", progress_measure:0.34, score:0.5, desc: "comprueba una contraseña segura"}
];
