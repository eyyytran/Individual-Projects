#This function will determine if a word is a palindrome.
def palindrome(word):
    flipped = word[::-1]
    return flipped.lower() == word.lower()

 #This function can reverse a word without the slice function
def palindrome_v2(word):
    flipped = ''
    for char in word:
        flipped = char + flipped #this concatenates the chars in from the end of the word   
    return flipped.lower() == word.lower()

#This function turns the word into a list and reverses the list
def palindrome_v3(word):
    chars = list(word.lower())
    chars.reverse()
    return list(word.lower()) == chars




