import { Spell, baseSpellCallBack } from "./Spell.mjs";

class Personnage {
    opponent = null;
    attaques = {
        "Base attack": new Spell("Base attack",
            (caster, target) => { return caster.getStrength(); },
            2)
    };

    constructor(nom, hp, strength, endurance) {
        this.nom = nom;
        this.hp = hp;
        this.strength = strength;
        this.endurance = endurance;
    }

    // Getters

    getNom() {
        return this.nom;
    }

    getHp() {
        return this.hp;
    }

    getStrength() {
        return this.strength;
    }

    getStamina() {
        return this.endurance;
    }

    // Setters

    setNom(nom) {
        this.nom = nom;
    }

    setHp(hp) {
        this.hp = hp;
    }

    setStrength(strength) {
        this.strength = strength;
    }

    setStamina(endurance) {
        this.stamina = endurance;
    }

    // Autres méthodes

    subirDommage(montant_dommage) {
        this.hp = this.hp - montant_dommage;
    }

    attaquer(spellName, target) {
        this.attaques[spellName].cast(this, target)
    }

    afficherAttaques() {

        document.getElementById("display_box").innerText = this.attaques;
    }

    jouerTour(choix) {
        return this.attaques.get(choix);
    }

    annonce() {
        document.getElementById("display_box").innerText = `Je m\'appelle ${this.nom}, mes stats sont:\nhp : ${this.hp}\nstrength : ${this.strength}\nendurance : ${this.endurance}\nmes attaques : ${Object.values(this.attaques).map(x => x.getNom())}`;
    }

}

class Mage extends Personnage {
    attaques = {
        "Boule de feu": new Spell("Boule de feu",
            (caster, target) => { return 40; },
            10,
            (caster, target, spell) => { baseSpellCallBack(caster, target, spell) + "\nWOOOOOOOOOOOSH!!!!" }),
        "Boule de glace": new Spell("Boule de glace",
            (caster, target) => { return 35; },
            8,
            (caster, target, spell) => { baseSpellCallBack(caster, target, spell) + "\nSCHLIIIIING!!!!" }),
        "Projectile magique": new Spell("Projectile magique",
            (caster, target) => { return 5; },
            1,
            (caster, target, spell) => { baseSpellCallBack(caster, target, spell) + "\nSHABOWWWWWW!!!!" }),
    };
}

class Barbare extends Personnage {
    attaques = {
        "Coup de boule": new Spell("Coup de boule",
            (caster, target) => { return 70; },
            8,
            (caster, target, spell) => { baseSpellCallBack(caster, target, spell) + "\nWOOOOOOOOOOOSH!!!!" }),
        "Mawashigeri dans ta face": new Spell("Mawashigeri dans ta face",
            (caster, target) => { return 60; },
            7,
            (caster, target, spell) => { baseSpellCallBack(caster, target, spell) + "\nSCHLIIIIING!!!!" }),
        "Base attack": new Spell("Base attack",
            (caster, target) => { return caster.getStrength(); },
            2)
    };
}

export { Personnage, Mage, Barbare};