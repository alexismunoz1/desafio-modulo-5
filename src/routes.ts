import { init as initWelcome } from "./pages/welcome";
import { init as initRules } from "./pages/rules";
import { init as initGame } from "./pages/game";
import { init as initResults } from "./pages/results";

const routes = [
	{
		path: /\/desafio-m5\/welcome/,
		component: initWelcome,
	},
	{
		path: /\/desafio-m5\/rules/,
		component: initRules,
	},
	{
		path: /\/desafio-m5\/game/,
		component: initGame,
	},
	{
		path: /\/desafio-m5\/results/,
		component: initResults,
	},
];

export function initRouter(container: Element) {
	function goTo(path) {
		history.pushState({}, "", path);
		handleRoute(path);
	}

	function handleRoute(route) {
		container.innerHTML = ``;
		routes.find((r) => {
			if (r.path.test(route)) {
				const el = r.component({ goTo: goTo });
				container.appendChild(el);
			}
		});
	}

	if (location.pathname == "/apx-desafio-m5/") {
		goTo("/apx-desafio-m5/welcome");
	  } else {
		handleRoute(location.pathname);
	  }
}
