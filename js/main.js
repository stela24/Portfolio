$(document).ready(function(){
    $('#fullpage').fullpage({
        menu: '.menu',
        css3: true,
        scrollingSpeed: 1000,
        navigation: true,
        responsiveWidth: 600,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About me', 'Skills and Experience', 'Work'],

        afterLoad: function(anchorLink, index){
        var loadedSection = $(this);

            if(index == 3){
                $('.progress-bar').addClass('progress-anim');
            } 

            $('#nav-icon2').click(function(){
                $(this).toggleClass('open');
                if($('#nav-icon2').hasClass('open')){
                    $('.menu').slideDown('fast');
                } else {    
                    $('.menu').slideUp('fast');
                }
            });

        }
    });
});

