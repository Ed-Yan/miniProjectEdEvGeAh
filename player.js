let song = new Audio();
song.volume = 0.2;

function playMusic() {
  const play_btn = document.querySelector("#play_img");

  song.src = song_url;
  if (!isPlaying) {
    song.play();
    isPlaying = true;
    play_btn.classList.remove("fa-play");
    play_btn.classList.add("fa-pause");
  } else {
    song.pause();
    isPlaying = false;
    play_btn.setAttribute("class", "fa fa-play");
  }
  song.addEventListener("ended", function () {
    song.pause();
    isPlaying = false;
    play_btn.classList.remove("fa-pause");
    play_btn.classList.add("fa-play");
  });
}

// VOLUME CHANGE FUNCTION
function changeVolume(volume) {
  const volume_icon = document.querySelector("#player #volume-icon");

  song.volume = volume / 100;
  if (song.volume === 0) {
    volume_icon.classList.remove("fa-volume-down");
    volume_icon.classList.remove("fa-volume-up");
    volume_icon.classList.add("fa-volume-off");
  } else if (song.volume > 0 && song.volume < 0.5) {
    volume_icon.classList.remove("fa-volume-off");
    volume_icon.classList.remove("fa-volume-up");
    volume_icon.classList.add("fa-volume-down");
  } else if (song.volume > 0.5) {
    volume_icon.classList.remove("fa-volume-off");
    volume_icon.classList.remove("fa-volume-down");
    volume_icon.classList.add("fa-volume-up");
  }
}

// UPDATE CURRENT DURATION TEXT FUNCTION
function updateCurrentTimeDisplay(time) {
  const currentTimeContainer = document.querySelector(".track-time-current");

  let roundedTime = Math.round(time);

  let seconds = roundedTime % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let minutes = (roundedTime - seconds) / 60;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const currentTime = minutes + ":" + seconds;

  current_time = currentTime;
  currentTimeContainer.innerHTML = currentTime;
}

// DURATION BAR CHANGE FUNCTION
song.ontimeupdate = function (value) {
  const songDurationBar = document.querySelector("#player-duration-bar");

  updateCurrentTimeDisplay(song.currentTime);

  let perc = Math.round((song.currentTime / song.duration) * 100);

  songDurationBar.value = perc;
};

// CHANGE PLACE IN SONG FUNCTION

function changeSongPlace(time) {
  song.currentTime = Math.round((time / 100) * song.duration);
}

//Evgeniia


// Ahmad Jahangiry