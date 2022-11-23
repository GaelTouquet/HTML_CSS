import { Personnage } from "./Personnage.mjs";

// Créer une classe Spell avec méthode

function baseSpellCallBack(caster, target, spell) {
    return `Attaque ${spell.nom}  :\nTort : ${spell.damage(caster, target)}\ncaster : ${caster.getNom()}\ntarget: ${target.getNom()}` ;
}

class Spell {

    constructor(nom,
        damage,
        staminaCost,
        callBack = (caster, target, spell) => { document.getElementById("display_box").innerText = baseSpellCallBack(caster,target,spell)}
    ) {
        this.nom = nom;
        this.damage = damage;
        this.staminaCost = staminaCost;
        this.callBack = callBack;
    }

    getNom() {
        return this.nom;
    }

    cast(caster, target) {
        caster.setStamina(caster.getStamina() - this.staminacost);
        target.subirDommage(this.damage(caster, target));
        this.callBack(caster, target, this);
    }

}

export { Spell, baseSpellCallBack };