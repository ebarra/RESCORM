import React from 'react';
import {UI} from '../config/config';
import Icon from './Icon.jsx';


export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {show_items: false};
    this.toggleMenuMob = this.toggleMenuMob.bind(this);
    this.hideMenuMob = this.hideMenuMob.bind(this);
  }
  toggleMenuMob(){
    this.setState({show_items: !this.state.show_items});
  }
  hideMenuMob(){
    if(this.state.show_items===true){
      this.setState({show_items: false});
    }
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

    let trackingEls = trackingTexts.map((text, index) => {
      return <span key={index}>{text}</span>;
    });

    let mobileMenuTop = {
      top: "-8.7em"
    };

    return (
      <div className="control_box">
          {this.props.game_started ?
            (<div className="control_bar">
              <div className="control_main_text">{UI.main_text}</div>
              <div className="controls_menu" style={this.props.game_ended ? finalStyleMenu : null}>
                <Icon className={this.props.game_ended ? "hide":"control control_info"} onClick={() => this.props.showModal("Info")} icon="info"/>
                <Icon className={this.props.game_ended ? "hide":"control control_progress"} onClick={() => this.props.showModal("Progress")} icon="progress" />
                {UI.with_reset_button &&
                  <Icon className={this.props.game_ended ? "hide":"control control_reset"} onClick={() => this.props.showModal("Reset")} icon="reset"/>}
                <Icon className="control control_stop" onClick={() => this.props.showModal("Stop")} icon="stop"/>
                  {fullscreenEnabled &&
                    (!this.props.isFullScreen ?
                      <Icon className="control control_fullscreen" onClick={() => this.props.requestFullScreen()} icon="full_screen"/>:
                      <Icon className="control control_nofullscreen" onClick={() => this.props.exitFullscreen()} icon="no_full_screen"/>)
                      }
              </div>

              <div ref={this.setWrapperRef} className="controls_menu_mob">
                <div className="control_main">
                  <Icon className={this.props.game_ended ? "hide" : "control control_burger"} onClick={() => this.toggleMenuMob()} icon="burger"/>
                  <Icon className={this.props.game_ended ? "control control_stop" : "hide"} onClick={() => this.props.showModal("Stop")} icon="stop"/>
                </div>

                <div className={this.state.show_items ? "controls_int":"controls_int hide"} style={mobileMenuTop}>
                  <Icon className="control control_info" onClick={() => this.props.showModal("Info")} icon="info_fill"/>
                  <Icon className="control control_progress" onClick={() => this.props.showModal("Progress")} icon="progress_fill" />
                  {UI.with_reset_button &&
                    <Icon className="control control_reset" onClick={() => this.props.showModal("Reset")} icon="reset_fill"/>}
                  <Icon className="control control_stop" onClick={() => this.props.showModal("Stop")} icon="stop_fill"/>
                    {fullscreenEnabled &&
                      (!this.props.isFullScreen ?
                        <Icon className="control control_fullscreen" onClick={() => this.props.requestFullScreen()} icon="full_screen_fill"/>:
                        <Icon className="control control_nofullscreen" onClick={() => this.props.exitFullscreen()} icon="no_full_screen_fill"/>)
                        }
                </div>

                {/*inicio puntuación*/}
                {/*<div className={this.props.game.game_ended ? "hide":"progress_score"}>

                  <div className="time_elapsed">
                    <div className="number_progress number_time">{clock}</div>
                    <div className="text_progress time_text">tiempo</div>
                  </div>

                  <div className="questions_answered">
                    <div className="number_progress number_answered">{progress}/{QUESTIONS.length}</div>
                    <div className="progress_bar"><div className="progress_fill" style={progressStyle}/></div>
                  </div>

                  <div className="user_score">
                    <div className="number_progress score_number">{this.props.user_score}</div>
                    <div className="text_progress score_text">puntuación</div>
                  </div>
                </div>*/} {/*fin puntuación*/}

              </div>

            </div>
          ) : (
            <div className="control_bar">
              <div className="control_main_text">{UI.main_text}</div>

              <div className="control_text">
                {!this.props.tracking.finished &&
                  <div className="start_game">
                    <span className="start_game_text" onClick={this.props.startGame}>empezar prueba</span>
                    <Icon className="control control_start" onClick={this.props.startGame} icon="start"/>
                  </div>
                }
                <div className="credits" onClick={() => this.props.showModal("Credits")}>créditos</div>
              </div>
            </div>
        )}
      </div>
    );
  }
}
