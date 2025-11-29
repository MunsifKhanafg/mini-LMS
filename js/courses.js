import { courses } from "./coursesArray.js";
let html='';
let courseDisplay =document.querySelector('.courses');;
courses.forEach((course)=>{
  html =html + `
            <img src="${course.course_image}" alt="img" class="cousesimg">
            <h3 class="nameofCoures">${course.course_name}</h3>
            <img src="image/ratings/rating-05.png" alt="" class="stars">
            <p class="rating">3.4</p>
  `;
})
courseDisplay.innerHTML =html;