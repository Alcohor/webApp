
import job_controller from '../controllers/job_controller';
import search_controller from '../controllers/search_controller';
import mine_controller from '../controllers/mine_controller';

//页面跳转
const routes = {
    '#/job' : job_controller,
    '#/search' : search_controller,
    '#/mine' : mine_controller

}

export { routes } ;
