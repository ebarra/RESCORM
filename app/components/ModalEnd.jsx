import React from 'react';
import Modal from './Modal.jsx';

export default class ModalEnd extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Modal show={this.props.show} >
         <div className={"modal-content " + (this.props.show ? "show":"hide")} role="document">
           <div className="modal-header">
              <button type="button" className="close"  onClick={()=>this.props.handleClose("End")}><span aria-hidden="true">×</span></button>
              <h4 className="modal-title">¡Enhorabuena, terminaste!</h4>
           </div>
           <div className="modal-body">
             <div>{this.props.number_of_tries} Intentos</div>
             <div>{(this.props.tracking.progress_measure * 100) + "%"} Progreso</div>
             <div>{(this.props.tracking.score * 100) + "%"} Puntos</div>
             <h4>Eres un crack. ¡A tí no hay quien te engañe!</h4>
             <div>
               Sabemos que no necesitas que te enseñemos cómo crear contraseñas seguras, pero aquí te dejamos un pequeño video por si quieres saber más:
             </div>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/4Ips1NTpG_o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
           </div>
        </div>
      </Modal>
    );
  }
}
