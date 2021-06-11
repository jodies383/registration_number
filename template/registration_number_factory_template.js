function registration(existingRegTemp) {

    var regNumTemp = existingRegTemp || []

    var regEx = /^[A-Z]{2} [0-9]{3}(-[0-9]{3})$|[A-Z]{2} [0-9]{3}([0-9]{3})$|[A-Z]{2} ([0-9]{3} [0-9]{3})$|[A-Z]{2} ([0-9]{4})$/i;

    function addRegNum(enterName) {

        if (!regNumTemp.includes(enterName.toUpperCase()) && regEx.test(enterName.toUpperCase())) {
            regNumTemp.push(enterName.toUpperCase())
        } else return sameReg()
    }
    function returnReg() {
        return regNumTemp
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
        var cptArr = regNumTemp.filter((reg) => reg.startsWith("CA"))
        var paarlArr = regNumTemp.filter((reg) => reg.startsWith("CJ"))
        var belArr = regNumTemp.filter((reg) => reg.startsWith("CY"))

        if (checkedRadioBtn === "cpt") {
            return cptArr
        } else if (checkedRadioBtn === "paarl") {
            return paarlArr
        } else if (checkedRadioBtn === "bellville") {
            return belArr
        } else if (checkedRadioBtn === "all") {
            return regNumTemp
        } else if (cptArr.length === 0 || paarlArr.length === 0 || belArr.length === 0 || regNumTemp.length === 0) {
            return noTownFound()
        }


    }

    function noTownFound() {
        return ("No registration numbers found")
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
        returnReg,
        noTownFound
    }
}
