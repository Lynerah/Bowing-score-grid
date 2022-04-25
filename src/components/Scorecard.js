import '../styles/Scorecard.css'
import React from 'react'
import Game from './Game'
import FillFrame from './TemplateFillFrame';


export default class Scorecard extends React.Component {

   constructor(props) {
      super(props);
      this.game = Game.create();
      this.state = {score: this.game.score()};
   }


   render() {
      const { score } = this.state;
      return(
     
            <div>

               <h2>Joueur</h2>

               <div className="score-board">
                  {[...Array(10)].map((o, i) => (
                     <FillFrame
                        key={i}
                     />
                  ))}
               </div>
           </div>
    
        
      )
   }


}

