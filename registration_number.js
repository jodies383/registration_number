var addRegNum = document.querySelector(".regNumText")

var addBtn = document.querySelector(".add")

var displayRegNum = document.querySelector(".regDisplay")

var resetBtn = document.querySelector(".reset")

var errorMessage = document.querySelector(".errorMessage")

var showBtn = document.querySelector(".show")

addBtn.addEventListener('click', listReg);
//showBtn = addEventListener('click', towns)

//var existingReg;

if (localStorage['regList']) {
    JSON.parse(localStorage.getItem('regList'));
}

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
        li.appendChild(document.createTextNode(addRegNum.value));
        ul.appendChild(li);
        localStorage.setItem('regList', JSON.stringify(addRegNum.value));

    } else {
        (errorMessage.innerHTML = "Please enter a registration number")
    }
  

    setTimeout(function () {
        errorMessage.innerHTML = "";
    }, 2000);
}
function towns(){
    var checkedRadioBtn = document.querySelector("input[name='towns']:checked").value;

for (var i = 0; i < li.length; i++)
var loopLi = li[i];
if (checkedRadioBtn === "Cape Town"){
    return loopLi.startsWith("CY")
}else if (checkedRadioBtn === "Paarl"){
    return loopLi.startsWith("CJ")
}else if (checkedRadioBtn === "George"){
    return loopLi.startsWith("CAW")
}

}


function myReg() {
    regFunction.enterRegNum(addRegNum.value)

}




resetBtn.addEventListener('click', function () {
    localStorage.removeItem('regList')
});
