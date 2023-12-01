console.log("Hello");
const carousel1 = document.querySelector(".carousel1");
const firstImg = carousel1.querySelectorAll("img") [0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; // getting first img & adding 14 margin value
let scrollWidth = carousel1.scrollWidth - carousel1.clientWidth;// getting max scrollable width
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    arrowIcons[0].style.display = carousel1.scrollLeft == 0 ? 'none' : 'block';
    arrowIcons[1].style.display = carousel1.scrollLeft == scrollWidth ? 'none' : 'block';
}

 arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        //clicked icon is left, recude width value from the carousel scroll left else add to it
        carousel1.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout( () => showHideIcons(), 60); // callig showHideIcons after 60ms
    });
 });

const dragStart = (e) => {
    //updating global variabl vaule on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel1.scrollLeft;
}
const dragging = (e) =>{
    //scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    carousel1.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel1.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons ();
}
const dragStop = () =>{
    isDragStart = false;
    carousel1.classList.remove("dragging");
}

carousel1.addEventListener("mousedown",dragStart);
carousel1.addEventListener("touchstart",dragStart);

carousel1.addEventListener("mousemove",dragging);
carousel1.addEventListener("touchmove",dragging);

carousel1.addEventListener("mouseup",dragStop);
carousel1.addEventListener("mouseleave",dragStop);
carousel1.addEventListener("touchend",dragStop);


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("Active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("Active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
   sidemenu.style.right = "0";
}
function closemenu(){
   sidemenu.style.right = "-200px";
}