//Scroll offset 
const navigationHeight = document.querySelector("#header-container").offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 4 + "px");

//Time check
function isOpen(time, start, finish){
    if(time>=start && time<finish){
        document.getElementById("is-open").innerHTML = "Currently: <u>OPEN</u>";
    }
    else{
        document.getElementById("is-open").innerHTML = "Currently: <u>CLOSED</u>";
    }
}

//Day of the week check
function getDay(){
    const d = new Date();
    let day = d.getDay();
    let time = d.getHours();

    switch (day) {
    case 1:
        document.getElementById("mon").style.opacity = "1";
        isOpen(time, 8, 20);
        break;
    case 2:
        document.getElementById("tue").style.opacity = "1";
        isOpen(time, 8, 20);
        break;
    case 3:
        document.getElementById("wed").style.opacity = "1";
        isOpen(time, 8, 20);
        break;
    case 4:
        document.getElementById("thu").style.opacity = "1";
        isOpen(time, 8, 20);
        break;
    case 5:
        document.getElementById("fri").style.opacity = "1";
        isOpen(time, 8, 20);
        break;
    case 6:
        document.getElementById("sat").style.opacity = "1";
        isOpen(time, 9, 19);
        break;
    case 0:
        document.getElementById("sun").style.opacity = "1";
        isOpen(time, 9, 20);
        break;

    }
}
getDay();


//Expanding dropdowns
function expand(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }
}
expand();

//Corousel sliding
function corouselJS(){
        const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");

        nextButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
        });

        prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
        });
}
corouselJS();


