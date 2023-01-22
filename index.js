const typed = new Typed('#mytext',{
    strings : ['Website Development','Graphic Designing','Content Writing','Video Creation','Digital Marketing','Sound Production'],
    typeSpeed: 50,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 500,
    loop: true,
})


AOS.init();

//for counter
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});