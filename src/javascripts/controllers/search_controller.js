import search_template from '../view/search.html';

const render = () =>{
    document.querySelector('.main').innerHTML = search_template;
    console.log('search_controller is ok');
}
export default {
    render
}
