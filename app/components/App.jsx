import React from 'react';
import {connect} from 'react-redux';
import './../assets/sass/main_styles.sass';

import {GLOBAL_CONFIG} from '../config/config.js';
import {OBJECTIVES} from '../config/objectives.js';
import * as Utils from '../vendors/Utils.js';
import {addObjectives, objectiveAccomplished, newPassWithScorm, startgame, resetfeedback, endgame} from './../reducers/actions';

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import MyEntry from './MyEntry.jsx';
import Feedback from './Feedback.jsx';
import MyAlert from './MyAlert.jsx';

import * as SCORM_WRAPPER from '../vendors/SCORM_API_Wrapper.js';
import ModalStart from './ModalStart.jsx';
import ModalInfo from './ModalInfo.jsx';
import ModalProgress from './ModalProgress.jsx';
import ModalReset from './ModalReset.jsx';
import ModalStop from './ModalStop.jsx';
import ModalEnd from './ModalEnd.jsx';
import ModalCredits from './ModalCredits.jsx';
import ModalFeedback from './ModalFeedback.jsx';
import Dark from './Dark.jsx';
import {UI} from '../config/config';


const INITIAL_STATE = { value: '', hide_pass: false, showModalFeedback:false, showModalStart: false, showModalInfo: false, showModalEnd: false, showModalProgress: false, showModalReset: false, showModalCredits:false,  showModalStop: false };

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = INITIAL_STATE;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEyeChange = this.handleEyeChange.bind(this);
    this.startGame = this.startGame.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.resetState = this.resetState.bind(this);
    this.requestFullScreen = this.requestFullScreen.bind(this);
    this.exitFullscreen = this.exitFullscreen.bind(this);
  }
  resetState(){
    this.setState(INITIAL_STATE);
  }
  handleInputChange(event) {
    this.setState({value: event.target.value});
    if(this.props.password.game_started===false){
      this.props.dispatch(newPassWithScorm(event.target.value));
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("entra")
    this.props.dispatch(newPassWithScorm(this.state.value, this.props.user_profile.name));
    this.setState({ value: "" });
  }
  handleEyeChange(event) {
    this.setState({hide_pass: !this.state.hide_pass});
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.password.game_started && nextProps.password.activity_feedback!=="" && this.state.showModalFeedback===false){
      this.setState({showModalFeedback: true});
    }
    if(nextProps.password.objectives_accomplished.length === OBJECTIVES.length ){
      this.setState({showModalEnd:true});
    }
  }
  componentDidMount(){
    let all_objectives = OBJECTIVES.map((obj, index) => {
      return new Utils.Objective({id:obj.id, progress_measure: obj.progress_measure, score: obj.score});
    });
    this.props.dispatch(addObjectives(all_objectives));
  }
  startGame(){
    this.props.dispatch(startgame());
    this.setState({ value: "", showModalStart: true });
  }
  handleCloseModal(name) {
    if(name === "all"){
      this.setState({showModalFeedback:false, showModalStart: false, showModalInfo: false, showModalEnd: false, showModalProgress: false, showModalReset: false, showModalCredits:false,  showModalStop: false });
    } else {
      let modalname = "showModal" + name;
      this.setState({[modalname]: false});
      if(modalname==="showModalFeedback"){
        this.props.dispatch(resetfeedback());
      } else if(modalname==="showModalEnd"){
        this.props.dispatch(endgame());
      }
    }
  }
  showModal(name){
    let modalname = "showModal" + name;
    this.setState({[modalname]:true});
  }
  requestFullScreen(){
    let fullscreen = false;
    if(document.body.requestFullscreen) {
      document.body.requestFullscreen();
      fullscreen = true;
    } else if(document.body.mozRequestFullScreen) {
      document.body.mozRequestFullScreen();
      fullscreen = true;
    } else if(document.body.webkitRequestFullscreen) {
      document.body.webkitRequestFullscreen();
      fullscreen = true;
    } else if(document.body.msRequestFullscreen) {
      document.body.msRequestFullscreen();
      fullscreen = true;
    }
    if(fullscreen){
      this.setState({isFullScreen:true});
    }
  }
  exitFullscreen() {
    let fullscreen = true;
    if(document.exitFullscreen) {
      document.exitFullscreen();
      fullscreen = false;
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      fullscreen = false;
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      fullscreen = false;
    } else if (document.msExitFullscreen) {
    	document.msExitFullscreen();
      fullscreen = false;
    }
    if(!fullscreen){
      this.setState({isFullScreen:false});
    }
  }
  render(){
    let showDarkLayer = this.state.showModalStart || this.state.showModalInfo || this.state.showModalProgress || this.state.showModalReset || this.state.showModalStop || this.state.showModalEnd || this.state.showModalCredits;
    return (
      <div id="container">
        <div className="main_header">
          <img className="pass_check_logo" src={UI.app_logo}/>
          <div className="educalab">
            <p className="text_educalab">{UI.educalab_text}</p>
            <img className="educalab_logo" src={UI.educalab_logo}/>
          </div>
        </div>
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <Header isFullScreen={this.state.isFullScreen} requestFullScreen={this.requestFullScreen} exitFullscreen={this.exitFullscreen} showModal={this.showModal} startGame={this.startGame} game_started={this.props.password.game_started} objectives_accomplished={this.props.password.objectives_accomplished} user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <ModalStart show={this.state.showModalStart} handleClose={this.handleCloseModal}/>
        <ModalInfo show={this.state.showModalInfo} handleClose={this.handleCloseModal}/>
        <ModalProgress game_ended={this.props.password.game_ended} objectives_accomplished={this.props.password.objectives_accomplished} show={this.state.showModalProgress} handleClose={this.handleCloseModal} />
        <ModalReset game_ended={this.props.password.game_ended} dispatch={this.props.dispatch} show={this.state.showModalReset} handleClose={this.handleCloseModal} resetState={this.resetState}/>
        <ModalStop game_ended={this.props.password.game_ended} resetState={this.resetState} dispatch={this.props.dispatch} objectives_accomplished={this.props.password.objectives_accomplished} show={this.state.showModalStop} handleClose={this.handleCloseModal} />
        <ModalFeedback activity_feedback={this.props.password.activity_feedback} activity_video={this.props.password.activity_video} show={this.state.showModalFeedback} handleClose={this.handleCloseModal}/>
        <ModalEnd number_of_tries={this.props.password.number_of_tries} tracking={this.props.tracking} show={this.state.showModalEnd} handleClose={this.handleCloseModal}/>
        <MyEntry handleSubmit={this.handleSubmit} password={this.props.password.password} contains={this.props.password.contains} conclussion={this.props.password.conclussion} handleInputChange={this.handleInputChange} handleEyeChange={this.handleEyeChange} value={this.state.value} hide_pass={this.state.hide_pass} dispatch={this.props.dispatch} user_profile={this.props.user_profile} config={GLOBAL_CONFIG}/>
        <Feedback hide_pass={this.state.hide_pass} password={this.props.password.password} sequence={this.props.password.sequence} conclussion={this.props.password.conclussion} recommendations={this.props.password.recommendations} crack_times_display={this.props.password.crack_times_display}/>
        <ModalCredits show={this.state.showModalCredits} handleClose={this.handleCloseModal} />
        <Dark show={showDarkLayer} onClick={() => this.handleCloseModal("all")}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
