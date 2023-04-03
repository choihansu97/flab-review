import './css/style.css';
import about from './about.html';
import CreateRoute from './router.js'

const router = CreateRoute();
const container = document.querySelector('#hash-app');

const page = {
    home: () => container.innerText = '홈입니다.',
    about: () => container.innerHTML = about,
}

router.addRoute('', page.home)
.addRoute('#/', page.home)
.addRoute('#/about', page.about)
.start()
