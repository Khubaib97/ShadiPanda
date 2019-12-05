import axios from 'axios';

const BookService = obj => (
	axios.post('http://localhost:4000/book/check', obj)
		.then(res => res.status)
)

export default BookService;