function buttonClickCallback() {
    console.log("addAnother() running");
    var newPara = document.createElement("p");
    var newText = document.createTextNode("You clicked on the button.");
    newPara.appendChild(newText);
    document.body.appendChild(newPara);
}

function mouseOverCallback() {
    var newPara = document.createElement("p");
    var newText = document.createTextNode("You moused over the button.");
    newPara.appendChild(newText);
    document.body.appendChild(newPara);
}