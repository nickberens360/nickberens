//Make section heights = to viewport height
$( document ).ready(function() {
	
var size =  $(window).height(); 
$('.details').css('height', size);

$(window).resize(function() {
 var size =  $(window).height(); 
 $('.details').css('height', size);	
});



//Menu toggle
$('.menu-toggle').click(function(){
	$('.menu').slideToggle('fast');
});

$('.menu li a').click(function(){
	$('.menu').slideToggle('fast');
});

//Smooth scroll
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});



//Handles work example details overlay



var details = $('#details');
var cases = $('#cases');


$('.mylinks').click(function(e){
    e.preventDefault();	
		details.css('display','table');	
		cases.load($(this).prop("href")); 
		$('html, body').animate({scrollTop: details.offset().top}, .5); 
});
//Closes overlay
$('#details .clse').click(function(){
	details.slideToggle('fast');
	details.css('display','none');
	$('#first, #second, #third, #fourth, #fifth, #sixth').hide();
});


/*$(window).scroll(function() {
  details.css('display','none');

	
});
*/



});