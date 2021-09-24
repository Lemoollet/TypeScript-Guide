'use strict';
(() => {
  const batimovil = {
    carroceria: 'Negra',
    modelo: '6x6',
    antibalas: true,
    pasajeros: 4,
  };
  const bumblebee = {
    carroceria: 'Amarillo con negro',
    modelo: '4x2',
    antibalas: true,
    pasajeros: 4,
    disparar() {
      console.log('Disparando');
    },
  };
  const villanos = [
    {
      nombre: 'Lex Luthor',
      edad: 54,
      mutante: false,
    },
    {
      nombre: 'Erik Magnus Lehnsherr',
      edad: 49,
      mutante: true,
    },
    {
      nombre: 'James Logan',
      edad: undefined,
      mutante: true,
    },
  ];
  const charles = {
    poder: 'psiquico',
    estatura: 1.78,
  };
  const apocalipsis = {
    lider: true,
    miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
  };
  let mystique;
  mystique = charles;
  mystique = apocalipsis;
  console.log(apocalipsis);
})();
(() => {
  const hero = 'Flash';
  function returnName() {
    return hero;
  }
  const activateBatisignal = () => {
    return 'Batisignal activated ';
  };
  console.log(typeof activateBatisignal);
  const heroName = returnName();
})();
(() => {
  const fullNmae = (fisrtName, lastName) => {
    return `${fisrtName} ${lastName}`;
  };
  const name = fullNmae('Tony', 'Stark');
  console.log({ name });
})();
(() => {
  const fullNmae = (fisrtName, lastName) => {
    return `${fisrtName} ${lastName || '---'}`;
  };
  const name = fullNmae('Tony');
  console.log({ name });
})();
(() => {
  const fullNmae = (fisrtName, lastName, upper = false) => {
    if (upper) {
      return `${fisrtName} ${lastName || '---'}`.toUpperCase();
    } else {
      return `${fisrtName} ${lastName || '---'}`;
    }
  };
  const name = fullNmae('Tony', 'Stark', true);
  console.log({ name });
})();
(() => {
  const fullName = (firstName, ...restArgs) => {
    return `${firstName} ${restArgs.join(' ')}`;
  };
  const superman = fullName('Clark', 'Joseph', 'Kent');
  console.log(superman);
})();
(() => {
  const addNumbers = (a, b) => a + b;
  const greet = (name) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo esta salvado`;
  let myFunction;
  myFunction = saveTheWorld;
  console.log(myFunction());
})();
(() => {
  let flash = {
    name: 'Barry Alen',
    age: 24,
    powers: ['Super velocidad', ' Viajar en el tiempo'],
  };
  let superman = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super velocidad', ' Viajar en el tiempo'],
  };
})();
(() => {
  let flash = {
    name: 'Barry Alen',
    age: 24,
    powers: [1, 2],
  };
  let superman = {
    name: 'Clark Kent',
    age: 60,
    powers: [1],
    getName() {
      return this.name;
    },
  };
})();
(() => {
  let myCustomVariable = 'Moy';
  console.log(typeof myCustomVariable);
  myCustomVariable = 20;
  console.log(typeof myCustomVariable);
  myCustomVariable = {
    name: 'Bruce',
    age: 40,
    powers: [1],
  };
  console.log(typeof myCustomVariable);
})();
(() => {
  const batman = 'Bruce';
  const superman = 'Clark';
  const existe = false;
  const parejaHeroes = [batman, superman];
  const villano = ['Lex Lutor', 5, true];
  const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
  let Fuerza;
  (function (Fuerza) {
    Fuerza[(Fuerza['acuaman'] = 0)] = 'acuaman';
    Fuerza[(Fuerza['batman'] = 1)] = 'batman';
    Fuerza[(Fuerza['flash'] = 5)] = 'flash';
    Fuerza[(Fuerza['superman'] = 100)] = 'superman';
  })(Fuerza || (Fuerza = {}));
  const fuerzaFlash = Fuerza.flash;
  const fuerzaSuperman = Fuerza.superman;
  const fuerzaBatman = Fuerza.batman;
  const fuerzaAcuaman = Fuerza.acuaman;
  function activar_batiseñal() {
    return 'activada';
  }
  function pedir_ayuda() {
    console.log('Auxilio!!!');
  }
  const poder = '100';
  const largoDelPoder = poder.length;
  console.log(largoDelPoder);
})();
(() => {
  const sumar = (a, b) => {
    return a + b;
  };
  const contar = (heroes) => {
    return heroes.length;
  };
  let superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
  contar(superHeroes);
  const llamarBatman = (llamar) => {
    if (llamar) {
      console.log('Batisenal activada');
    }
  };
  llamarBatman(true);
  const unirHeroes = (...personas) => {
    return personas.join(', ');
  };
  const noHaceNada = (numero, text, booleano, arreglo) => {};
  let noHaceNadaTampoco;
  noHaceNadaTampoco = noHaceNada;
})();
(() => {
  const batimovil = {
    carroceria: 'Negra',
    modelo: '6x6',
    antibalas: true,
    pasajeros: 4,
  };
  const bumblebee = {
    carroceria: 'Amarillo con negro',
    modelo: '4x2',
    antibalas: true,
    pasajeros: 4,
    disparar() {
      console.log('Disparando');
    },
  };
  const villanos = [
    {
      nombre: 'Lex Luthor',
      edad: 54,
      mutante: false,
    },
    {
      nombre: 'Erik Magnus Lehnsherr',
      edad: 49,
      mutante: true,
    },
    {
      nombre: 'James Logan',
      edad: undefined,
      mutante: true,
    },
  ];
  const charles = {
    poder: 'psiquico',
    estatura: 1.78,
  };
  const apocalipsis = {
    lider: true,
    miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
  };
  let mystique;
  mystique = charles;
  mystique = apocalipsis;
})();
(() => {
  let isSuperman = true;
  let isBatman = false;
  isSuperman = isBatman ? true : false;
  console.log({ isSuperman });
})();
(() => {
  let avengers = 10;
  console.log(avengers);
  const villians = 20;
  if (avengers < villians) {
    console.log('estamos en porblemas');
  } else {
    console.log(' nos salvamos');
  }
  avengers = Number('55A');
  console.log({ avengers });
})();
(() => {
  var _a;
  const batman = 'Batman';
  const linternaVerde = 'Lintera Verde';
  const volcanNegro = `Heroe: Volcan negro`;
  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());
  console.log(
    ((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) ||
      'No esta presente'
  );
})();
(() => {
  let avenger = 123;
  let exist;
  let power;
  avenger = 'Doctor Strange';
  console.log(avenger.charAt(0));
  avenger = 150.1234;
  console.log(avenger.toFixed(2));
  console.log(exist);
  console.log(power);
})();
(() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
  villians.forEach((v) => {
    v.toUpperCase();
  });
})();
(() => {
  const hero = ['Doctor Strange', 100, true];
  hero[0] = 'Iron man';
  hero[1] = 50;
  hero[2] = false;
  console.log(hero);
})();
(() => {
  let AudioLevel;
  (function (AudioLevel) {
    AudioLevel[(AudioLevel['min'] = 1)] = 'min';
    AudioLevel[(AudioLevel['medium'] = 5)] = 'medium';
    AudioLevel[(AudioLevel['medium2'] = 6)] = 'medium2';
    AudioLevel[(AudioLevel['max'] = 10)] = 'max';
  })(AudioLevel || (AudioLevel = {}));
  let currentAudio = AudioLevel.medium2;
  console.log(currentAudio);
  console.log(AudioLevel);
})();
(() => {
  function callBatman() {
    return;
  }
  const callSuperman = () => {
    return;
  };
  const a = callBatman();
  console.log(a);
})();
(() => {
  const error = (message) => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };
  error('Axuilio');
  console.log('Hola mundo');
})();
(() => {
  let isActive = undefined;
  console.log(isActive);
})();
//# sourceMappingURL=main.js.map
