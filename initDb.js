import { writeFileSync } from 'fs';
import { nanoid } from 'nanoid';


const initialProducts = [
    {
        id: nanoid(),
        name: "Laptop",
        price: 1500
    },
    {
        id: nanoid(),
        name: "Mouse",
        price: 25
    },
    {
        id: nanoid(),
        name: "Teclado",
        price: 50
    }
];

const db = {
    products: initialProducts
};


writeFileSync('db.json', JSON.stringify(db, null, 2));
console.log('Base de datos inicializada con éxito');
