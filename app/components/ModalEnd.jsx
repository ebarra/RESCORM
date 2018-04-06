import React from 'react';
import {OBJECTIVES} from '../config/objectives.js';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import {UI} from '../config/config.js';
import {endgame} from './../reducers/actions';


export default class ModalEnd extends React.Component {
  constructor(props){
    super(props);
    this.finishGame = this.finishGame.bind(this);
  }
  finishGame(){
    this.props.handleClose("End");
    this.props.dispatch(endgame());
    this.props.resetState();
  }
  componentWillReceiveProps(nextProps){
    if(this.props.show === true && nextProps.show === false){
      //reset youtube video src to stop it when modal closes
      let mysrc = this.youtube.src;
      this.youtube.src = "";
      this.youtube.src = mysrc;     }
  }
  render(){

    let progress = this.props.objectives_accomplished.length;

    return (
      <Modal show={this.props.show} >
         <div className={"modal-box " + (this.props.show ? "show":"hide")} role="document">
              <div className="close-modal-cross">
                <Icon className="control control_cross" onClick={ () => this.props.handleClose("End")} icon="cross"/>
              </div>
              <div className="modal-content">
                <div className="modal-title modal-title-end">¡enhorabuena! terminaste</div>
           <div className="modal-text">
           <div className="final_score">
           <div className="individual_score"><span className="number_score">{this.props.number_of_tries} </span> <span className="text_score">intentos</span></div>
            <div className="individual_score"><span className="number_score">{progress}/{OBJECTIVES.length}</span> <span className="text_score">aciertos</span></div>
            <div className="individual_score"><span className="number_score">{(this.props.tracking.score * 100)}</span> <span className="text_score">puntos</span></div>
          </div>
             <p>eres un crack. ¡A tí no hay quien te engañe! sabemos que no necesitas que te enseñemos cómo crear contraseñas seguras, pero aquí te dejamos un pequeño video por si quieres saber más:</p>
              <div className="responsive_video">
                <iframe ref={(youtube) => { this.youtube = youtube; }} width="560" height="315" src="https://www.youtube.com/embed/mq3M3H1cb0s?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            </div>
              <div className="modal-actions">
                {UI.with_reset_button ?
                  <div className="btn btn-red" onClick={this.resetClick}>reiniciar</div>:
                  <div className="btn btn-red" onClick={this.finishGame}>terminar</div>}
              </div>
           </div>
        </div>
      </Modal>
    );
  }
}
