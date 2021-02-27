import Axios from "AxiosConfig/Axios"
import * as Actions from "Store/Actions/Actions";

export const getJobDetails=(jobId)=>{
	return dispatch=>{
		return Axios.get("/getJobDetails",{
			params:{
				id:jobId
			}
		}).then((res)=>{
			dispatch({type:Actions.GETJOBDETAILS,jobDetails:res.data})
		})
	}
}