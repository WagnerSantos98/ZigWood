(function(){
    "use strict";

    const select = (el, all = false) =>{
        el.trim()
        if(all){
            return[...document.querySelectorAll(el)]
        }else{
            return document.querySelector(el)
        }
    }

    //Function Listener 
    const on = (type, el, listener, all = false)=>{
        let selectEl = select(el, all)
        if(selectEl){
            if(all){
                selectEl.forEach(e => e.addEventListener(type,listener)) 
            }else{
                selectEl.addEventListener(type, listener)
            }
        }
    }

    //Mobile nav toggle
    on('click', '.mobile-nav-toggle', function(e){
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('mdi-menu')
        this.classList.toggle('mdi-close')
    })

    //Mobile nav dropdwns activate
    on('click', '.navbar .dropdown > a', function(e){
        if(select('#navbar').classList.contains('navbar-mobile')){
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

})()