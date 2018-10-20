
import mine_controller from '../view/mine.html';

const render = () => {
    document.querySelector('.main').innerHTML = mine_controller;
    
}

export default {
    render
}