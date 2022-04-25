import React from 'react'

export default class Game extends React.Component {
   constructor() {
      super();
      this.frames = [];
   }

   static create = () => new Game();



   score = () => {
      let DataScoreFrame = [];
      let score = 0;
      let frameIndex = 0;
  
      const round1 = () => this.frames[frameIndex];
      const round2 = () => this.frames[frameIndex + 1];
      const round3 = () => this.frames[frameIndex + 2];

      const sumOfFrameRolls = () => round1() + round2() + round3();

      const spareScore = () => round3();

      const strikeBonus = () => round2() + round3();
  
      const isStrike = () => round1() === 15;
  
      const isSpare = () => sumOfFrameRolls() === 15;

      const saveScoreFrame = (DataScoreFrame, turn1, turn2, turn3, score) => {
         if (DataScoreFrame.length < 9) {
            DataScoreFrame.push({
               turn1,
               turn2,
               turn3,
               cumulativeScore: score,
             
            });
        } else {
          const box1 = round1() === 15 ? "X" : round1();
          const box2 = round2() === 15 ? "X" : isSpare() ? "/" : round2();
          let box3;
          if (round3() === 15) {
            box3 = "X";
          } else if (round1() === 15 || round1() + round2() === 15) {
            box3 = round3();
          } else {
            box3 = "";
          }
  
          DataScoreFrame.push({
            turn1: box1,
            turn2: box2,
            cumulativeScore: score,
            turn3: box3
          });
        }
      };
  
      [...Array(10)].forEach((_, frame) => {
        if (isStrike()) {
          score += 10 + strikeBonus();
          saveScoreFrame(DataScoreFrame, "", "X", score, 10);
          frameIndex++;
        } else if (isSpare()) {
          score += 10 + spareScore();
          saveScoreFrame(DataScoreFrame, round1(), "/", score, 10);
          frameIndex += 2;
        } else {
          score += sumOfFrameRolls();
          const pinsUp = round2() !== undefined ? 10 : 10 - round1();
          saveScoreFrame(DataScoreFrame, round1(), round2(), score);
          frameIndex += 2;
        }
      });
  
      return saveScoreFrame;
    };
}