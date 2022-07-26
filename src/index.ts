import { initRouter } from "./routes";
import "./components/button";
import "./components/papel";
import "./components/piedra";
import "./components/tijera";

(function () {
   const root = document.querySelector(".root") as Element;
   initRouter(root);
})();
