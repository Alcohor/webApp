import home_template from '../view/home.html'

const render = () => {
    document.querySelector('#root').innerHTML = home_template;
    console.log('home_controller is ok');
}
export default { render }