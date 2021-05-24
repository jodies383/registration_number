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
    var li = document.createElement("object");
    li.style.backgroundColor = '#f5b342';
    li.style.borderStyle = "solid";
    li.style.borderColor = 'black';
    li.style.borderRadius = '4px';
    li.style.fontWeight = 'bold';
    li.style.textAlign = 'center';

    if (addRegNum.value && regEx.test(addRegNum.value)) {
        li.innerHTML = (addRegNum.value);
        ul.appendChild(li);
    }
    else if (!regEx.test(addRegNum.value)) {
        (errorMessage.innerHTML = regRef.validReg(addRegNum.value))
    }

    else {
        (errorMessage.innerHTML = regRef.noReg(addRegNum.value))
    }


    setTimeout(function () {
        errorMessage.innerHTML = "";
    }, 2000);

    if (regRef.sameReg(addRegNum.value)) {
        li.innerHTML = ("")
        li.style.backgroundColor = 'none';
        li.style.borderStyle = "none";
        li.style.borderColor = 'none';
        li.style.borderRadius = 'none';
        li.style.fontWeight = 'none';
        li.style.textAlign = 'none';
        errorMessage.innerHTML = regRef.sameReg(addRegNum.value)
    }

}

function myReg() {
    regRef.addRegNum(addRegNum.value)
}
function filterTowns(){
    var checkedRadioBtn = document.querySelector("input[name='towns']:checked").value;

    
regRef.towns(checkedRadioBtn)
displayRegNum.innerHTML = regRef.towns(checkedRadioBtn)
}

resetBtn.addEventListener('click', function () {
    localStorage.removeItem('regList')
});
