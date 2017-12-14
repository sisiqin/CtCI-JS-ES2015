// check permutaiton

function permutation(stringOne, stringTwo){
	const sortOne = stringOne.split("").sort().join("");
	const sortTwo = stringTwo.split("").sort().join("");
	if(sortOne === sortTwo) return true
	return false
}

console.log("should return true", permutation("girlhey", "heygirl")) // should return true
console.log("should return false",permutation("wow", "hey")) // return false 
