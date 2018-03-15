import React from 'react';
import * as Utils from '../vendors/Utils.js';

const start = ["La primera parte de su contraseña", "La segunda parte de su contraseña", "La tercera parte de su contraseña", "La cuarta parte de su contraseña"];

const dictionary_names ={
  "passwords": "Contraseñas comunes",
  "male_names": "Nombres de hombre",
  "surnames": "Apellidos",
  "us_tv_and_film": "Nombres de series y películas",
  "female_names": "Nombres de mujer",
  "english_wikipedia": "Wikipedia en inglés"
}

export default class MoreInfo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.seq);
    let seq = this.props.seq;
    let pass = this.props.hide_pass ? "": "'" + this.props.seq.token + "'";
    let text0 = " se ha atacado siguiendo un patrón " + Utils.translate(seq.pattern) + ".";
    let text1 = this.props.sequence_size===1 ? <span>Su contraseña <b>{pass}</b> {text0}</span>: <span>{start[this.props.index]} <b>{pass}</b>{text0}</span>;
    let text2 = "";
    switch (seq.pattern) {
      case "dictionary":
        text2 = "Se ha utilizado el diccionario '" + dictionary_names[seq.dictionary_name] +"'.";
        text2 += " El ordenador ha necesitado " + seq.guesses.toLocaleString() + " intentos para descubrir la palabra.";
        if(seq.l33t){
          text2 += " Has utilizado sustituciones simples de letras por números.";
        }
        if(seq.reversed){
          text2 += " La palabra estaba invertida.";
        }
      break;
      case "bruteforce":
      case "spatial":
      case "sequence":
        text2 = "El ordenador ha necesitado " + Math.round(Math.pow(10, seq.guesses_log10)).toLocaleString() + " intentos para descubrir la palabra.";
      break;
      case "repeat":
        text2 = "El ordenador ha necesitado " + Math.round(Math.pow(10, seq.guesses_log10)).toLocaleString() + " intentos para descubrir la palabra.";
        text2 += " El token básico utilizado ha sido: " + seq.base_token;
      break;
      case "regex":
        text2 = "El ordenador ha necesitado " + Math.round(Math.pow(10, seq.guesses_log10)).toLocaleString() + " intentos para descubrir la palabra.";
        text2 += " El patrón utilizado ha sido: " + seq.regex_name;
      break;
      default:
        text2 = "";
    }
    return (
      <div>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    );
  }
}
