let menu=document.getElementById("menu")

window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop){
        menu.classList.add("menu2")
        menu.classList.remove("menu")

    }
    else{
        menu.classList.add("menu")
        menu.classList.remove("menu2")

    }
})