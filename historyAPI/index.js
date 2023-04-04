import {CreateRouter} from "./router.js";

const router = CreateRouter();
const container = document.querySelector("#app");

const pages = {
    home: () => (container.innerText = "home"),
    detail: (id) => (id) ? (container.innerHTML = `detail ${id}`)
        : container.innerHTML = `detail`,
    notFoundComponent: () => (container.innerText = "404 Not Found"),
};

router
.addRoute("/", pages.home)
.addRoute("/home", pages.home)
.addRoute("/detail", pages.detail)
.addRoute("/posts/:id", (params) => pages.detail(params.id))
.setNotFound(pages.notFoundComponent)
.start();