let str = "Vinay Vinay";

let mid = str.length / 2;

let uppercase = "";
let lowercase = "";

for (let i = 0; i < str.length; i++) {
	if (i < mid) {
		lowercase = lowercase + str[i].toLowerCase(str.charAt(i));
	} else {
		uppercase = uppercase + str[i].toUpperCase(str.charAt(i));
	}
}

console.log(lowercase + uppercase);
