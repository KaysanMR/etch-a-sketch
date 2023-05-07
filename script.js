

const grid = document.querySelector('#grid');
const divWidth = grid.offsetWidth;
let resolution = 16;

function createGrid(res) {
    grid.style.setProperty('--grid-rows', res);
    grid.style.setProperty('--grid-cols', res);
    for (i = 0; i < (res ** 2); i++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = `cell ${i}`;
    };
};


function draw(e) {
    e.stopPropagation();
    if (e.buttons !== 1) return;
    e.target.style.backgroundColor = "black"; 
    e.target.style.borderColor = "black"; 
};

grid.addEventListener("mousemove", draw);
grid.addEventListener("dragstart", (e) => e.preventDefault());

const size = document.getElementById("gridSize");

size.oninput = () => {
    resolution = size.value;
    console.log(resolution);
}

createGrid(resolution);

