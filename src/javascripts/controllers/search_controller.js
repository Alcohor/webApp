import search_template from '../view/search.html';

const render = () =>{
    document.querySelector('.main').innerHTML = search_template;
    
}
export default {
    render
}
