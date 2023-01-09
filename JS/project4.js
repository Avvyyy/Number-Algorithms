let numbers = document.getElementById('reversie');
let reverse = [];

for (let i = 9; i >= 0; i--) {
    
    reverse.push(i);
    numbers.textContent = reverse;
}