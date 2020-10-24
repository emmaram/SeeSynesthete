//Pass all webpage text through this processor to apply designated colours on webpage characters

function colouriseCharacter(character, colour) {
  // const colouredCharacter = character.fontcolor(defaultColours[character]);
  const colouredCharacter = '<span style="color: ' + colour + '">' + character + '</span>';
  return colouredCharacter;
}

function colouriseTextNode(bodyNode, textNode) {
  // getting colours from the defaultColours list directly   
  // console.log("child node = ", textNode);
  // console.dir(textNode);
  var text = textNode.textContent;
  // textNode.textContent = text.substr(0, 5);
  //textNode.nodeValue = "<b>" + text + "</b>";

  var spanElement = document.createElement("span");
  var newText = "";

  for (let k = 0; k < text.length; k++) {
    const character = text[k];
    newText = newText + colouriseCharacter(character, defaultColours[character.toLowerCase()]);
  }
  spanElement.innerHTML = newText;
  bodyNode.replaceChild(spanElement, textNode);
}



function processTextNode() {
  const bodyNodes = document.querySelectorAll("body *");
  // console.log(bodyNodes);
  for (let i = 0; i < bodyNodes.length; i++) {
    var bodyNode = bodyNodes[i];
    if (bodyNode.tagName != "SCRIPT" && bodyNode.tagName != "STYLE") {
      const childNodes = bodyNode.childNodes;
      // console.log(bodyNode, bodyNode.tagName);
      for (let j = 0; j < childNodes.length; j++) {
        const childNode = childNodes[j];
        if (childNode.nodeType == 3) {
          colouriseTextNode(bodyNode, childNode);
        }
      }
    }
  }
}

processTextNode();