import React from 'react'

const AddProduct = () => {

    const productImageSelector = document.querySelector('#file')
    const productImage = document.querySelector('#product-image')

    return (

        <>
            <div className="main-content-wrapper">
                <section className="add-product-container">
                    <div className="add-product">
                        <div className="add-product-header">
                            <h2 className="title-center">Agregar producto</h2>
                        </div>
                        <div className="add-product-body">
                            <form action="/api/products/newproduct" encType="multipart/form-data" method="POST">
                                <div className="add-product-form-container">
                                    <div className="add-product-form-inputs-container">

                                        <div className="input-container">
                                            <div className="input-row">
                                                <label htmlFor="file">
                                                    <h5>Imagen:</h5>
                                                </label>
                                                <div className="image-container">
                                                    <div className="image-preview">
                                                        <label htmlFor="file">
                                                            <img src="../img/previewdefault.png" alt="Product image"
                                                                id="product-image" className="image-preview"></img>
                                                        </label>
                                                    </div>
                                                    <input type="file" name="product_image" onChange={() => {

                                                        const preview = document.querySelector('#product-image');
                                                        const file = document.querySelector('#file').files[0];
                                                        const reader = new FileReader();
                                                
                                                        reader.addEventListener('load', function () {
                                                
                                                            preview.src = reader.result;
                                                
                                                        }, false)
                                                
                                                        if (file) {
                                                            reader.readAsDataURL(file);
                                                        }

                                                    }}
                                                        id="file" accept="image/png" required></input>
                                                </div>
                                            </div>

                                            <div className="input-row">
                                                <label htmlFor="name">
                                                    <h5>Nombre:</h5>
                                                </label>
                                                <input type="text" name="product_name" id="name" required placeholder="Nombre del producto"></input>

                                            </div>

                                            <div className="input-row">
                                                <label htmlFor="stock">
                                                    <h5>Cantidad:</h5>
                                                </label>
                                                <div className='new-product-quantity-container'>
                                                    <div className='quantity-down-btn' onClick={(event) => {

                                                        const buttonClicked = event.target;
                                                        const inputWrapper = buttonClicked.closest('.new-product-quantity-container');
                                                        const input = inputWrapper.querySelector('.new-product-quantity');

                                                        (input.value == 1) ? input.value = 1 : input.value--;

                                                    }}><span>-</span></div>
                                                    <input className="new-product-quantity" type="number" name="product_stock" placeholder="1" value="1" min="1" max="100"></input>
                                                    <div className='quantity-up-btn' onClick={(event) => {

                                                        const buttonClicked = event.target;
                                                        const inputWrapper = buttonClicked.closest('.new-product-quantity-container');
                                                        const input = inputWrapper.querySelector('.new-product-quantity');

                                                        (input.value == 100) ? input.value = 100 : input.value++;

                                                    }}><span>+</span></div>
                                                </div>
                                            </div>

                                            <div className="input-row">
                                                <label htmlFor="description">
                                                    <h5>Descripción:</h5>
                                                </label>
                                                <textarea name="product_description" id="description" cols="50" rows="5"
                                                    placeholder="Descripción del producto" required></textarea>
                                            </div>

                                            <div className="input-row">
                                                <div className="price-container">
                                                    <label htmlFor="cost">
                                                        <h5>Costo de compra:</h5>
                                                    </label>
                                                    <input type="number" name="product_cost" id="cost" value="1"
                                                        maxLength="10000" placeholder="1" required></input>
                                                    <label htmlFor="iva">
                                                        <h5>IVA:</h5>
                                                    </label>
                                                    <input type="number" name="product_iva" id="iva" value="22"
                                                        maxLength="100" required readOnly disabled></input>
                                                    <label htmlFor="price">
                                                        <h5>Precio de venta:</h5>
                                                    </label>
                                                    <input type="number" name="product_price" id="price" value="1"
                                                        maxLength="10000" required readOnly disabled></input>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="product-form-button">
                                        <button type="submit" className="btn add-product-button" id="newProductButton" onClick={() => {

                                            let path = `../img/${productImageSelector.src}`;

                                            productImage.src = path;

                                            alert('Add button clicked ' + path);
                                        }}>
                                            <p>Guardar</p>
                                        </button>
                                        <button type="reset" className="btn cancel-product-button" id="cancelNewProductButton">
                                            <p>Cancelar</p>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AddProduct;