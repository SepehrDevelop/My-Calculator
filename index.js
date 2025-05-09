let topRow = document.getElementById('topRow');
let middleRow = document.getElementById('middleRow');
let bottomRow = document.getElementById('bottomRow');

for (let i=1; i<4; i++){
    let button = document.createElement('button');
    button.innerHTML = i;
    button.classList.add("number0-9", "button")
    topRow.append(button);
}

for (let i=4; i<7; i++){
    let button = document.createElement('button');
    button.innerHTML = i;
    button.classList.add("number0-9", "button")
    middleRow.append(button);
}

for (let i=7; i<10; i++){
    let button = document.createElement('button');
    button.innerHTML = i;
    button.classList.add("number0-9", "button");
    bottomRow.append(button);
}

let screen = document.getElementById('result');
let buttons = document.getElementsByClassName('button');



for (let i=0; i<14; i++){
    buttons[i].addEventListener('click', function(e) {
    	// let displayedNumber = e.target.innerHTML;
	screen.append(e.target.innerHTML)
    })
}

let result=0;

function equal(){
   result = eval(screen.innerHTML);
   screen.innerHTML = result;
 }

let acButton = document.querySelector('.numberAc');

acButton.addEventListener('click', function() {
  screen.innerHTML = '';
});

  