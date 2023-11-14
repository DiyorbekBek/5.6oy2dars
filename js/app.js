const playBtn = document.getElementById("play");
const previous = document.getElementById("previous");
const forward = document.getElementById("forward");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const musicVoice = document.getElementById("music-voice");
const duraction = document.getElementById("duraction");
const progress = document.getElementById("progress");
const playIcon = document.getElementById("playIcon");
const innerProgress = document.getElementById("inner-progress");
const time = document.getElementById("time");
const sec = document.getElementById("sec");

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

function pauseMusic() {
  audio.pause();
  container.classList.remove("play");
  playIcon.setAttribute("class", "fa-solid fa-play");
  container.classList.remove("play");
}

function forwardSong() {
  if (currentMusicIndex > 0) {
    currentMusicIndex--;
  } else {
    currentMusicIndex = musics.length - 1;
  }
  currentMusic(currentMusicIndex);
  playMusic();
}

function playMusic() {
  audio.play();
  playIcon.setAttribute("class", "fa-solid fa-pause");
  container.classList.add("play");
}

function uptadeProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const proressPercent = (currentTime / duration) * 100;
  innerProgress.style.width = `${proressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duraction = audio.duration;
}

playBtn.addEventListener("click", () => {
  if (container.classList.contains("play")) {
    pauseMusic();
  } else {
    playMusic();
  }
});

forward.addEventListener("click", () => {
  forwardSong();
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

audio.addEventListener("timeupdate", uptadeProgress);

audio.addEventListener("ended", (e) => {
  forwardSong();
});
audio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const musicTime = e.target.duration;
  const musicSec = musicTime;
  const musicAllTime = musicSec.toFixed(2);
  // console.log(musicAllTime / 60);
  const sss = (currentTime / 100) * 100;
  const www = Math.floor(sss);
  const ddd = musicAllTime / 60 - www / 100;
  const end = (time.innerHTML = ddd.toFixed(2));
  const fullEnd = end.replace(".", ":").padStart(5, "0");
  time.innerText = fullEnd;
  sec.innerHTML = www;
});
