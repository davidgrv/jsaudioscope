document.addEventListener('DOMContentLoaded', function () {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple'
    });
  
    wavesurfer.load('audio.mp3');
  
    const audio = document.getElementById('audio');
  
    audio.addEventListener('play', function () {
      wavesurfer.play();
      updateWaveform();
    });
  
    audio.addEventListener('pause', function () {
      wavesurfer.pause();
    });
  
    function updateWaveform() {
      const container = document.getElementById('waveform-container');
      const waveform = document.getElementById('waveform');
      const width = container.offsetWidth;
  
      const timer = setInterval(function () {
        const progress = wavesurfer.getCurrentTime() / wavesurfer.getDuration();
        const scrollPos = progress * (waveform.offsetWidth - width);
        container.scrollLeft = scrollPos;
      }, 100);
    }
  });
  