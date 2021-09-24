(() => {
  // El objetivo es tener un sentido semantico para establecer valores
  enum AudioLevel {
    min = 1,
    medium = 5,
    medium2,
    max = 10,
  }

  let currentAudio = AudioLevel.medium2;
  console.log(currentAudio);
  console.log(AudioLevel);
})();
