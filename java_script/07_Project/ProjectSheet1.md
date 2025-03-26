# Project related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1
```javascript
const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");

buttons.forEach(function (button){
  button.addEventListener('click',function (e){
    body.style.backgroundColor=e.target.id;
  })
})
```
## Project 2
```javascript
const form=document.querySelector("form");
form.addEventListener("submit",function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector("#height").value)
  const weight=parseInt(document.querySelector("#weight").value)
  const result=document.querySelector("#results")

  if(!height|| height<0|| isNaN(height)){
    result.innerHTML=`Please give valid height ${height}`;
  }
  else if(!weight|| weight<0|| isNaN(weight)){
    result.innerHTML=`Please give valid weight ${weight}`;
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    //show the result
    let msg='';
    if(bmi<18.6){
      msg='You are under weight'
    }
    else if(bmi<=24.9){
      msg='You are in normal range'
    }
    else{
      msg='You are Overweight'
    }
    result.innerHTML=`<span>${bmi},${msg}</span>`;
  }
})
```
## Project 3
```javascript
const clock=document.getElementById("clock");

setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString()
},1000)
```

## Project 4
```javascript
let num=parseInt(Math.random()*100+1)

const submit=document.querySelector("#subt");
const userInp=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")
const startOver=document.querySelector(".resultParas")

const p=document.createElement('p');

let prevGuess=[]
let numGuess=1
let playGame=true;

if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault();
    const guess=parseInt(userInp.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(!guess||isNaN(guess)||!Number.isInteger(guess)||guess<1||guess>100){
    alert("Please enter a valid number")
  }
  else{
    prevGuess.push(guess);
    if(numGuess>=10){
      displayGuess(guess)
      displayMessage(`Game over. Random number was ${num} `);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess===num){
    displayMessage(`You guessed it right number is ${num}`);
    endGame();
  }
  else if(guess>num){
    displayMessage(`your guess ${guess} is higher than the number`);
  }
  else if(guess<num){
    displayMessage(`your guess ${guess} is lesser than the number`);
  }
}

function displayGuess(guess){
  userInp.value='';
  guessSlot.innerHTML+=`${guess} `
  remaining.innerHTML=`${10-numGuess}`
  numGuess+=1
  
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
  userInp.value=''
  userInp.setAttribute("disabled","");
  p.classList.add("button")
  p.innerHTML=`<h2 id="newGame"> Start New Game</h2>`
  startOver.appendChild(p);
  playGame=false
  newGame()
}

function newGame(){
  const newGamebtn=document.querySelector("#newGame");
  newGamebtn.addEventListener("click",function(e){
    num=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=0
    guessSlot.innerHTML=``
    remaining.innerHTML=`${10-numGuess}`
    userInp.removeAttribute('disabled')
    startOver.removeChild(p) 
    playGame=true
  })
}
```
## Project 5
```javascript
const insert=document.getElementById("insert")
window.addEventListener("keydown",(e)=>{
  insert.innerHTML=`
  <div class="color">
  <table>
  <tr>
  <th>Key</th>
  <th>KeyCode</th>
  <th>Code</th>
  </tr>
  <tr>
  <td>${e.key===" "? e.code:e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>
  </table>
  </div>
  `
})
```

## Project 6
```javascript
function randomColor(){
  const hex='0123456789ABCDEF'
  let color='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervalid;
document.querySelector("#start").addEventListener("click",function(){
  intervalid=setInterval(function(){
    document.body.style.backgroundColor=randomColor();
  },800)
})

document.querySelector("#stop").addEventListener("click",function(){
  clearInterval(intervalid);
})
```
