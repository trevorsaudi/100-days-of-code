#here we'll be creating a dataset where we open up a file and randomly write some names into it
#this is a performance benchmark to compare the list and dictionary
class_names = ["tintitn" , "princess", "mikeymikes", "pablo", "gustav", "saudi", "bojack", "pierre", "claudia"]

def create_dataset():
	import random
	num_entries = 5000000
	f = open("data.txt" , "w")
	for i in range(num_entries): #iterate through a list of entries (5 milion)
		current = random.choice(class_names) #in each iteration choose a random name
		f.write(current+ "\n")#write the random chosen name into the file

	f.close()

def read_dataset_list():
	class_counts = [] #creating a list that is the same lenght as class_names
	for c in class_names:
		class_counts.append(0)
	with open("data.txt","r") as f:
		for line in f: #iterate through each line
			line = line.strip()
			if line!= "": #checking to make sure this isnt the last line
				class_counts[class_names.index(line)]+=1  #finding the index of the name on the line
																#then incrementing the class_count list at that index
	print (class_counts)

def read_dataset_dict():
	class_counts = {}
	for c in class_names:
		class_counts[c] = 0 #setting the index of the keys as 0

	with open("data.txt") as f:
		for line in f:
			line =line.strip()
			if line!="":
				class_counts[line]+=1 #every time we encounter a name we increment the value of the key in the key-value pair by 1



import time
'''
t0 = time.time()
create_dataset()
t1= time.time()
print ("Dataset creation took %0.1f seconds \n" %(t1-t0))
'''

t0 = time.time()
read_dataset_dict()
t1=time.time()
print ("List took %0.1f seconds \n" %(t1-t0))


t0 = time.time()
read_dataset_dict()
t1 = time.time()
print ("Dictionary took %0.1f seconds \n" %(t1-t0)) 