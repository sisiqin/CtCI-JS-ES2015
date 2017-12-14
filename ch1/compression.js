const compression = str => {
	const small = str.toLowerCase();
	let count = 1;
	let rtnStr = "";
	let pointer = 0;
	for(let i = 0; i < small.length; i++){
		if (!rtnStr[pointer]) rtnStr += small[i];
		if (small[i] === small[i+1] ){
			count++;
		} else{
			rtnStr += count;
			count = 1;
			pointer = pointer + 2;
		}
	}
	return str.length > rtnStr.length? rtnStr : str
}

console.log("should return \"a2b1c5a3\"",compression("aabcccccaaa")) // "a2b1c5a3"
console.log('should return "abcdefg"',compression("abcdefg")) // "abcdefg"