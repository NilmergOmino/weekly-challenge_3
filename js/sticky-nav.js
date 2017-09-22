document.addEventListener("DOMContentLoaded", function(){
    var nav = document.getElementById('nav');
    window.addEventListener('scroll', function(){
        var currentPosition = pageYOffset;
        if(currentPosition > 100){
            nav.classList.add('nav_sticky');
        }
        else{
            nav.classList.remove('nav_sticky');
        }
    })
})
