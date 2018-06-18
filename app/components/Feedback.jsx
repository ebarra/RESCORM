import React from 'react';
import MoreInfo from './MoreInfo.jsx';
import {CONCLUSSION_TEXTS} from '../constants/constants';
import {UI, TIPS} from '../config/config';


export default class Feedback extends React.Component {
  constructor(props){
    super(props);
    this.state = {show_tip: false, tip_to_show: "", show_hover:false, hover_to_show: 0}
    this.showHover = this.showHover.bind(this);
    this.hideHover = this.hideHover.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
   }
   componentWillReceiveProps(nextProps){
     if(nextProps.show_tip===true && this.props.show_tip===false){
       //recently changed to true -> generate random tip and save it
       this.setState({show_tip: true, tip_to_show: TIPS[Math.floor(Math.random()*TIPS.length)]});
     }
     if(nextProps.show_tip===false && this.props.show_tip===true){
       this.setState({show_tip:false})
     }
   }
   showHover(num){
     this.setState({show_hover:true, hover_to_show: num});
   }
   hideHover(){
     this.setState({show_hover:false, hover_to_show: 0});
   }
   toggleHover(num){
     this.setState({show_hover:!this.state.show_hover, hover_to_show: num});
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

        <div className="pass_info_title">información sobre la contraseña introducida: {this.props.hide_pass ? "": <span className="pass_password">{this.props.password}</span>}
        </div>

        <div className="pass_info_body">

          <div className="body_broken_pass">
            <p className="body_broken_pass_title">la contraseña se tardaría en romper:</p>
            <ul>
              <li className="body_broken_pass01"># en un <span className="underline_text" onClick={() =>this.toggleHover(1)} onMouseEnter={() =>this.showHover(1)} onMouseLeave={() =>this.hideHover(1)}>ataque offline</span>: <span className="">{this.props.crack_times_display.offline_slow_hashing_1e4_per_second}</span><div className={"underline_text_explanation " + (this.state.show_hover&&this.state.hover_to_show===1 ? "":"hide")}><span className="triangle"></span><p>este tipo de ataque se produce si se roba la base de datos de contraseñas y se cotejan para adivinar la que pusiste al registrarte. se puede hacer muy muy rápido ya que el hacker tiene la base de datos completa y puede acceder a ella en su máquina/s. hará un ataque de fuerza bruta con diccionarios o palabras y contraseñas comunes seguramente.</p></div></li>
              <li className="body_broken_pass02"># en un <span className="underline_text" onClick={() =>this.toggleHover(2)} onMouseEnter={() =>this.showHover(2)} onMouseLeave={() =>this.hideHover(2)}>ataque online</span> a 10 contraseñas por segundo: <span className="">{this.props.crack_times_display.online_no_throttling_10_per_second}</span><div className={"underline_text_explanation " + (this.state.show_hover&&this.state.hover_to_show===2 ? "":"hide")}><span className="triangle"></span><p>este tipo de ataque se produce si el servicio online permite comprobar 10 contraseñas por segundo (si el servidor no tiene una limitación por seguridad el hacker podrá hacer este tipo de comprobaciones).</p></div></li>
              <li className="body_broken_pass03"># en un <span className="underline_text" onClick={() =>this.toggleHover(3)} onMouseEnter={() =>this.showHover(3)} onMouseLeave={() =>this.hideHover(3)}>ataque online</span> a 100 contraseñas por hora: <span className="">{this.props.crack_times_display.online_throttling_100_per_hour}</span><div className={"underline_text_explanation " + (this.state.show_hover&&this.state.hover_to_show===3 ? "":"hide")}><span className="triangle"></span><p>este tipo de ataque se produce si el servicio online permite comprobar 100 contraseñas por hora (algo bastante típico si el servidor tiene configurada seguridad).</p></div></li>
            </ul>
          </div>

          <div className="body_more_info">
            <p className="body_more_info_title">más información:</p>
            <div className="body_more_info_text">
              {this.props.sequence.map((seq, index) => {
                  return (<MoreInfo sequence_size={this.props.sequence.length} seq={seq} index={index} hide_pass={this.props.hide_pass} key={index}/>);
                })}
            </div>
          </div>

          <div className="body_recommendations">
            <p className="body_recom_title">recomendaciones:</p>
            {this.props.recommendations.map((rec, index) => {return (<p className="body_recom" key={index}>{rec}</p>);
              })}
          </div>

          <div className="body_conclusion">
            <p className="body_conclusion_title">conclusión:</p>
            <p className="body_conclusion_text">{CONCLUSSION_TEXTS[this.props.conclussion]}</p>
          </div>

          <div className="body_other">
            <p className="body_other_title">otras recomendaciones generales:</p>
            <p className="body_other_text">no utilices palabras del diccionario como contraseñas. combina mayúsculas y minúsculas y algún símbolo y número. a ser posible que tu contraseña no contenga tu nombre de usuario. no pongas la misma contraseña en todos los sitios web que utilices. en internet hay muchos blogs y páginas con recomendaciones sobre cómo establecer contraseñas seguras, consúltalos y utiliza tus propios algoritmos.</p>
          </div>

        </div>

      </div>
    );

    let main_text;
    if(this.state.show_tip===false){
      main_text = <div className="main_text">{this.props.game_ended ? UI.final_text:UI.initial_text}</div>
    } else {
      main_text = <div className="main_text tip">{this.state.tip_to_show}</div>;
    }
    return (
      <div>
          <div className={"password_feedback " + level + ((!this.props.show_tip && this.props.password !=="") ? "" : " hide_op")}>{text}</div>
          <div className={(!this.props.show_tip && this.props.password !=="") ? "main_box with_feedback" : "main_box"}>
              {(this.props.show_tip || this.props.password ==="") ? main_text : pass_info }
          </div>
      </div>
    );
  }
}
