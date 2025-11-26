 let burgerIcon =document.querySelector('.burger_icon');
 burgerIcon.addEventListener('click' , ()=>{
    
   let menu= document.querySelector('.menu');
   menu.classList.toggle('active');
   burgerIcon.classList.toggle('fa-bars');
    burgerIcon.classList.toggle('fa-xmark');

 })
 
 let searchdesire =document.querySelector('.searchdesire');
 let searchtext =document.querySelector('.searchtext');

 searchdesire.addEventListener('click' ,()=>{
    searchtext.classList.toggle('active');
    
 })