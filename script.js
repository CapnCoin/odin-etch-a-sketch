function makeGrid(size){
    let container = document.getElementById("grid");
    container.setAttribute("style",
        "display: flex; flex-direction: column; height: 100vh; width: 100%;"
    );

    let containerHeight = container.offsetHeight;

    for(let r = 0; r < size; r++){

        //create row
        let row = document.createElement("div")
        row.setAttribute("class", "row");
        row.setAttribute("style",
            `display: flex; background-color: black; width: ${containerHeight}px; height: ${Math.floor(containerHeight / size)}px;`
        );
        
        //add blocks to row
        for(let c = 0; c < size; c++){
            let block = document.createElement("div");
            block.setAttribute('class', 'block');
            block.setAttribute("style",
                `width: ${Math.floor(containerHeight / size)}px; height: ${Math.floor(containerHeight / size)}px; background-color: white; border: 2px solid black;`
            );

            block.addEventListener("mouseover", function(e){
                e.target.style.backgroundColor = "black";
            });

            row.appendChild(block);
        }

        //add row to grid
        container.appendChild(row);
    }
}

function clearGrid(){
    //get the grid
    let grid = document.getElementById("grid");
    //get all blocks by class
    let blocks = grid.querySelectorAll('.block');
    //loop through blocks
    blocks.forEach(block => {
        //change background color to white
        block.style.backgroundColor = "white";
    });
}

function deleteGrid(){
    const grid = document.getElementById("grid");
    //loop while grid has children
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

const resetButton = document.getElementById("reset");
const resizeButton = document.getElementById("resize");

resetButton.addEventListener("click", () => {
    clearGrid();
});

resizeButton.addEventListener("click", () => {
    //get input and convert to int
    let size = parseInt(
        prompt("Enter new grid size", '9'), 10
    );

    //check for nan
    if(isNaN(size)) size = 9;

    //if size < 1 set size to 1
    if(size < 1){
        size = 1;
    }
    //if size > 100 set size to 100
    if(size > 100){
        size = 100;
    }

    deleteGrid();
    makeGrid(size);
});

makeGrid(9);