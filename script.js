

const grid = document.querySelector('#grid');
const divWidth = grid.offsetWidth;
// const size = document.getElementById('gridSize').oninput = () => this.value;

function createGrid(res) {
    grid.style.setProperty('--grid-rows', res);
    grid.style.setProperty('--grid-cols', res);
    for (i = 0; i < (res ** 2); i++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = `cell ${i}`;
    };
};

createGrid(100);

function draw(e) {
    if (e.buttons !== 1) return;
     e.target.style.backgroundColor = "black"; 
};

grid.addEventListener("mousemove", draw);
