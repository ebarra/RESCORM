import React from 'react';
import {UI} from '../config/config';


export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let fullscreenEnabled = UI.with_fullscreen && (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled);
    if (!fullscreenEnabled) {
      console.log("Browser does not support fullscreen, or it is disabled by the app, we disable the button");
    }

    let loggedText;
    let trackingTexts = [];

    if(typeof this.props.tracking.progress_measure === "number"){
      trackingTexts.push("Progreso: " + (this.props.tracking.progress_measure * 100) + "%");
    } else {
      trackingTexts.push("Progreso: sin empezar");
    }
    if(typeof this.props.tracking.score === "number"){
      trackingTexts.push("Puntuación: " + (this.props.tracking.score * 100) + "%");
    } else {
      trackingTexts.push("Puntuación: sin intentos");
    }
    if(this.props.user_profile){
      if((typeof this.props.user_profile.name === "string" && this.props.user_profile.name !=="Unknown")){
        loggedText = <span>Logueado como: {this.props.user_profile.name}</span>;
      }
      if(typeof this.props.user_profile.learner_preference === "object"){
        if(typeof this.props.user_profile.learner_preference.difficulty === "number"){
          trackingTexts.push("Dificultad: " + this.props.user_profile.learner_preference.difficulty);
        }
      }
    }

    let trackingEls = trackingTexts.map((text, index)=>{
      return <span key={index}>{text}</span>;
    });

    if(this.props.game_started){
      return (
        <div>
          <h1 id="heading">Comprueba la Fortaleza de Contraseñas</h1>
          <p id="tracking">{loggedText}{trackingEls}</p>
          <button className="" onClick={() => this.props.showModal("Info")}>Info</button>
          <button className="" onClick={() => this.props.showModal("Progress")}>Progreso</button>
          {UI.with_reset_button &&
            <button className="" onClick={() => this.props.showModal("Reset")} >Reset</button>}
          <button className="" onClick={() => this.props.showModal("Stop")} >Stop</button>
          {fullscreenEnabled &&
            (!this.props.isFullScreen ?
              <button className="control control_fullscreen" onClick={() => this.props.requestFullScreen()} icon="full_screen">FullScreen</button>:
              <button className="control control_nofullscreen" onClick={() => this.props.exitFullscreen()} icon="no_full_screen">FullScreen</button>)
              }
        </div>
      );
    } else {
      return (
        <div>
          <h1 id="heading">Comprueba la Fortaleza de Contraseñas</h1>
          <button className="" onClick={this.props.startGame}>start</button>
        </div>
      );
    }

  }
}
