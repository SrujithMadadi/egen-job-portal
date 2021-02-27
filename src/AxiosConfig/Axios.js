import Axios from "axios";

const Axiosinstance = Axios.create({
	baseURL: process.env.REACT_APP_SERVICES_DOMAIN,
	headers: {'Access-Control-Allow-Origin': '*'}
});

export default Axiosinstance;