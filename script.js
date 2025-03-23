document.addEventListener("DOMContentLoaded", () => {
  const songs = [];
  const audioPlayer = document.getElementById("audioPlayer");
  const statusDisplay = document.getElementById("status");
  const currentSongDisplay = document.getElementById("current-song");
  let currentSongIndex = 0;

  // Fetch songs from a local or static source
  async function fetchSongs() {
    const endpoint = `/songs`; // Replace this with your actual local or static source URL
    try {
      const response = await fetch(endpoint);
      const data = await response.json(); //this is what i want

      // Add each song to the playlist
      data.forEach((song) => {
        songs.push({
          name: song.name,
          artist: song.artist || "Unknown Artist",
          file: song.url,
        });
      });

      // Start playing the first song if there are any
      if (songs.length > 0) {
        playSong(0);
      } else {
        console.error("No songs found.");
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  }

  function playSong(index) {
    audioPlayer.src = songs[index].file;
    audioPlayer
      .play()
      .catch((error) => console.error("Error playing song:", error));
    currentSongIndex = index;
    updateStatus("Playing", songs[index].name);
  }

  function updateStatus(status, songName) {
    statusDisplay.textContent = status;
    currentSongDisplay.textContent = songName;
  }

  fetchSongs(); // Call this function when the page loads
});
