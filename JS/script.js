
// Function to print the first 10 even Numbers
function evenNumbers(){
let evenNumbers = []
let evenList = document.getElementById('evenList');

for(i=2; i<=20; i++){
  if(i % 2 == 0){
   evenNumbers.push(i);
  }
}
evenList.textContent = evenNumbers

}


// Function to print the first 10 odd Numbers
function oddnumbers(){
  let oddNumbers = []
let oddList = document.getElementById('oddList');

for(i=0; i<=20; i++){
  if(i % 2 !== 0){
   oddNumbers.push(i);
  }
}
oddList.textContent = oddNumbers
}

// Function to print the first 19 normal Numbers
function normalNumbers(){
  let normalNumbers = []
let normalList = document.getElementById('normalList');

for(i=1; i<20; i++){
   normalNumbers.push(i);
}
normalList.textContent = normalNumbers
}


// Function to print the first 10 whole Numbers
function wholeNumbers(){
  let wholeNumbers = []
let oddList = document.getElementById('wholeList');

for(i=0; i<10; i++){
   wholeNumbers.push(i);
}
wholeList.textContent = wholeNumbers
}


// all functions will be called when the html has finished loading

document.onload[
  evenNumbers(),
  oddnumbers(),
  normalNumbers(),
  wholeNumbers()
];