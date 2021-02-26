import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');


const toDoList = [];
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input.add-task');
const inputSearch = document.querySelector('input.search');
const ulSearch = document.querySelector('ul.search-elements');

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    console.log(toDoList);
    taskNumber.textContent = listItems.length;
    renderList();
}

const addTask = (e) => {
    e.preventDefault();
    const newTitleTask = input.value;
    if (input.value.length) {
        for (const titleTask of toDoList) {
            if (titleTask === newTitleTask) {
                return
            }
        }
        const task = document.createElement('li');
        task.classList.add('task');
        task.innerHTML = newTitleTask + "   <button> usun </button>";
        toDoList.push(task);
        renderList();
        ul.appendChild(task);
        input.value = "";
        taskNumber.textContent = listItems.length;
        console.log();
        task.querySelector('button').addEventListener('click', removeTask);
    }
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}
form.addEventListener('submit', addTask);


const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasksFound = [...listItems];
    tasksFound = tasksFound.filter(task => task.textContent.toLowerCase().includes(searchText));
    // ulSearch.textContent = "";
    tasksFound.forEach(li => ulSearch.appendChild(li));
    // renderList();
    console.log(tasksFound);
}
inputSearch.addEventListener('input', searchTask);


// *****************************************************************************************************************************************
// *****************************************************************************************************************************************
// *****************************************************************************************************************************************

// const removeTask = (e) => {
// console.log(e.target.textContent);
// console.log(e.target.parentNode);
// e.target.remove();   //same buttony
// e.target.parentNode.remove(); //buttony i rodzice czyli "li"
// e.target.parentNode.styles.textDecoration = "line-trough";

//     const index = e.target.dataset.key;
//     console.log(index);
//     document.querySelector(`li[data-key="${index}"]`).remove();
// }
// document.querySelectorAll('li button[data-key]').forEach(item => item.addEventListener('click', removeTask));
// *****************************************************************************************************************************************
// *****************************************************************************************************************************************
// *****************************************************************************************************************************************

// const arr = [34, 219, 109, 2934, 12, 10, 29];
//
// const addNumbers = arr.filter(number => number % 2); // zwraca w nowej tablicy nieparzyste
// const evenNumbers = arr.filter(number => !(number % 2)); // zwraca w nowej tablicy parzyste
// const numbersBiggerThan100 = arr.filter(number => number > 100); // zwraca w nowej tablicy wieksze od 100
// console.log(addNumbers);
// console.log(evenNumbers);
// console.log(numbersBiggerThan100);
//
// // umiescic w callbacku zmienna, ktorej wartoscia jest value z pola wyszukiwarki£
//
// const double = arr.map(number => number * 2);
// console.log(double);
// const people = arr.map(number => number + " people");
// console.log(people);
//
// arr.forEach((number, index) => arr[index] = number * 2);
// console.log(arr);  // forEach zmieni zawartosc array ale trzeba sie dostac do danych za pomoca indexu

// *****************************************************************************************************************************************
// *****************************************************************************************************************************************
// *****************************************************************************************************************************************
