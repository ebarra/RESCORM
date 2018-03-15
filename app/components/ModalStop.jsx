import React from 'react';
import {resetgame} from '../reducers/actions.jsx';
import {OBJECTIVES} from '../config/objectives.js';


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
        modalcontent = arr.concat(OBJECTIVES.map((obj, index)=>{
           return this.props.objectives_accomplished.some(e => e.id === obj.id) ?
              null : <div key={index}><i className="glyphicon glyphicon-ok"></i>{obj.desc}</div>;
          }));
      }
      return (
        <div className={"modal-content " + (this.props.show ? "show":"hide")} role="document">
          <div className="modal-header">
            <button type="button" className="close"  onClick={()=>this.props.handleClose("Stop")}><span aria-hidden="true">×</span></button>
            <h4 className="modal-title">Finalizar la prueba</h4>
            </div>
            <div className="modal-body">
              {modalcontent}
            </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-default" onClick={()=>this.props.handleClose("Stop")}>Continuar</button>
             <button type="button" className="btn btn-default" onClick={this.resetGame}>Finalizar</button>
           </div>
         </div>
     );
   }
 }
