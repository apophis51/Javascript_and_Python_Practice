def countAllCharacters(stringOfWords):
    stringcount = {}
    if (stringOfWords == ""):
       return {}
    i = 0
    for x in stringOfWords:
        if stringcount[stringOfWords[i]] == KeyError:
            stringcount[f"{stringOfWords[i]}"] = 1
            i = i +1
        else:
            stringcount[f"{stringOfWords[i]}"] = 1
            i = i +1
    return stringcount

result1 = countAllCharacters('banana')
print('should log "{b: 1, a: 3, n: 2}":', "my result:", result1)

result2 = countAllCharacters('')
print('should log "{}":', "my result:", result2);
