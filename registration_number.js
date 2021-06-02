var addRegNum = document.querySelector(".regNumText")

var addBtn = document.querySelector(".add")

var displayRegNum = document.querySelector(".regDisplay")

var resetBtn = document.querySelector(".reset")

var errorMessage = document.querySelector(".errorMessage")

var errorMessage2 = document.querySelector(".errorMessage2")

var showBtn = document.querySelector(".show")

var counter = document.querySelector(".count")

addBtn.addEventListener('click', listReg);

showBtn.addEventListener('click', filterTowns)


var existingReg;

if (localStorage['regList']) {
    existingReg = JSON.parse(localStorage.getItem('regList'));

}
console.log(existingReg);

window.onload = () => {
    for (let i = 0; i < existingReg.length; i++) {
        const element = existingReg[i];
        ul.innerHTML += '<li class="listItems">' + element+ "</li>";

    }
};

let regRef = registration(existingReg);

var regEx = /^[A-Z]{2} [0-9]{3}-[0-9]{3}$/i;

var ul = document.getElementById("list");

function listReg() {
    var store = regRef.returnReg()

    if (!store.includes(addRegNum.value.toUpperCase())) {
        regRef.addRegNum(addRegNum.value.toUpperCase())


        localStorage.setItem('regList', JSON.stringify(store));

        
        

        if (regEx.test(addRegNum.value)) {
            ul.innerHTML = ""
            addRegNum.value = ""
            for (var i = 0; i < store.length; i++) {


                ul.innerHTML += '<li class="listItems">' + store[i] + "</li>";
               

            }
        }
        else if (!regEx.test(addRegNum.value)) {
            (errorMessage2.innerHTML = regRef.validReg(addRegNum.value))

            setTimeout(function () {
                errorMessage2.innerHTML = "";
            }, 3000);

        }
    } else {

        errorMessage.innerHTML = regRef.sameReg()

        setTimeout(function () {
            errorMessage.innerHTML = "";
        }, 3000);
    }

}

function filterTowns() {

    var checkedRadioBtn = document.querySelector("input[name='towns']:checked");

    if (checkedRadioBtn) {
        var stored = regRef.towns(checkedRadioBtn.value);
        if (stored.length === 0) {
            errorMessage.innerHTML = regRef.noTownFound();
            setTimeout(function () {
                errorMessage.innerHTML = "";
            }, 3000);
        }
        ul.innerHTML = "";

        for (var i = 0; i < stored.length; i++) {
            ul.innerHTML += '<li class="listItems">' + stored[i] + "</li>";

        }

        checkedRadioBtn.checked = false
    } else
        errorMessage2.innerHTML = regRef.noTowns(checkedRadioBtn)

    setTimeout(function () {
        errorMessage2.innerHTML = "";
    }, 3000);

}

resetBtn.addEventListener('click', function () {
    localStorage.removeItem('regList')
});

if (regEx.test(addRegNum.value)) {
    for (var i = 0; i < store.length; i++) {


        ul.innerHTML += '<li class="listItems">' + store[i] + "</li>";
    }
}
