import axios from 'axios';
import {nanoid} from 'nanoid';

const api = " http://localhost:3000/"


function getProducts() {
    axios.get(`${api}products`)
        .then(response => {
            console.log("Productos disponibles: ", response.data)
        })
        .catch(error => {
            console.log(error)
        })
}


function getProductById(id) {
    axios.get(`${api}products/${id}`)
        .then(response => {
            console.log("Producto por el id: ", response.data)
        })
        .catch(error => {
            console.log(error)
        })
}


const newProduct = {
    id: nanoid(),
    name: "Monitor",
    price: 200,
}

function createProduct() {
    if (!validateProduct(newProduct)) {
        return;
    }

    axios.post(`${api}products`, newProduct)
        .then(response => {
            console.log("Producto agregado: ", response.data)
        })
        .catch(error => {
            console.error("Error al crear el producto:", error)
        })

}

const updatedProduct = {
    name: "Laptop",
    price: 2400
}

function updateProduct(id) {
    if (!validateProduct(updatedProduct)) {
        return;
    }

    axios.patch(`${api}products/${id}`, updatedProduct)
        .then(response => {
            console.log("Producto actualizado: ", response.data)
        })
        .catch(error => {
            console.error("Error al actualizar el producto:", error)
        })
}



function deleteProduct(id) {
    axios.delete(`${api}products/${id}`)
        .then(response => {
            console.log("Producto eliminado: ", response.data)
        })
}



function validateProduct(product){
    if(!product.name || typeof product.price !== "number"){
        console.error("Datos del producto no validos");
        return false;
    }
    return true;
}


// Get all initial products
getProducts();

// Create a new product
createProduct();

// Wait and get updated products list
setTimeout(() => {
    getProducts();

    // Get specific product by ID
    getProductById(newProduct.id);

    // Update the product
    updateProduct(newProduct.id);

    // Verify the update was successful
    setTimeout(() => {
        getProducts();

        // Delete the product
        deleteProduct(newProduct.id);

        // Verify the product was deleted
        setTimeout(() => {
            getProducts();
        }, 1000);
    }, 1000);
}, 1000);
