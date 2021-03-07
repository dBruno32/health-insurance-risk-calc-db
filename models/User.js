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

    calculateBMI () {
        return parseInt(this.weight) / parseInt(this.height);
    }

    getBMIScore () { 
        let score = 0;
        let BMI = parseInt(this.calculateBMI());
        console.log(BMI);
    
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