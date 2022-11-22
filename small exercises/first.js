function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};

(function helloAfter1_5() {
    sleep(1500);
    console.log("bonjour");
})();

function aumoins3(array, verifcallback) {
    let nTrue = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (verifcallback(element)) { nTrue++; }
        if (nTrue > 2) { return true; }
    }
    return false;
};

function filter(array, verifcallback) {
    let selectedElements = [];
    array.forEach(element => {
        if (verifcallback(element)) {
            selectedElements.push(element)
        }
    });
    return selectedElements;
};

// Tests
console.log(5>3)
function over1(number) {
    return number>1;
}
console.log(over1(5));
let bla = [1,2,3,4,5,6,7];
console.log('aumoins3(',bla,' ,over1) : ', aumoins3(bla, over1));
console.log('filter(',bla,' ,over1) : ', filter(bla, over1));