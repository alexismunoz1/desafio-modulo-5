import { init as initWelcome } from "./pages/welcome";
import { init as initRules } from "./pages/rules";
import { init as initGame } from "./pages/game";
import { init as initResults } from "./pages/results";

const routes = [
	{
		path: /\/welcome/,
		component: initWelcome,
	},
	{
		path: /\/rules/,
		component: initRules,
	},
	{
		path: /\/game/,
		component: initGame,
	},
	{
		path: /\/results/,
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

	if (location.pathname == "/") {
		goTo("/welcome");
	} else {
		handleRoute(location.pathname);
	}
}