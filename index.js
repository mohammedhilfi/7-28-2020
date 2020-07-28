function myfunction(moring , night, day){
moring();
night();
day();
}

function inputFunction(){
console.log('hello');
}

function outputFunction(){
console.log('hi');

}

function thirdFunction(){
console.log('bye');
}

myfunction( outputFunction, outputFunction, thirdFunction);