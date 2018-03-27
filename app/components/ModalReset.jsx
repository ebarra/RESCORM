import React from 'react';
import {resetgame} from '../reducers/actions.jsx';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import {UI} from '../config/config.js';

export default class ModalReset extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
   }
   handleClick(){
         this.props.handleClose("Reset");
         this.props.dispatch(resetgame());
         this.props.resetState();
      }
   render() {
     return (
       <Modal show={this.props.show} >
         <div className={"modal-box " + (this.props.show ? "show":"hide")} role="document">
          <div className="close-modal-cross">
            <Icon className="control control_cross" onClick={ () => this.props.handleClose("Reset")} icon="cross"/>
          </div>
            <div className="modal-content">
              <div className="modal-title">reiniciar la prueba</div>
                <div className="modal-text">
                  {this.props.game_ended ?
                  <span>¿Quieres volver a intentar la prueba?</span>:
                  <span>¿Estás seguro de que quieres reiniciar la prueba? Esta acción eliminará todo tu progreso.</span>
                  }
                </div>
              <div className="modal-actions">
                <div className="btn btn-red" onClick={() => this.props.handleClose("Reset")}>cancelar</div>
                <div className="btn btn-green" onClick={this.handleClick}>aceptar</div>
              </div>
            </div>
        </div>
      </Modal>
    );
  }
}
