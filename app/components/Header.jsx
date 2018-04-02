import React from 'react';
import {UI} from '../config/config';
import Icon from './Icon.jsx';
import {OBJECTIVES} from '../config/objectives';

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

    let mobileMenuTop = {
      top: "-8.7em"
    };

    let progress = this.props.objectives_accomplished.length;
    let progressStyle = {
      width: Math.floor(105*progress/OBJECTIVES.length) + "%"
    };
    let user_score = this.props.objectives_accomplished.reduce((accumulator, currentValue) => { return accumulator + currentValue.score; }, 0);

    if(this.props.game_ended){
      return (
        <div className="control_box">
            <div className="control_bar">
              <div className="control_main_text">{UI.main_text}</div>
              <div className="control_text">
                  <div className="start_game">
                    <span className="start_game_text">prueba terminada</span>
                      {fullscreenEnabled &&
                        (!this.props.isFullScreen ?
                          <Icon className="control control_fullscreen" onClick={() => this.props.requestFullScreen()} icon="full_screen_fill"/>:
                          <Icon className="control control_nofullscreen" onClick={() => this.props.exitFullscreen()} icon="no_full_screen_fill"/>)
                          }
                  </div>
                <div className="credits" onClick={() => this.props.showModal("Credits")}>créditos</div>
              </div>
            </div>
        </div>
      )
    }
    else if(this.props.game_started){
      return (
        <div className="control_box">
              <div className="control_bar">
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
                </div>

                <div className="progress_score" >
                  <div className="questions_answered">
                    <div className="number_progress number_answered">{progress}/{OBJECTIVES.length}</div>
                    <div className="progress_bar">
                      <div className="progress_fill" style={progressStyle}></div>
                      </div>
                  </div>
                  <div className="user_score">
                    <div className="number_progress score_number">{user_score*10}</div>
                    <div className="text_progress score_text">puntuación</div>
                  </div>
                </div>

              </div>
          </div>
            )
    } else {
      return (
        <div className="control_box">
            <div className="control_bar">
              <div className="control_main_text">{UI.main_text}</div>
              <div className="control_text">
                  <div className="start_game">
                    <span className="start_game_text" onClick={this.props.startGame}>empezar prueba</span>
                    <Icon className="control control_start" onClick={this.props.startGame} icon="start"/>
                  </div>
                <div className="credits" onClick={() => this.props.showModal("Credits")}>créditos</div>
              </div>
            </div>
        </div>
      )
    }

  }
}
