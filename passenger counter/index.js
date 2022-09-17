// javascript
let count = 0;
let countEl = document.getElementById('person-count');
let saveEl = document.getElementById('entries');

function increment () {
    count += 1;
    countEl.innerText = count;
}

function save(){
    let ent = count + ' - ';
    saveEl.textContent += ' - ' +ent;
    countEl.textContent = 0;
    count = 0;
}