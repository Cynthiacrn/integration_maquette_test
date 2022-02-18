//Afficher produits dans le header

document.querySelector('#click').addEventListener("click", ()=>{
    console.log("click actif")
    document.querySelector('#links').classList.toggle('visible')
})


// Incrémentation des quantités

var i = 0;

function incNumber() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity').value = value;
}

function decNumber() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('quantity').value = value;
}


// Affichage des liens dans le footer

document.querySelector('#about-title1').addEventListener("click", ()=>{
    document.querySelector('#links1').classList.toggle('visible')
    document.querySelector('#arrow1').classList.toggle('rotate')
    document.querySelector('#about-title1').classList.toggle('color-title')
})

document.querySelector('#about-title2').addEventListener("click", ()=>{
    document.querySelector('#links2').classList.toggle('visible')
    document.querySelector('#arrow2').classList.toggle('rotate')
    document.querySelector('#about-title2').classList.toggle('color-title')
})
document.querySelector('#about-title3').addEventListener("click", ()=>{
    document.querySelector('#links3').classList.toggle('visible')
    document.querySelector('#arrow3').classList.toggle('rotate')
    document.querySelector('#about-title3').classList.toggle('color-title')
})

document.querySelector('#about-title4').addEventListener("click", ()=>{
    document.querySelector('#links4').classList.toggle('visible')
    document.querySelector('#arrow4').classList.toggle('rotate')
    document.querySelector('#about-title4').classList.toggle('color-title')
})


