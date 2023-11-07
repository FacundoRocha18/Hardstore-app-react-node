
const get_categories = async() => {

    const url = `https://api.hardstore.store/`;

    const dev_url = `http://localhost:8000/api/categories/`;


    const response = await fetch( url );
    const { data } = await response.json();

    const { categories } = data; 

    categories.sort((a, b) => {
        return a.cat_id - b.cat_id
    })

    const categories_list = categories.map( category => {

        return {
            id: category.cat_id,
            name: category.cat_name
        }
        
    })
    return categories_list;

}

export default get_categories;