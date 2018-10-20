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

let _scroll_bottom_sta = false;


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
        probeType:2,
        startY:-160,
        pullDownRefresh:true,
        pullDownRefresh:true
    })
     await renderJobList();//完成joblist渲染后
    _job_page_scroll.refresh();
    let pull_down_tip_wrap = $('.tip-wraper');
    let pull_down_tip = $('.tip-wraper span');
    let pull_down_icon = $('.tip-wraper i');
    let refresh_flag = true;
    _job_page_scroll.on('scroll',({x,y})=>{
        if(y>0&&refresh_flag){
            refresh_flag=false;
            pull_down_tip.html('松手刷新')
            pull_down_tip_wrap.prop('class','tip-wraper-go')
        }
        _scroll_bottom_sta = false;
        if ( _job_page_scroll.maxScrollY - y > 0 ) {
            _scroll_bottom_sta = true;
            console.log( _scroll_bottom_sta)
        }
    })

    _job_page_scroll.on('scrollEnd',async({x,y})=>{
        if(y>-160&&y<0){
            _job_page_scroll.scrollTo(0,-160,300)
        }else if(y===0){
            if(!refresh_flag){
                pull_down_tip.html('正在加载');
                await refreshJobList();
                renderJobList();
                pull_down_tip.html('下拉刷新')
                refresh_flag=true;
                pull_down_tip_wrap.prop('class','tip-wraper')
                _job_page_scroll.refresh()
                
            }
            _job_page_scroll.scrollTo(0,-160,300)
        }
        console.log(_job_page_scroll.maxScrollY - y,_scroll_bottom_sta)
        if(_job_page_scroll.maxScrollY - y == 0 && _scroll_bottom_sta){
            _pageNO ++;
            console.log('到底了')
            await getJobListByPageNo();
            renderJobList();
            _job_page_scroll.refresh();
        }


    })  
}

const refreshJobList = async () =>{
    let _job_data = await job_model.getJobListData(_pageNO);
    console.log(_job_data)  
    let _job_list = _job_data.result.list;
    let _com_id = _job_data.result.ids
    _com_id.forEach(id => {
        _job_list[id].ImgFont = job_model.getImgFont(_job_list[id].ComName);
        pageDateArr.unshift(_job_list[id])
    });
    console.log(pageDateArr);
}


//页面渲染
const renderJobList =()=>{
    let _template = Handlebars.compile(job_list_template)
    let _html = _template({ _job_list: pageDateArr})
    //  渲染job视图
    $('.job-list').html(_html)
    console.log('jobrender')  
}



export default{
    render
}
