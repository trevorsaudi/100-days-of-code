import cv2
import numpy as np 

img1 = cv2.imread('3D-Matplotlib.png')
#img2= cv2.imread('mainsvmimage.png')
img2=cv2.imread('mainlogo.png')


rows,cols,channels = img2.shape #the logo
roi = img1[0:rows, 0:cols]

#create a mask of the logo and create its inverse mask
img2gray = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)
#add a threshold				if the pixel value is above 220, convert it to white, if below, convert to black
ret,mask = cv2.threshold(img2gray, 220 , 255, cv2.THRESH_BINARY_INV)

mask_inv = cv2.bitwise_not(mask)

#black out the area of logo in ROI
img1_bg = cv2.bitwise_and(roi, roi , mask= mask_inv)

#take only region of logo from logo image
img2_fg=cv2.bitwise_and(img2, img2, mask=  mask)

dst = cv2.add(img1_bg, img2_fg)
img1[0:rows, 0:cols] = dst

cv2.imshow('res' , img1)
cv2.imshow('mask_inv' , mask_inv)
cv2.imshow('img1_bg' , img1_bg)
cv2.imshow('img2_fg' , img2_fg)
cv2.imshow('dst' , dst)

#cv2.imshow('mask',mask)
cv2.waitKey(0)
cv2.destroyAllWindows()









#adding the images together
#add = img1 + img2  

#add = cv2.add(img1,img2) #adds all the image pixels together
#(155,211,79) + (50,170,200) = 205,381,279..translated to (205,255,255)

#								the weights add up to 1 , the 0 is the gaamma value
#weighted = cv2.addWeighted(img1, 0.6, img2, 0.4, 0 )



