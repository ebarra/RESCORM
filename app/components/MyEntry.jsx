import React from 'react';
import Icon from './Icon.jsx';

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
            <div className="input_box">

              <div className="input_case">
                <input className="my_input" type={this.props.hide_pass ? 'password':'text'} autoComplete="off" id="mypassword" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.props.value} onChange={this.props.handleInputChange} />
                 { this.props.hide_pass ? eye_closed: eye_open }
              </div>
              {/*<button type="submit" >Comprobar</button>*/}
              <div className="eye_box">  
                <Icon className="control control_eye"  viewBox="0 0 63.4 40.4" onClick={this.props.startGame} icon="eye"/>
              </div>
              <div className="check_box">
                <Icon className="control control_check" viewBox="0 0 45.5 41.7" onClick={this.props.startGame} icon="check"/>
              </div>
            </div>

              {this.props.password && <div>Barrita amarilla llena hasta el: {this.props.conclussion}</div>}
              <div className="character_box">
                <span className={this.props.password ? "bright":"dark"}>{this.props.password && this.props.password.length} caracteres</span>
                <span className={this.props.contains.lowercase? "bright":"dark"}> minúsculas</span>
                <span className={this.props.contains.uppercase? "bright":"dark"}> mayúsculas</span>
                <span className={this.props.contains.numbers? "bright":"dark"}> números</span>
                <span className={this.props.contains.special? "bright":"dark"}> símbolos</span>
                <span className={this.props.contains.spaces? "bright":"dark"}> espacios</span> 
              </div>
              {this.props.password && <div>{text}</div>}
      </form>
    );
  }
}
