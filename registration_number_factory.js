function registration(existingReg) {

    var regNum = existingReg || []

    var regEx = /^[A-z]{2,3} [0-9]{3}-[0-9]{0,3}$/

    function addRegNum(enterName) {

        if (!regNum.includes(enterName) && regEx.test(enterName)) {
            regNum.push(enterName)
        }
        else {
            sameReg 
        }
    }
    function returnReg() {
        return regNum
    }
    function validReg(enterName) {
        if (!regEx.test(enterName)) {
            return "Please enter a valid registration number"
        }
    }
    function sameReg() {
            return "Registration number already exists"
    
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
function noTowns(RadioBtn) {
    
    if (!RadioBtn) {
        return "Please select a town"
    } else return ""
    
}

return {
    addRegNum,
    sameReg,
    validReg,
    towns,
    noTowns,
    returnReg
}
}
