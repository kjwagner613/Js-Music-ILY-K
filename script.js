// List of songs
const songs = [
    {
      name: "The Craving",
      file: "https://dl.dropboxusercontent.com/scl/fi/u2io5qs34uydyev225wz0/01-The-Craving-Jenna-s-version.mp3?rlkey=kqqvt6b0usswdjfsucwy0aj39&st=xyp206t4&dl=0",
    },
    {
      name: "Volcano",
      file: "https://dl.dropboxusercontent.com/scl/fi/8859rfgqzp1m5gjx3g81i/02-Volcano.mp3?rlkey=aibl7xc3hxurvq4luhc1ciftt&st=y3l49ud6&dl=0",
    },
    {
      name: "PNAU Mix",
      file: "https://dl.dropboxusercontent.com/scl/fi/4p9hpo906qide0dro6r8x/03-Cold-Heart-PNAU-Remix.mp3?rlkey=hqnjviz5cq2hlkxmy1gzml67w&st=tlvwqce6&dl=0",
    },
  ];
  
  const audioPlayer = document.getElementById("audioPlayer");
  const playlist = document.getElementById("playlist");
  
  // Load playlist dynamically
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.name;
    li.addEventListener("click", () => playSong(index));
    playlist.appendChild(li);
  });
  
  // Play song from playlist
  function playSong(index) {
    audioPlayer.src = songs[index].file;
    audioPlayer.play();
    currentSongIndex = index;
  }
  
  // Play next song when current song ends
  let currentSongIndex = 0;
  audioPlayer.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
  });
  
  // Start with first song
  playSong(0);
  