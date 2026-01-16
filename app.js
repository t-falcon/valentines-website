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

document.getElementById('intro').addEventListener('click', () => {
  const overlay = document.getElementById('intro');
  const music = document.getElementById('music');

  music.volume = 0;
  music.play().then(() => {
    // Fade volume in smoothly
    let vol = 0;
    const fade = setInterval(() => {
      vol += 0.02;
      if (vol >= 1) {
        vol = 1;
        clearInterval(fade);
      }
      music.volume = vol;
    }, 50);

    // Remove overlay after starting music
    overlay.style.transition = 'opacity 0.5s ease';
    overlay.style.opacity = 0;
    setTimeout(() => overlay.remove(), 500);
  }).catch(err => {
    console.error('Playback failed:', err);
  });
});
