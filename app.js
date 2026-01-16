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