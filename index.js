// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];
//end of the list
function destructivelyAppendCat(name){
   cats.push(name)
}
console.log(cats);

// beginnig of the list
function destructivelyPrependCat(name){
   cats.unshift(name)
}
console.log(cats);

// removes last cat
function destructivelyRemoveLastCat(){
    cats.pop()
 }
 console.log(cats);

 function destructivelyRemoveFirstCat(){
   cats.shift()
 }
 console.log(cats);


 //copy cat to newCats
function appendCat(name){
   const cat = [...cats, name];
   return cat;
}

function  prependCat(name){
   const cat = [name, ...cats];
   return cat;
}

function removeLastCat(){
   const cat= cats.slice(0, -1);
   return cat;
}

function removeFirstCat(){
   const cat= cats.slice(1);
   return cat;
}
