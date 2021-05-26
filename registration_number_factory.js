function registration(existingReg) {

    var regNum = existingReg || []

    var regEx = /^[A-Z]{2,3} [0-9]{3}-[0-9]{0,3}$/

    function addRegNum(enterName) {

        if (!regNum.includes(enterName) && regEx.test(enterName)) {
            regNum.push(enterName)
        }
        localStorage.setItem('regList', JSON.stringify(regNum));
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

        var cptArr = regNum.filter((reg) => reg.startsWith("CA"))
        var paarlArr = regNum.filter((reg) => reg.startsWith("CJ"))
        var belArr = regNum.filter((reg) => reg.startsWith("CY"))


        if (checkedRadioBtn === "cpt") {
            return cptArr
        } else if (checkedRadioBtn === "paarl") {
            return paarlArr
        } else if (checkedRadioBtn === "bellville") {
            return belArr
        } else return regNum

    }

    return {
        addRegNum,
        sameReg,
        validReg,
        towns
    }
}
