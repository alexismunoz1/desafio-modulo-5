import { state } from "../../state";

export function init(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");

	let counter = 3;
	const countdown = setInterval(() => {
		counter--;
		const counterEl = div.querySelector(".counter-el");
		counterEl.textContent = String(counter);

		if (counter <= 0) {
			clearInterval(countdown);
			params.goTo("/rules");
		}
	}, 1000);

	div.innerHTML = `
	<h1>Game</h1>
	<div class="counter-el">${counter}</div>  
	<div class="hands">
		<hand-scissor class="scissor"></hand-scissor>
		<hand-stone class="stone"></hand-stone>
		<hand-paper class="paper"></hand-paper>
	</div>
    `;

	const handsCont = div.querySelector(".hands").children;
	for (const hands of handsCont) {
		hands.addEventListener("click", () => {
			clearInterval(countdown);
			const type = hands.getAttribute("class");

			if (type == "scissor") {
				state.setMove("tijera");
			} else if (type == "stone") {
				state.setMove("piedra");
			} else {
				state.setMove("papel");
			}

			params.goTo("/results");
		});
	}

	return div;
}
