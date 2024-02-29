var hour = parseInt(prompt("Enter the current hour (0-23): "));

var greeting;
if (hour < 18) {
 greeting = "Good day";
} else {
 greeting = "Good evening";
}

console.log(greeting);