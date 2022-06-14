nums = [2,1,1,1,5,5,5,5,5,5,5,5]

def find(list):
    counter = {}
    for x in list:
        if x in counter:
            counter[x] = counter.get(x,0) + 1
    for x in counter:
        if counter[x] == 1:
            return x
    
