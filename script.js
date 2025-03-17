document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  const playlist = document.getElementById("playlist");
  const statusDisplay = document.getElementById("status");
  const currentSongDisplay = document.getElementById("current-song");
  const playerContainer = document.querySelector('.player-container');

  let currentSongIndex = 0;

  // Load playlist dynamically
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.name;
    li.addEventListener("click", () => playSong(index));
    playlist.appendChild(li);
  });

  playerContainer.addEventListener("click", (event) => {
    const rect = playerContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const prevButton = { x: 109, y: 466, width: 217 - 109, height: 568 - 466 };
    const playButton = { x: 260, y: 469, width: 377 - 260, height: 571 - 469 };
    const pauseButton = { x: 419, y: 464, width: 526 - 419, height: 564 - 464 };
    const nextButton = { x: 576, y: 467, width: 683 - 576, height: 574 - 467 };

    if (isButtonClicked(x, y, playButton)) {
      audioPlayer.play();
    } else if (isButtonClicked(x, y, pauseButton)) {
      audioPlayer.pause();
    } else if (isButtonClicked(x, y, nextButton)) {
      playNextSong();
    } else if (isButtonClicked(x, y, prevButton)) {
      playPrevSong();
    }
  });

  function isButtonClicked(x, y, button) {
    return (
      x >= button.x &&
      x <= button.x + button.width &&
      y >= button.y &&
      y <= button.y + button.height
    );
  }

  function playSong(index) {
    audioPlayer.src = songs[index].file;
    audioPlayer.play().catch((error) => {
      console.error("Error playing song:", error);
    });
    currentSongIndex = index;
    updateStatus("Playing", songs[index].name);
  }

  //currentSongDisplay.textContent = `${currentSong.name}\n${currentSong.artist}`;
  //currentSongDisplay.innerHTML = `${currentSong.name}<br>${currentSong.artist}`;

  function updateStatus(status, songName) {
    statusDisplay.textContent = status;
    const currentSong = songs[currentSongIndex];
    currentSongDisplay.innerHTML = `${currentSong.name}<br>${currentSong.artist}`;
  }

  audioPlayer.addEventListener("ended", () => {
    playNextSong();
  });

  function playNextSong() {
    console.log("Playing next song");
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
  }

  function playPrevSong() {
    console.log("Playing previous song");
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
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

function togglePlaylist() {
  var playlist = document.getElementById('playlist');
  if (playlist.style.display === 'none') {
    playlist.style.display = 'block';
  } else {
    playlist.style.display = 'none';
  }
}
