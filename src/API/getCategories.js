
const getCategories = async() => {

    const url = `https://api.hardstore.store/`;

    const devUrl = `http://localhost:8000/api/categories/`;


    const response = await fetch( url );
    const { data } = await response.json();

    const { categories } = data; 

    categories.sort((a, b) => {
        return a.cat_id - b.cat_id
    })

    console.log(categories)

    const categoriesList = categories.map( cats => {

        return {
            id: cats.cat_id,
            name: cats.cat_name
        }
        
    })
    return categoriesList;

}

export default getCategories;