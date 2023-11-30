const byteSize = (str) => {
  // write your code here
	let encoder = new TextEncoder();
	let encoded = encoder.encode(str);
	return encoded.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str))
