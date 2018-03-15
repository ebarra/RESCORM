import React from 'react';
import {OBJECTIVES} from '../config/objectives.js';

export default class ModalStart extends React.Component {
  constructor(props){
    super(props);
   }

   render() {
     return (
       <div className={"modal-content " + (this.props.show ? "show":"hide")} role="document">
         <div className="modal-header">
           <button type="button" className="close"  onClick={()=>this.props.handleClose("Start")}><span aria-hidden="true">×</span></button>
           <h4 className="modal-title">Empieza la prueba</h4>
           </div>
           <div className="modal-body">
             <div className="objectives">
               {OBJECTIVES.map((obj, index)=>{
                   let icon = <i className="glyphicon glyphicon-ok"></i>;
                   return <div key={index}>{icon}{obj.desc}</div>;
                 })
               }
             </div>
             <h4>Para comprobar la contraseña pulsa intro o haz click en el botón de check. Tienes todos los intentos que necesites. los controles son muy sencillos:</h4>
             <div>
               explicación botones
             </div>
           </div>
        </div>
    );
  }
}
