import { getHeroeById } from "./08-imp-exp";


export const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1)
                resolve(p1)
            else
                reject('Heroe no se encotró');
            console.log('2 segundos despues');
            resolve(p1);
        }, 1500);
    });
}

// getHeroeByIdAsync(10)
//     //.then(heroe => console.log('Heroe', heroe))
//     .then(console.log)
//     .catch(err => console.warn(err));