import React from 'react';
import Icon from './Icon.jsx';

export default class MyEntry extends React.Component {
  render() {
    let eye_open = <span className="glyphicon glyphicon-eye-open open" onClick={this.props.handleEyeChange}></span>;
    let eye_closed = <span className="glyphicon glyphicon-eye-close closed" onClick={this.props.handleEyeChange}></span>;
    let text, level;
    if(this.props.conclussion===4){
      text = "la contraseña introducida es fuerte";
      level = "secure";
    } else if(this.props.conclussion===3 || this.props.conclussion===2){
      text = "la contraseña introducida es media";
      level = "medium";
    } else {
      text = "la contraseña introducida es débil";
      level = "weak";
    }
    return (
      <form className="form_pass" onSubmit={this.props.handleSubmit}>
            <div className="input_box">

              <div className="input_case">
                <div className="input_text">
                  <input className="main_input" type={this.props.hide_pass ? 'password':'text'} autoComplete="off" id="mypassword" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.props.value} onChange={this.props.handleInputChange} />
                   { this.props.hide_pass ? eye_closed: eye_open }
                </div>
                {/*<button type="submit" >Comprobar</button>*/}
                <div className="eye_box">  
                  <Icon className="control control_eye"  viewBox="0 0 63.4 40.4" onClick={this.props.startGame} icon="eye"/>
                </div>
              </div>

              <div className="check_box">
                <Icon className="control control_check" viewBox="0 0 45.5 41.7" onClick={this.props.startGame} icon="check"/>
              </div>
            </div>

              {this.props.password && <div>Barrita amarilla llena hasta el: {this.props.conclussion}</div>}

              <div className="bar_box">
                <ul className="bars">
                  <li className="bar bar01"></li>
                  <li className="bar bar02"></li>
                  <li className="bar bar03"></li>
                  <li className="bar bar04"></li>
                  <li className="bar bar05"></li>
                  <li className="bar bar06"></li>
                  <li className="bar bar07"></li>
                  <li className="bar bar08"></li>
                  <li className="bar bar09"></li>
                  <li className="bar bar10"></li>
                  <li className="bar bar11"></li>
                  <li className="bar bar12"></li>
                  <li className="bar bar13"></li>
                  <li className="bar bar14"></li>
                  <li className="bar bar15"></li>
                  <li className="bar bar16"></li>
                  <li className="bar bar17"></li>
                  <li className="bar bar18"></li>
                  <li className="bar bar19"></li>
                  <li className="bar bar20"></li>
                </ul>
              </div>

              <div className="character_box">
                <span className={this.props.password ? "bright":"dark"}>{this.props.password && this.props.password.length} caracteres</span>
                <span className={this.props.contains.lowercase? "bright":"dark"}> minúsculas</span>
                <span className={this.props.contains.uppercase? "bright":"dark"}> mayúsculas</span>
                <span className={this.props.contains.numbers? "bright":"dark"}> números</span>
                <span className={this.props.contains.special? "bright":"dark"}> símbolos</span>
                <span className={this.props.contains.spaces? "bright":"dark"}> espacios</span> 
              </div>
              {this.props.password && <div className={"password_feedback " + level}>{text}</div>}
      </form>
    );
  }
}
