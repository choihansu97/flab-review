import { CreateRouter } from './router.js';
import { setupWorker } from 'msw';
import { handlers } from './handlers';

const worker = setupWorker(...handlers);
worker.start();

const router = new CreateRouter();
const container = document.querySelector('#app');

const pages = {
    home: () => (container.innerText = 'home'),
    detail: () => (container.innerHTML = 'detail'),
    posts: ({ id }) => (container.innerHTML = `posts ${id}`),
    notFoundComponent: () => (container.innerText = '404 Not Found'),
};

router
    .addRoute('/', pages.home)
    .addRoute('/home', pages.home)
    .addRoute('/detail', pages.detail)
    .addRoute('/posts/:id', pages.posts)
    .setNotFound(pages.notFoundComponent)
    .start();
