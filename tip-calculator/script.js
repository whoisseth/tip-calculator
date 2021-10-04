// 'use strict'

const bill = document.querySelector('#bill');
const numOfPeople = document.querySelector('#num-of-people');
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');
const resetBtn = document.querySelector('.rset-btn');

const tipBtn = document.querySelectorAll('.tip-btn')
let storeTipValue;

const tipBtn = document.querySelectorAll('.tips');

const tip5p = document.getElementById("5%tip");
const tip10p = document.getElementById("10%tip");
const tip15p = document.getElementById("15%tip");
const tip20p = document.getElementById("20%tip");
const tip50p = document.getElementById("50%tip");
// const tip5p = document.getElementById("5%tip");



tipBtn.addEventListener('click', function(evt) {
    var target = evt.target;
    if (target.id === 'tip5p') {
        console.log('5');
    }

})


resetBtn.addEventListener('click', function() {

})