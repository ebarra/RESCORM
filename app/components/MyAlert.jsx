import React from 'react';

export default class MyAlert extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
      return (
        <div className={this.state.show ? "show":"hide"}>
          <button type="button" className="close">
            <span aria-hidden="true" onClick={this.handleDismiss}>×</span>
            </button>
          <h4>Esta aplicación no guarda ni almacena tus contraseñas</h4>
          <p>
            No introduzcas tu contraseña real. Este servicio solo tiene fines educativos.
          </p>
        </div>
      );
  }
}
