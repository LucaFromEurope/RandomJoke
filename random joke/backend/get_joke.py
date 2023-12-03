import requests

def getJoke():
     response = requests.get('https://v2.jokeapi.dev/joke/any', headers={'Accept': 'application/json'})
     joke_data = response.json()
     return joke_data

def getJokeById(id):
     response = requests.get("https://v2.jokeapi.dev/joke/Any?idRange=" + str(id),  headers={'Accept': 'application/json'}).json()
     return response