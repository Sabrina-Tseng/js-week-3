//Class exercise
console.log("\nClass exercise:");

const my_quote = "The Answer to the Great Question Of Life, the Universe and Everthing is Forty-two";
function changeMatch(string, pattern, callback) {
    if (string.toLowerCase().indexOf(pattern.toLowerCase()) !== -1){
        let regEx = new RegExp(pattern, "i");
        return (string.replace( regEx, callback(pattern)))
    } else {
        return `nothing matched`;
    }
}

function allcap(word) {
    return (word.toUpperCase())
}

console.log( changeMatch( my_quote, `life`, allcap));



//Tree

console.log("\nTrees:");

function makeTree( height = 10, pattern = "&" ){

	let output = "";
	let space = " ";
	
	for (let i = 1; i < height; i++) {

		output += `${space.repeat((height-i)/2)}${pattern.repeat(i)}\n`;
	}
	output += `${space.repeat(height/4)}${pattern.repeat(height/2)}`

	return (`${output}`);
}

console.log( makeTree( 50, "#") );
console.log( makeTree( 30, "0") );
console.log( makeTree() );


