import React from 'react';
import MoreInfo from './MoreInfo.jsx';
import {CONCLUSSION_TEXTS} from '../constants/constants';
import {UI} from '../config/config';


export default class Feedback extends React.Component {
  constructor(props){
    super(props);
   }

   render(){
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

    const mainBoxStyle = {
      height: 'calc(100vh - 30em)',
      transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      }

    let pass_info = (
      <div className="pass_info">
        <div className="panel-heading">
          <h3 className="panel-title">información sobre la contraseña introducida: {this.props.hide_pass ? "": <b>{this.props.password}</b>}
          </h3>
        </div>
        <div className="panel-body">
          <p>la contraseña se tardaría en romper:</p>
          # en un ataque offline. esto es si se roba la base de datos de contraseñas cuanto se tarda en adivinar la que has escrito:
          <b>{this.props.crack_times_display.offline_slow_hashing_1e4_per_second}</b><br/>
          # en un ataque online a 10 contraseñas por segundo:
          <b>{this.props.crack_times_display.online_no_throttling_10_per_second}</b>

          <br/>
          # en un ataque online a 100 contraseñas por hora:
          <b>{this.props.crack_times_display.online_throttling_100_per_hour}</b><br/>
          <br/>

          más información:
          <div>
            {this.props.sequence.map((seq, index) => {
                return (<MoreInfo sequence_size={this.props.sequence.length} seq={seq} index={index} hide_pass={this.props.hide_pass} key={index}/>);
              })}
          </div>

          <div>recomendaciones:</div>
          {this.props.recommendations.map((rec, index) => {
              return (<div key={index}>{rec}</div>);
            })}
          <br/>

          <div>conclusión: {CONCLUSSION_TEXTS[this.props.conclussion]}</div>
          <div>otras recomendaciones generales: no utilices palabras del diccionario como contraseñas, a ser posible que su contraseña no contenga su nombre de usuario, ...</div>

        </div>
    </div>
    );

    let main_text = <div className="main_text">{UI.initial_text}</div>;
  
    return (
      <div>
          <div className={"password_feedback " + level} style={{opacity: this.props.password !=="" ? 1 : 0}}>{text}</div>
          <div className={this.props.password !=="" ? "main_box with_feedback" : "main_box"}>
              {(this.props.password !=="") ? pass_info : main_text}
          </div>    
      </div>
    );
  }
}
