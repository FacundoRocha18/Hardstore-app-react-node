
const getCategories = async() => {

    const HOST = 'api.hardstore.store'

    const url = `https://${HOST}/`;

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