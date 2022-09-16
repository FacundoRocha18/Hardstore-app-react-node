
const getProducts = async() => {

    const url = `https://api.hardstore.store/`;

    const devUrl = `http://localhost:8000/`

    const response = await fetch( devUrl );
    const { data } = await response.json();

    const { products } = data; 
   
    const productsData = products.map( product => {

        return {
            id: product.product_id,
            name: product.product_name,
            image: product.product_image,
            thumbnail: product.product_image,
            price: product.product_price,
            description: product.product_description,
            stock: product.product_stock,
            category_name: product.product_category_name,
        }
        
    })
    return productsData;

}

export default getProducts;