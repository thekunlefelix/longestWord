// Given a sentence of x amount of words, write a function which will
//return the longest word, and the index of the longest word in that
//sentence. Assume min.length == 1

function longestWord(sentence) {
	
	let sentenceSplit = sentence.split(" ");
	let totalWords = sentenceSplit.length;
	let longestWord = "";
	let indexOfLongestWord = -1;

	for (let i = 0; i < totalWords; i++) {
		if (sentenceSplit[i].length > longestWord.length) {
			longestWord = sentenceSplit[i];
			indexOfLongestWord = sentence.indexOf(longestWord);
		}
	}

	return {
		longest: longestWord,
		index: indexOfLongestWord
	};

}
  
let testSentence = prompt("Enter your sentence here.");

//alert(longestWord(testSentence));
console.log(longestWord(testSentence));