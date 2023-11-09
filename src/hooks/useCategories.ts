import { useState, useEffect } from 'react';
import getCategories from '../services/fetchCategories';

const useCategories = () => {

	const [state, setState] = useState({
		data: [],
		loading: true
	})

	useEffect(() => {

		getCategories()
			.then(cats => {

				setState({
					data: cats,
					loading: false
				});

			})

	}, []);

	return state;

}

export default useCategories;