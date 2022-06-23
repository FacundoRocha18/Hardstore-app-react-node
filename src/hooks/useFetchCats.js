import { useState, useEffect } from 'react';
import getCategories from '../API/getCategories';

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