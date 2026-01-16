const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if(entry.isIntersecting)
        {
            console.log(entry.target)
            entry.target.classList.add("show")
        } 
        else
        {
            entry.target.classList.remove("show")
        }

    })
}, 
{
    threshold: 0.25
})

const aElements = document.querySelectorAll("img")
aElements.forEach(el => observer.observe(el))

const pElements = document.querySelectorAll("p")
pElements.forEach(el => observer.observe(el))

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('intro');
  const music = document.getElementById('music');

  // Check if user already started music this session
  const musicStarted = sessionStorage.getItem('musicStarted');

  if (musicStarted) {
    // User already clicked before, hide overlay and play music
    overlay.style.display = 'none';
    music.volume = 1;
    music.play().catch(() => {});
  } else {
    // Show overlay and wait for user interaction
    overlay.style.display = 'flex';
    overlay.addEventListener('click', () => {
      music.volume = 0;
      music.play().then(() => {
        let vol = 0;
        const fade = setInterval(() => {
          vol += 0.02;
          if (vol >= 1) {
            vol = 1;
            clearInterval(fade);
          }
          music.volume = vol;
        }, 50);

        overlay.style.transition = 'opacity 0.5s ease';
        overlay.style.opacity = 0;
        setTimeout(() => overlay.style.display = 'none', 500);

        // Remember that user started music
        sessionStorage.setItem('musicStarted', 'true');
      }).catch(err => {
        console.error('Playback failed:', err);
      });
    }, { once: true });
  }
});

document.getElementById('intro').addEventListener('click', () => {
  const overlay = document.getElementById('intro');
  const video = document.getElementById('vinyl');

  video.volume = 1; // or adjust volume as needed
  video.play().then(() => {
    overlay.style.transition = 'opacity 0.5s ease';
    overlay.style.opacity = 0;
    setTimeout(() => overlay.remove(), 500);
  }).catch(err => {
    console.error('Video playback failed:', err);
  });
});

