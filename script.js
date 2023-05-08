//Etch-A-Sketch by KaysanMR

const grid = document.querySelector('#grid');
const divWidth = grid.offsetWidth;
const slider = document.getElementById("gridSize");
const field = document.querySelector(".inputNumber");
const clearButton = document.getElementById("clear");
const mode = document.querySelectorAll("input[name=mode]")
let resolution = slider.value;

grid.addEventListener("dragstart", (e) => e.preventDefault());
grid.addEventListener("mousemove", draw);
clearButton.addEventListener("click",() => createGrid(resolution));

mode.forEach((e) => {
    switchMode(e);
});

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

function switchMode(e) {
    e.addEventListener("click", () => {
        switch (e.value) {
            case "draw":
                grid.removeEventListener("mousemove", erase);
                grid.addEventListener("mousemove", draw);
                console.log("now drawing");
                break;
            case "erase":
                grid.removeEventListener("mousemove", draw);
                grid.addEventListener("mousemove", erase);
                console.log("now erasing");
                break;
        }
    });
};

function draw(e) {
    if (e.buttons !== 1) return;
    e.target.style.backgroundColor = "black"; 
    e.target.style.borderColor = "black"; 
};
function erase(e) {
    if (e.buttons !== 1) return;
    e.target.style.backgroundColor = ""; 
    e.target.style.borderColor = "hsla(1,0%,0%,12%)"; 
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
