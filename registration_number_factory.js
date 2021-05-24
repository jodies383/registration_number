function registration(existingReg) {

    var regNum = existingReg || []

    var regEx = /^[A-Z]{2,3} [0-9]{3}-[0-9]{0,3}$/

    function addRegNum(enterName) {

        if (!regNum.includes(enterName) && regEx.test(enterName)) {
            regNum.push(enterName)
        }
        localStorage.setItem('regList', JSON.stringify(regNum));
    }
    function noReg(enterName) {
        if (!enterName && !regEx.test(enterName)) {
            return "Please enter a registration number"
        }
    }
    function validReg(enterName) {
        if (!regEx.test(enterName)) {
            return "Please enter a valid registration number"
        }
    }
    function sameReg(enterName) {
        if (regNum.includes(enterName)) {
            return "Registration number already exists"
        }
    }
    function towns(checkedRadioBtn) {
        // if (checkedRadioBtn === "Cape Town") {
            var newArr = regNum.filter((reg) => reg.startsWith("CY"))
        //}
        return newArr

    }
    return {
        addRegNum,
        noReg,
        sameReg,
        validReg,
        towns
    }
}
   // for (var i = 0; i < regNum; i++)
        //     var loopReg = regNum[i]
        // if (checkedRadioBtn === "Cape Town") {
        //     return (loopReg.startsWith("CY"))
        // } else if (checkedRadioBtn === "Paarl") {
        //     return loopReg.startsWith("CJ")
        // } else if (checkedRadioBtn === "George") {
        //     return loopReg.startsWith("CAW")
        // }