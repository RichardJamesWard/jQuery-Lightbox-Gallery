//Create an overlay with the large image
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//Add an image to the overlay
$overlay.append($image);

//Add Overlay to HTML
$("body").append($overlay)

//Capture the click event on a link to the image
$("#imageGallery a").click(function(event) {
event.preventDefault();    
var imglocation = $(this).attr("href"); 
    
//Update overlay with the image linked in the link
$image.attr("src", imglocation); 
    
//Show image    
 $overlay.show();                         
});

//when overlay is clicked
$overlay.click(function(){
//Hide the overlay
$overlay.hide();
});