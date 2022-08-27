// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartShapes = document.querySelectorAll(".like-glyph");
const onLikeClick = function(event){
  mimicServerCall()
  .catch((message) => {
    const errorModal = document.getElementById("modal");
    errorModal.classList.remove(".hiddden");
    errorModal.querySelector("modal-messsage").innerHTML = message;
    const addHiddenClass = () => errorModal.classList.add("hidden");
    setTimeout(addHiddenClass, 3000);
  })
  .then((resp)=>{
    console.log(resp);
    if(event.target.innerHTML === EMPTY_HEART){
      event.target.innerHTML = FULL_HEART;
      event.target.classList.add("activated-heart");
    }else{
      event.target.innerHTML=EMPTY_HEART;
      event.target.classList.remove("activated-heart");
    }
  })
}
heartShapes.forEach((heartNode) =>
  heartShapes.addEventListener("click",onLikeClick)
)

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


