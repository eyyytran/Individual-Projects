#This function will determine if a word is a palindrome.

# def palindrome(word):
#     flipped = word[::-1]
#     return flipped.lower() == word.lower()

# print(
#     palindrome('aa'),
#     palindrome('abc')
# )
 ###This function can reverse a word without the slice function
# def palindrome(word):
#     flipped = ''
#     for char in word:
#         flipped = char + flipped    
#     return flipped.lower() == word.lower()
# print(palindrome('turtle'))

def palindrome_v2(word):
#This is the list() constructor function. 
    #input = word
    #chars = list(input)
    chars = list(word.lower())
    chars.reverse()
    return list(word.lower()) == chars
    

