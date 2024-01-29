darthVader = {
    "allegiance": "Empire",
    "weapon": "lightsaber",
    "sith":true
    
}

console.log(darthVader.allegiance)
console.log(darthVader.weapon)
console.log(darthVader.sith)
console.log(darthVader.jedi)
console.log(Object.keys(darthVader).length)
darthVader.children = 2;
darthVader.childNames = ["Luke", "Leia"];


console.log(darthVader.children)
console.log(darthVader.childNames[0])

for( key in darthVader){
    console.log(`Darth vaders ${key} is ${darthVader[key]}`)
}


darthVader.allegiance = "the light side";
console.log(darthVader)

delete darthVader.children;
console.log(darthVader)

let{allegiance, weapon, sith,childNames} = darthVader;
console.log(allegiance)
console.log(weapon)
console.log(sith)
console.log(childNames)
darthVader = {}
console.log(darthVader)


