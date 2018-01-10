;(function($) {
 "use strict";
 var menuToggle = document.querySelector('.ba-menu-toggle'),
         overlay = document.querySelector('.ba-overlay'),
         body = document.body;


     menuToggle.addEventListener('click', function(){
         body.classList.toggle('ba-menu-open');
        	console.log('hello');
     });

     overlay.addEventListener('click', function(){
         body.classList.toggle('ba-menu-open');
     });

     var worksGrid = $('.ba-works-grid');

     window.onload = function(){
     worksGrid.isotope({
       // options
       itemSelector: '.ba-grid-item',
       position: true,
       masonry:{
       		columnWidth: '.grid-sizer',
       }
       //layoutMode: 'fitRows'
     });

     // filter items on button click
     $('.ba-menu-4').on( 'click', '[data-filter]', function(e) {
     	e.preventDefault();
       var filterValue = $(this).attr('data-filter');
       worksGrid.isotope({ filter: filterValue });
     });
     }
})(jQuery);

