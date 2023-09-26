// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
}
function appendCat(){
    const newCatsArray=[...cats,"Broom"];
    return newCatsArray;
}
function prependCat(){
    const newCatsArray=["Arnold", ...cats];
    return newCatsArray;
}
function removeLastCat(){
    const newCatsArray=cats.slice(0,-1);
    return newCatsArray;
}
function removeFirstCat(){
    const newCatsArray=cats.slice(1);
    return newCatsArray;
}
