//Etch-A-Sketch by KaysanMR

const grid = document.querySelector('#grid');
const divWidth = grid.offsetWidth;
const slider = document.getElementById("gridSize");
const field = document.querySelector(".inputNumber");
const clearButton = document.getElementById("clear");
let resolution = slider.value;

grid.addEventListener("mousemove", draw);
grid.addEventListener("dragstart", (e) => e.preventDefault());

clearButton.addEventListener("click",() => createGrid(resolution));

updateResolution();
createGrid(resolution);

function createGrid() {
    grid.innerHTML = "";
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
        createGrid(resolution);
    };

    field.onchange = () => {
        slider.value = field.value;
        resolution = field.value;
        console.log(resolution);
        createGrid(resolution);
    };
}
