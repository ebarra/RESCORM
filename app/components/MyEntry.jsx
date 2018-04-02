import React from 'react';
import Icon from './Icon.jsx';

export default class MyEntry extends React.Component {
  componentDidMount(){
    this.passInput.focus();
  }
  componentDidUpdate(){
    console.log("reset focus on input field");
    this.passInput.focus();
  }
  render() {
    return (
      <form className="form_pass">
            <div className="input_box">

              <div className="input_case">
                <div className="input_text">
                  <input className="main_input" type={this.props.hide_pass ? 'password':'text'} autoComplete="off" placeholder="Introduce una contraseña para comprobar su fortaleza" value={this.props.value} onChange={this.props.handleInputChange} ref={(input) => { this.passInput = input; }} />

                </div>
                {/*<button type="submit" >Comprobar</button>*/}
                <div className="eye_box">
                  <Icon className={this.props.hide_pass ? "control control_eye":"control control_eye open"}  viewBox="0 0 63.4 40.4" onClick={this.props.handleEyeChange} icon="eye"/>
                </div>
              </div>

              <div className="check_box">
                <Icon className="control control_check" viewBox="0 0 45.5 41.7" onClick={this.props.handleSubmit} icon="check"/>
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
      </form>
    );
  }
}
