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
/*var first = $('#first');
var second = $('#second');
var third = $('#third');
var fourth = $('#fourth');
var fifth = $('#fifth');
var sixth = $('#sixth');*/

$('#one').click(function(){ 
	 
	details.css('display','table');
	/*details.removeClass('no-mas');
	details.addClass('mas');*/
	cases.load("ajax/case.txt #first"); 
	$('html, body').animate({scrollTop: details.offset().top}, .5);
});

$('#two').click(function(){
	$('html, body').animate({scrollTop: details.offset().top}, .5); 
	details.css('display','table');
	cases.load("ajax/case.txt #second"); 
});

$('#three').click(function(){
	$('html, body').animate({scrollTop: details.offset().top}, .5); 
	details.css('display','table');
	cases.load("ajax/case.txt #third"); 
});

$('#four').click(function(){
	$('html, body').animate({scrollTop: details.offset().top}, .5);
	details.css('display','table');
	cases.load("ajax/case.txt #fourth"); 
});

$('#five').click(function(){	
	$('html, body').animate({scrollTop: details.offset().top}, .5);
	details.css('display','table');
	cases.load("ajax/case.txt #fifth"); 
});

$('#six').click(function(){
	$('html, body').animate({scrollTop: details.offset().top}, .5); 
	details.css('display','table');
	cases.load("ajax/case.txt #sixth");
});




//Closes overlay
$('#details .clse').click(function(){
	details.slideToggle('fast');
	details.css('display','none');
	/*details.removeClass('mas');
	details.addClass('no-mas');*/
	$('#first, #second, #third, #fourth, #fifth, #sixth').hide();
});


/*if ($('#details').hasClass('mas')) {
	$(window).scroll(function() {
		details.removeClass('mas');
  	details.addClass('no-mas');
	});
}*/

/*$(window).scroll(function() {
  details.css('display','none');
});*/



});