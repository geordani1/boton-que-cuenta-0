// let count = document.getElementById(bu)

let countEl = document.getElementById("countEl");
let count = 0;

let saveEl = document.getElementById("save-el");

console.log(saveEl)


function increment() {
    count += 1;
    countEl.innerHTML = count;
}


function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}