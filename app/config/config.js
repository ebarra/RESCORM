export let GLOBAL_CONFIG = {
  dev:{
    debug:true,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["en", "es"],
    // locale: "es",
    adaptive:true,
    finish_screen:true,
    scorm:{
      completion_threshold:0.5,
      score_threshold:0.6,
    },
    n:3,
  },
  production:{
    debug:false,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["en", "es"],
    adaptive:true,
    finish_screen:true,
    scorm:{
      completion_threshold:0.5,
      score_threshold:0.6,
    },
    n:undefined,
  },
};

let processConfig = (function(){
  let env = process.env.NODE_ENV || 'dev';
  if(typeof GLOBAL_CONFIG[env] === "undefined"){
    env = "dev";
  }
  GLOBAL_CONFIG = GLOBAL_CONFIG[env];

  GLOBAL_CONFIG.debug_scorm_api = ((GLOBAL_CONFIG.debug) && (GLOBAL_CONFIG.debug_scorm_api));
  GLOBAL_CONFIG.debug_scorm_api_window = ((GLOBAL_CONFIG.debug_scorm_api) && (GLOBAL_CONFIG.debug_scorm_api_window));
})();



export const UI = {
  with_reset_button: false,
  with_fullscreen: true,
  name:"password checker",
  app_logo:"assets/images/logos/passcheck_logo.svg",
  type_app_logo:"",
  educalab_text:"una aplicación de",
  educalab_logo:"assets/images/logos/elab_logo_white.svg",
  main_text: "comprueba la fortaleza de tus contraseñas",
  initial_text:"comprueba la fortaleza de tus contraseñas con passcheck una webapp de elab",
  instructions:"para comprobar la contraseña pulsa intro o haz click en el botón de check. tienes todos los intentos que necesites. los controles son muy sencillos:",
  feedback_weak: "la contraseña introducida es débil",
  feedback_medium: "la contraseña introducida es media",
  feedback_secure: "la contraseña introducida es segura",
  message_pro: "eres un crack, ¡a ti no hay quien te engañe! sabemos que no necesitas que te enseñemos cómo crear contraseñas, pero aquí te dejamos un pequeño vídeo por si quieres saber más:",
  message_good: "lo has hecho bastante bien, pero has fallado algunas. revisa el siguiente video para aprender a crear contraseñas fiables:",
  message_ok: "no has acertado muchas. es muy importante crear contraseñas seguras para proteger tu intimidad. te dejamos un video para que aprendas un poco más:",
  modal_inst: "para comprobar la contraseña pulsa intro o haz click en el botón de check. tienes todos los intentos que necesites. los controles son muy sencillos:",
  with_reset_button: false,
  with_fullscreen: true,
  progress_text: "contraseñas creadas",
  task_list: "contraseñas por crear"
};

export const TIPS = [
  "Consejo: Para escribir una contraseña fuerte utiliza mayúsculas y minúsculas, así como otros caracteres",
  "Consejo: Para que una contraseña sea fácil de recordar y a la vez robusta puedes poner las primeras letras de una frase que te guste o de un verso de un poema o canción y rematarla con algún número",
  "Consejo: Una buena idea es utilizar características del sitio en el que estás haciendo login para crear tu contraseña. Por ejemplo para Gmail podrías poner como últimas letras de tu contraseña GMA o Gma o GmA. Asi tu contraseña cambiará en cada sitio que utilices y será más dificil de hackear."
];
