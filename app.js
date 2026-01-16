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

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("music");
    const btn = document.getElementById("startMusic");

    btn.addEventListener("click", () => {
        music.play()
            .then(() => console.log("Music playing"))
            .catch(err => console.log("Playback blocked:", err));
    });
});
