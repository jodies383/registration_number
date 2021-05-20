var addRegNum = document.querySelector(".regNumText")

var addBtn = document.querySelector(".add")

var displayRegNum = document.querySelector(".regDisplay")

var resetBtn = document.querySelector(".reset")

var errorMessage = document.querySelector(".errorMessage")


addBtn.addEventListener('click', myReg);
addBtn.addEventListener('click', listReg);

var existingReg;

if (localStorage['regList']) {
    existingReg = JSON.parse(localStorage.getItem('regList'));
}

var regEx = /^[A-Z]{1,3}-[A-Z]{1,2}-[0-9]{1,4}$/;


function listReg() {
    var ul = document.getElementById("list");
    var li = document.createElement("ul");
    li.style.backgroundColor = '#f5b342';
    li.style.borderStyle = "solid";
    li.style.borderColor = 'black';
    li.style.borderRadius = '4px';
    li.style.maxWidth = '15%';
    li.style.marginLeft = '38%';
    li.style.fontWeight = 'bold';
    li.style.textAlign = 'center';

if (addRegNum.value){
    li.appendChild(document.createTextNode(addRegNum.value));
    ul.appendChild(li);

} else {
    (errorMessage.innerHTML = "Please enter a registration number")
}
setTimeout(function(){   errorMessage.innerHTML = "";
}, 2000);
}


let regFunction = registration(existingReg);

function myReg() {
    regFunction.enterRegNum(addRegNum.value)
    // displayRegNum.innerHTML = regFunction.listReg();
}










resetBtn.addEventListener('click', function () {
    localStorage.removeItem('regList')
});
