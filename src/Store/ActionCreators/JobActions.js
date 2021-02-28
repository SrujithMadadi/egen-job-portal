import Axios from "AxiosConfig/Axios";
import * as Actions from "Store/Actions/Actions"

export const getJobs=(searchObject)=>{
	return dispatch=>{
		return Axios.get("/getJobs",{
			params:{...searchObject}
		}).then((response)=>{
			dispatch({type:Actions.GETJOBS,jobs:response.data})
		})
	}
}