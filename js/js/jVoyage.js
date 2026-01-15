const circuit = document.querySelector(".circuit")
const flex1 = document.querySelectorAll(".flex1")
const decouverte = document.getElementById("découverte")
const sejour = document.getElementById("sejour")
const theme = document.getElementById("theme")
const mesure = document.getElementById("mesure")
const next = document.querySelector(".next")
console.log(next);

decouverte.addEventListener("mouseover",()=>{
    decouverte.style.background = "rgb(140, 59, 22)"
    decouverte.style.color = "white"
})
sejour.addEventListener("mouseover",()=>{
    sejour.style.background = "rgb(140, 59, 22)"
    sejour.style.color = "white"
    next.style.color = "white"
})
theme.addEventListener("mouseover",()=>{
    theme.style.background = "rgb(140, 59, 22)"
    theme.style.color = "white"
    next.style.color = "white"
})
mesure.addEventListener("mouseover",()=>{
    mesure.style.background = "rgb(140, 59, 22)"
    mesure.style.color = "white"
    next.style.display = "block"
})
// decouverte.addEventListener("mouseout",()=>{
//     decouverte.style.background = "#bbb"
//     decouverte.style.color = "black"
// })
sejour.addEventListener("mouseout",()=>{
    sejour.style.background = "#bbb"
    sejour.style.color = "black"
})
theme.addEventListener("mouseout",()=>{
    theme.style.background = "#bbb"
    theme.style.color = "black"
})
mesure.addEventListener("mouseout",()=>{
    mesure.style.background = "#bbb"
    mesure.style.color = "black"
})

sejour.addEventListener("click",()=>{
    sejour.style.background = "rgb(140, 59, 22)"
    decouverte.style.background = "#bbb"
    decouverte.style.color = "black"
})
theme.addEventListener("click",()=>{
    theme.style.background = "rgb(140, 59, 22)"
    decouverte.style.background = "#bbb"
    decouverte.style.color = "black"
})
mesure.addEventListener("click",()=>{
    mesure.style.background = "blue"
    decouverte.style.background = "#bbb"
    decouverte.style.color = "black"
})