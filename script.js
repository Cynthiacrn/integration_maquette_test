let click = document.querySelector('#click');
let links = document.querySelector('#links')
let arrow = document.querySelector('#arrow')

click.addEventListener("click", ()=>{
    console.log("click actif")
    links.classList.toggle('visible')
})

let click1 = document.querySelector('#about-title1');
let links1 = document.querySelector('#links1')
let arrow1 = document.querySelector('#arrow1')

click1.addEventListener("click", ()=>{
    console.log("click actif")
    links1.classList.toggle('visible')
    arrow1.classList.toggle('rotate')
})

let click2 = document.querySelector('#about-title2');
let links2 = document.querySelector('#links2')
let arrow2 = document.querySelector('#arrow2')

click2.addEventListener("click", ()=>{
    console.log("click actif")
    links2.classList.toggle('visible')
    arrow2.classList.toggle('rotate')
})

let click3 = document.querySelector('#about-title3');
let links3 = document.querySelector('#links3')
let arrow3 = document.querySelector('#arrow3')

click3.addEventListener("click", ()=>{
    console.log("click actif")
    links3.classList.toggle('visible')
    arrow3.classList.toggle('rotate')
})

let click4 = document.querySelector('#about-title4');
let links4 = document.querySelector('#links4')
let arrow4 = document.querySelector('#arrow4')

click4.addEventListener("click", ()=>{
    console.log("click actif")
    links4.classList.toggle('visible')
    arrow4.classList.toggle('rotate')
})

