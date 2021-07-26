import { state } from "../../state";
const imgTitle = require("url:../../assets/imgWelcome.svg");

export function init(params) {
	const div = document.createElement("div");
	div.classList.add("page");

	div.innerHTML = `
    <img class="ppt-img" src="${imgTitle}" alt="">
    <button-comp class="btn-comp">Empezar</button-comp>
    <hand-scissor></hand-scissor>
    <hand-stone></hand-stone>
    <hand-paper></hand-paper>
    `;

	const style = document.createElement("style");
	style.innerHTML = `
        .ppt-img {
            width: 284px;
        }
    `;

	const button = div.querySelector(".btn-comp");
	button.addEventListener("click", () => {
		params.goTo("/rules");
	});
	div.appendChild(style);
	return div;
}
