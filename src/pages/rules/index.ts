const rules = require("url:../../assets/rules.svg");

export function init(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");

	div.innerHTML = `
        <img class="img-rules" src="${rules}">
        <button-comp class="btn-comp">¡jugar!</button-comp>
        <hand-scissor></hand-scissor>
        <hand-stone></hand-stone>
        <hand-paper></hand-paper>

    `;

	style.innerHTML = `
    .img-rules {
        height: 240px;
    }
    `;

	const button = div.querySelector(".btn-comp");
	button.addEventListener("click", () => {
		params.goTo("/desafio-modulo-5/game");
	});
	div.appendChild(style);
	return div;
}
