// Movement Animation to happen

const card= document.querySelector('.card');
const container= document.querySelector('.container');

// Items
const title=document.querySelector(".title");
const sneaker=document.querySelector(".shoe img");
const purchase=document.querySelector(".purchase button");
const sizes=document.querySelector(".sizes");
const description=document.querySelector(".info h3");

//Moving Animation Event 
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

// Animate In 
    // when we move in donot animate it  
   container.addEventListener("mouseenter", (e) => {
    card.style.transition="none";
    // popout effect
    title.style.transform="translateZ(150px)";
    sneaker.style.transform="translateZ(200px) rotateZ(-45deg)";
    description.style.transform="translateZ(125px)";
    sizes.style.transform="translateZ(100px)";
    purchase.style.transform="translateZ(85px)";
   }); 
// Animate out 
// when mouse goes out of container the animation is back to its position
// Animation effect is gone
container.addEventListener("mouseleave", (e) => {
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    // popback effect
    title.style.transform="translateZ(0px)";
    sneaker.style.transform="translateZ(0px) rotateZ(0deg)";
    description.style.transform="translateZ(0px)";
    sizes.style.transform="translateZ(0px)";
    purchase.style.transform="translateZ(0px)";
});
