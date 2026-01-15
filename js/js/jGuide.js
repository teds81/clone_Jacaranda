const all = document.getElementById("all")
const est = document.getElementById("est")
const nord = document.getElementById("nord")
const sud = document.getElementById("sud")
const ouest = document.getElementById("ouest")
const gris = document.querySelectorAll(".gris")
const column = document.querySelector(".column")
const point = document.getElementById("point")

// all
all.addEventListener("mouseover",()=>{
    all.style.background ="rgba(119, 132, 158, 1)"
    all.style.color ="white"
})
all.addEventListener("mouseout",()=>{
    all.style.background ="rgba(119, 132, 158, 1)"
    all.style.color ="white"
})
all.addEventListener("click",()=>{
    all.style.background ="rgba(119, 132, 158, 1)"
    all.style.color ="white"
})
// est
est.addEventListener("mouseover",()=>{
    est.style.background ="rgba(119, 132, 158, 1)"
    est.style.color ="white"
})
est.addEventListener("mouseout",()=>{
    est.style.background ="whitesmoke"
    est.style.color ="rgba(0, 0, 0, .5)"
})
est.addEventListener("click",()=>{
    est.style.background ="rgba(119, 132, 158, 1)"
    est.style.color ="white"
})
// nord
nord.addEventListener("mouseover",()=>{
    nord.style.background ="rgba(119, 132, 158, 1)"
    nord.style.color ="white"
})
nord.addEventListener("mouseout",()=>{
    nord.style.background ="whitesmoke"
    nord.style.color ="rgba(0, 0, 0, .5)"
})
nord.addEventListener("click",()=>{
    nord.style.background ="rgba(119, 132, 158, 1)"
    nord.style.color ="white"
})
// sud
sud.addEventListener("mouseover",()=>{
    sud.style.background ="rgba(119, 132, 158, 1)"
    sud.style.color ="white"
})
sud.addEventListener("mouseout",()=>{
    sud.style.background ="whitesmoke"
    sud.style.color ="rgba(0, 0, 0, .5)"
})
sud.addEventListener("click",()=>{
    sud.style.background ="rgba(119, 132, 158, 1)"
    sud.style.color ="white"
})
// ouest
ouest.addEventListener("mouseover",()=>{
    ouest.style.background ="rgba(119, 132, 158, 1)"
    ouest.style.color ="white"
})
ouest.addEventListener("mouseout",()=>{
    ouest.style.background ="whitesmoke"
    ouest.style.color ="rgba(0, 0, 0, .5)"
})
ouest.addEventListener("click",()=>{
    ouest.style.background ="rgba(119, 132, 158, 1)"
    ouest.style.color ="white"
})
// column
column.addEventListener("mouseover",()=>{
    column.style.background ="yellowgreen"
    point.style.color ="white"
})
column.addEventListener("mouseout",()=>{
    column.style.background ="darkred"
    point.style.color ="yellow"
})
column.addEventListener("click",()=>{
    column.style.background ="yellowgreen"
    point.style.color ="white"
})