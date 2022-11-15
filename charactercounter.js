function countAllCharacters(stringOfWords) {
  // your code here
  var stringcount = {}

  if (stringOfWords == "") {
    return {};
  }

  var words = stringOfWords;
  for (var x = 0; x < words.length; x++) {
    if (stringcount[words[x]] == undefined) {
      stringcount[words[x]] = 1

    }
    else {
      stringcount[words[x]]++;
    }
  }
  return stringcount;
}

var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', "my result:", result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', "my result:", result2);
