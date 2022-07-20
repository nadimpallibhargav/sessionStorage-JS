"use strict"

function doFirst() {
    var button = document.querySelector('#submitBtn');  

    button.addEventListener('click', save, false);
    display();
}

function save() {
    var key = document.querySelector('#key').value;
    var value = document.querySelector('#value').value;    

    console.log(key);
    sessionStorage.setItem(key,value);

    display();

    
    key.value = "";
    value.value = "";
}

function display() {
    var displayData = document.querySelector('#display');
    displayData.innerHTML = "";
    for(var i = 0; i < sessionStorage.length; i++) {
        var index = sessionStorage.key(i);
        var b = sessionStorage.getItem(index);
        displayData.innerHTML += `<p>${index} :  ${b}</p>`;
    }
}

var clear = document.querySelector('#clear');

clear.addEventListener('click', clearData, false);

function clearData() {
    sessionStorage.clear();
    location.reload();
}

window.addEventListener('load',doFirst,false);