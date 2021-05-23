const boardContainer = document.querySelector('.board-container');
const boardProperties = boardContainer.getBoundingClientRect();
const boardWidth = boardProperties.width;
const boardHeight = boardProperties.height;
let numOfSquares = 150;

for(let i=0;i<numOfSquares;i++){
    const divsContainer = document.createElement('div');
    divsContainer.style.width = `${boardWidth}px`;
    divsContainer.style.display = 'flex';
    for(let j=0;j<numOfSquares; j++){
        const innerDiv = document.createElement('div');
        innerDiv.style.width = (`${(boardWidth / numOfSquares)}px`);
        innerDiv.style.height = (`${(boardWidth / numOfSquares)}px`);
        innerDiv.classList.add('inner-div');
        divsContainer.appendChild(innerDiv);
    }
    boardContainer.appendChild(divsContainer);
}

const colorPicker = document.querySelector('.color-picker');

const innerDivs = document.querySelectorAll('.inner-div');
innerDivs.forEach(div => div.addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = colorPicker.value;
}));