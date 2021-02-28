import Axios from "AxiosConfig/Axios";
import * as Actions from "Store/Actions/Actions"

export const getJobs=(searchObject)=>{
	return dispatch=>{
		return Axios.get("https://jobs.github.com/positions.json").then((response)=>{
			console.log(response,"response")
			let jobs=JSON.parse(response)
			jobs=jobs.map((job)=>{
				return {
					time:Math.abs(Math.round((new Date().getTime()-new Date(job.created_at).getTime())/(1000*60*60)))+"h ago",
					id:job.id,
					type:job.type,
					title:job.title,
					company:job.company,
					location:job.location,
					logo:job.company_logo
				}
			})
			dispatch({type:Actions.GETJOBS,jobs:jobs})
		})
	}
}