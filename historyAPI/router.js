export function CreateRouter() {
    const routes = [];

    const router = {
        addRoute(fragment, component) {
            const regexFragment = fragment.replace(/:\w+/g, "([^\\/]+)");
            const regex = new RegExp(`^${regexFragment}\\/?$`);

            routes.push({fragment, regex, component});
            return this;
        },

        setNotFound(component) {
            routes.push({fragment: "*", component});
            return this;
        },

        navigate(path) {
            window.history.pushState(null, null, path);
            return this;
        },

        checkRoute() {
            const currentRoute =
                routes.find(
                    (route) => {
                        const match = window.location.pathname.match(route.regex);

                        if (match) {
                            const params = match.slice(1);
                            const paramNames = route.fragment.match(/:\w+/g);
                            if (paramNames) {
                                const paramMap = paramNames.reduce(
                                    (result, paramName, i) => ({
                                        ...result,
                                        [paramName.slice(1)]: params[i],
                                    }), {});
                                route.paramMap = paramMap;
                            }
                            return true;
                        }
                        return false;
                    }
                ) || routes.find((route) => route.fragment === "*");

            if (currentRoute.paramMap) {
                const id = currentRoute.paramMap.id;
                return currentRoute.component(currentRoute.paramMap);
            }
            currentRoute.component();
        },

        start() {
            window.addEventListener("click", (event) => {
                if (event.target.nodeName === "A" && event.target.hasAttribute(
                    "href")) {
                    event.preventDefault();

                    this.navigate(event.target.href);
                    this.checkRoute();
                }
            });

            window.addEventListener("popstate", () => {
                this.checkRoute();
            });

            this.checkRoute();
            return this;
        }
    };

    return router;
}
