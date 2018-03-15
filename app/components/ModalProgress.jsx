import React from 'react';
import {OBJECTIVES} from '../config/objectives.js';

export default class ModalProgress extends React.Component {
  constructor(props){
    super(props);
   }

   render() {
     return (
       <div className={"modal-content " + (this.props.show ? "show":"hide")} role="document">
         <div className="modal-header">
           <button type="button" className="close"  onClick={()=>this.props.handleClose("Progress")}><span aria-hidden="true">×</span></button>
           <h4 className="modal-title">Progreso</h4>
           </div>
           <div className="modal-body">
               <div className="objectives">
                 {OBJECTIVES.map((obj, index)=>{
                     let icon = this.props.objectives_accomplished.some(e => e.id === obj.id) ? <i className="glyphicon glyphicon-ok"></i>: <i className="glyphicon glyphicon-remove"></i>;
                     return <div key={index}>{icon}{obj.desc}</div>;
                   })
                 }
               </div>
               {this.props.game_ended && <div>Has terminado la prueba. Puedes reiniciarla y volver a intentarlo.</div>}
           </div>
        </div>
    );
  }
}
