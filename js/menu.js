 let burgerIcon =document.querySelector('.burger_icon');
let searchdesire =document.querySelector('.searchdesire');
 let searchtext =document.querySelector('.searchtext');
  let menu= document.querySelector('.menu');

  let menuLink =document.querySelectorAll('.link');
  menuLink.forEach((links) => {
    links.addEventListener('click',()=>{
    menu.classList.remove('active');
     burgerIcon.classList.toggle('fa-bars');
       burgerIcon.classList.toggle('fa-xmark');
   
  })
  });
  
 

 burgerIcon.addEventListener('click' , ()=>{
    
  
   menu.classList.toggle('active');
   burgerIcon.classList.toggle('fa-bars');
    burgerIcon.classList.toggle('fa-xmark');

 })
 
 
 searchdesire.addEventListener('click' ,()=>{
    searchtext.classList.toggle('active');
    
 })