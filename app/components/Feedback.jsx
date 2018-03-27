import React from 'react';
import MoreInfo from './MoreInfo.jsx';
import {CONCLUSSION_TEXTS} from '../constants/constants';
import {UI} from '../config/config';


export default class Feedback extends React.Component {
  constructor(props){
    super(props);
   }

   render(){
     if(this.props.password !==""){
         return (
          <div className="main_box">
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
          </div>
        );
    } else {
      return (
       <div className="main_box">
         <div className="main_text">{UI.initial_text}</div>
       </div>
       );
    }
  }
}
