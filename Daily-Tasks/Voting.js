// aero function to check the voter is eligible for Caste Vote or not
const checkVoterEligibility = (age) => {
    if (age >= 18){
        return "Eligible to Vote";
    }
    else{
        return "Not Eligible to Vote";
    }
};

console.log("Age 20 Check : ",checkVoterEligibility(20));  //function calling
console.log("Age 16 check :",checkVoterEligibility(16));