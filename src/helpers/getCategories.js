
const getCategories = async() => {

    const url = `http://192.168.1.8:8000/`;
    const response = await fetch( url );
    const { data } = await response.json();
    
    const categories = data.map( cats => {

        return {
            cat_name: cats.cat_name
        }
        
    })
    return categories;

}

export default getCategories;