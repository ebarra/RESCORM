import React from 'react';
import {resetgame} from '../reducers/actions.jsx';
import {OBJECTIVES} from '../config/objectives.js';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import {UI} from '../config/config.js';

export default class ModalStop extends React.Component {
    constructor(props){
      super(props);
      this.resetGame = this.resetGame.bind(this);
    }
    resetGame(){
      this.props.handleClose("Stop");
      this.props.dispatch(resetgame());
      this.props.resetState();
    }
    render() {
      let modalcontent;
      if(this.props.game_ended){
        modalcontent = <span>¿Quieres volver a intentar la prueba?</span>;
      } else {
        let arr = [<span key="700">¿Estás seguro de que quieres parar y finalizar la prueba? Todavía tienes algunas preguntas sin contestar:</span>]
        modalcontent = arr.concat(OBJECTIVES.map((obj, index) => {
           return this.props.objectives_accomplished.some(e => e.id === obj.id) ?
              null : <div key={index}><i className="glyphicon glyphicon-ok"></i>{obj.desc}</div>;
          }));
      }
      return (
        <Modal show={this.props.show} >
            <div className={"modal-box " + (this.props.show ? "show":"hide")} role="document">
               <div className="close-modal-cross">
                  <Icon className="control control_cross" onClick={ () => this.props.handleClose("Stop")} icon="cross"/>
              </div>
                <div className="modal-content">
              <div className="modal-title">finalizar la prueba</div>
                <div className="modal-text">
                  {/*<p>¿estás seguro de que quieres parar y finalizar la prueba? todavía tienes contraseñas sin crear:</p>*/}
                </div>
                <div className="task-list">
                  {modalcontent}
                </div>
               <div className="modal-actions">
                  <div className="btn btn-red" onClick={ () => this.props.handleClose("Stop")}>cancelar</div>
                  {this.props.game_ended ?
                    <div className="btn btn-green" onClick={UI.with_reset_button ? this.resetGame:this.finishGame}>aceptar</div> :
                    <div className="btn btn-green" onClick={this.endGame}>aceptar</div>
                  }
                </div>
               </div>
             </div>
       </Modal>
     );
   }
 }
