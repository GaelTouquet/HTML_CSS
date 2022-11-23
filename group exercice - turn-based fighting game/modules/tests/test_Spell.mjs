import { Spell } from "../Spell.mjs";
import { Personnage } from "../Personnage.mjs";

let personnage1 = new Personnage("Conan", 100, 10, 25);
let personnage2 = new Personnage("Xena", 200, 9, 20);
personnage1.annonce();
personnage2.annonce();



function backSpell(caster, target, spell) {
    console.log("ORAORAORAORAORAORAORAORAORA");
    console.log(`Attaque ${spell.nom}  :\nTort : ${spell.damage(caster, target)}\ncaster : ${caster.getNom()}\ntarget: ${target.getNom()}`);
}

let spell = new Spell("Attaque de la mort", (caster, target) => { return "150"; }, "50", backSpell);
spell.cast(personnage1, personnage2);

let bdf = new Spell("Boule de feu", (caster, target) => { return 50; }, 15);
bdf.cast(personnage2, personnage1);

personnage1.attaquer("Base attack", personnage2);