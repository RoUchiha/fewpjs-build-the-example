// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.getElementsByClassName("like-glyph");


function likeFunction(heart) {
  const like = heart.target;
  mimicServerCall("bogusUrl")
  .then( function(resp) {
    if (like.innerHTML === EMPTY_HEART) {
      like.innerHTML = FULL_HEART;
      like.style.color = "red";
    } else if (like.innerHTML === FULL_HEART) {
      like.innerHTML = EMPTY_HEART;
      like.style.color = "";
    }
  })
    .catch(function(error){
      const errorModal = document.getElementById("modal");
      errorModal.classList.remove("hidden");
      setTimeout(() => errorModal.className = "hidden", 3000);
    });
}


for (const heart of hearts) {
  heart.addEventListener('click', likeFunction);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
