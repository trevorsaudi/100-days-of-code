import numpy as np 
import cv2


img = cv2.imread('watch.jpg' , cv2.IMREAD_COLOR)

px = img[55,55] #location of a pixel and its color value

print (px) #print the pixel value

img[55,55] = [255,255,255] #converts the pixel to white

px = img[55,55]

#print (px)

#ROI - region of image ; subimage of an image

#roi = img[100:150, 100:150]

#print (roi)

img[100:150, 100:150] = [255,255,255]
watch_face = img[37:111, 107:194] #region of an image
img[0:74,0:87] = watch_face #copying and cutting a region of the image



cv2.imshow('image' ,img)
cv2.waitKey(0)
cv2.destroyAllWindows()

