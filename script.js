document.addEventListener("DOMContentLoaded", function() {
    // Prompt the user for confirmation
    var userConfirmed = confirm("Do you want to enable background music?");
    
    if (userConfirmed) {
        // If the user confirms, wait for a click event to start playing the audio
        var audio = new Audio("bgm.mp3");
        var isAudioPlaying = false;

        document.addEventListener("click", function() {
            if (!isAudioPlaying) {
                try {
                    audio.loop = true;
                    audio.play();
                    console.log("Audio started playing.");
                    isAudioPlaying = true;
                } catch (error) {
                    console.error("Error playing audio:", error);
                }
            }
        });
    } else {
        console.log("User chose not to enable background music.");
    }
});



console.log("initialized.....")
setInterval(() => {
    const time = document.querySelector("#time");
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

let x = "AM";
if(hours>12){
    x= "PM";
    hours = hours -12;
}

if(hours<10){
    hours = "0"+ hours;
}
if(minutes<10){
    minutes = "0"+ minutes;
}
if(seconds<10){
    seconds = "0"+ seconds;
}


time.textContent = hours + ":" + minutes + ":" + seconds + " " + x;
} );
