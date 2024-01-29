const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow'];
function buildP(placeholder, num){
    let i =0;
    do{
    p  = document.createElement(`p`)//Have you tried turning it off and on again?
    text = document.createTextNode(`All work and no play makes Jack a dull boy`)
    p.style.color = colours[parseInt(Math.random()* colours.length)]
    p.appendChild(text);
    placeholder.appendChild(p);
    i += 1;
} while (i < num);
}

buildP(document.querySelector(`#placeholder`), 10)