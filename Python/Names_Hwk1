# List of Names: Bob, Luna, Smith
# Tasks:
#     > Reverse the list of names
#     > Change names to all caps
#     > Finds and returns Smith when you search "smith"
#     > Capitalize every other letter and return it as a list

names = ['Bob', 'Luna', 'Smith']

#This function reverses the order of the names. 
def flip(list):
    copy = list.copy()
    copy.reverse()
    return copy
print(flip(names))


#This function will return all list items as uppercase
def capitalize(list):
    copy = list.copy()
    for i in range(len(copy)):
        copy[i] = copy[i].upper()
    return copy
print(capitalize(names))

#This function will find Smith if you search 'smith'
search = input('Who are you looking for? ')

def search_for_name(search):
    for i in range(len(names)):
        if names[i].lower() == search.lower():
            return names[i]
    return 'This name is not in the list.'

print(search_for_name(search))


# This function will capitalize every other letter and return it as a list.
def alternate_case(list):
    result = []
    for i in range(len(list)):
        new_name = ''
        name = list[i]
        for index in range(len(name)):
            if index % 2 == 0:
                new_name = new_name + name[index].upper()
            else:
                new_name = new_name + name[index].lower()
        result.append(new_name)
    return result

print(alternate_case(names))



# def alternate_case_list(names):
#     result = []
#     for name in names:
#         result.append(alternate_case(name))
#     return result

# def alternate_case(string):
#     result = ''
#     for index, char in enumerate(string):
#         if index % 2 == 0:
#             result = result + char.upper()
#         else:
#             result = result + char.lower()
#     return result

# print(alternate_case_list(list_of_names))
