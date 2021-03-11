class Validator {
    constructor() { }

    testInputIsNumber(inputIn) {
        console.log(inputIn);
        let condition = false;

        if(isNaN(inputIn)) {
            return condition;
        } else {
            return condition = true;
        }  
    }

    testInputIsEmpty(inputIn) {
        let condition = false;

        if(inputIn == "") {
            return condition = true;       
        } else {
            return condition; 
        } 
    }
}

module.exports = Validator;