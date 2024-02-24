document.addEventListener("DOMContentLoaded", function() {
    const proposalBtn = document.getElementById('proposalBtn');
    const proposalMessage = document.getElementById('proposalMessage');
  const audio=document.getElementById("myAudio")
    proposalBtn.addEventListener('click', function() {
      proposalMessage.classList.remove('hidden');
      if (audio.paused) {
        audio.play();
      }
    });
  });
  