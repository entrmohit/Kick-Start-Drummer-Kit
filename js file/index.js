//n is the different no. of drum parts : Breakables: Sticks, various cymbals, snare drum, throne (stool) and sometimes the bass drum pedal. Shells: Bass drum and toms. Extensions: Cowbell, tambourine, chimes, any other instrument not part of the standard kit. Hardware: Cymbal stands, drum stands, pedals.

var n=document.querySelectorAll(".drum").length;
for(var j=0;j<n;j++){
  document.querySelectorAll(".drum")[j].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });
}

function makeSound(key){
  switch(key){
    case "w":
      var audio=new Audio("https://entrmohit.github.io/Kick-Start-Drummer-Kit/sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("https://entrmohit.github.io/Kick-Start-Drummer-Kit/sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("https://entrmohit.github.io/Kick-Start-Drummer-Kit/sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("https://entrmohit.github.io/Kick-Start-Drummer-Kit/sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("https://entrmohit.github.io/Kick-Start-Drummer-Kit/sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("https://entrmohit.github.io/Kick-Start-Drummer-Kit/sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("https://entrmohit.github.io/Kick-Start-Drummer-Kit/sounds/tom-4.mp3");
      audio.play();
      break;
      default:
      console.log(key);
  }
}

function buttonAnimation(key){
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}
