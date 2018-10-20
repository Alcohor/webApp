import accountLogin_template from '../view/account_login.html'

const render = () => {
    document.querySelector('#login-form').innerHTML = accountLogin_template;

}

export default{
    render
}