//Para clases se recibe el constructor
function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConosleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

//para metodos se recibe target propertyKey y descriptor (El descriptor es lo que le mandamos como param al metodo)
function CheckValidPokemonid() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del pokemon tiene que estar entre 1 y 800');
      } else {
        return originalMethod(id);
      }
    };
  };
}

//para las propiedades se recibe target y propertyKey
function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        return 'Moy';
      },
      //este this hace referencia a la instancia de la clase
      set(this, val) {
        //console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}

@bloquearPrototipo
@printToConosleConditional(true)
export class Pokemon {
  @readOnly()
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}

  @CheckValidPokemonid()
  savePokemonToDB(id: number) {
    console.log(`Pokemon saved in DB ${id}`);
  }
}
