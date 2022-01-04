document.addEventListener('DOMContentLoaded', function() {
    //code for header__burger
    let burger = document.querySelector('.header__burger');
    let menu = document.querySelector('.header__nav');

    burger.addEventListener('click', function() {
        burger.classList.toggle('open-menu');
        menu.classList.toggle('open-menu');
        document.querySelector('main').classList.toggle('open-menu');
        })

    //code for accordion 
    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true,
            active: false,
        })
      } );
    
    let items = document.querySelectorAll('.questions__item');

    items.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('is-active');
        }) 
    })  
})