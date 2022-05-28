import { getHeroeByIdAsync } from "../../base/09-promesa";
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('Debe de obtener un error si el héroe no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('Heroe no se encotró');
                done();
            })
    });
});