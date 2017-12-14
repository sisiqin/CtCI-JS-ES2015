function replaceString(string, index){
	let	returnString = "";
	for (let i = 0; i < index; i++){
		if(string[i] === " " ) returnString += "%20";
		else returnString += string[i];
	}
	return returnString;
}

console.log("should return \"Mr%20John%20Smith\" ",replaceString("Mr John Smith      ", 13)) //return "Mr%20John%20Smith%20"