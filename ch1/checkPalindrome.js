// 1. lowercase, clean write space, sort
// 2. check for even appeareance, allow one exception 
// 3. check exception. 0 & 1 both return true, otherwise return false
function checkPalindrome(string){
	const sortArray = string.toLowerCase().split("").sort();
	const cleanArr = sortArray.filter(ele => ele !== " ");
	let count = 0;
	let pointer = cleanArr.length - 1;
	while(pointer > 0){
		if( cleanArr[pointer] !== cleanArr[pointer - 1] ){
			count ++;
			pointer = pointer- 1;
		} else {
			pointer = pointer - 2;
		}
	}
	if(count === 0 || count === 1) return true
	else return false
}

console.log("shoud return true: ", checkPalindrome("Cocon nuu tt"))
console.log("shoud return false: ", checkPalindrome("Coco nut"))