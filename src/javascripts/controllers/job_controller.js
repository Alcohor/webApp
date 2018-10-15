import job_template from '../view/job_page.html'

const render = ()=>{
    let _template = Handlebars.compile(job_template)
    let _html = _template();
    $('.main').html(_html);
    swiperInit();
}

const swiperInit = ()=>{
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        
    })
}

export default{
    render
}