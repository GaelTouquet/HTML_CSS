import { Personnage, Mage, Barbare } from "./modules/Personnage.mjs";
import { Spell, baseSpellCallBack } from "./modules/Spell.mjs";

let conan = new Barbare("Conan", 100, 10, 25);
let xena = new Mage("Xena", 200, 9, 20);

// TODO add character choose
let leftChar = conan;
let rightChar = xena;

let leftCharSprite = document.getElementById('left_character');
let rightCharSprite = document.getElementById('right_character');

leftCharSprite.addEventListener("click", function (e) { leftChar.annonce(); }, false);
rightCharSprite.addEventListener("click", function (e) { rightChar.annonce(); }, false);

let iTour = 0

let attackButtons = document.getElementsByClassName("attack_button")
attackButtons[0].addEventListener("click",function(e) {
    let isOdd = iTour%2==0;
    let character = isOdd ? leftChar : rightChar;
    let otherCharacter = isOdd ? rightChar : leftChar;
    character.attaquer("Boule de feu", otherCharacter)
    iTour++;
}, false)



