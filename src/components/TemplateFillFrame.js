import React from "react"
import '../styles/Scorecard.css'

export default class FillFrame extends React.Component {


      render() {
         return(
            <div className="grid">
               <div className="frame">
               <div className="frame-turn">{this.frameTurn}</div>
                  <div className="score">
                     <div className="item turn1"><input type="text"  className="run turn1" value={this.turn1}/></div>
                     <div className="item turn2"><input type="text"  className="run turn2" value={this.turn2}/></div>
                     <div className="item turn3"><input type="text"  className="run turn3" value={this.turn3}/></div>
                  </div>
                  <div className="total-score"><span id="Sum">{!isNaN(this.score) && this.score}</span></div>
               </div>
            </div>
         );
                  }
}
