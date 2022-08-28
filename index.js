// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
const newCats = [...cats, "Broom"];
function appendCat(name){
    return newCats;
}
const firstCat = ["Arnold", ...cats];
function prependCat(name){
    return firstCat;   
}
function removeLastCat(){
    const firstCat2 = [...cats];
    firstCat2.pop();
    return firstCat2;
    
}function removeFirstCat(){
    const firstcat3 = [...cats];
    firstcat3.shift();
    return firstcat3;
}













