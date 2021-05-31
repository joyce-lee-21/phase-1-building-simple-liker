// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const divModal = document.querySelector("div#modal")

document.addEventListener("DOMContentLoaded", () => {
  emptyHeart()
})

const emptyHeart = () => {
  //target DOM elements
  const likeGlyph = document.querySelector(".like-glyph")

  //event listeners
  likeGlyph.addEventListener('click', (e) => {
    mimicServerCall()
    .then(response => {console.log(response)})
    .catch(() => {divModal.className = ""})
  })
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
