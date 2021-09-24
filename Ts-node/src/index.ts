import { isJsxClosingFragment } from 'typescript';
import { Pokemon } from './decorators/pokemon-class';

/* import { getPokemon } from './generics/getpokemos';

//console.log(getPokemon());

getPokemon(4)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((err) => console.log(err))
  .finally(() => console.log('Fin de la funcion'));
 */

const charmander = new Pokemon('charmander');

//(Pokemon.prototype as any).customName = 'Pikachu';

//console.log(charmander);
//charmander.savePokemonToDB(5000);

charmander.publicApi = 'https://fernando-herrera.com';
console.log(charmander);
