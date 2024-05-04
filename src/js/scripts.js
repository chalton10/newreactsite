import $ from 'jquery';


window.addEventListener('load', function() {

    // Start Add mobile Class to Body
        if ($(window).width() <= 768){  
            $('body').addClass("xs");
        }
        else {
            $('body').removeClass("xs");
        }
    // End Add mobile Class to Body

    //Start Menu Toggle
        $('.mobile-menu > a').on('click', function() {
            $('.mobile-menu').toggleClass('active');
            $('.parent-menu > .submenu').slideUp();
            $('.parent-menu').removeClass('active');
            var $nav = $('.menu > nav > .mainmenu');
        
            // Toggle slideUp and slideDown effects for the navigation menu
            if ($nav.is(':visible')) {
                $nav.slideUp('250');
            } else {
                $nav.slideDown('250');
            }
        });

        $('.mainmenu a').on('click', function() {
            $('.mobile-menu').removeClass('active');
            $('.parent-menu > .submenu').slideUp();
            $('.parent-menu').removeClass('active');
            var $nav = $('.menu > nav > .mainmenu');
        
            if ($nav.is(':visible')) {
                $nav.slideUp(250);
            }
        });
    //End Menu Toggle


    //Start Mobile Menu
        $('nav > .mainmenu > li.parent').addClass('parent-menu');

        // Add click event listener to SVG icons within parent-menu items
        $('nav > .mainmenu > .parent-menu > svg').on('click', function() {
            var $parentMenu = $(this).parent('.parent-menu');

            // Remove 'active' class from all other parent-menu items
            $('.parent-menu').not($parentMenu).removeClass('active');

            // Toggle 'active' class on the clicked parent-menu item
            $parentMenu.toggleClass('active');

            // Toggle display for sibling submenu
            var $submenu = $parentMenu.children('.submenu');
            if ($submenu.length) {
                // Hide all other submenus
                $('.parent-menu > .submenu').not($submenu).slideUp('250');

                $submenu.slideToggle('250');
            }
        });
    //End Mobile Menu
});