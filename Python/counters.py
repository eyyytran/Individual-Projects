#Count Word Frequency
movie_titles = ['the greatest showman', 'the king and i', 'warhorse','ex-machina','dune','yaksha']

def counter(list):
    words = []
    wordCounter = {}
    for title in list:
        word = title.split() #the default of split is whitespace.
        words.extend(word)
    for eachWord in words:
        if eachWord not in wordCounter:
            wordCounter[eachWord] = 1
        wordCounter[eachWord] += 1
    print(wordCounter)

def counter_v2(list):
    words = []
    wordCounter = {}
    for title in list:
        word = title.split() 
        words.extend(word)
    for eachWord in words:
        wordCounter[eachWord] = wordCounter.get(eachWord,0) + 1 
        #this line says: check eachWord in the dictionary - if that key does exist, get the value and add 1 - if the key does not exist, get 0 and add 1
    return wordCounter
print(counter_v2(movie_titles))
