// 1. Conditions:
// Create a condition to check if it's the morning, evening, afternoon or night. Use console.log to output an appropriate message. 

console.log("\n1. Conditions:");

const now = new Date();
const hours = now.getHours();

if (hours > 4 && hours <= 11){
    console.log(`It's ${hours} o'clock in the morning`);
  }
  else if (hours > 11 && hours <= 18){
    console.log(`It's ${hours} o'clock in the afternoon`);
  }
  else if (hours > 18 && hours <= 23){
    console.log(`It's ${hours} o'clock in the evening`);
  }
  else {
    console.log(`It's ${hours} o'clock in the midnight`);
  }
  

// 2. Loops:
// Use the same random dice generator as used in class to generate a number between 1 and 6. Now create a loop that keep rolling until the number generated is more than 3. As soon as you get a number more than three, the loop should end. Output how many times the loop ran before it reached this number. Be careful with this - if you create a loop that has no way to end (due to a faulty check), it will easily crash your browser!

console.log("\n2. Loops:");

let dice = Math.ceil(Math.random() * 6);
let rollingTime = 1;

while (dice <= 3){
  //console.log(`You are rolling ${dice}! You tried ${rollingTime} times.`);
  rollingTime++;
  dice = Math.ceil(Math.random() * 6);
}
console.log(`You are rolling ${dice}! You tried ${rollingTime} times.`);


// 3. Loops
// Using loops , create a triangular pattern (using console.log statements only for now) like this:
// #
// ##
// ###
// ####

console.log("\n3. Loops:");

for (let i = 1; i < 10; i++) {
	let output = "#"
	console.log(`${output.repeat(i)}`);
  }


//4. Loops and Conditions:
// Using more loops and conditions, create a chess board using # and space ' ' using console.log statements.  You could consider using a loop inside a loop to create the alternative pattern. A chess board  has  8 x 8 = 64 squares.

console.log("\n4. Loops and Conditions:");

console.log("\n1st method:");

let even = " #";
let odd = "# ";

for (let row = 0; row<8; row++) {
		let isOdd = row % 2;
		if (isOdd) {
			//console.log(row);
			console.log(`${odd.repeat(4)}`);
		}
		else {
			//console.log(row);
			console.log(`${even.repeat(4)}`);
		}
}

// tried another way
console.log("\n2nd method:");

let black = "#";
let white = " ";
let output = "";

for (let row = 1; row<=8; row++) {

	for (let column = 1; column <=8; column++) {

		let columnisOdd = column % 2;
		let rowisOdd = row % 2;

		// if (rowisOdd)
		// {
		// 	if (columnisOdd) {
		// 		output += black;
		// 	}
		// 	else {
		// 		output += white;
		// 	}
		// }
		// else
		// {
		// 	if (columnisOdd) {
		// 		output += white;
		// 	}
		// 	else {
		// 		output += black;
		// 	}
		// }

		if (rowisOdd && columnisOdd || !rowisOdd && !columnisOdd) {
			output += black;
		}
		else {
			output += white;
		}
	}
	output += "\n"
}
console.log(output);
