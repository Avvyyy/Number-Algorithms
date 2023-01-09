let loops = document.getElementById('loops')
let loopsValues = [];
for (let i = 1 ; i <= 50 ; i++) {
    b = i*10
   loopsValues.push(b);
   loops.textContent = loopsValues
}