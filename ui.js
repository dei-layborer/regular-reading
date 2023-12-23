window.addEventListener('DOMContentLoaded', init);

function init() {

    const inputText = document.getElementById('input-area');
    inputText.addVEventListener('change', handleText);  // --> textprocessing.js

    const inputs = document.getElementsByTagName('input');
    for (let inp of inputs) {
        inp.addEventListener('change', setOptions); // --> textprocessing.js
    }

}