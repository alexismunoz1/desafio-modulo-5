import { state } from "../../state";

const resultImages = {
	tie: require("url:../../assets/empate.svg"),
	win: require("url:../../assets/ganaste.svg"),
	loose: require("url:../../assets/perdiste.svg"),
};

export function init(params) {
	const div = document.createElement("div");
	div.className = "result-cont";
	const style = document.createElement("style");

	const resultado = state.whowins();

	let imagen;
	if (resultado == "empate") {
		imagen = resultImages.tie;
		style.innerHTML = `
		.result-cont {
			background: var(--fondo-gris);  
		}`;
	}
	if (resultado == "victoria") {
		imagen = resultImages.win;
		style.innerHTML = `
		.result-cont {
			background: var(--fondo-verde);  
		}`;
	} else if (resultado == "derrota") {
		imagen = resultImages.loose;
		style.innerHTML = `
		.result-cont {
			background: var(--fondo-rojo);
		}`;
	}

	const currentState = state.getState();
	div.innerHTML = `
	 <img class="img-win" src="${imagen}">
	 <div class="Score">
		<h4>Score</h4>
		<p class="vos">Vos: ${currentState.history.myScore}</p>
		<p class="maquina">Máquina: ${currentState.history.computerScore}</p>
   	 </div>
	 <button-comp class="button-back">Volver a jugar</button-comp>
	 <button-comp class="button-clean">Reiniciar puntajes</button-comp>
	`;

	const buttonBack = div.querySelector(".button-back");
	buttonBack.addEventListener("click", () => {
		params.goTo("/game");
	});

	const buttonClean = div.querySelector(".button-clean");
	buttonClean.addEventListener("click", () => {
		state.cleanData();
		params.goTo("/rules");
	});

	div.appendChild(style);
	return div;
}
