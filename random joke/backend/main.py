from flask import Flask 
import requests
from get_joke import *


app = Flask(__name__)


@app.route("/getJoke/<id>", methods=['GET'])
def joke(id):
     return getJokeById(id)


if __name__ == "__main__":
     app.run(host='0.0.0.0', debug=True)