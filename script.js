function createGrid () {
    for (j = 0; j < (16**2); j++) {
        let div = document.createElement("div");
        div.classList.add ("cell");
        div.addEventListener ("mouseenter", function (){
            this.style.backgroundColor = "black";
        })
        document.getElementById("grid-wrapper").appendChild(div);
        }
}

createGrid();