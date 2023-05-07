

const grid = document.querySelector('#grid');
const divWidth = grid.offsetWidth;
let resolution = 2;


grid.addEventListener("mousemove", draw);
grid.addEventListener("dragstart", (e) => e.preventDefault());

const slider = document.getElementById("gridSize");
const field = document.querySelector(".inputNumber")

updateResolution();

createGrid(resolution);

function createGrid() {
    grid.style.setProperty('--grid-rows', resolution);
    grid.style.setProperty('--grid-cols', resolution);
    for (i = 0; i < (resolution ** 2); i++) {
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

function updateResolution() {
    slider.onchange = () => {
        field.value = slider.value;
        resolution = slider.value;
        console.log(resolution);
    };

    field.onchange = () => {
        slider.value = field.value;
        resolution = field.value;
        console.log(resolution);
    };
}

