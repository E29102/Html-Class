// Set up code - do not remove
document.querySelector('button#textColour').addEventListener('click', blueToRed);
document.querySelector('button#bgColour').addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);
// Do not alter lines of code 2-4!
const blueParagraph = document.getElementById(`blueParagraph`)

//setAttribute id



console.log(getComputedStyle(blueParagraph).color);


function blueToRed() {
    blueParagraph.style.color = `red`;
    console.log(blueParagraph.style.color);
    console.log(getComputedStyle(blueParagraph).color);
    blueParagraph.textContent = blueParagraph.textContent.replace(`blue`, `red`);

}

const greenParagraphs = document.querySelectorAll(".greenBg");
console.log("Line 1 " + greenParagraphs[0].style.color); 
console.log("Line 2 " + getComputedStyle(greenParagraphs[0]).color);

function greenToPink() {
    for( element of greenParagraphs){
        element.className = `hotpinkBg`;
        console.log(element.style.color);
        console.log(getComputedStyle(element).backgroundColor);
        element.textContent = element.textContent.replace(`green`, `pink`);
    }
}

const tnrParagraph =  document.getElementById(`tnrParagraph`);
console.log(tnrParagraph.style.fontFamily);
console.log(getComputedStyle(tnrParagraph).fontFamily);


function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    console.log(tnrParagraph.style.fontFamily);
    console.log(getComputedStyle(tnrParagraph).fontFamily);

    tnrParagraph.textContent = tnrParagraph.textContent.replace(`Times New Roman`, `Arial`);



}