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
	cases.load("ajax/case.txt #first"); 
  $('html, body').animate({scrollTop: details.offset().top}, .5); 
});

$('#two').click(function(){
	details.css('display','table');
	cases.load("ajax/case.txt #second"); 
	$('html, body').animate({scrollTop: details.offset().top}, .5);  
});

$('#three').click(function(){
	details.css('display','table');
	cases.load("ajax/case.txt #third");
	$('html, body').animate({scrollTop: details.offset().top}, .5);   
});

$('#four').click(function(){
	details.css('display','table');
	cases.load("ajax/case.txt #fourth"); 
	$('html, body').animate({scrollTop: details.offset().top}, .5);  
});

$('#five').click(function(){	
	details.css('display','table');
	cases.load("ajax/case.txt #fifth");
	$('html, body').animate({scrollTop: details.offset().top}, .5); 
});

$('#six').click(function(){
	details.css('display','table');
	cases.load("ajax/case.txt #sixth");
	$('html, body').animate({scrollTop: details.offset().top}, .5);   
});



/*$('#one').click(function(){
	details.slideToggle('fast');
	$('html, body').animate({scrollTop: $("#work").offset().top}, .5);
	$('#first').show();
  $('#second, #third, #fourth, #fifth, #sixth').hide();    
});

$('#two').click(function(){
	details.slideToggle('fast');
	$('html, body').animate({scrollTop: $("#work").offset().top}, .5);
	$('#second').show();
  $('#first, #third, #fourth, #fifth, #sixth').hide();    
});

$('#three').click(function(){
	details.slideToggle('fast');
	$('html, body').animate({scrollTop: $("#work").offset().top}, .5);
	$('#third').show();
  $('#first, #second, #fourth, #fifth, #sixth').hide();    
});

$('#four').click(function(){
	details.slideToggle('fast');
	$('html, body').animate({scrollTop: $("#work").offset().top}, .5);
	$('#fourth').show();
  $('#first, #second, #third, #fifth, #sixth').hide();    
});

$('#five').click(function(){
	details.slideToggle('fast');
	$('html, body').animate({scrollTop: $("#work").offset().top}, .5);
	$('#fifth').show();
  $('#first, #second, #third, #fourth, #sixth').hide();    
});

$('#six').click(function(){
	details.css('display','table');
	$('html, body').animate({scrollTop: $("#work").offset().top}, .5);
	$('#sixth').show();
  $('#first, #second, #third, #fourth, #fifth').hide();    
});*/

//Closes overlay
$('#details .clse').click(function(){
	//details.slideToggle('fast');
	details.css('display','none');
	$('#first, #second, #third, #fourth, #fifth, #sixth').hide();
});

});