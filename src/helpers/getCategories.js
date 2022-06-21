
const getCategories = async() => {

    const HOST = '206.246.74.221' || 'localhost'

    const url = `http://${HOST}:8080/`;
    const response = await fetch( url );
    const { data } = await response.json();

    const { categories } = data; 
        
    const categoriesData = categories.map( cats => {

        return {
            id: cats.cat_id,
            name: cats.cat_name
        }
        
    })
    return categoriesData;

}

export default getCategories;