window.addEventListener('DOMContentLoaded', init);

function init() {

    const inputText = document.getElementById('input-area');
    inputText.addEventListener('input', handleText);  // --> textprocessing.js

    // load default options
    loadOptions();

    // event listeners for controls
    const inputs = document.getElementsByTagName('input');
    for (let inp of inputs) {
        inp.addEventListener('change', updateOptions); // --> textprocessing.js
    }

    document.getElementById('preview-text-plus').addEventListener('click', previewIncreaseSize);
    document.getElementById('preview-text-minus').addEventListener('click', previewDecreaseSize);

    // add lorem ipsum
    addLoremIpsum();

}

function previewIncreaseSize() {

    const previewArea = document.getElementById('output-text');
    let curSize = parseFloat(previewArea.style.getPropertyValue('--preview-size'));
    curSize += 0.05;
    previewArea.style.setProperty('--preview-size', `${curSize}rem`);

}

function previewDecreaseSize() {

    const previewArea = document.getElementById('output-text');
    let curSize = parseFloat(previewArea.style.getPropertyValue('--preview-size'));
    curSize -= 0.05;
    previewArea.style.setProperty('--preview-size', `${curSize}rem`);


}

function addLoremIpsum() {

    const inputArea = document.getElementById('input-area');
    inputArea.value = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque interdum consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mauris sapien, imperdiet in tellus vel, laoreet luctus massa. Vivamus ac mattis eros. Fusce congue quam et feugiat ornare. Duis euismod diam id nunc hendrerit tincidunt. Sed malesuada nulla eu consequat porttitor. Phasellus a orci odio. Nam vehicula lacinia rhoncus. Morbi id nisl rutrum, sagittis nunc sit amet, aliquam velit. Nunc sollicitudin dui sed nibh feugiat, et varius lectus iaculis.

In vel scelerisque magna. Aliquam sed cursus quam, eget molestie libero. Praesent non mi felis. Sed commodo bibendum justo non pulvinar. Integer id augue metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat consequat massa sit amet accumsan.

Duis dolor enim, tincidunt id condimentum eu, ultrices in lectus. Morbi ac interdum mi, eget suscipit eros. Nunc justo ipsum, tincidunt in malesuada quis, hendrerit eget urna. Morbi fermentum a leo dignissim ullamcorper. Quisque ullamcorper egestas dui, et tristique urna pretium vel. Morbi sed augue sagittis, consectetur libero nec, accumsan quam. Cras tincidunt risus nec metus placerat sollicitudin. Curabitur sed ultricies quam.

Quisque leo lacus, efficitur vel tortor nec, facilisis consequat mauris. Ut at vulputate magna. Vestibulum faucibus lectus nec augue sodales semper. Nulla quam dui, finibus et interdum at, pulvinar vitae ipsum. Nunc eu sodales quam, aliquam egestas leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in varius sem, a auctor odio.

Nam nisi ante, tincidunt nec placerat nec, vehicula non nisi. Mauris gravida velit ac metus luctus blandit. Etiam maximus massa metus, ut consequat enim scelerisque vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ac justo suscipit purus consequat eleifend vel vitae libero. Aenean at rutrum turpis. Mauris tempor, mauris quis ornare scelerisque, magna mi varius sapien, et pretium elit enim nec arcu. Suspendisse viverra gravida nulla quis scelerisque. Integer in consectetur metus. Morbi efficitur magna volutpat dolor scelerisque, sit amet mattis arcu feugiat. Nunc eros sapien, scelerisque et consectetur et, sollicitudin a dolor. Nunc ornare vestibulum urna id fringilla. 
`;

handleText();

}