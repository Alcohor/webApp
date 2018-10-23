import jobInfo from '../models/job_info'
const url = require("url")
const {getJobInfoData} = jobInfo;

const job_id = url.parse(document.location.href).hash.split("=")[1];

const  render = async()=>{
     let str =  await getJobInfoData(job_id)
     document.body.innerText=JSON.stringify(str)
}
render()

