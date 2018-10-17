import login_template from '../view/login.html'

const render = () =>{
    document.querySelector('#root').innerHTML = login_template;
    console.log('home_controller is ok');
}

export default{
    render
}