const options = {
    wordBoldPercent: 0
};

function loadOptions() {

    const wordBoldControl = document.getElementById('word-percent-setting');
    options.wordBoldPercent = wordBoldControl.value;

}

function updateOptions(e) {

    const changedElement = e.target;
    switch (changedElement.id) {

        case 'word-percent-setting':
            options.wordBoldPercent = changedElement.value;
            break;

        default:
            break;
    }

}

function handleText() {

    const txtarea = document.getElementById('input-area');
    const displayArea = document.getElementById('output-text');
   
    console.log(options.wordBoldPercent);

    if (txtarea.value != '') {

        let words = txtarea.value.split(' ');
        for (let word of words) {
            const wordLength = Math.floor(word.length);




        }



        
    }

}