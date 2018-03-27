import React from 'react';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import {UI} from '../config/config.js';

export default class ModalEnd extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Modal show={this.props.show} >
         <div className={"modal-box " + (this.props.show ? "show":"hide")} role="document">
              <div className="close-modal-cross">
                <Icon className="control control_cross" onClick={ () => this.props.handleClose("End")} icon="cross"/>
              </div>
              <div className="modal-content">
                <div className="modal-title modal-title-end">¡enhorabuena! terminaste</div>
           <div className="modal-body">
             <div>{this.props.number_of_tries} Intentos</div>
             <div>{(this.props.tracking.progress_measure * 100) + "%"} Progreso</div>
             <div>{(this.props.tracking.score * 100) + "%"} Puntos</div>
             <h4>Eres un crack. ¡A tí no hay quien te engañe!</h4>
             <div>
               Sabemos que no necesitas que te enseñemos cómo crear contraseñas seguras, pero aquí te dejamos un pequeño video por si quieres saber más:
             </div>
              <div className="responsive_video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GKSRyLdjsPA" frameBorder="0" allow="encrypted-media" allowFullScreen />
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
