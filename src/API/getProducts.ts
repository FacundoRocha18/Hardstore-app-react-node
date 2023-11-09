
const getProducts = async() => {

    const url = `https://api.hardstore.store/`;

    const devUrl = `http://localhost:3000/products/listAll`

    const response = await fetch( devUrl );
    const { data } = await response.json();

		console.log(data)
   
    const product = data.map( product => {

        return {
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.stock,
        }
        
    })
    return product;

}

export default getProducts;