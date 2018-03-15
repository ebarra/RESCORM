//first: check weak password-> id: "weak_password"
//second: check medium strong password-> id: "medium_password"
//third: check very strong password-> id: "strong_password"
export const OBJECTIVES = [
  {id:"weak_password", progress_measure:0.33, score:0.2, desc: "Comprueba una contraseña débil (20% de la nota)"},
  {id:"medium_password", progress_measure:0.33, score:0.3, desc: "Comprueba una contraseña de fortaleza media (30% de la nota)"},
  {id:"strong_password", progress_measure:0.34, score:0.5, desc: "Comprueba una contraseña robusta (50% de la nota)"}
];
