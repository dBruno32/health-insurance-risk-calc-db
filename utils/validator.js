class Validator {
    constructor() { }

    testInputIsNumber(inputIn) {
        console.log("testing testInputIsNumber");
        let condition = false;

        if(!isNaN(parseInt(inputIn))) {
            console.log("ip: " + inputIn + " cd: " + condition);
            return condition == true;
        } else {
            console.log("ip: " + inputIn + " cd: " + condition);
            return condition;
        }  
    }

    testInputIsEmpty(inputIn) {
        console.log("testing testInputIsEmpty");
        let condition = false;

        if(inputIn == "") {
            console.log("ip: " + inputIn + " cd: " + condition);
            return condition = true;       
        } else {
            console.log("ip: " + inputIn + " cd: " + condition);
            return condition; 
        } 
    }
}




module.exports = Validator;