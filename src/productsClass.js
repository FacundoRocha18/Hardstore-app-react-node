
export default class Products {

    constructor(id, name, imagePath, price, description, stock) {

        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
        this.description = description;
        this.stock = stock;

    }

    get productItem() {
        return this.productItemGridStructure(this.name, this.imagePath, this.price);
    }

    set ID(newID) {
        newID = newID.trim();

        if (newID === '') {
            throw 'The name cannot be empty';
        }
        this.id = newID;
    }

    get ID() {
        return this.id;
    }

    set Name(newName) {
        newName = newName.trim();

        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }

    get Name() {
        return this.name;
    }

    set Image(newImagePath) {
        newImagePath = newImagePath.trim();

        if (newImagePath === '') {
            throw 'The image path cannot be empty';
        }
        this.imagePath = newImagePath;
    }

    get Image() {
        return this.imagePath;
    }

    set Price(newPrice) {
        newPrice = newPrice.trim();

        if (newPrice === '') {
            throw 'The image path cannot be empty';
        }
        this.price = newPrice;
    }

    get Price() {
        return this.price;
    }

    set Description(newDescription) {
        newDescription = newDescription.trim();

        if (newDescription === '') {
            throw 'The image path cannot be empty';
        }
        this.description = newDescription;
    }

    get Description() {
        return this.description;
    }

    set Stock(newStock) {
        newStock = newStock.trim();

        if (newStock === '') {
            throw 'The image path cannot be empty';
        }
        this.stock = newStock;
    }

    get Stock() {
        return this.stock;
    }

    getProductData() {
        const url = 'http://127.0.0.1:5500/pages/products.html/getProducts';
        const http = new XMLHttpRequest();

        http.open("GET", url);
        http.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                var resultado = JSON.parse(this.responseText)
                console.log(resultado.name)
            }
        }
        http.send();
    }

    productItemGridStructure(name, imagePath, price) {
        const item =
            `
            <div class="products-item" id="item">
                <div class="product-item-title">
                    <h2 class="title-center" id="item-title">${name}</h2>
                </div>
                <div class="product-body">
                    <div class="product-image">
                        <img src="${imagePath}" alt="${name}" id="item-image">
                    </div>
                    <div class="product-info">
                        <div class="product-price">
                            <p>USD<span id="item-price">${price}</span> iva inc.</p>
                        </div>
                        <div class="btn-container">
                            <div class="btn p-btn add-item addToCart">
                                <p>Agregar </p><span class="material-icons">add_shopping_cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return item;
    }

}