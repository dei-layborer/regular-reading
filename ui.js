window.addEventListener('DOMContentLoaded', init);

function init() {

    const inputText = document.getElementById('input-area');
    inputText.addEventListener('input', handleText);  // --> textprocessing.js

    // load default options
    loadOptions();

    const inputs = document.getElementsByTagName('input');
    for (let inp of inputs) {
        inp.addEventListener('change', updateOptions); // --> textprocessing.js
    }

}