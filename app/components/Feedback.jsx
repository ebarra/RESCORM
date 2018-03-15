import React from 'react';
import MoreInfo from './MoreInfo.jsx';
import {CONCLUSSION_TEXTS} from '../constants/constants';


export default class Feedback extends React.Component {
  constructor(props){
    super(props);
   }

   render(){
     if(this.props.password !==""){
         return (
          <div className="">
              <div className="pass_info">
                  <div className="panel-heading">
                    <h3 className="panel-title">Información sobre la contraseña introducida: {this.props.hide_pass ? "": <b>{this.props.password}</b>}
                    </h3>
                  </div>
                  <div className="panel-body">
                    <p>La contraseña se tardaría en romper:</p>
                    # En un ataque offline. Esto es si se roba la base de datos de contraseñas cuanto se tarda en adivinar la que has escrito:
                    <b>{this.props.crack_times_display.offline_slow_hashing_1e4_per_second}</b><br/>
                    # En un ataque online a 10 contraseñas por segundo:
                    <b>{this.props.crack_times_display.online_no_throttling_10_per_second}</b>

                    <br/>
                    # En un ataque online a 100 contraseñas por hora:
                    <b>{this.props.crack_times_display.online_throttling_100_per_hour}</b><br/>
                    <br/>

                    Más información:
                    <div>
                      {this.props.sequence.map((seq, index) => {
                          return (<MoreInfo sequence_size={this.props.sequence.length} seq={seq} index={index} hide_pass={this.props.hide_pass} key={index}/>);
                        })}
                    </div>

                    <div>Recomendaciones:</div>
                    {this.props.recommendations.map((rec, index) => {
                        return (<div key={index}>{rec}</div>);
                      })}
                    <br/>

                    <div>Conclusión: {CONCLUSSION_TEXTS[this.props.conclussion]}</div>
                    <div>Otras recomendaciones generales: no utilice palabras del diccionario como contraseñas, a ser posible que su contraseña no contenga su nombre de usuario, ...</div>

                  </div>
                </div>
          </div>
        );
    } else {
      return (
       <div className="">
         comprueba la fortaleza de tus contraseñas con passcheck una webapp de educalab
       </div>
       );
    }
  }
}
