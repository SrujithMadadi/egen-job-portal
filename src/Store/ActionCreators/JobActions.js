import Axios from "AxiosConfig/Axios";
import * as Actions from "Store/Actions/Actions"

export const getJobs=(latitude,longitude)=>{
	return dispatch=>{
		return Axios.get("/getJobs",{
			params:{
				latitude,
				longitude
			}
		}).then((response)=>{
			dispatch({type:Actions.GETJOBS,jobs:response.data})
		})
	}
}