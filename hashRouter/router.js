module.exports = function CreateRoute() {
    const route = [];

    const router = {
        addRoute(fragment, component) {
            route.push({fragment, component});
            return this;
        },

        start() {
            const checkRoute = () => {
                const currRoute = route.find(
                    (route) => route.fragment === window.location.hash);
                if (currRoute) {
                    currRoute.component();
                } else {
                    this.setNotFound();
                }
            }

            window.addEventListener('hashchange', checkRoute);
            checkRoute();
        },

        setNotFound() {
            const app = document.querySelector('#hash-app');
            app.innerText = '현재없는 페이지입니다.'
            document.body.appendChild(app)
        }
    }

    return router;
}

