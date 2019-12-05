import axios from 'axios';

const LoginService = obj => (
	axios.post('http://localhost:4000/user/login', obj)
		.then(res => res.status)
)

export default LoginService;