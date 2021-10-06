 'use strict'
 const bill = document.querySelector('#bill');
 const numOfPeople = document.querySelector('#num-of-people');
 const tipAmount = document.querySelector('#tipAmount');
 const total = document.querySelector('#total');
 let resetBtn = document.querySelector('.rset-btn');


 const tipBtn = document.querySelectorAll('.tip-btn')
 let storeTipValue;

 //  const tipBtn = document.querySelectorAll('.tips');

 const tip5p = document.getElementById("5%tip");
 const tip10p = document.getElementById("10%tip");
 const tip15p = document.getElementById("15%tip");
 const tip20p = document.getElementById("20%tip");
 const tip50p = document.getElementById("50%tip");
 // const tip5p = document.getElementById("5%tip");

 let Custmbill;
 let storeTipAmount;
 let storeTotal;

 function activeResetBtn() {
     if (bill.value != 0 || numOfPeople.value != 0) {
         resetBtn.classList.add('active-Reset')
     }
 }

 function calculateTip() {;

     if (bill.value == 0) {
         console.log("error1");
     } else if (numOfPeople.value == 0) {
         console.log("error2");
     } else {
         //  Tip Amount
         storeTipAmount = (bill.value / numOfPeople.value) * storeTipValue;
         tipAmount.innerHTML = storeTipAmount.toFixed(2)
             //Total
         storeTotal = bill.value / numOfPeople.value + Number(tipAmount.innerHTML)
         total.innerHTML = storeTotal.toFixed(2);
         activeResetBtn()

     }

 }

 function activBtn(i, btnNo) {
     if (bill.value == 0) {
         console.log("error1");
     } else if (numOfPeople.value == 0) {
         console.log("error2");
     } else {
         tipBtn[i].classList.add("tip-btn-deactive")
         tipBtn[btnNo].classList.remove("tip-btn-deactive")
         tipBtn[btnNo].classList.add("tip-btn-active")
     }

 }


 for (let i = 0; i < tipBtn.length; i++) {
     tipBtn[0].addEventListener('click', () => {
         storeTipValue = 0.15
         calculateTip()
         activBtn(i, 0)

     });


     tipBtn[1].addEventListener('click', () => {
         storeTipValue = 0.10
         calculateTip()
         activBtn(i, 1)

     });


     tipBtn[2].addEventListener('click', () => {
         storeTipValue = 0.15
         calculateTip()

     });


     tipBtn[3].addEventListener('click', () => {
         storeTipValue = 0.20
         calculateTip()

     });


     tipBtn[4].addEventListener('click', () => {
         storeTipValue = 0.50
         calculateTip()

     });


 }


 resetBtn.addEventListener('click', () => {

     bill.value = " "
     numOfPeople.value = " "
     tipAmount.innerHTML = "0.00 "
     total.innerHTML = "0.00 "

     resetBtn.classList.remove('active-Reset')
     for (let i = 0; i < tipBtn.length; i++) {
         tipBtn[i].classList.add("tip-btn-deactive")

     }

 })
