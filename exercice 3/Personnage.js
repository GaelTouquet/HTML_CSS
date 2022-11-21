

export class Personnage {
    constructor(nom) {
        this.nom = nom;
        this.sante = undefined;
        this.force = undefined;
    }
}

export class Aventurier extends Personnage {
    constructor(nom) {
        super(nom);
        this.xp = undefined;
    }
}

export class Guerrier extends Aventurier {

    constructor(nom) {
        super(nom);
        this.rage = undefined;
    }
}

export class Paladin extends Aventurier {
    constructor(nom) {
        super(nom);
        this.vertu = undefined;
    }
}

export class Mage extends Aventurier {
    constructor(nom) {
        super(nom);
        this.mana = undefined;
    }
}