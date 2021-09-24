(() => {
  //la funcion no debe terminar exitosamente
  //No tiene un punto alcanzable
  const error = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }

    return 1;
  };

  error('Axuilio');
  console.log('Hola mundo');
})();
