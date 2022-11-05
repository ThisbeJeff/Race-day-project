let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 20;
if (age > 18 && registeredEarly) {
    raceNumber += 1000;
}
if (age > 18 && registeredEarly){
console.log(`Your race starts at 9:30 am. Athlete Number: ${raceNumber}`);
} else if (age > 18 && !registeredEarly) {
    console.log(`Your race starts at 11:00 am. Athlete Number: ${raceNumber}`);
} else if (age < 18) {
    console.log(`Your race starts at 12:30 pm. Athlete Number: ${raceNumber}`);
} else {
    console.log('Go to the annuncement table');
}