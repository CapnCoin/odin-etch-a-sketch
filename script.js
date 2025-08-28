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
    console.log('clearGrid() called');
}

const resetButton = document.getElementById("reset");
console.log(resetButton);

resetButton.addEventListener("click", () => {
    clearGrid();
});

makeGrid(50);