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
      game_started: false,
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
      conclussion: 0,
      sequence: [],
      objectives_accomplished: [],
      objectives_repeated: []
    }
  };

  export const TRANSLATIONS = {
    "Use a few words, avoid common phrases": "Usa varias palabras, evita palabras comunes",
    'Straight rows of keys are easy to guess': "Filas seguidas de teclas son fáciles de adivinar",
    'Short keyboard patterns are easy to guess': "Patrones del teclado cortos son sencillos de adivinar",
    'Use a longer keyboard pattern with more turns': "Utiliza una combinación de teclas con más teclas",
    'Repeats like "aaa" are easy to guess': "Repeticiones como 'aaa' son sencillas de adivinar",
    'Repeats like "abcabcabc" are only slightly harder to guess than "abc"':"Repeticiones como 'abcabc' son solamente un poco más dificiles de adivinar que 'abc'",
    'Avoid repeated words and characters':"Evita palabras y caracteres repetidos",
    "Sequences like abc or 6543 are easy to guess":"Secuencias como abc o 6543 son sencillas de adivinar",
    'Avoid sequences': "Evita secuencias",
    "Recent years are easy to guess": "Años recientes son sencillos de adivinar",
    'Avoid recent years':"Evita años recientes",
    'Avoid years that are associated with you':"Evita años que estén relacionados contigo",
    "Dates are often easy to guess":"Las fechas son normalmente sencillas de adivinar",
    'Avoid dates and years that are associated with you':"Evita fechas y años recientes que estén asociados contigo",
    'This is a top-10 common password':"Esta es una contraseña del top-10 más comunes",
    'This is a top-100 common password':"Esta es una contraseña del top-100 más comunes",
    'This is a very common password': "Esta es una contraseña muy común",
    'This is similar to a commonly used password':"Esta contraseña es muy similar a algunas muy comunes",
    'A word by itself is easy to guess':"Una palabra suelta es muy sencilla de adivinar",
    'Names and surnames by themselves are easy to guess':"Nombres y apellidos sueltos son sencillos de adivinar",
    'Common names and surnames are easy to guess':"Nombres comunes y apellidos son sencillos de adivinar",
    "Capitalization doesn't help very much":"Poner la primera en mayúscula ayuda poco",
    "All-uppercase is almost as easy to guess as all-lowercase":"Poner todo en mayúsculas es casi tan sencillo de adivinar como todo minúsculas",
    "Reversed words aren't much harder to guess":"Palabras invertidad son casi tan sencillas de adivinar como las normales",
    "Predictable substitutions like '@' instead of 'a' don't help very much":"Sustituciones predecibles como '@' en lugar de 'a' son sencillas de adivinar",
    "Add another word or two. Uncommon words are better.": "Añade alguna otra palabra. Palabras que no estén en el diccionario mejor.",
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
    "La contraseña introducida es muy sencilla de adivinar, un ordenador atacante la adivina en menos de 1000 intentos.",
    "La contraseña introducida se puede adivinar, un ordenador atacante la adivina en menos de 1.000.000 intentos.",
    "La contraseña introducida algo dificil de adivinar, un ordenador atacante la adivina en menos de 100.000.000 intentos. !Puede parecer mucho pero recuerda que los ordenadores no se cansan!",
    "La contraseña introducida dificil de adivinar, protege bien de los ataques. Un ordenador atacante la adivina en menos de 10.000.000.000 intentos.",
    "La contraseña introducida muy dificil de adivinar, protege muy bien de los ataques. Un ordenador atacante la adivina en más de 10.000.000.000 intentos."
  ];
