var user = (prompt("Who's your favorite Simpsons character?").toUpperCase());
var snowBall = true;
var santasLittleHelper = false;

var troy = true;
var nelson = false;

switch(user) {
    case "Homer":
        if (snowBall && santasLittleHelper) {
            console.log("He was definitely trimmer and less bald then");
        } else {
            console.log("Definitely dumber and funnier when he got older");
        };
        break;
    case "Bart":
       console.log("rude, but sarcastic and oftentimes hilarious");
        break;
    case "Lisa":
        
         if (troy || nelson) {
            console.log("He was definitely trimmer and less bald then");
        } else {
            console.log("Definitely dumber and funnier when he got older");
        };
        break;
    default:
        console.log("A very unique choice!");
};