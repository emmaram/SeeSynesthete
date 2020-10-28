// HTML tests styled in styles.css:
// <div class="row-container">
//     <div class="colour-character">A</div>
//     <div class="colour-box" title="blah"></div>
// </div>

function changeColour() {
    console.log("change");

}

// Define single row within Settings
function colourRow(character, boxColour) {
    var row = document.createElement("div");    
    row.className = "row-container";
    
    // define the character element
    var characterElement = document.createElement("div");    
    characterElement.className = "colour-character";
    var text = document.createTextNode(character);
    characterElement.appendChild(text);

    //define the box element    
    //<input type="color" value="#ff0000" style="width:50px;">
    var boxElement = document.createElement("input");    
    boxElement.setAttribute("type", "color");
    boxElement.setAttribute("value", boxColour);
    // boxElement.setAttribute("onchange", "changeColour(this.value)");
    boxElement.setAttribute("onchange", changeColour);
    boxElement.className = "colour-box";
    //boxElement.style.backgroundColor = boxColour;
    boxElement.title = boxColour;
    
    row.appendChild(characterElement);
    row.appendChild(boxElement);
    
    return row;
}

// Generate all rows within settings
function rowGenerator() {
    var container = document.getElementById("colour");
    var i;
    for (i = 0; i < characterOrder.length; i++) {
        // console.log("character = " + characterOrder[i] + " colour = " + defaultColours[characterOrder[i]]);
        // console.log(colourRow(characterOrder[i], defaultColours[characterOrder[i]]));
        var currentRow = colourRow(characterOrder[i], defaultColours[characterOrder[i]]);
        container.appendChild(currentRow);
    }
}

// Call function rowGenerator to happen on load 
document.addEventListener('DOMContentLoaded', rowGenerator, false);

