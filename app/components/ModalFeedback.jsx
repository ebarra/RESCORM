import React from 'react';

export default class ModalFeedback extends React.Component {
  constructor(props){
    super(props);
   }

   render() {
     return (
       <div className={"modal-content " + (this.props.show ? "show":"hide")} role="document">
         <div className="modal-header">
            <button type="button" className="close"  onClick={()=>this.props.handleClose("Feedback")}><span aria-hidden="true">×</span></button>
            <h4 className="modal-title">Feedback</h4>
         </div>
         <div className="modal-body">
            <p id="activity_feedback">{this.props.activity_feedback}</p>
            <p>Te enseñamos a poner contraseñas:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4Ips1NTpG_o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>         </div>
      </div>
    );
  }
}
