function solution(fullText, search) {
	let count = 0;
	for (let i = 0; i < fullText.length; i++) {
		if (fullText.slice(i, i + search.length) === search) {
			count++;
		}
	}
	return count;
}

console.log(solution("aa_bb_cc_dd_bb_e", "bb"));
