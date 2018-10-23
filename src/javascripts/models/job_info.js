const getJobInfoData = (job_id) => {

    return $.ajax({
            url: `/quanzhi/ajax/job/pagedetail?jobid=${job_id}&stamp=0.7702708625833272`,
            dataType:"json",
            success: (res) => {
                return res;
            }
        })
}

export default{
    getJobInfoData
}