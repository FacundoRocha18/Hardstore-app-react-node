
const getProducts = async() => {

    const url = `https://api.hardstore.store/`;

    const devUrl = `http://localhost:8000/`

    const response = await fetch( devUrl );
    const { data } = await response.json();

    const { products } = data; 
   
    const product = products.map( prod => {

        return {
            id: prod.product_id,
            name: prod.product_name,
            image: prod.product_image,
            thumbnail: prod.product_image,
            price: prod.product_price,
            description: prod.product_description,
            stock: prod.product_stock,
            category_id: prod.product_category_id,
            category_ref: prod.product_category_reference,
            category_name: prod.product_category,
        }
        
    })
    return product;

}

export default getProducts;