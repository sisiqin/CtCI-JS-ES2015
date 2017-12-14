// 1.1 is unique
str = "worrrd"

// with hashtable
function isUniqueht(str){
	const arr = str.split("");
	let ht = {};
	 for (let i = 0; i < arr.length; i++) {
		if (ht[arr[i]]) {
			return false;
		} else {
			ht[arr[i]] = true
		}
	}
	return true;
}

console.log('i am from isUniqueht',isUniqueht(str))

// without hash table 

function isUniquePure(str){
	for(let i = 0; i < str.length; i++){
		for(let j = i + 1; j < str.length; j++){
			if(str[i] === str[j]) return false
		}
	}
	return true
}

console.log("i am from isUniquePure", isUniquePure(str))