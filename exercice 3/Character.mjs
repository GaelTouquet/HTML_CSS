class Attack {
    constructor(name, damage = (caster, target) => { caster.getStrength }, staminacost, castcallback = () => { console.log("PIF!") }) {
        this.name = name;
        this.damage = damage;
        this.staminacost = staminacost;
        this.castcallback = castcallback;
    }

    cast(caster, target) {
        caster.setStamina(caster.getStamina() - this.staminacost);
        target.subirDommage(this.damage(caster, target));
        this.castcallback();
    }
}

class BaseAttack extends Attack {
    constructor() {
        super("base attack", undefined, 2)
    }
}

class Mawashigeri extends Attack {
    constructor() {
        super("Mawashigeri", (caster, target) => { caster.getStrength * 2 }, 5, () => { console.log("KAPOW!") })
    }
}

class Character {
    constructor(nom, hp = 100, strength = 10, stamina = 25, opponent = null, attaques = { 'base': new BaseAttack }) {
        this.nom = nom;
        this.hp = hp;
        this.strength = strength;
        this.stamina = stamina;
        this.opponent = opponent;
        this.attaques = attaques;
    }

    subirDommage(montant_dommage) {
        this.hp -= montant_dommage;
    }

    attaquer(target) {
        this.attaques['base'].cast(this, target);
    }

    annonce() {
        console.log(
            `${this.nom}\n-----characteristiques-----\nHP : ${this.hp}\nStrength : ${this.strength}\nstamina : ${this.stamina}`
        );
    }

    getHP() {
        return this.hp;
    }

    getStamina() {
        return this.stamina;
    }

    setHP(hp) {
        this.hp = hp;
    }

    setStamina(stamina) {
        this.stamina = stamina
    }

    jouertour(choix) {
        return this.attaques[choix];
    }
}

let bla = new Character("bla", undefined, undefined, undefined, undefined);
bla.annonce();