import turtle
import winsound

wn = turtle.Screen()
wn.title("Pong game by @trevorsaudi")
wn.bgcolor("black")
wn.setup(width=800, height=600)
wn.tracer(0) #stops the window from updating

#score 
score_a = 0
score_b = 0



#Paddle A
paddle_a = turtle.Turtle() #creating a turtle object
paddle_a.speed(0)#the speed of animation-maximum possible
paddle_a.shape("square")
paddle_a.color("white")
paddle_a.shapesize(stretch_wid=5, stretch_len=1)
paddle_a.penup()
paddle_a.goto(-350, 0)

 
#Paddle B
paddle_b = turtle.Turtle() #creating a turtle object
paddle_b.speed(0)#the speed of animation-maximum possible
paddle_b.shape("square")
paddle_b.color("white")
paddle_b.shapesize(stretch_wid=5, stretch_len=1)
paddle_b.penup()
paddle_b.goto(350, 0)


#Ball
ball = turtle.Turtle() #creating a turtle object
ball.speed(0)#the speed of animation-maximum possible
ball.shape("square")
ball.color("white")
ball.penup()
ball.goto(0, 0)
ball.dx =0.25 #every time the ball moves, it moves 2 pixels
ball.dy =0.25

#Pen
pen = turtle.Turtle()
pen.speed(0)
pen.color("white")
pen.penup()
pen.hideturtle()
pen.goto(0, 260)
pen.write("Player A : 0 Player B : 0", align="center", font=("Courier", 24, "normal"))


#function
def paddle_a_up():
	y = paddle_a.ycor()
	y += 20
	paddle_a.sety(y)


def paddle_a_down():
	y = paddle_a.ycor()
	y -= 20
	paddle_a.sety(y)

def paddle_b_up():
	y = paddle_b.ycor()
	y += 20
	paddle_b.sety(y)


def paddle_b_down():
	y = paddle_b.ycor()
	y -= 20
	paddle_b.sety(y)

	



# Keyboard binding
wn.listen()#listen for keyboard input
wn.onkeypress(paddle_a_up, "w")#if the user presses w, call the function paddle_a_up
wn.onkeypress(paddle_a_down, "s")#if the user presses w, call the function paddle_a_up
wn.onkeypress(paddle_b_up, "Up")#if the user presses w, call the function paddle_a_up
wn.onkeypress(paddle_b_down, "Down")#if the user presses w, call the function paddle_a_up



#Main game loop
while True:
	wn.update()

	#move the ball
	ball.setx(ball.xcor()+ ball.dx)
	ball.sety(ball.ycor()+ ball.dy)

	#Border checking
	if ball.ycor() > 290:
		ball.sety(290)
		ball.dy *= -1
		winsound.PlaySound("bounce.wav", winsound.SND_ASYNC)


	if ball.ycor() < -290:
		ball.sety(-290)
		ball.dy *= -1
		winsound.PlaySound("bounce.wav", winsound.SND_ASYNC)


	if ball.xcor() > 390:
		ball.goto(0 , 0)
		ball.dx *= -1
		score_a += 1
		pen.clear()
		pen.write("Player A : {} Player B : {}".format(score_a,score_b), align="center", font=("Courier", 24, "normal"))


	if ball.xcor() < -390:
		ball.goto(0 , 0)
		ball.dx *= -1
		score_b += 1
		pen.clear()
		pen.write("Player A : {} Player B : {}".format(score_a,score_b), align="center", font=("Courier", 24, "normal"))


	#paddle and ball collisions
	if(ball.xcor() > 340 and ball.xcor()< 350) and (ball.ycor() < paddle_b.ycor() + 40 and ball.ycor() > paddle_b.ycor() - 40):
		ball.setx(340)
		ball.dx *= -1
		winsound.PlaySound("bounce.wav", winsound.SND_ASYNC)

	if(ball.xcor() < -340 and ball.xcor()> -350) and (ball.ycor() < paddle_a.ycor() + 40 and ball.ycor() > paddle_a.ycor() - 40):
		ball.setx(-340)
		ball.dx *= -1
		winsound.PlaySound("bounce.wav", winsound.SND_ASYNC)