// ------------------------------ comportement navbar---------------------------------------------------
let lastScrollTop = 0;
navbar = document.getElementById('navbar')

window.addEventListener('scroll', function (){
const scrollTop = window.pageTOffset ||
this.document.documentElement.scrollTop;

if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px";
}else{
    navbar.style.top = "0";
}
lastScrollTop = scrollTop

});

//------------------------------fonction pour afficher mon texte lettre par lettre----------------------
const myText = document.getElementById("myText");
const txt = myText.dataset.label;
let i = 0;
function showLetters() {
    let timeOut;
    if (i < txt.length) {
        myText.innerHTML += `<span>${txt[i]}</span>`;
        timeOut = setTimeout(showLetters,40)
        i++
    }
    else {
        clearTimeout(timeOut);
    }
}
showLetters();

//--------------------------------------compteur---------------------------------

let compteur = 0;

$(window).scroll(function(){

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function(){
            let $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
        }).animate({
            countNum : countTo
            },
            {
                duration : 5000,
                easing : 'swing',
                step : function(){
                    $this.text(Math.floor(this.countNum));
                },
                complete : function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
})


// ----------------------------------------------aos animation de parcours et section 2---------------------------------------
AOS.init();