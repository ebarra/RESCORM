export const INITIAL_STATE = {
  tracking:{
    progress_measure:0,
    score:null,
    objectives:{},
    finished:false,
  },
  scorm:null,
  user_profile:{
    id:undefined,
    name:"Unknown",
    learner_preference:{},
  },
  wait_for_user_profile:false,
  password:{
      game_started: true,
      game_ended: false,
      number_of_tries: 0,
      password: "",
      contains: {
        lowercase: false,
        numbers: false,
        uppercase: false,
        special: false,
        spaces: false
      },
      contains_special_chars: false,
      crack_times_display: {offline_fast_hashing_1e10_per_second: "", offline_slow_hashing_1e4_per_second: "", online_no_throttling_10_per_second: "", online_throttling_100_per_hour: ""},
      recommendations: [],
      activity_feedback: "",
      conclussion: -1,
      sequence: [],
      objectives_accomplished: [],
      objectives_repeated: []
    }
  };

  export const TRANSLATIONS = {
    "use a few words, avoid common phrases": "usa varias palabras, evita palabras comunes",
    'straight rows of keys are easy to guess': "filas seguidas de teclas son fáciles de adivinar",
    'short keyboard patterns are easy to guess': "patrones del teclado cortos son sencillos de adivinar",
    'use a longer keyboard pattern with more turns': "utiliza una combinación de teclas con más teclas",
    'repeats like "aaa" are easy to guess': "repeticiones como 'aaa' son sencillas de adivinar",
    'repeats like "abcabcabc" are only slightly harder to guess than "abc"':"repeticiones como 'abcabc' son solamente un poco más dificiles de adivinar que 'abc'",
    'avoid repeated words and characters':"evita palabras y caracteres repetidos",
    "sequences like abc or 6543 are easy to guess":"secuencias como abc o 6543 son sencillas de adivinar",
    'avoid sequences': "evita secuencias",
    "recent years are easy to guess": "años recientes son sencillos de adivinar",
    'avoid recent years':"evita años recientes",
    'avoid years that are associated with you':"evita años que estén relacionados contigo",
    "dates are often easy to guess":"las fechas son normalmente sencillas de adivinar",
    'avoid dates and years that are associated with you':"evita fechas y años recientes que estén asociados contigo",
    'this is a top-10 common password':"esta es una contraseña del top-10 más comunes",
    'this is a top-100 common password':"esta es una contraseña del top-100 más comunes",
    'this is a very common password': "esta es una contraseña muy común",
    'this is similar to a commonly used password':"esta contraseña es muy similar a algunas muy comunes",
    'a word by itself is easy to guess':"una palabra suelta es muy sencilla de adivinar",
    'names and surnames by themselves are easy to guess':"nombres y apellidos sueltos son sencillos de adivinar",
    'common names and surnames are easy to guess':"nombres comunes y apellidos son sencillos de adivinar",
    "capitalization doesn't help very much":"poner la primera en mayúscula ayuda poco",
    "all-uppercase is almost as easy to guess as all-lowercase":"poner todo en mayúsculas es casi tan sencillo de adivinar como todo minúsculas",
    "reversed words aren't much harder to guess":"palabras invertidad son casi tan sencillas de adivinar como las normales",
    "predictable substitutions like '@' instead of 'a' don't help very much":"sustituciones predecibles como '@' en lugar de 'a' son sencillas de adivinar",
    "add another word or two. uncommon words are better.": "añade alguna otra palabra. palabras que no estén en el diccionario mejor.",
    "less than a second": "menos de un segundo",
    "dictionary": "diccionario",
    "bruteforce": "fuerza bruta",
    "spatial": "teclas cercanas en el teclado",
    "repeat": "repetición",
    "regex": "patrón",
    "date": "fecha",
    "sequence": "secuencia"

  };

  export const CONCLUSSION_TEXTS = [
    "la contraseña introducida es muy sencilla de adivinar, un ordenador atacante la adivina en menos de 1000 intentos.",
    "la contraseña introducida se puede adivinar, un ordenador atacante la adivina en menos de 1.000.000 intentos.",
    "la contraseña introducida algo dificil de adivinar, un ordenador atacante la adivina en menos de 100.000.000 intentos. !puede parecer mucho pero recuerda que los ordenadores no se cansan!",
    "la contraseña introducida dificil de adivinar, protege bien de los ataques. un ordenador atacante la adivina en menos de 10.000.000.000 intentos.",
    "la contraseña introducida muy dificil de adivinar, protege muy bien de los ataques. un ordenador atacante la adivina en más de 10.000.000.000 intentos."
  ];
