const prevButton =document.querySelector(".prev");
const nextButton =document.querySelector(".next");
const videoButton =document.querySelector("video");
const clickVideoButton = document.querySelector(".videoClick");
const modalTag =document.querySelector(".modal");
const closeButtonTag= document.querySelector(".close-button");
const videoTag =document.querySelector("video");

function prevButtonClick(){
    let items =document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
}

function nextButtonClick(){
    let items =document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1])
}

let showVideo =()=>{
    modalTag.style.display ='block';
    videoTag.play();
}

let closeModal =() =>{
    modalTag.style.display = 'none';
    videoTag.pause();
}

prevButton.addEventListener("click",prevButtonClick);
nextButton.addEventListener("click",nextButtonClick);
clickVideoButton.addEventListener("click",showVideo);
closeButtonTag.addEventListener("click",closeModal)

document.addEventListener('readystatechange',function(){
    videoTag.pause()
})