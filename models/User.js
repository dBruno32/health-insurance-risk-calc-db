class User {
    constructor(ageIn, heightIn, weightIn, sysBPIn, diasBPIn, familyHistoryIn ) {
        this.age = ageIn;
        this.height = heightIn;
        this.weight = weightIn;
        this.sysBP = sysBPIn;
        this.diasBP = diasBPIn;
        this.familyHistory = familyHistoryIn;
    }

//  Getter Functions
    getAge() {
        return this.age;
    }

    getHeight() {
        return this.height;
    }

    getWeight() {
        return this.weight;
    }

    getSystolicBP() {
        return this.sysBP;
    }

    getDiastlicBP() {
        return this.diasBP;
    }

    getFamilyHistory() {
        return this.familyHistory;
    }

//  Score Functions
    getAgeScore() {
        let score = 0;
    
        if (this.age < 30) {
            return score;
        } else if (this.age < 45) {
            score = 10;
            return score;
        } else if (this.age < 60) {
            score = 20;
            return score;
        } else {
            score = 30;
            return score;
        }
    }

    calculateBMI () {
        return this.weight / this.height;
    }

    getBMIScore () { 
        let score = 0;
        let BMI = calculateBMI();
    
        if(BMI < 24.8 && BMI > 18.5) {
            return score;
        } else if(BMI < 29.9 && BMI > 25) {
            score = 30;
            return score;
        } else {
            score = 75;
            return score;
        }    
    } 

    getBloodPressure() {
        let score = 0;
    
        if(this.sysBP < 120 && this.diasBP < 80) {
            return score;
        } else if((sBPthis.sysBP < 129 && this.sysBP > 120 ) && this.diasBP < 80) {
            score = 15;
            return score;
        } else if((sthis.sysBP < 139 && this.sysBP > 130 ) || (this.diasBP < 89 && this.diasBP > 80)) {
            score = 30;
            return score;
        } else if(this.sysBP > 140 || this.diasBP > 90) {
            score = 75;
            return score;
        } else if(this.sysBP > 180 || this.diasBP > 120) {
            score = 100;
            return score;
        }        
    }

    getFamilyHistoryScore() {
        return this.familyHistory.length * 10;
    }
}

module.exports = User;