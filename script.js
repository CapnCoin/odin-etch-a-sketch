function makeGrid(size){
    let container = document.getElementById("grid");
    container.setAttribute("style",
        "display: flex; flex-direction: column; height: 100vh; width: 100%;"
    );

    let containerHeight = container.offsetHeight;

    for(let r = 0; r < size; r++){

        //create row
        let row = document.createElement("div")
        row.setAttribute("id", `row${r}`);
        row.setAttribute("style",
            `display: flex; background-color: black; width: ${containerHeight}px; height: ${Math.floor(containerHeight / size)}px;`
        );
        
        //add blocks to row
        for(let c = 0; c < size; c++){
            let block = document.createElement("div");
            block.setAttribute("id", `block${c}`);
            block.setAttribute("style",
                `width: ${Math.floor(containerHeight / size)}px; height: ${Math.floor(containerHeight / size)}px; background-color: white; border: 2px solid black;`
            );

            row.appendChild(block);
        }

        //add row to grid
        container.appendChild(row);
    }
}

makeGrid(50);