const btnHead = document.querySelector(".btn-head")
const body = document.querySelector("body")
const nav = document.querySelector(".nav-click")
const bar = document.querySelector(".bars")
const close = document.querySelector(".close")
const ans = document.querySelector(".ans")
const rn = document.querySelector(".rn")
const play = document.getElementById("play")
const vidéo = document.getElementById("vidéo")
const Video = document.getElementById("Video")
const film = document.getElementById("film")
console.log(nav);
console.log(film);

const videoNgeza = document.querySelectorAll(".videoNgeza")
const videoKely= document.querySelectorAll(".videoKely")
console.log(videoNgeza);
console.log(videoKely);
const icon1 = document.querySelectorAll(".icon1")
console.log(icon1);

function manalaVideo(index)
{
    videoNgeza[index].classList.remove("invisible")
    for(let i=0; i<3; i++)
    {if(i != index){videoNgeza[i].classList.add("invisible")}}
}

videoKely.forEach((element,index)=>{
    element.addEventListener(("click"),()=>{
        manalaVideo(index)})
})

icon1.forEach((element,index)=>{
    element.addEventListener(("click"),()=>{
        manalaVideo(index)})
})

btnHead.addEventListener("click",()=>{
    btnHead.style.color ="rgba(254, 202, 8, 1)"
    btnHead.style.borderColor ="rgba(254, 202, 8, 1)"
    btnHead.style.background ="#444"
})

bar.addEventListener("click",()=>{
    nav.classList.toggle('active')
    bar.style.display ="none"
    close.style.display ="block"
    body.style.overflow = "hidden"
})
close.addEventListener("click",()=>{
    nav.classList.toggle('active')
    bar.style.display ="block"
    close.style.display ="none"
    body.style.overflow = "visible"
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key);
    if(e.key == "Escape"){
        nav.classList.remove('active')
        bar.style.display ="block"
        close.style.display ="none"
    }
})




$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
