type Jugada = "piedra" | "papel" | "tijera";

const state = {
	data: {
		currentGame: {
			myPlay: "",
			computerPlay: "",
		},
		history: {
			myScore: 0,
			computerScore: 0,
		},
	},

	getStorage() {
		if (localStorage.getItem("data")) {
			const localS = JSON.parse(localStorage.getItem("data"));
			this.data.history = localS;
			console.log("soy local", localS);
			console.log("soy this.data", this.data);
		}
	},

	getState() {
		if (localStorage.getItem("data")) {
			this.data.history = JSON.parse(localStorage.getItem("data"));
		}
		return this.data;
	},

	setState(newState) {
		this.data = newState;
	},

	setMove(move: Jugada) {
		const currentState = this.getState();
		currentState.currentGame.myPlay = move;

		const manos = ["tijera", "piedra", "papel"];
		currentState.currentGame.computerPlay = manos[Math.floor(Math.random() * 3)];
		this.setHistory();
	},

	whowins() {
		const currentState = this.getState();
		const jugada = currentState.currentGame;

		const empate = [
			jugada.myPlay == "tijera" && jugada.computerPlay == "tijera",
			jugada.myPlay == "piedra" && jugada.computerPlay == "piedra",
			jugada.myPlay == "papel" && jugada.computerPlay == "papel",
		];

		if (empate.includes(true)) {
			return "empate";
		}

		const juego = [
			jugada.myPlay == "tijera" && jugada.computerPlay == "papel",
			jugada.myPlay == "piedra" && jugada.computerPlay == "tijera",
			jugada.myPlay == "papel" && jugada.computerPlay == "piedra",
		];

		if (juego.includes(true)) {
			return "victoria";
		} else {
			return "derrota";
		}
	},

	setHistory() {
		const currentWhoWins = this.whowins();
		const currentState = this.getState();
		const myScore = currentState.history.myScore;
		const computerScore = currentState.history.computerScore;

		if (currentWhoWins == "victoria") {
			this.setState({
				...currentState,
				history: {
					myScore: myScore + 1,
					computerScore: computerScore,
				},
			});
		}
		if (currentWhoWins == "derrota") {
			this.setState({
				...currentState,
				history: {
					myScore: myScore,
					computerScore: computerScore + 1,
				},
			});
		}

		this.savedData();
	},

	savedData() {
		const currentState = this.getState().history;
		localStorage.setItem("data", JSON.stringify(currentState));
	},

	cleanData() {
		localStorage.clear();
		localStorage.setItem(
			"data",
			JSON.stringify({
				myScore: 0,
				computerScore: 0,
			})
		);
	},
};
export { state };
