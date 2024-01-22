const container = document.querySelector("#container");
const grid = document.createElement("div");
grid.setAttribute("id", "grid");

let gridSize = 100;
let gridBox = 960;
let newSquareSize = gridBox / gridSize - 2;

console.log(gridBox);


makeGrid(gridSize);

function makeGrid(gridsize) {
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++){
            newSquare();
        };
    };
    container.appendChild(grid);
}

function newSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", `width: ${newSquareSize}px; height: ${newSquareSize}px`);
    square.addEventListener("mouseover", () => {
        square.classList.add("blacked");
    });
    grid.appendChild(square);
}

function changeColor(square) {
    square.setAttribute("style", "background-color: black");
}