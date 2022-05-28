import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {
    test('Debe de retornar un héroe por Id.', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        console.log(heroe);

        // expect(heroe).toBe(heroeData);
        expect(heroe).toBe(undefined);
    });

    test('debe de retornar un arreglo con los héroes de DC', () => {
        const heroes = getHeroesByOwner('DC');
        console.log(heroes);
        const heroesData = heroes.filter(h => h.owner === 'DC');
        expect(heroes).toEqual(heroesData);
    });

    test('debe de retornar 2', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    })

})