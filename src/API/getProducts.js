
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
            banner: product.product_image,
            price: product.product_price,
            description: product.product_description,
            stock: product.product_stock,
            category_id: product.product_category_id,
            category_name: product.product_category_name,
            carousel: product.product_carousel
        }
        
    })
    return productsData;

}

export default getProducts;