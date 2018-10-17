
import job_controller from '../controllers/job_controller';
import search_controller from '../controllers/search_controller';
import mine_controller from '../controllers/mine_controller';
import login_controller from '../controllers/login_controller';
import account_controller from '../controllers/accountLogin_controller';


//页面跳转
const routes = {
    '#/job' : job_controller,
    '#/search' : search_controller,
    '#/mine' : mine_controller,
    '#/login' : login_controller,
    '#/account' : account_controller

}

export { routes } ;
