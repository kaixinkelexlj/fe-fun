import Axios from 'axios'

const api_base = 'http://localhost:7001/'

export default {
	getUserInfo: function(){
		return Axios.get(api_base + "user-info")
	}
}