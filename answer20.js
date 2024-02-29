const age = parseInt(prompt("Enter your age: "));

const voteable = age < 18 ? "Too young" : "Old enough";

console.log("You are", voteable, "to vote.");