import React from 'react';
import {OBJECTIVES} from '../config/objectives.js';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import {UI} from '../config/config.js';

export default class ModalProgress extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Modal show={this.props.show} >
       <div className={"modal-box " + (this.props.show ? "show":"hide")} role="document">
            <div className="close-modal-cross">
              <Icon className="control control_cross" onClick={ () => this.props.handleClose("Progress")} icon="cross"/>
            </div>

            <div className="modal-content">
              <div className="modal-title">progreso de la prueba</div>
           
              <div className="modal-text">
                <p>{UI.progress_text}</p>
                <div className="task-list">
                 {OBJECTIVES.map((obj, index) => {
                     let icon = this.props.objectives_accomplished.some(e => e.id === obj.id) ? <i className="glyphicon glyphicon-ok"></i>: <i className="glyphicon glyphicon-remove"></i>;
                     return <div key={index}>{icon}{obj.desc}</div>;
                   })
                 }
               </div>
               {this.props.game_ended && <div>Has terminado la prueba. Puedes reiniciarla y volver a intentarlo.</div>}
           </div>
              <div className="modal-actions">
                <div className="btn btn-red" onClick={() => this.props.handleClose("Progress")}>cerrar</div>
              </div>
          </div>
        </div>
      </Modal>
    );
  }
}
