import job_template from '../view/job_page.html'
import job_list_template from '../view/job_list.html'
import job_model from '../models/job_list_module'
import BScroll from 'better-scroll'


let _pageNO = 1;
let pageDateArr = [];
const render = async()=>{
    let _template = Handlebars.compile(job_template)
    let _html = _template();
    $('.main').html(_html);
    swiperInit();
    await getJobListByPageNo();
    handleScroll();  
}

const swiperInit = ()=>{
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop:true

    })
}

//获取某一页数据
const getJobListByPageNo = async () =>{
    let _job_data = await job_model.getJobListData(_pageNO);
    console.log(_job_data)  
    let _job_list = _job_data.result.list;
    let _com_id = _job_data.result.ids
    _com_id.forEach(id => {
        _job_list[id].ImgFont = job_model.getImgFont(_job_list[id].ComName);
        pageDateArr.push(_job_list[id])
    });
    console.log(pageDateArr);
}

//滑动
const handleScroll = async()=>{
    let _job_page_scroll = new BScroll('.main',{
        probeType:2
    })
    await renderJobList();//完成joblist渲染后
    _job_page_scroll.refresh();
}


//页面渲染
const renderJobList =()=>{
    let _template = Handlebars.compile(job_list_template)
    let _html = _template({ _job_list: pageDateArr})
    //  渲染job视图
    $('.job-list').html(_html)  
}
export default{
    render
}