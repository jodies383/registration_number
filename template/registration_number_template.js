var templateElem = document.querySelector(".regTemplate").innerHTML

var regTemplate = Handlebars.compile(templateElem)

var tempAddRegNum = document.querySelector(".regNumTexttemp")

var tempAddBtn = document.querySelector(".addtemp")

var tempDisplayRegNum = document.querySelector(".regDisplaytemp")

var tempResetBtn = document.querySelector(".resettemp")

var tempMessage = document.querySelector(".errorMessagetemp")

var tempMessage2 = document.querySelector(".errorMessage2temp")

var tempshowBtn = document.querySelector(".showtemp")


tempAddBtn.addEventListener('click', listReg)

tempshowBtn.addEventListener('click', filterTowns)


var existingRegTemp;

if (localStorage['regListTemp']) {
    existingRegTemp = JSON.parse(localStorage.getItem('regListTemp'));

}

window.onload = () => {
    var store = tempregRef.returnReg()

    ulTemp.innerHTML += regTemplate({ reg: store });

    //window reload for registration without templates
    for (let i = 0; i < existingReg.length; i++) {
        const element = existingReg[i];
        ul.innerHTML += '<li class="listItems">' + element + "</li>";

    }

};

let tempregRef = registration(existingRegTemp);

var regEx = /^[A-Z]{2} [0-9]{3}(-[0-9]{3})$|[A-Z]{2} [0-9]{3}([0-9]{3})$|[A-Z]{2} ([0-9]{3} [0-9]{3})$|[A-Z]{2} ([0-9]{4})$/i;

var ulTemp = document.getElementById("listTemp");



function listReg() {
    var store = tempregRef.returnReg()

    if (!store.includes(tempAddRegNum.value.toUpperCase())) {
        tempregRef.addRegNum(tempAddRegNum.value.toUpperCase())


        localStorage.setItem('regListTemp', JSON.stringify(store));




        if (regEx.test(tempAddRegNum.value)) {
            ulTemp.innerHTML = ""
            tempAddRegNum.value = ""


            ulTemp.innerHTML += regTemplate({ reg: store })


        }
        else if (!regEx.test(tempAddRegNum.value)) {
            (tempMessage2.innerHTML = tempregRef.validReg(tempAddRegNum.value))

            setTimeout(function () {
                tempMessage2.innerHTML = "";
            }, 3000);

        }
    } else {

        tempMessage.innerHTML = tempregRef.sameReg()

        setTimeout(function () {
            tempMessage.innerHTML = "";
        }, 3000);
    }

}

function filterTowns() {

    var checkedRadioBtn = document.querySelector("input[name='towns']:checked");

    if (checkedRadioBtn) {
        var stored = tempregRef.towns(checkedRadioBtn.value);
        if (stored.length === 0) {

            tempMessage.innerHTML = tempregRef.noTownFound();

            setTimeout(function () {
                tempMessage.innerHTML = "";
            }, 3000);
        }
        ulTemp.innerHTML = "";

        ulTemp.innerHTML += regTemplate({ reg: stored })


        checkedRadioBtn.checked = false
    } else
        tempMessage2.innerHTML = tempregRef.noTowns(checkedRadioBtn)

    setTimeout(function () {
        tempMessage2.innerHTML = "";
    }, 3000);

}

tempResetBtn.addEventListener('click', function () {
    localStorage.removeItem('regListTemp')
});
