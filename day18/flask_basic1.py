from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/") #converts this to a URI endpoint
def Hello():
	return jsonify({"about":"Hello World"})
if __name__ == '__main__':
	app.run(debug= True)