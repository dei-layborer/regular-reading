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
    console.log(`wordBoldPercent change to ${options.wordBoldPercent}`);

    handleText();

}

function handleText() {

    const txtarea = document.getElementById('input-area');
    const displayArea = document.getElementById('output-text');
    displayArea.innerHTML = '';

    if (txtarea.value != '') {

        const paragraphs = txtarea.value.split('\n');
        
        for (let paragraph of paragraphs) {

            const words = paragraph.split(' ');

            for (let word of words) {
                const wordLength = Math.floor(word.length);
                const boldLength = Math.ceil(wordLength * (options.wordBoldPercent / 100));
                
                const wordElement = document.createElement('span');
                wordElement.classList.add('whole-word');
                const boldElement = document.createElement('span');
                boldElement.classList.add('bold-text');
                const nonBoldElement = document.createElement('span');
                const boldPortion = word.substring(0, boldLength);
                const nonBoldPortion = word.substring(boldLength);
                boldElement.textContent = boldPortion;
                nonBoldElement.textContent = nonBoldPortion + ' ';
                wordElement.appendChild(boldElement);
                wordElement.appendChild(nonBoldElement);

                displayArea.appendChild(wordElement);

            }

            displayArea.appendChild(document.createElement('br'));

        }

        
    }
}