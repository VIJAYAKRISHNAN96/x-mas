jQuery(document).ready(function($){
    $('#menu').click(function(){
     $('.nav').removeClass('active');
    });
    $('#close').click(function(){
     $('.nav').addClass('active');
    });
    $('#icon').click(function(){
     $('body').toggleClass('active')
    });
    $('#mobile-icon').click(function(){
     $('body').toggleClass('active')
    });
 });