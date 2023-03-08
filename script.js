'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnbclosemodal=document.querySelector('.close-modal');
const btnopenmodal=document.querySelectorAll('.show-modal');
console.log(btnopenmodal);
const opemmodel=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}
for(let i=0;i<btnopenmodal.length;i++){
    btnopenmodal[i].addEventListener('click',opemmodel);
}
const closemodel=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnbclosemodal.addEventListener('click',closemodel);
overlay.addEventListener('click',closemodel);

document.addEventListener('keydown',function(e){
      // console.log(e.key);
      if(e.key==='Escape' && !modal.classList.contains('hidden')){

            closemodel();
        }
      
});