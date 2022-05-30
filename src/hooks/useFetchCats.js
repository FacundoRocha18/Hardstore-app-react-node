import { useState, useEffect } from 'react';
import getCategories from '../helpers/getCategories';

const useCats = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {

        getCategories()
            .then( cats => {
                
                setState({
                    data: cats,
                    loading: false
                });

            })

    }, []);

    return state; 

}

export default useCats;