const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.querySelector('#paswd1');
let password2 = document.querySelector('#paswd2');

let passwordgenerated = false;

function generatePassword(){
    if(passwordgenerated === false)
    {
      for(let i = 0; i < 15; i++)
    {
     password1.textContent += characters[Math.floor(Math.random() * characters.length)];   
    //   password1.textContent += characters[s];
     password2.textContent += characters[Math.floor(Math.random() * characters.length)];
     passwordgenerated = true;
    }
  }
}


function regenerate () {
    if(passwordgenerated === true)
    {
        password1.textContent = '';
        password2.textContent = '';
        
        passwordgenerated = false;
    }
    generatePassword();
}
   
