const boardContainer = document.querySelector('.board-container');
const sizePicker = document.querySelector('#size-picker');
const resetButton = document.querySelector('.reset');
const rainbowButton = document.querySelector('.rainbow');
const colorPicker = document.querySelector('#color-picker');
const eraserButton = document.querySelector('.eraser');
let innerDivs;

function resetBoard(){
    innerDivs.forEach(divs => {
        divs.style.backgroundColor = 'white';
    })
}

function normalColorPicker(){
    innerDivs.forEach(divs => divs.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = document.querySelector('#color-picker').value;
    }));
}
function createBoard(){
    const boardProperties = boardContainer.getBoundingClientRect();
    let boardWidth = boardProperties.width;
    let numOfSquares = (101-sizePicker.value);
    let eachSquareWidth = (boardWidth / numOfSquares);
    boardContainer.innerHTML = '';
    for(let i=0;i<numOfSquares;i++){
        let innerDivsContainer = document.createElement('div');
        innerDivsContainer.style.display = 'flex';
        for(let j=0; j<numOfSquares; j++){
            let innerDiv = document.createElement('div');
            innerDiv.style.width = `${eachSquareWidth}px`;
            innerDiv.style.height = `${eachSquareWidth}px`;
            innerDiv.classList.add('inner-div');
            innerDivsContainer.appendChild(innerDiv);
        }
        boardContainer.appendChild(innerDivsContainer);
        innerDivs = document.querySelectorAll('.inner-div');
        normalColorPicker();
    }
}

function customColorGrid(){
    innerDivs.forEach(divs => divs.addEventListener('mouseenter', function(e){
        let redValue = Math.round(Math.random() * 255);
        let blueValue = Math.round(Math.random() * 255);
        let greenValue = Math.round(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue})`;
    }));
}

function eraseBackground(){
    innerDivs.forEach(divs => divs.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = 'white';
    }));
}
createBoard();
resetButton.addEventListener('click', resetBoard);
sizePicker.addEventListener('input', createBoard);
rainbowButton.addEventListener('click', customColorGrid);
colorPicker.addEventListener('input', normalColorPicker);
colorPicker.addEventListener('click', normalColorPicker);
eraserButton.addEventListener('click', eraseBackground);