hanSolo = new Map([
    ["vechicle", "Millenium Falcon"],
    ["bff", "Chewbacca"],
    ["sweetheart", "Leia"],
    ["son", "Ben"]
])

console.log(hanSolo.size)
console.log(hanSolo.get("vechicle"))
console.log(hanSolo.has("Leia"))
console.log(hanSolo.has("Jedi"))
console.log(hanSolo.get("son"))


for(let [key, value] of hanSolo){
    console.log(`${key}, ${value}`)
}
hanSolo.set("bff", "Luke")
console.log(hanSolo)
hanSolo.delete("son")
console.log(hanSolo)
hanSolo.clear()
console.log(hanSolo)