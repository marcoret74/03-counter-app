import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);

        console.log(user);
    });

    test('getUsuario debe de retornar de retornar un objeto', () => {

        const user = getUsuarioActivo('Marco');
        console.log(user);
        //console.log(JSON.stringify(user));

        const userTest = {
            uid: 'ABC567',
            username: 'Marco'
        };

        expect(user).toEqual(userTest);
    });
});