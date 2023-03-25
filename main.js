const video = document.querySelector('.video');
const playpauseBtn = document.querySelector('.play-pause');
const muteBtn = document.querySelector('.mute');
const volumeSlider = document.querySelector('.volume-slider');
const progressBar = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress');
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');
const fullscreenBtn = document.querySelector('.fullscreen');

fullscreenBtn.addEventListener('click',()=>{
  video.requestFullscreen()
})

video.addEventListener("loadedmetadata", () => {
  const duration = formatTime(video.duration);
  durationEl.textContent = duration;
});

video.addEventListener("timeupdate", () => {
  const currentTime = formatTime(video.currentTime);
  currentTimeEl.textContent = currentTime;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds}`;
}

video.addEventListener("timeupdate", () => {
  const currentTime = video.currentTime;
  const duration = video.duration;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
});

let isPlaying = false;
let isMoted = false;

playpauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    video.pause();
    isPlaying = false;
    playpauseBtn.innerHTML = '<span class="fa-solid fa-play"></span>';
  } else {
    video.play();
    isPlaying = true;
    playpauseBtn.innerHTML = '<span class="fa-solid fa-pause"></span>';
  }
});

muteBtn.addEventListener('click', () => {
  if (isMoted) {
    video.muted = false;
    isMoted = false;
    muteBtn.innerHTML = '<span class="fa-solid fa-volume-high"></span>';
  } else {
    video.muted = true;
    isMoted = true;
    muteBtn.innerHTML = '<span class="fa-solid fa-volume-xmark"></span>';
  }
});

volumeSlider.addEventListener('input',function(){
  video.volume = this.value
})