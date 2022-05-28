// Funciones
const saludar = function (nombre) {
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

export const getUsuarioActivo = (nombre) => ({
    uid:'ABC567',
    username: nombre 
})

const user = getUser();

// console.log(saludar('Goku'));
// console.log(saludar2('Vegeta'));
// console.log(saludar3('Goku'));
// console.log(saludar4());
// console.log(getUser());

// console.log(user);

const usuarioActivo = getUsuarioActivo('Fernando');
// console.log(usuarioActivo);