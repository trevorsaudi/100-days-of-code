class Robot:

	def __init__(self, name, color, weight):
		self.name= name #set the name of the object to a given name
		self.color = color	
		self.weight	= weight

	def introduce_self(self): #add self to every method that falls under a class
		print ("My name is " + self.name)
		print("My color is " +self.color)


r1 = Robot("Tom" , "Red" , 30) #creates a new robot object with the passed attributes
r2 = Robot("Jerry" , "blue" ,40)



'''r1.introduce_self()
r2.introduce_self()
'''
class Person:
	def __init__(self,name,personality,issitting):
		self.name=name
		self.personality=personality	
		self.issitting=issitting	


		def sit_down(self):
			self.issitting	= True

		def stand_up(self):
			self.issitting	= False

p1 = Person	("Alice", "aggressive", False) #person one owns robot 2
p2 = Person ("Becky", "talkative", True)

p1.robot_owned=r2
p1.robot_owned=r1

p1.robot_owned.introduce_self()	
'''
r1 = Robot()
r1.name = "Tom"
r1.color = "red"
r1.weight  = 30
r1.introduce_self()


r2= Robot()
r2.name = "Jerry"
r2.color = "blue"
r2.weight = 40
r2.introduce_self()	
'''