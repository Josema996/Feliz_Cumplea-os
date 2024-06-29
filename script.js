document.getElementById('showGift').addEventListener('click', function() {
    var videoModal = document.getElementById('videoModal');
    var video = document.getElementById('birthdayVideo');
  
    if (videoModal.style.display === "none") {
      videoModal.style.display = "block";
      video.play();
    } else {
      videoModal.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }
  });