from flask import Flask, render_template,url_for
app = Flask(__name__)


posts = [


{
	

	'author':'Money Michael',
	'title':'Blog Post1',		
	'content':'First Post Content',
	'date_posted':'July 23, 2018'
},

{
	

	'author':'Tintskin Tintin ',
	'title':'Blog Post2',		
	'content':'Second Post Content',
	'date_posted':'April 21, 2018'
}


]


@app.route("/") #converts this to a URI endpoint
@app.route("/home")
def home():
	return render_template('home.html' , posts = posts)


@app.route("/about") #converts this to a URI endpoint
def about():
	return render_template('about.html',title = 'About')

if __name__ == '__main__':
	app.run(debug= True)
