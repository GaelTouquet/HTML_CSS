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
    let nTrue=0;
    array.forEach(element => {
        if (verifcallback(element)) {nTrue++;}
        if (nTrue==3) {return true;}
    });
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
}