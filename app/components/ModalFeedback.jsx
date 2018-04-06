import React from 'react';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import {UI} from '../config/config';

export default class ModalFeedback extends React.Component {
  constructor(props){
    super(props);
   }
   componentWillReceiveProps(nextProps){
     if(this.props.show === true && nextProps.show === false){
       //reset youtube video src to stop it when modal closes
       let mysrc = this.youtube.src;
       this.youtube.src = "";
       this.youtube.src = mysrc;     }
   }
   render() {
     return (
      <Modal show={this.props.show}>

        <div className={"modal-box " + (this.props.show ? "show":"hide")} role="document">
          <div className="close-modal-cross">
            <Icon className="control control_cross" onClick={ () => this.props.handleClose("Feedback")} icon="cross"/>
          </div>
          <div className="modal-content">
            <div className="modal-title">¿necesitas ayuda?</div>
            <div className="modal-text">
              <p>{this.props.activity_feedback}</p>
              <p>te enseñamos a poner contraseñas:</p>
              <div className="responsive_video">
                <iframe ref={(youtube) => { this.youtube = youtube; }} width="560" height="315" src="https://www.youtube.com/embed/mq3M3H1cb0s?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
            </div>
            <div className="modal-actions">
              <div className="btn btn-red" onClick={() => this.props.handleClose("Feedback")}>cerrar</div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
