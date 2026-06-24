let spawn = 7.5
const myAudio = new Audio('music/mayday.wav');
const btnPlay = document.getElementById("startbut");
myAudio.volume = 0.1;
// Função para tocar o áudio
btnPlay.addEventListener("click", () => {
    myAudio.play();
    document.querySelectorAll(".teladeentrada").forEach(el => el.remove());
});