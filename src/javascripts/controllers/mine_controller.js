
import mine_controller from '../view/mine.html';

const render = () => {
    document.querySelector('.main').innerHTML = mine_controller;
    console.log('mine_controller is ok');
}

export default {
    render
}