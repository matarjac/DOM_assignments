// // EX.1
// const fruitList = ["apple", "banana", "tomato"];
// let unList = document.querySelector('ul');

// for (i=0; i<fruitList.length; i++){
//     let newItem = document.createElement('li')
//     newItem.textContent = fruitList[i];
//     unList.appendChild(newItem)
// }

// // EX.2
// const imageSrc = "https://crocoder.dev/icon.png";
// let divElement = document.querySelector('div');
// let croLogo = document.createElement('img');
// croLogo.src = imageSrc;
// divElement.appendChild(croLogo);

// // EX.3
// let firstElement = document.querySelectorAll('ul > li:first-child');
// let thirdElement = document.querySelectorAll('ul > li:last-child');
// firstElement.forEach((li) => {li.textContent='first'});
// thirdElement.forEach((li) => {li.textContent='last'})

///////////////////////////////////////////////////////////////////////////////////

// EX.1

// let button = document.querySelector('button');
// let textBox = document.querySelector('input');
// const heading = document.querySelector('h2');
// console.log(heading);

// button.addEventListener('click', changeHeading);

// function changeHeading(){
//     console.log('func')
//     heading.innerText=textBox.value;
//     textBox.value='';
// }

// EX.2

// document.addEventListener('click', increment);
// let value = 0
// let sizeOfFont = 8
// console.log(value);
// function increment(){
//     value+=1
//     sizeOfFont += 1;
//     document.getElementById('count').textContent = value;
//     document.getElementById('count').style.fontSize = sizeOfFont+'px';
// }

// EX.3


// EX.4
// document.body.onload=loadedFunc;
// function loadedFunc(){
//     document.getElementById('heading').textContent='loaded';
// }

// EX.5

function submitted(e){
    e.preventDefault();
    if(document.querySelector('input').value==1){
        alert('Empty!!')
    }
    console.log(document.querySelector('input').value);
    console.log('hello submitted');
};

    // let textField = document.getElementById('text-field');
    // console.log(textField.value);


// EX.6

// let helloBtn = document.getElementById('hello');
// let goodbyeBtn = document.getElementById('goodbye');

// helloBtn.addEventListener('click', function(){
//     console.log('hello');
// })
// goodbyeBtn.addEventListener('click', printBye);

// function printBye(){
//     console.log('Goodbye');
// }

// EX.7

let toDoList  = document.querySelector('ul');
let textInput = document.querySelector('input');
let addBtn = document.querySelector('button');

addBtn.addEventListener('click', addNewToDo);

function addNewToDo(){

    let newLi = document.createElement('li');
    newLi.innerText = textInput.value;
    textInput.value = '';
    newLi.addEventListener('dblclick', function(){
        toDoList.removeChild(newLi);
    });
    newLi.addEventListener('click', function(){
        if (newLi.style.backgroundColor=='red'){
            newLi.style.backgroundColor='white';
        }
        else{
            newLi.style.backgroundColor='red';
        }

    });
    toDoList.appendChild(newLi);
    
}


