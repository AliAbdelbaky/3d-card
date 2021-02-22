//- VARIABLES
const cardContainer = document.querySelector(".cardContainer"),
    card = document.querySelector(".cardContainer .card"),
    pruchasebtns = document.querySelectorAll(".cardContainer .card .info .sizes button"),
    //- Items
    cardTitle = document.querySelector(".cardContainer .card .info .title"),
    cardSneaker = document.querySelector(".cardContainer .card .sneaker img"),
    cardPurchase = document.querySelector(".cardContainer .card .info .purchase button"),
    cardDiscription = document.querySelector(".cardContainer .card .info .about"),
    cardsizes = document.querySelector(".cardContainer .card .info .sizes");

//- Moving Animation Event
cardContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15,
        yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//- Animate in
cardContainer.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //- Items
    cardTitle.style.transform = "translateZ(70px)";
    cardSneaker.style.transform = "translateZ(100px) rotateZ(-45deg)";
    cardPurchase.style.transform = "translateZ(40px)";
    cardDiscription.style.transform = "translateZ(60px)";
    cardsizes.style.transform = "translateZ(50px)";

});
//- Animate Out
cardContainer.addEventListener("mouseleave", (e) => {
    card.style.transition = " all 0.2s ease-in-out";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //- Items
    cardTitle.style.transform = "translateZ(0px)";
    cardSneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    cardPurchase.style.transform = "translateZ(0px)";
    cardDiscription.style.transform = "translateZ(0px)";
    cardsizes.style.transform = "translateZ(0px)";
});
//- Purchase Active Class
//- Add Active Class
pruchasebtns.forEach(pruchasebtn => {
    pruchasebtn.addEventListener('click', function() {
        addActive();
        pruchasebtn.classList.add("active");
    });
});
//- Remove Active Class
function addActive() {
    pruchasebtns.forEach(pruchasebtn => {
        pruchasebtn.classList.remove("active");
    });
};