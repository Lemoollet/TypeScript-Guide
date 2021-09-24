"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llamado');
        }
        getFullNameAvenger() {
            return `${this.name} (${this.realName})`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        get getFullName() {
            return `${this.name} - ${this.realName}`;
        }
        set setFullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre tiene que ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullNameAvenger());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.setFullName = 'Moy';
    console.log(wolverine.getFullName);
})();
