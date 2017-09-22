document.addEventListener("DOMContentLoaded", function(){
    var menu = document.getElementById("menu"),
        menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function(){

        if(menu.className == "nav__ul"){
            menu.classList.add('nav__ul_responsive');
            this.firstChild.alt = "hide menu";
        }
        else{
            menu.classList.add('nav__ul_hide');
            setTimeout(function(){
                menu.classList.remove('nav__ul_responsive');
                menu.classList.remove('nav__ul_hide');
            }, 600);
            this.firstChild.alt = "show menu";
        }
    })

})
