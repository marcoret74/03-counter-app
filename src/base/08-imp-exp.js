import { heroes } from '../data/heroes'

export const getHeroeById = (id) =>
    heroes.find((e) => e.id === id);

export const getHeroesByOwner = (owner) =>
    heroes.filter(e => e.owner === owner);
