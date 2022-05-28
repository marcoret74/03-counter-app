// Desestructuración de arreglos
const personajes = ['Goky', 'Vegeta', 'Trunks'];
// console.log(personajes[0]);

const [, , p1] = personajes;

// console.log(p1);

export const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

const useState2 = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}
