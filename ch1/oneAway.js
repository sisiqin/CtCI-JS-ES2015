// length > 2 -- definately false
// same length -- consider replace, mark isEdit to true
// different length -- consider remove. when find different, move pointers one position back to the shorter string
function oneAway(originalStr, mutatedStr){
	if (Math.abs(originalStr.length - mutatedStr.length) > 1 ) return false
	let isEdit = false;
	for (let i = 0, j = 0; i < originalStr.length && j < mutatedStr.length; ++i, ++j){
		if (originalStr[i] !== mutatedStr[j]) {
			if (isEdit) return false
			if(originalStr.length < mutatedStr.length) --i;
			else if(mutatedStr.length < originalStr.length) --j;
			isEdit = true;
		}
	}
	return true
}

console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);