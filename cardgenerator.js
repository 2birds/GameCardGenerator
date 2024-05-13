console.log("Working!");

function makeCardSubsection(text, classname) {
	var subsection = document.createElement("div");
	var subsectionAttr = document.createAttribute("class");

	subsectionAttr.value = "subsection " + classname;
	subsection.setAttributeNode(subsectionAttr);

	subsection.appendChild(document.createTextNode(text));
	return subsection;
}

function makeCardElement(topText, midText, bottomText) {
	var cardElem = document.createElement("div");
	var classAttr = document.createAttribute("class");
	classAttr.value = "card";
	cardElem.setAttributeNode(classAttr);

	cardElem.appendChild(makeCardSubsection(topText, "subsection1"));

	if (midText === "") {
    return cardElem;
	}

	cardElem.appendChild(makeCardSubsection(midText, "subsection2"));

	if (bottomText === "") {
    return cardElem;
	}

	cardElem.appendChild(makeCardSubsection(bottomText, "subsection3"));

	return cardElem;
}

function makeCard(event)
{
	event.preventDefault();
  var topText = document.getElementById("toptext");
	console.log(document.getElementById("toptext").value);
  var midText = document.getElementById("middletext");
  var bottomText = document.getElementById("bottomtext");

	let cards = document.getElementById("cards");

	cards.appendChild(makeCardElement(topText.value, midText.value, bottomText.value));

	topText.value = "";
	midText.value = "";
	bottomText.value = "";
}

window.onload = ()=>{
	let button = document.getElementById("submitbutton");
	button.addEventListener("click", makeCard);
};
