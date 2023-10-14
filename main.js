// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").classList.add("hidden")

const allHearts = document.querySelectorAll('.like-glyph') 

allHearts.forEach(function(heart) {
  heart.addEventListener('click', function() {
    heart.addEventListener('click', function(){
     console.log('Heart clicked!');
     mimicServerCall()
     .then(function (response) {
       if (response.includes("Pretend remote server notified of action!") && heart.textContent == EMPTY_HEART){
         heart.textContent = FULL_HEART
         heart.classList.add('activated-heart')
       }
       else if(response.includes ("Pretend remote server notified of action!" ) && heart.textContent== FULL_HEART){
         heart.textContent= EMPTY_HEART
         heart.classList.remove('activated-heart')
       }
     })
     .catch(function(error) {
       document.getElementById("modal").classList.remove("hidden")
       document.getElementById("modal-message").textContent = error
       setTimeout(function() {
         document.getElementById("modal").classList.add("hidden")
       }, 3000)
     });
   })

  })
})


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
