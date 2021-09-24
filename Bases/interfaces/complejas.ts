(() => {
  interface Client {
    name: string;
    age: number;
    adress: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }
  const client: Client = {
    name: 'Moy',
    age: 25,
    adress: {
      id: 123,
      zip: 'Ky2 SUD',
      city: 'Otawa',
    },
    getFullAddress() {
      return this.adress.city;
    },
  };

  const client2: Client = {
    name: 'Melissa',
    age: 23,
    adress: {
      city: 'Toronto',
      id: 12,
      zip: 'dd54098',
    },
    getFullAddress() {
      return this.adress.city;
    },
  };
})();
