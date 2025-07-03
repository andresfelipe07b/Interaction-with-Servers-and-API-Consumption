import axios from 'axios';

const api = " http://localhost:4000/"


function getProducts() {
    axios.get(`${api}products`)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

function getProduct(id) {
    axios.get(`${api}products/${id}`)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
        })
}

function createProduct(id) {
    if (id > 0) {
        axios.post(`${api}products`, {
            name: "test",
            price: 100,
            description: "test"
        })
            .then(response => {
                console.log(response.data)
            })
    }else{
        axios.update(`${api}products/${id}`, {
            name: "testUpdate",
            price: 100,
            description: "testUpdate"
        })
    }

}




