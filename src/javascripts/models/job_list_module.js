
const getJobListData = (_pageNO = 1) => {

    return $.ajax({
            url: `quanzhi/ajax/job/search?p=${_pageNO}&stamp=0.40617770052154767&isIndex=1&iscominfo=1&sorttype=1&keyword=%E5%89%8D%E7%AB%AF&workplacename=%E5%8C%97%E4%BA%AC&workplace=86101010&cancel=&isnew=0&workexperenceflag=0&degree[]=0`,
            dataType:"json",
            success: (res) => {
                return res;
            }
        })
}

const getImgFont= (str)=>{
    
    let num = parseInt(Math.random()*2+3);
    let imgStr = str[num];
    return imgStr;
}

export default{
    getJobListData,
    getImgFont
}