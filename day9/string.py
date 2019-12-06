#concacetanation
x = 'Cake'
y = 'Cookie'
print(x + ' & ' + y)

#repeating strings
# Repeat
print (x*2)

#slicing of strings
# Range Slicing
z1 = x[2:] 
print(z1)

# Slicing
z2 = y[0] + y[1] 
print(z2)

#capitalizing strings
print(str.capitalize('cookie'))


#determining the length of a string
str1 = "Cake 4 U"
str2 = "404"
print (len(str1))

#checking for digits 
print(str1.isdigit())
print(str2.isdigit())

#replacing parts of the strings
str1.replace('4 U', str2)
print(str2)

#Find substrings in other strings
str1 = 'cookie'
str2 = 'cook'
print(str1.find(str2))

str1 = 'I got you a cookie'
str2 = 'cook'
print(str1.find(str2))