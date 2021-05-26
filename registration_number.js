var addRegNum = document.querySelector(".regNumText")

var addBtn = document.querySelector(".add")

var displayRegNum = document.querySelector(".regDisplay")

var resetBtn = document.querySelector(".reset")

var errorMessage = document.querySelector(".errorMessage")

var showBtn = document.querySelector(".show")

addBtn.addEventListener('click', listReg);
addBtn.addEventListener('click', myReg);
showBtn.addEventListener('click', filterTowns)

var existingReg;

if (localStorage['regList']) {
    existingReg = JSON.parse(localStorage.getItem('regList'));

}

let regRef = registration(existingReg);

var regEx = /^[A-Z]{2,3} [0-9]{3}-[0-9]{0,3}$/

var ul = document.getElementById("list");


function listReg() {
  
    

    if (regEx.test(addRegNum.value) && (!regRef.sameReg(addRegNum.value))) {
        ul.innerHTML +=  '<li class="listItems">' + (addRegNum.value) + "</li>";
    }
    else if (!regEx.test(addRegNum.value)) {
        (errorMessage.innerHTML = regRef.validReg(addRegNum.value))
    }


    setTimeout(function () {
        errorMessage.innerHTML = "";
    }, 3000);

    if (regRef.sameReg(addRegNum.value)) {
        errorMessage.innerHTML = regRef.sameReg(addRegNum.value)
        

    }

}

function myReg() {
    regRef.addRegNum(addRegNum.value)
}
function filterTowns() {
    var checkedRadioBtn = document.querySelector("input[name='towns']:checked");
    var stored = regRef.towns(checkedRadioBtn.value);

    ul.innerHTML = "";

    for (var i = 0; i < stored.length; i++) {
        ul.innerHTML += '<li class="listItems">' + stored[i] + "</li>";
    }
    checkedRadioBtn.checked = false
}

resetBtn.addEventListener('click', function () {
    localStorage.removeItem('regList')
});
