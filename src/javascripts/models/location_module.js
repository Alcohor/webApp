//
const area_list = ()=>{//获取页面顶部地区列表
    return $.ajax({
        url:'quan,hi/ajax/job/getDirectAreaChildren?city=%E5%8C%97%E4%BA%AC&code=86101010&stamp=0.0013778109568636232',
        success:(res)=>{
            return res;
        }
    })
}
export default{
    area_list
}