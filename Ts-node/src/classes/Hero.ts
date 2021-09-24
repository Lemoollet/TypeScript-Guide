import powers from '../data/powers';

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get getPower(): string {
    return (
      // El primer signo revisa si el objeto no es 'null' o 'undefined' si Si lo es, regresa undefines
      // Si regresa 'null' o 'undefined' los siguientes dos signos regresaran el valor que nosotros le digamos
      // En vez de los dos parentesis puede ser un 'OR' '||'
      // La otra opcion es poner '!' aqui le estamos diciendo a TS que sabemos que no dara undefined, pero si da nos mandara un error
      powers.find((power) => power.id === this.powerId)?.desc ?? 'not found'
    );
  }
}
export class Hero2 {}
export class Hero3 {}
export class Hero4 {}

export const PI = 3.1416;
export const miNombre = 'Moy';
