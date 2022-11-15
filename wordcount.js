function countWords(stringOfWords) {
  // your code here
   var stringcount = {}
    var words = stringOfWords.split(' ')
  if (stringOfWords ==""){
    return {};
  }

    for(var x = 0; x < words.length; x ++)
    {
      if (stringcount[words[x]] == undefined)
      { 
        stringcount[words[x]] = 1
  
      }
      else
      {
        stringcount[words[x]]++;
      }
    console.log("result", stringcount)
    
    }
  return stringcount;
}

var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);
