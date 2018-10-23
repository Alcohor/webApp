import peopleIfm_controller from '../view/people_ifm.html'

const render = () =>{
    document.querySelector('#root').innerHTML = peopleIfm_controller;

}

export default {
    render
}