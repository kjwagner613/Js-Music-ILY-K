document.addEventListener("DOMContentLoaded", () => {
  const bucketName = "js-own-kw-4-ever"; // Your Google Cloud bucket name
  const apiKey = "AIzaSyDiw7nwpWin6ETwhLHgImR1oiFdu2_oUkU"; // Your API key
  const endpoint = `https://storage.googleapis.com/storage/v1/b/js-own-kw-4-ever/o?key=${apiKey}`;
  const audioPlayer = document.getElementById("audioPlayer");
  const statusDisplay = document.getElementById("status");
  const currentSongDisplay = document.getElementById("current-song");
  const playerContainer = document.querySelector(".player-container");
  const shuffleButton = document.getElementById("shuffle-button");

  const songs = [];

  async function fetchSongs() {
    const endpoint = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o?key=${apiKey}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    data.items.forEach(item => {
      if (item.contentType.startsWith("audio/")) {
        songs.push({
          name: item.name,
          artist: "Unknown Artist", // Replace with actual metadata if needed
          file: `https://storage.googleapis.com/${bucketName}/${item.name}`,
        });
      }
    });

    if (songs.length > 0) {
      playSong(0);
    } else {
      console.error("No audio files found.");
    }
  }

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
    const currentSong = songs[currentSongIndex];
    currentSongDisplay.innerHTML = `${currentSong.name}<br>${currentSong.artist}`;
  }

  let currentSongIndex = 0;

  shuffleButton.addEventListener("click", () => {
    shuffleSongs();
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

  function shuffleSongs() {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]]; // Swap elements
    }
    currentSongIndex = 0; // Reset to the first shuffled song
    playSong(currentSongIndex);
  }

  fetchSongs();
});

  
  let currentSongIndex = 0;

  shuffleButton.addEventListener("click", () => {
    shuffleSongs();
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

  function shuffleSongs() {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]]; // Swap elements
    }
    currentSongIndex = 0; // Reset to the first shuffled song
    playSong(currentSongIndex);
  }

  const selectedSongIndex = localStorage.getItem("selectedSongIndex");
  if (selectedSongIndex !== null) {
    playSong(parseInt(selectedSongIndex));
    localStorage.removeItem("selectedSongIndex");
  } else {
    playSong(0);
  }
});