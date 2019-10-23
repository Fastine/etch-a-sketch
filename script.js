function drawGrid (gridSize) {
  
    for (i = 0; i < gridSize**2; i++) {
        let div = document.createElement("div");
        div.classList.add("cell");
        document.getElementById("grid-wrapper").appendChild(div);
    }
    document.getElementById("grid-wrapper").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById("grid-wrapper").style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    fillCell();
}


function resizeGrid () {
    let gridSize = parseInt(prompt("Enter size of new grid", "2-128"))
        if (gridSize < 2 || gridSize > 128) {
            resizeGrid();
        }
        else if (gridSize >= 2 || gridSize <= 128) {
            deleteGrid();
            drawGrid(gridSize);
        }
        else {
            alert("Please enter a value between 2 and 128");
            resizeGrid();
        }
}

let resize = document.getElementById("resize");
resize.addEventListener("click", function(){resizeGrid()})

let clear = document.getElementById("clear");
clear.addEventListener("click", function(){clearGrid()})

function fillCell () {
    let cell = document.querySelectorAll(".cell");
    cell.forEach(function (div) {
        div.addEventListener("mouseenter", (e) => {
            div.style.cssText = "background-color: black";
        });
    });
}

function deleteGrid() {
    let gridWrapper = document.getElementById("grid-wrapper");
    while (gridWrapper.firstChild) {
        gridWrapper.removeChild(gridWrapper.firstChild);
    }
}

function clearGrid () {
    let cell = document.querySelectorAll (".cell");
    cell.forEach(function (div) {
        div.style.cssText = "background-color: white";
    })
}

function initOnStart () {
    drawGrid(16);
    fillCell();
}

initOnStart();