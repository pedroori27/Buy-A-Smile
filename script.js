let spawn = 7.5
const myAudio = new Audio('music/mayday.wav');
const btnPlay = document.getElementById("startbut");
myAudio.volume = 0.3;
// Função para tocar o áudio
btnPlay.addEventListener("click", () => {
    myAudio.play();
});