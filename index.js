//Function to play sound
function playSound(ch){
  switch (ch) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'a':
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;

    case 's':
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;

    case 'd':
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

    case 'j':
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case 'k':
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case 'l':
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;

    default:
      console.log(ch);
  }
}

//Button Animation function
function buttonAnimation(ch){
  document.querySelector("."+ch).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+ch).classList.remove("pressed");
  },100)
}

//clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var ch = this.textContent;
    playSound(ch);
    buttonAnimation(ch);
  })
}

//keys
document.addEventListener("keydown",function(event){
  if(event.key == 'w' || event.key == 'a' || event.key == 's' || event.key == 'd' || event.key == 'j' || event.key == 'k' || event.key == 'l'){
    playSound(event.key);
    buttonAnimation(event.key);
  }
})
