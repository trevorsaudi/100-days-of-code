# 
class node:
	def __init__(self, data=None):#passing an element to be stored by the constructor
		self.data=data #storing the passed data point
		self.next=None #stpring the pointer to the next data point
					   #set to null as default to represent the last node, but will update for representing other child nodes

#create a linked list class that acts as a wrapper to the nodes
class linked_list:
	def __init__(self):
		self.head = node() #does not contain any data and cannot be indexed. It simply point to the first node

	#implement the append function

	def append(self,data):
		new_node = node(data)
		cur = self.head

		while cur.next!= None:
			cur = cur.next
		cur.next = new_node

	#figuring out the length of our linked list
	def length(self):
		cur = self.head
		total = 0
		while cur.next!= None:
			total+=1
			cur=cur.next
		return total

	#function to display the current contents of the list

	def display(self):
		elems = []
		cur_node  = self.head
		while cur_node.next!= None:
			cur_node=cur_node.next
			elems.append(cur_node.data)
		print (elems)


	#implement an extractor funtion that takes out a single element from the list

	def get(self,index):
		if index>=self.length() or index<0: # added 'index<0' post-video
			print ("ERROR: 'Get' Index out of range!")
			return None
		cur_idx=0
		cur_node=self.head
		while True:
			cur_node=cur_node.next
			if cur_idx==index: return cur_node.data
			cur_idx+=1
	#implementing an erase function

	def erase(self,index):
		if index>=self.length() or index<0: # added 'index<0' post-video
			print ("ERROR: 'Erase' Index out of range!")
			return 
		cur_idx=0
		cur_node=self.head
		while True:
			last_node=cur_node
			cur_node=cur_node.next
			if cur_idx==index:
				last_node.next=cur_node.next
				return
			cur_idx+=1


my_list = linked_list() #creating an instance of the linked list

my_list.append(1)
my_list.append(2)
my_list.append(3)
my_list.append(4)
my_list.display()

print("Element at the 2nd index is %d" %my_list.get(2))


my_list.erase(3)
my_list.display()