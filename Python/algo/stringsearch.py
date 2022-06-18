from ast import Num


str1 = 'qA2'


def quality(str):
    hash = {}
    alnum = False
    alpha = False
    digit = False
    lowerc = False
    upperc = False
    for char in str:
        hash[char] = 0
    for char in hash:
        if char.isalnum() == True:
            hash[char] = 1
        elif char.isalnum() == False:
            hash[char] = 0
    for char in hash:
        if hash[char] == 1:
            alnum = True
    for char in hash:
        if char.isalpha() == True:
            hash[char] = 1
        elif char.isalpha() == False:
            hash[char] = 0
    for char in hash:
        if hash[char] == 1:
            alpha = True
    for char in hash:
        if char.isdigit() == True:
            hash[char] = 1
        elif char.isdigit() == False:
            hash[char] = 0
    for char in hash:
        if hash[char] == 1:
            digit = True
    for char in hash:
        if char.islower() == True:
            hash[char] = 1
        elif char.islower() == False:
            hash[char] = 0
    for char in hash:
        if hash[char] == 1:
            lowerc = True
    for char in hash:
        if char.isupper() == True:
            hash[char] = 1
        elif char.isupper() == False:
            hash[char] = 0
    for char in hash:
        if hash[char] == 1:
            upperc = True
    return alnum, alpha, digit, lowerc, upperc
