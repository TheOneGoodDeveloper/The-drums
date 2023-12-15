

function handleClick(){
    var currentButton=this.innerHTML;
    makeSound(currentButton);
    makeAnimation(currentButton);
}

var len = document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
document.addEventListener("keydown",function(event){
    makeSound(event.key); 
    makeAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var one = new Audio('./sounds/tom-1.mp3');
            one.play();
        break;
        case "a":
            var second = new Audio('./sounds/tom-2.mp3');
            second.play();
        break;
        case "s":
            var third = new Audio('./sounds/tom-3.mp3');
            third.play();
        break;
        case "d":
            var four = new Audio('./sounds/tom-4.mp3');
            four.play();
        break;
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
        break;
        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
        break;
        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
        break;
        }
}

function makeAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}