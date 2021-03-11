const years = prompt("How old are you?");
const leapYears = years / 4;
var days = years * 365;

days = days + leapYears;

alert("You've been alive for roughly " + days + " days!");
