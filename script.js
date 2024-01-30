const container = document.querySelector("#container");
const promptContainer = document.querySelector("#prompt_container");
const grid = document.createElement("div");
grid.setAttribute("id", "grid");

let gridSize = 16;
let gridBox = 960;
let newSquareSize = gridBox / gridSize - 2;

const sizeButton = document.createElement("button");
const sizePrompt = document.createElement("prompt");
sizeButton.textContent = "Test"
promptContainer.appendChild(sizeButton);



makeGrid(gridSize);

sizeButton.addEventListener("click", () => {
    
    do {
        gridSize = prompt("Enter grid size: ");
    } while (gridSize < 1 || gridSize > 100);

    const boxes = document.querySelectorAll(".square");
    boxes.forEach(box => {
        // console.log(box);
        grid.removeChild(box);
    });

    makeGrid(gridSize);
    if (gridSize == 69) {
        alert("Nice");
    }
})

function makeGrid(gridsize) {
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++){
            newSquare();
        };
    };
    container.appendChild(grid);
}

function newSquare() {
    newSquareSize = gridBox / gridSize - 2;
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", `width: ${newSquareSize}px; height: ${newSquareSize}px;`);
    square.style.backgroundColor = "black";
    let depth = 0.0;
    square.style.opacity = 0.0;
    square.addEventListener("mouseover", () => {
        if (depth < 1.0) {
            depth += 0.1;
            console.log(depth);
            square.style.opacity = depth;
        };
    });
    grid.appendChild(square);
}

function changeColor(square) {
    square.setAttribute("style", "background-color: black");
}