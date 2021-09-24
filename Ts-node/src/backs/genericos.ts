/* import { Hero } from './classes/Hero';
--- import { Hero as SuperHero, Hero2 } from './classes/Hero';
--- import * as HeroClasses from './classes/Hero'; //Exporta todo el archivo y le ponemos un alias con 'as'
--- import powers, { Power } from './data/powers'; // si no hay parentesis quiere decir que exportamos por default

-- const ironman = new SuperHero('Tony Stark', 100, 37);
const ironman = new Hero('Tony Stark', 2, 37);

console.log(ironman);
console.log(ironman.getPower);
-- console.log(powers);
*/

//===============================Genericos===============================================
import {
  printObject,
  genericFunctionArrow,
  genericFunction,
} from '../generics/generics';
import { Villain, Hero } from '../interfaces';

printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
printObject('Hola mundo ');

//=======================================================================================

const name: string = 'Moy';

console.log(genericFunctionArrow(3.141616).toFixed(2));
console.log(genericFunctionArrow(name).toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
};

//Nuestra funcion recibe un argumento generico, por lo que al llamarla la indicamos el tipo de argumento con <>
// En este caso el tipo de argumento es el heroe
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
