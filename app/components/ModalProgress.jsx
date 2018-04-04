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

    let progress = this.props.objectives_accomplished.length;

    return (
      <Modal show={this.props.show} >
       <div className={"modal-box " + (this.props.show ? "show":"hide")} role="document">
            <div className="close-modal-cross">
              <Icon className="control control_cross" onClick={ () => this.props.handleClose("Progress")} icon="cross"/>
            </div>

            <div className="modal-content">
              <div className="modal-title">progreso de la prueba</div>
           
              <div className="modal-text">
                <p>{UI.progress_text} {progress}/{OBJECTIVES.length}</p>
                <div className="task-list">
                 {OBJECTIVES.map((obj, index) => {
                     return <div className="individual_task" key={index}><span className="individual_task_text">{obj.desc}</span><div className="task-icons"><Icon className={this.props.objectives_accomplished.some(e => e.id === obj.id) ? "control control_feedback control_right right" : "control control_feedback control_right"} icon="tick"/></div></div>;
                   })
                 }
               </div>
               {this.props.game_ended && <div>has terminado la prueba. puedes reiniciarla y volver a intentarlo.</div>}
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
