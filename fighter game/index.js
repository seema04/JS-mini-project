let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

let divEl = document.querySelector('#stage');

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    
    let emoji1 = fighters[Math.floor(Math.random() * 17)];
    let emoji2 = fighters[Math.floor(Math.random() * 17)];
    
    divEl.innerHTML = emoji1 + ' VS ' + emoji2;
    
})
