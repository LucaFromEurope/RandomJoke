var ApiUrl = "http://192.168.0.38:5000";

var jokeName = "";
var jokeSetup = "";
var jokeDelivery = "";

var likesCount;
var unlikesCount;

var currentJokeId = 1;
var previousJokeId;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getLikesData() {
  likesCount = 203;
  unlikesCount = 30;
  document.getElementById("likebttn").innerText = likesCount + " likes";
  document.getElementById("unlikebttn").innerText = unlikesCount + " unlikes";
}

function likePressed() {
  // Handle like action if needed
}

function unlikePressed() {
  // Handle unlike action if needed
}

function getNextJoke() {
  currentJokeId= getRandomInt(390).toString();
  window.location.href =
    window.location.origin +
    window.location.pathname +
    "?jokeId=" +
    currentJokeId;
}

function returnToJoke() {
}

function setJokeData() {
  fetch(ApiUrl + "/getJoke/" + currentJokeId)
    .then((response) => response.json())
    .then((json) => {
      if(json['error'] == true) {
        currentJokeId = getRandomInt(390); 
        setJokeData()
        return
      }
      if (json["type"] == "twopart") {
        jokeSetup = json["setup"];
        jokeDelivery = json["delivery"];
        document.getElementById("jokeSetup").innerText = jokeSetup;
        document.getElementById("jokeDelivery").innerText = jokeDelivery;
      } else {
        jokeName = json["joke"];
        document.getElementById("jokeText").innerText = jokeName;
      }
    });
}

function getParamId() {
  // Retrieve parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  // Get the value of id parameter
  currentJokeId = urlParams.get("jokeId");
  if(!currentJokeId){
    currentJokeId = getRandomInt(390)
    window.location.href =
    window.location.origin +
    window.location.pathname +
    "?jokeId=" +
    currentJokeId;
  }
}

window.onload = function () {
  getParamId(); 

  getLikesData();
  setJokeData();
};
