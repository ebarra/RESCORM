import React from 'react';
import {resetgame, endgame} from '../reducers/actions.jsx';
import {OBJECTIVES} from '../config/objectives.js';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import {UI} from '../config/config.js';

export default class ModalStop extends React.Component {
    constructor(props){
      super(props);
      this.resetGame = this.resetGame.bind(this);
      this.finishGame = this.finishGame.bind(this);
    }
    resetGame(){
      this.props.handleClose("Stop");
      this.props.dispatch(resetgame());
      this.props.resetState();
    }
    finishGame(){
      this.props.handleClose("Stop");
      this.props.dispatch(endgame());
      this.props.resetState();
    }
    render() {
      let modalcontent;
      let modaltext;
      if(this.props.game_ended){
        modaltext = <p>¿quieres volver a intentar la prueba?</p>;
      } else {
        modaltext = [<p key={0}>¿estás seguro de que quieres parar y finalizar la prueba? todavía tienes contraseñas pendientes:</p>]
        modalcontent = OBJECTIVES.map((obj, index) => {
           return <div className="individual_task" key={index}><span className="individual_task_text">{obj.desc}</span><div className="task-icons"><Icon className={this.props.objectives_accomplished.some(e => e.id === obj.id) ? "control control_feedback control_right right" : "control control_feedback control_right"} icon="tick"/></div></div>;
          });
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
                      {modaltext}
                    <div className="task-list">
                      {modalcontent}
                    </div>
                  </div>
                  <div className="modal-actions">
                    <div className="btn btn-red" onClick={ () => this.props.handleClose("Stop")}>cancelar</div>
                    {this.props.game_ended ?
                      <div className="btn btn-green" onClick={UI.with_reset_button ? this.resetGame:this.finishGame}>aceptar</div> :
                      <div className="btn btn-green" onClick={this.finishGame}>aceptar</div>
                    }
                  </div>
               </div>
             </div>
       </Modal>
     );
   }
 }
