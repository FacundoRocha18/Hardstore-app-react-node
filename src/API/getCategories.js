
const getCategories = async() => {

    const url = `https://api.hardstore.store/`;

    const devUrl = `http://localhost:8000/api/categories/`;


    const response = await fetch( devUrl );
    const { data } = await response.json();

    data.sort((a, b) => {
        return a.cat_id - b.cat_id
    })
        
    const categories = data.map( cats => {

        return {
            id: cats.cat_id,
            name: cats.cat_name
        }
        
    })
    return categories;

}

export default getCategories;