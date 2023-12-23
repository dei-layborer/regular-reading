const options = {
    wordBoldPercent: 0
};

function setOptions(e) {

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


}