
const getProducts = async() => {

    const HOST = '206.246.74.221' || 'localhost'

    const url = `http://${HOST}:8080/`;

    const response = await fetch( url );
    const { data } = await response.json();

    const { products } = data; 
   
    const productsData = products.map( product => {

        return {
            id: product.product_id,
            name: product.product_name,
            image: product.product_image,
            thumbnail: product.product_thumbnail,
            banner: product.product_banner,
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