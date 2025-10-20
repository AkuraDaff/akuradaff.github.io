const mainBox = document.querySelector('.mainBoxMaster2');
const mainBoxContent = document.querySelector('.mainBoxMaster2Content');
const slider = document.querySelector('.contentBoxSlider');
// const sliderButton = document.querySelector('.arrowButton');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let boxPost = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5'];
// const buttonNextPrev = sliderButton.querySelectorAll ('button');

function updatePosition() {
    const allContentBox = slider.querySelectorAll('li');
    allContentBox.forEach((Box, i) => {
        Box.classList.remove('pos1', 'pos2', 'pos3', 'pos4', 'pos5');
        Box.classList.add(boxPost[i]);
    });
}

nextButton.addEventListener('click', function (){
    boxPost.push(boxPost.shift());
    updatePosition();

});

prevButton.addEventListener('click', function (){
    boxPost.unshift(boxPost.pop());
    updatePosition();
});