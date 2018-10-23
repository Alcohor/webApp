
import search_controller from '../controllers/search_controller';
import mine_controller from '../controllers/mine_controller';
import login_controller from '../controllers/login_controller';
import account_controller from '../controllers/accountLogin_controller';
import createResume_controller from '../controllers/createResume_controller';
import home_controller from '../controllers/home_controller'
import people_controller from '../controllers/peopleIfm_controller'
//页面跳转
const routes = {
    '#/home' : home_controller,
    '#/search' : search_controller,
    '#/mine' : mine_controller,
    '#/login' : login_controller,
    '#/account' : account_controller,
    '#/create' : createResume_controller,
    '#/peopleIfm' : people_controller
}

export { routes } ;
