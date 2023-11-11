const playBtn = document.getElementById("play");
const previous = document.getElementById("previous");
const forward = document.getElementById("forward");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const musicVoice = document.getElementById("music-voice");

body.classList.add("overlay");

const coverImages = ["Mockingbird-cover", "Lose-Yourself", "bolalar", "xcho"];

const musics = [
  "Eminem - Mockingbird",
  "Eminem - Lose Yourself",
  "Bolalar - Kel Yashaylik Biz Birga",
  "Xcho - Ты и Я",
];

let currentMusicIndex = 0;

const currentMusic = (index) => {
  audio.src = `../music/${musics[index]}.mp3`;
  cover.src = `../images/${musics[index]}.jpg`;
  title.textContent = musics[index];
  body.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../images/${coverImages[index]}.jpg)`;
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
};

currentMusic(currentMusicIndex);

playBtn.addEventListener("click", () => {
  if (!container.classList.contains("play")) {
    container.classList.add("play");
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    container.classList.remove("play");
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

forward.addEventListener("click", () => {
  if (currentMusicIndex < musics.length - 1) {
    currentMusicIndex++;
  } else {
    currentMusicIndex = 0;
    console.log(currentMusicIndex);
  }
  currentMusic(currentMusicIndex);
  audio.play();
});

previous.addEventListener("click", () => {
  if (currentMusicIndex > 0) {
    currentMusicIndex--;
  } else {
    currentMusicIndex = musics.length - 1;
    console.log(currentMusicIndex);
  }
  currentMusic(currentMusicIndex);
  audio.play();
});

musicVoice.addEventListener("input", (e) => {
  audio.volume = e.target.value / 100;
});
