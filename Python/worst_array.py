nums = [2,7,11,15]

def get_index_equal_target(list, target):
    for i in range(len(list)):
        j = i+1
        if j in range(i+1,len(list)):
            result = list[i]+list[j]
            if result == target:
                return [i,j]
    return []

print(get_index_equal_target(nums,9))
print(get_index_equal_target(nums,100))
print(get_index_equal_target(nums,26))



            