'''Given an array of numbers and a target number, look through the array 
and see if there are two numbers that will add up to the target number.  
If there is no solution, return a blank [], 
if there is a solution, return those numbers in an array/list

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].'''

test = [1,2,3,4,5]
nums = [2,7,11,15]
def func_v1(list, target):
    for i, num in enumerate(list):
        for j, num2 in enumerate(list):
            if j >= i+1:
                result = num + num2
                if result == target:
                    return [i,j]
    return []

def func_v2(nums, target):
    for i, num in enumerate(nums):
        complement = target - nums[i]
        if complement in nums:
            return [i,nums.index(complement)]
        return []
 
def func_V3(nums, target):
    complements = {}
    for i, num in enumerate(nums):
        if str(num) in complements:
            print(complements)
            return [complements[str(num)], i]
        complements[str(target - num)] = i
    print(complements)
    return []
print(func_V3([2,7,11,15], 9))
print(func_V3([2,7,11,15], 26))
print(func_V3(nums, 4))



