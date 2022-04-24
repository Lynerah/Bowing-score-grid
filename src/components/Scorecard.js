import '../styles/Scorecard.css'
function Scorecard (){
	return(
		<>
			<h2>Joueur de bowling</h2>
			<div className="grid">
				<div class="frame">
					<div class="score">
						<div class="item turn1"><input type="text" className="run turn1"/></div>
						<div class="item turn2"><input type="text" className="run turn1"/></div>
						<div class="item turn3"><input type="text" className="run turn1"/></div>
					</div>
					<div class="total-score"><span>10</span></div>
				</div>
				<div class="frame">
					<div class="score">
						<div class="item turn1"><input type="text" className="run turn1"/></div>
						<div class="item turn2"><input type="text" className="run turn1"/></div>
						<div class="item turn3"><input type="text" className="run turn1"/></div>
					</div>
					<div class="total-score"><span>10</span></div>
				</div>
				<div class="frame">
					<div class="score">
						<div class="item turn1"><span>2</span></div>
						<div class="item turn2"><span>7</span></div>
						<div class="item turn3"><span>1</span></div>
					</div>
					<div class="total-score"><span>10</span></div>
				</div>
				<div class="frame">
					<div class="score">
						<div class="item turn1"><span>2</span></div>
						<div class="item turn2"><span>7</span></div>
						<div class="item turn3"><span>1</span></div>
					</div>
					<div class="total-score"><span>10</span></div>
				</div>
				<div class="frame">
					<div class="score">
						<div class="item turn1"><span>2</span></div>
						<div class="item turn2"><span>7</span></div>
						<div class="item turn3"><span>1</span></div>
					</div>
					<div class="total-score"><span>10</span></div>
				</div>
			</div>
		</>
	)
}

export default Scorecard