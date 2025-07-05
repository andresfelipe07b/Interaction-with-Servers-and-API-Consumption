import { writeFileSync } from 'fs';
import { nanoid } from 'nanoid';

// Productos iniciales
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

// Escribir al archivo db.json
writeFileSync('db.json', JSON.stringify(db, null, 2));
console.log('Base de datos inicializada con éxito');
