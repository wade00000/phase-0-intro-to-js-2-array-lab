// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function appendCat(){
    const newCats = [...cats,"Broom"]
    return newCats.slice()
}

function prependCat(){
    const newCats = ["Arnold",...cats ]
    return newCats
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1)

}

function removeFirstCat(){
    return cats.slice(1)
}


