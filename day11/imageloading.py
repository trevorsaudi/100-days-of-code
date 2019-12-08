import cv2
import numpy as numpy
import matplotlib.pyplot as plt 


img = cv2.imread('book.jpg', cv2.IMREAD_GRAYSCALE) #converting to grayscale since it is easier to perform analysis

#IMREAD_COLOR =1
#IMREAD_UNCHANGED = -1


cv2.imshow('image',  img) #displaying the image using cv
cv2.waitKey(0)
cv2.destroyAllWindows() 


#uncomment this block to run as matplotlib

#plt.imshow(img, cmap = 'gray', interpolation = 'bicubic') #displaying images using matplotlib
#plt.plot([50,100],[80,100], 'c' , linewidth = 5) # plotting lines on images
#plt.show() 

cv2.imwrite('book.jpg', img) #saves an image in the directory