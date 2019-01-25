let re;
// Literal Characters
re = /hello/;
re = /hello/i; // letter register insensetive 

//Metacharacter Symbols
re = /^h/i; //Must start with
re = /d$/i; //Must ends with
re = /^hello$/i; //Must start and ends with
re = /^h.llo$/i; //Matches any One charachter
re = /h*llo/i; //Matches any charachter 0 or more times
re = /gre?a?y/i; //Optional charachter
re = /gre?a?y\?/i; //Escape charachter


//Brackets [] - Character Sets
re = /gr[ae]y/i;  // Must be an a or e
re = /[GF]ray/;  // Must be an G or F
re = /[^GF]ray/;  // Match anything except a G or F
re = /[A-Z]ray/;  // Match any uppercase letter
re = /[a-z]ray/;  // Match any lowercase letter
re = /[A-Za-z]ray/;  // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times (2 l)
re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times (from 2 to 4 l)
re = /Hel{2,}o/i; // Must occur at least {m} times (from 2 l)

// Paretheses() - grouping
re = /([0-9]x){3}/; //3x3x3x

//Shorthand Character Classes
re = /\w/; // Word character - any letter or any number or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 1 or more times
re = /\D+/; // Non-Digit
re = /\s/; // Match whitespace char
re = /\S/; // Match Non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y (xy for example)
re = /x(?!y)/; // Match x only if NOT followed by y (xy for example)


// String to match
const str = '';

//Log result
const result = re.exec(str); // return array or null
console.log(result);

function reTest(re, str) {
	if (re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} does Not match ${re.source}`);
	}
}

reTest(re, str);
