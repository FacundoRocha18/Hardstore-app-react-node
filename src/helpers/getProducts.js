
const getProducts = async() => {

    const url = `http://192.168.1.8:8000/`;
    const response = await fetch( url );
    const { data } = await response.json();

    const { products } = data; 
   
    const productsData = products.map( product => {

        return {
            id: product.product_id,
            name: product.product_name,
            image: product.product_image_path,
            description: product.product_description,
            price: product.product_price,
            stock: product.product_stock,
            category_id: product.product_category_id,
            category_name: product.product_category_name
        }
        
    })
    return productsData;

}

export default getProducts;