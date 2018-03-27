import React from 'react';

export default class MyEntry extends React.Component {
  render() {
    let eye_open = <span className="glyphicon glyphicon-eye-open open" onClick={this.props.handleEyeChange}></span>;
    let eye_closed = <span className="glyphicon glyphicon-eye-close closed" onClick={this.props.handleEyeChange}></span>;
    let text;
    if(this.props.conclussion===4){
      text = "La contraseña introducida es fuerte";
    } else if(this.props.conclussion===3 || this.props.conclussion===2){
      text = "La contraseña introducida es media";
    } else {
      text = "La contraseña introducida es débil";
    }
    return (
      <form className="form_pass" onSubmit={this.props.handleSubmit}>
              <input className="my_input" type={this.props.hide_pass ? 'password':'text'} autoComplete="off" id="mypassword" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.props.value} onChange={this.props.handleInputChange} />
              { this.props.hide_pass ? eye_closed: eye_open }
              <button type="submit" >Comprobar</button><br/>
              {this.props.password && <div>Barrita amarilla llena hasta el: {this.props.conclussion}</div>}
              <span className={this.props.password ? "bright":"dark"}>{this.props.password && this.props.password.length} caracteres</span>
              <span className={this.props.contains.lowercase? "bright":"dark"}> minúsculas</span>
              <span className={this.props.contains.uppercase? "bright":"dark"}> mayúsculas</span>
              <span className={this.props.contains.numbers? "bright":"dark"}> números</span>
              <span className={this.props.contains.special? "bright":"dark"}> símbolos</span>
              <span className={this.props.contains.spaces? "bright":"dark"}> espacios</span> 
              {this.props.password && <div>{text}</div>}
      </form>
    );
  }
}
