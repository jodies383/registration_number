function registration(existingReg) {

    var regList = existingReg || []

    function enterRegNum(regNum) {
        if (!regList.includes(regNum)) {
            regList.push(regNum)
        }
        localStorage.setItem('regList', JSON.stringify(regList));

    }

    function towns(radioBtn) {
        if (radioBtn === "Cape Town"){
            return
        }
}








    // function listReg() {
    //     return regList;
    // }


    return {
        enterRegNum,
        listReg
    }
}