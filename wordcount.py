def countWords(stringOfWords):
    stringcount = {}
    words = stringOfWords.split(' ')
    print(words)
    if (stringOfWords ==""):
        return {}
    i = 0
    for x in words:
      if words[i] in stringcount:
        stringcount[words[i]] = stringcount[words[i]] + 1
        i = i +1
      
      else:
        stringcount[words[i]] = 1
        i = i +1
    return stringcount


result1 = countWords('ask a bunch get a bunch')
print('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1)

result2 = countWords('')
print('should log "{}":', result2)
