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
    const newTitleTask = input.value;       // przypisanie wartosci z input do zmiennej
    if (input.value.length) {               // sprawdzenie czy dlugosc input jest true jesli tak idz dalej
        // for (const titleTask of toDoList) {
        //     if (titleTask === newTitleTask) {            // na pozniej sprawdzanie czy wpis juz istnieje
        //         return;
        //     }
        // }
        const task = document.createElement('li');  // tworzenie nowego elementu li
        task.classList.add('task');                          // dodawanie klasy task nowemu li
        task.innerHTML = newTitleTask + "   <button> usun </button>"; // ustalanie ciala nowego li
        toDoList.push(task);                                  // dodawanie do tablicy nowego li
        renderList();                                       // renderowanie nowej listy
        // ul.appendChild(task);                               // wywolanie nowych taskow li w ul
        // console.log(`task ${task}`);
        console.log(` %c ${toDoList}`, "color: orange;")
        input.value = "";                                    // czyszczenie okna wpisywania
        taskNumber.textContent = listItems.length;          // task counter
        console.log(` %c ${taskNumber.textContent}`, "color: green");                // wyswietl counter zadan
        task.querySelector('button').addEventListener('click', removeTask); //  calback na klika batona usun
        // console.log(toDoList);
    }
}

const renderList = () => {                              // funkcja renderuj liste
    ul.textContent = "";                                //czysc liste
    toDoList.forEach((toDoElement, key) => {    // forEach na tablicy
        toDoElement.dataset.key = key;                  // przypisanie klucza elementom
        ul.appendChild(toDoElement);                    // wywolanie elementow li w liscie ul
        // console.log(`%c  todoelement ${toDoElement}`, "color: red");
    })
}


let results;
const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();

    if (e.target.value) {
        console.log(searchText);
        results = [...listItems].filter(searchedElement => searchedElement.textContent.toLowerCase().includes(searchText));
        console.log(` %c ${results}`, "color: yellow;");
        ul.textContent = "";
        results.forEach(result => ul.appendChild(result));
        taskNumber.textContent = listItems.length;

    }
    else  {
        renderList();
        results.length = 0;
        console.log(`%c ${searchText.length}`, "color: red");
        taskNumber.textContent = listItems.length;
    }
}
inputSearch.addEventListener('input', searchTask);
form.addEventListener('submit', addTask);

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
