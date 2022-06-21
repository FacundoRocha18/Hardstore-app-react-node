
const getCategories = async() => {

    const url = `http://206.246.74.221:8080/`;
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