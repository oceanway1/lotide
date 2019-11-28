function countLetter(sentence, letter) {
  var results = {};
  
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' '){ 
      continue;
    }

    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = 1; 
    } else {
      results[sentence[i]] = results[sentence[i]] + 1;
    }
    
  }
  return results;
}

console.log(countLetter("Lighthouse in the house"));






