import React from 'react';
import {resetgame} from '../reducers/actions.jsx';

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
       <div className={"modal-content " + (this.props.show ? "show":"hide")} role="document">
         <div className="modal-header">
           <button type="button" className="close"  onClick={()=>this.props.handleClose("Reset")}><span aria-hidden="true">×</span></button>
           <h4 className="modal-title">Reiniciar la prueba</h4>
           </div>
           <div className="modal-body">
             {this.props.game_ended ?
               <span>¿Quieres volver a intentar la prueba?</span>:
               <span>¿Estás seguro de que quieres reiniciar la prueba? Esta acción eliminará todo tu progreso.</span>
             }
           </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={()=>this.props.handleClose("Reset")}>Continuar</button>
            <button type="button" className="btn btn-default" onClick={this.handleClick}>Reiniciar</button>
          </div>
      </div>
    );
  }
}
