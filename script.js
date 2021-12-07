// declaring divs
const gridBox = document.querySelector('.gridBox');
const restartButton = document.querySelector('.restartButton');
const gridSizeNew = document.querySelector('.gridSize');
const colorChange = document.querySelector('.colorChange');
const chooseColor = document.querySelector('.chooseColor');
// const colorBackground = document.querySelector('.colorBackground');
const randomColor = document.querySelector('.randomColor');
const eraser = document.querySelector('.eraser');
let actualRange = document.querySelector('.actualRange');

actualRange.textContent = gridSizeNew.value;

//function which starts new grid
function newGrid(gridSize) {

    for (i = 0; i < (gridSize * gridSize); i++) {
        const gridElement = document.createElement('div');
        gridElement.setAttribute('class', 'gridElement');
        gridElement.setAttribute('style', `height: ${448 / gridSize}px; width: ${448 / gridSize}px`);
        gridBox.appendChild(gridElement);


        gridElement.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'black';
        });
        colorChange.addEventListener('click', () => {
            gridElement.addEventListener('mouseenter', function (e) {
                e.target.style.background = chooseColor.value;
            });
        });
        randomColor.addEventListener('click', () => {
            gridElement.addEventListener('mouseenter', function (e) {
                e.target.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
            });
        });
        eraser.addEventListener('click', () => {
            gridElement.addEventListener('mouseenter', function (e) {
                e.target.style.background = 'white';
            });
        });
    }
}
// restart button
restartButton.addEventListener('click', () => {
    restartGrid()
});

//restart grid function
function restartGrid(actualGridSize) {
    actualGridSize = gridSizeNew.value;
    let gridResetElements = document.querySelectorAll('.gridElement');
    gridResetElements.forEach(gridResetElements => gridResetElements.remove());
    newGrid(actualGridSize);
    
}

gridSizeNew.addEventListener('input', function() {
    let sliderValue = document.querySelector('.gridSize').value;
    actualRange.textContent = sliderValue;
});

newGrid(16);



