import createResume_template from '../view/createResume.html'

const render = () =>{
    
    document.querySelector('#root').innerHTML = createResume_template;

}

export default {render };