import cv2 
import numpy as np 
  
cap = cv2.VideoCapture(0) 
  
while(1): 
	_, frame = cap.read() 
	# It converts the BGR color space of image to HSV color space 
	hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV) 
	  
	# Threshold of blue in HSV space 
	lower_blue = np.array([35, 140, 60]) 
	upper_blue = np.array([255, 255, 180]) 
  
	# preparing the mask to overlay 
	mask = cv2.inRange(hsv, lower_blue, upper_blue) 
	  
	# The black region in the mask has the value of 0, 
	# so when multiplied with original image removes all non-blue regions 
	res = cv2.bitwise_and(frame, frame, mask = mask) 
  
	kernel = np.ones((15,15), np.float32)/255
	smoothed = cv2.filter2D(res, -1, kernel)
	blur = cv2.GaussianBlur(res, (15,15) , 0)
	median= cv2.medianBlur(res,15)
	bilateral = cv2.bilateralFilter(res, 15, 75, 75)


	cv2.imshow('frame', frame) 
	cv2.imshow('blur', blur) 
	cv2.imshow('result', res) 
	cv2.imshow('smoothed', smoothed) 
	cv2.imshow('median', median) 
	cv2.imshow('bilateral', bilateral) 
	  
	cv2.waitKey(0) 
  
cv2.destroyAllWindows() 
cap.release() 