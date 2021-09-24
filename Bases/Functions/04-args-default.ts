(() => {
  const fullNmae = (
    fisrtName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${fisrtName} ${lastName || '---'}`.toUpperCase();
    } else {
      return `${fisrtName} ${lastName || '---'}`;
    }
  };

  const name = fullNmae('Tony', 'Stark', true);
  console.log({ name });
})();
