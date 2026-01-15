const btn = document.querySelectorAll("button")
const envoyer = document.querySelector(".btn-envoyer")
const download = document.querySelector(".btn-download")
const profiter = document.querySelector(".btn-profiter")

envoyer.addEventListener("mouseover",()=>{
    envoyer.style.color ="white"
    envoyer.style.borderColor ="orange"
    envoyer.style.background ="orange"
})
envoyer.addEventListener("mouseout",()=>{
    envoyer.style.color ="rgba(254, 202, 8, 1)"
    envoyer.style.borderColor ="rgba(254, 202, 8, 1)"
    envoyer.style.background ="#444"
})

download.addEventListener("mouseover",()=>{
    download.style.color ="white"
    download.style.borderColor ="orange"
    download.style.background ="orange"
})
download.addEventListener("mouseout",()=>{
    download.style.color ="rgba(254, 202, 8, 1)"
    download.style.borderColor ="rgba(254, 202, 8, 1)"
    download.style.background ="#444"
})

profiter.addEventListener("mouseover",()=>{
    profiter.style.color ="white"
    profiter.style.borderColor ="orange"
    profiter.style.background ="orange"
})
profiter.addEventListener("mouseout",()=>{
    profiter.style.color ="rgba(254, 202, 8, 1)"
    profiter.style.borderColor ="rgba(254, 202, 8, 1)"
    profiter.style.background ="#444"
})