import { findHeroById } from "./services/hero.service";

const hero = findHeroById(1);

console.log(hero?.name ?? 'No se encontro el ID');