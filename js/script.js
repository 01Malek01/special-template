//check color option in local storage
if(localStorage.getItem('color-option')!=null){
   document.documentElement.style.setProperty("--main-color",localStorage.getItem('color-option'));
   let fe = localStorage.getItem('color-option');
   document.querySelector(`#${fe}`).classList.add('active-2');

};



//variable for random bg option
let randomBgOption = false;

//variable to controle the bg interval
let randomBgInterval;
//select landing page
let landingPage = document.querySelector('.landing-page');

//array of imgs for background

let imgs = ["/with youtube/template 1 take 2/imgs/01.jpg" , "/with youtube/template 1 take 2/imgs/02.jpg" , "/with youtube/template 1 take 2/imgs/03.jpg" , "/with youtube/template 1 take 2/imgs/04.jpg" , "/with youtube/template 1 take 2/imgs/05.jpg"];

   //create function for random bg


function randomizeImgs() {
   if(randomBgOption===true ) {
       randomBgInterval = setInterval( () => {

         let randomNum = Math.floor(Math.random() * imgs.length);
     
         landingPage.style.backgroundImage = `url('${imgs[randomNum]}')`
     
        } ,10000);

   };
};

//random bg option 
const randomBgOptions = document.querySelectorAll('.box .color-options span');
randomBgOptions.forEach(option => {
   option.addEventListener(`click` , (e) => {
      e.target.parentElement.querySelectorAll('.active').forEach(el => {
         el.classList.remove('active');
      });
      if(e.target.dataset.option == 'true'){
         randomBgOption = true;
         randomizeImgs();
         localStorage.setItem('active-random-bg' , 'true');

      }
      else{
         randomBgOption = false;
         clearInterval(randomBgInterval);
         localStorage.setItem('active-random-bg' , 'false');

      }
      e.target.classList.add('active');

   });

});
// //check for random bg option in local storage
// if(localStorage.getItem('active-random-bg') !== null){
//    if(localStorage.getItem('active-random-bg') === true){
//       randomBgOption = true;
//       randomizeImgs();


//    }
//    else{
//       randomBgOption = false;
//       clearInterval(randomBgInterval);
//    }

// };


 
   //toggle settings menue
   const settingIcon = document.getElementById('setting-icon')
   settingIcon.onclick = () => {
      let settingBox = document.getElementById('setting-box')
      settingBox.classList.toggle('toggle');
   }


//color options
   var colorBtns = document.querySelectorAll('.setting-box li');
   colorBtns.forEach(li => {
      li.addEventListener('click', (e) => {
         localStorage.setItem('color-option',e.target.dataset.color);
         document.documentElement.style.setProperty("--main-color",localStorage.getItem('color-option'));
         e.target.parentElement.querySelectorAll('.active-2').forEach(el => {
            el.classList.remove('active-2')
         });
         e.target.classList.add('active-2')
      
      });

   });

  
 

   //remove active class from nav elements and add them to target el
   const navElements = document.querySelectorAll('.header .nav li a');
   navElements.forEach(a => {
      a.addEventListener('click' , (e) =>{
         handleActive(e);
   
      });
    

   });
   


window.onscroll = () => {
      //control skills section
      let skillsSection = document.querySelector('.skills');

      //skills offset top (distance from its parent from the top)
      let skillsOffsetTop = skillsSection.offsetTop;
   
   
      //skills outer height (offsetHeight => total height including border and padding etc...)
      let skillsOffsetHeight = skillsSection.offsetHeight;
   
      //window height ( window.innerHeight )
      let innerHeight = this.innerHeight;
   
      //skills scroll top  ( pageYOffset => how much did i scroll from the top of the page)
      let windowScrollTop = this.scrollY;

      if(windowScrollTop > ( skillsOffsetHeight + skillsOffsetTop - innerHeight )){
       let skillsProgress = document.querySelectorAll('.skills .skill-box .skill-progress span');
       skillsProgress.forEach(skill => {
         skill.style.width = skill.dataset.progress;

       });

         };

}

//get all gallery imgs for popup box
let galleryImgs = document.querySelectorAll('.gallery .imgs-box img');
galleryImgs.forEach(img => {
   img.addEventListener('click' , (e) => {
      let overlay = document.createElement('div');
      overlay.className = 'popup';
      let popupBox = document.createElement('div');
      popupBox.className = 'popup-box';
      if(img.alt){
         let imgHeading = document.createElement('h2');
         let imgText = document.createTextNode(img.alt);
         imgHeading.appendChild(imgText);
         popupBox.appendChild(imgHeading);

      };



      let popupImg = document.createElement('img');
      popupImg.src = img.src;
      overlay.appendChild(popupBox);
      popupBox.appendChild(popupImg);

       //create exit button
       let exitBtn = document.createElement('div');
       exitBtn.className = 'exit-btn';
       overlay.appendChild(exitBtn);

      document.body.appendChild(overlay);


      exitBtn.onclick = () => {
         document.body.removeChild(overlay);
      }

   })
});

const navBullets = document.querySelectorAll(".nav-bullets .bullet");

function scrollToSection(elements){
   elements.forEach(el => {
      el.addEventListener('click' , (e) => {
         e.preventDefault();
         document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
         });
      });
   });
};

scrollToSection(navBullets);
scrollToSection(navElements);

function handleActive(ev){
   ev.target.parentElement.parentElement.querySelectorAll('.active').forEach(el => {
      el.classList.remove('active');
   });
ev.target.classList.add('active');
};

const bulletsOptions = document.querySelectorAll(".setting-box .box .nav-bullets-option span");
bulletsOptions.forEach(option => {
   option.addEventListener("click" , (e)=> {
      handleActive(e);
      if(e.target.dataset.bullets ==='show'){
         document.querySelector(".nav-bullets").style.display="block";
         localStorage.setItem('bullets', 'true');

      }
      else{
         document.querySelector(".nav-bullets").style.display="none";
         localStorage.setItem('bullets', 'false');
      }

   });
});

//toggle menu 

let menuBtn = document.querySelector('.toggle-menu')
let nav = document.querySelector('.nav');

menuBtn.onclick=(e)=> {
   menuBtn.classList.toggle('menu-active');
   nav.classList.toggle('open');
   e.stopPropagation();

}
document.addEventListener('click' , (e)=>{
   if(e.target!== menuBtn && e.target!==nav){
      if(nav.classList.contains('open')){
         menuBtn.classList.toggle('menu-active');
         nav.classList.toggle('open');
      };
   };
});

nav.addEventListener('click',(e)=> {
   e.stopPropagation();
})







  

   






