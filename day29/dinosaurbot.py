from PIL import ImageGrab, ImageOps
import pyautogui
import time
from numpy import *


class Coordinates():
	replayBtn=(340,390)	
	dinosaur = (171,395)

def restartGame():
	pyautogui.click(Coordinates.replayBtn)

def pressSpace():
	pyautogui.keyDown('space')
	time.sleep(0.05)
	pyautogui.keyUp('space')

def imageGrab():
	box = (Coordinates.dinosaur[0]+60, Coordinates.dinosaur[1],Coordinates.dinosaur[0]+100, Coordinates.dinosaur[1]+30)
	image = ImageGrab.grab(box)
	grayImage = ImageOps.grayscale(image)
	a =array(grayImage.getcolors())
	return a.sum()
 
def main():
	restartGame()
	while True:	
		if imageGrab()!=1447: 
			pressSpace()      
			time.sleep(0.1)
main()                                                                   