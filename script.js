document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".play-button");
  const pauseButton = document.querySelector(".pause-button");
  const nextButton = document.querySelector(".next-button");
  const audioPlayer = document.getElementById("audioPlayer");
  const playlist = document.getElementById("playlist");
  const statusDisplay = document.getElementById("status");
  const currentSongDisplay = document.getElementById("current-song");

  let currentSongIndex = 0;

  // Load playlist dynamically
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.name;
    li.addEventListener("click", () => playSong(index));
    playlist.appendChild(li);
  });

  function playSong(index) {
    audioPlayer.src = songs[index].file;
    audioPlayer.play().catch((error) => {
      console.error("Error playing song:", error);
    });
    currentSongIndex = index;
    updateStatus("Playing", songs[index].name);
  }

  function updateStatus(status, songName) {
    statusDisplay.textContent = status;
    currentSongDisplay.textContent = songName;
  }

  audioPlayer.addEventListener("ended", () => {
    playNextSong();
  });

  function playNextSong() {
    console.log("Playing next song");
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
  }

  if (playButton) {
    playButton.addEventListener("click", () => {
      audioPlayer.play();
      updateStatus("Playing", songs[currentSongIndex].name);
    });
  }

  if (pauseButton) {
    pauseButton.addEventListener("click", () => {
      audioPlayer.pause();
      updateStatus("Paused", songs[currentSongIndex].name);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      console.log("Next button clicked");
      playNextSong();
    });
  }

  // Check if a song was selected from the song list page
  const selectedSongIndex = localStorage.getItem("selectedSongIndex");
  if (selectedSongIndex !== null) {
    playSong(parseInt(selectedSongIndex));
    localStorage.removeItem("selectedSongIndex");
  } else {
    playSong(0); // Start with the first song
  }
});
