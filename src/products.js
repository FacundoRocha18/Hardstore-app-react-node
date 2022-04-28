const addButton = document.querySelector('#newProductButton');
const quantityDownBtn = document.querySelector('.quantity-down-btn');
const quantityUpBtn = document.querySelector('.quantity-up-btn');

quantityUpBtn.addEventListener('click', (event) => {
    const buttonClicked = event.target;
    const inputWrapper = buttonClicked.closest('.new-product-quantity-container');
    const input = inputWrapper.querySelector('.new-product-quantity');

    (input.value == 100) ? input.value = 100 : input.value++;

});

quantityDownBtn.addEventListener('click', (event) => {
    const buttonClicked = event.target;
    const inputWrapper = buttonClicked.closest('.new-product-quantity-container');
    const input = inputWrapper.querySelector('.new-product-quantity');

    (input.value == 1) ? input.value = 1 : input.value--;
});

addButton.addEventListener('click', addButtonClicked);

function previewImage() {

    const preview = document.querySelector('#product-image');
    const file = document.querySelector('#file').files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function () {
        
        preview.src = reader.result;

    }, false)

    if (file) {
        reader.readAsDataURL(file);
    }

}

function addButtonClicked(event) {

    let path = `../img/${productImageSelector.src}`;

    productImage.src = path;

    alert('Add button clicked ' + path);

}

/* function getButtonClicked(event) {

    event.preventDefault();

    const product = new products(id, productName, productImage, productPrice, productDescription, productStock);

    let productData = product.getProductData();

    console.log(productData);

} */


