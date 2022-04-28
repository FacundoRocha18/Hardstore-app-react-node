
const getProducts = async() => {

    const url = `http://localhost:8000/`;
    const response = await fetch( url );
    const { data } = await response.json();
    
    const productsData = data.map( product => {

        return {
            id: product.product_id,
            name: product.product_name,
            image: product.product_image_path,
            description: product.product_description,
            price: product.product_price,
            stock: product.product_stock,
            category: product.product_category
        }
        
    })
    return productsData;

}

export default getProducts;