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
    
        if (this.age == "upTo30") {
            return score;
        } else if (this.age == "upTo45") {
            score = 10;
            return score;
        } else if (this.age == "upTo60") {
            score = 20;
            return score;
        } else {
            score = 30;
            return score;
        }
    }

    // Destructures array into hif (height in feet)
    convertFeetToInches() {
        const hifIn = this.height[0];
        let hif = 0;
        const inches = 12;
        
        if(hifIn == "one-foot") {
            return hif = 1 * inches;
        } else if (hifIn == "two-foot") {
            return hif = 2 * inches;
        } else if (hifIn == "three-foot") {
            return hif = 3 * inches;
        } else if (hifIn == "four-foot") {
            return hif = 4 * inches;
        } else if (hifIn == "five-foot") {
            return hif = 5 * inches;
        } else if (hifIn == "six-foot") {
            return hif = 6 * inches;
        } else if (hifIn == "seven-foot") {
            return hif = 7 * inches;
        } else if (hifIn == "eight-foot") {
            return hif = 8 * inches;
        }
    }

    // Destructures array into hii (height in inches)
    convertInchesToNum() {
        const hiiIn = this.height[1];
        let hii = 0;
        
        if(hiiIn == "one-inch") {
            return hii = 1;
        } else if (hiiIn == "two-inch") {
            return hii = 2;
        } else if (hiiIn == "three-inch") {
            return hii = 3;
        } else if (hiiIn == "four-inch") {
            return hii = 4;
        } else if (hiiIn == "five-inch") {
            return hii = 5;
        } else if (hiiIn == "six-inch") {
            return hii = 6;
        } else if (hiiIn == "seven-inch") {
            return hii = 7;
        } else if (hiiIn == "eight-inch") {
            return hii = 8;
        } else if (hiiIn == "nine-inch") {
            return hii = 9;
        } else if (hiiIn == "ten-inch") {
            return hii = 10;
        } else if (hiiIn == "eleven-inch") {
            return hii = 11;
        }
    }

    convertHeightToCm() {
        const conversion = 2.54;

        return (this.convertFeetToInches() + this.convertInchesToNum()) * conversion;
    }

    convertPoundsToKG() {
        const conversion = 2.205;
        return parseFloat(this.weight) / conversion;
    }

    calculateBMI () {
        const  h = this.convertHeightToCm();
        const w = this.convertPoundsToKG();

        return (w / (h*h)) * 10000;
    }

    getBMIScore () { 
        let score = 0;
        let BMI = parseFloat(this.calculateBMI());
    
        if (BMI <= 24.9 && BMI >= 18.5) {
            return score;
        } 
        if (BMI <= 29.9 && BMI >= 25) {
            score = 30;
            return score;
        } 
        if (BMI >= 30) {
            score = 75;
            return score;
        }    
    } 

    getBloodPressureScore() {
        let score = 0;

        if(this.sysBP == "upTo120" && this.diasBP == "upTo80") {
            return score;
        } else if(this.sysBP == "upTo129" && this.diasBP == "upTo80") {
            score = 15;
            return score;
        } else if((this.sysBP == "upTo139") || (this.diasBP == "upTo89")) {
            score = 30;
            return score;
        } else if(this.sysBP == "plus140" || this.diasBP == "plus90") {
            score = 75;
            return score;
        } else if(this.sysBP == "plus180" || this.diasBP == "plus120") {
            score = 100;
            return score;
        }    
    }

    getFamilyHistoryScore() {
        let score = 0;

        this.familyHistory.forEach(disease => {

            if(disease) {
                score += 10;
            }
        });

        return score;
    }

    calculateTotalScore() {
        let score = 0;
        score += this.getAgeScore();
        score += this.getBMIScore();
        score += this.getBloodPressureScore();
        score += this.getFamilyHistoryScore();
        return score;
    }

    getTotalScore() {
        return this.calculateTotalScore();
    }

    getScoreString() {
        let score = this.calculateTotalScore();

        if (score <= 20 ) {
            return "Low Risk";
        } else if (score <= 50) {
            return "Moderate Risk";
        } else if (score <= 75) {
            return "High Risk";
        } else {
            return "Uninsurable";
        }
    }
}

module.exports = User;