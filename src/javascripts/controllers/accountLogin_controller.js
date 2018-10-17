import accountLogin_template from '../view/account_login.html'

const render = () => {
    document.querySelector('#login-form').innerHTML = accountLogin_template;
    console.log('accountLogin_template is ok');
}

export default{
    render
}