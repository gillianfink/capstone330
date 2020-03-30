$(document) .ready(function() {
  
  
  var g= true;
    $(".navbutton").hover(function(){
        
        if (g==true) {
            $(".navbutton").css("width", "85px");
            g=false;
        }
        else {
            $(".navbutton").css("width", "75px");
            g=true;
        }
    });  
  
  
   var gg= true;
    $(".navbutton").click(function(){
        if (gg==true) {
            $( ".nav" ).css("position", "fixed");
            $( ".nav" ).css("display", "inherit");
            
            gg=false;
        }
        else {

            $( ".nav" ).css("display", "none");

            gg=true;
            
        }   
    });
  
  
    var o= true;
    $("#termA").hover(function(){
        if (o==true) {
            
            $("#termA").html('Rockefell<a class="underline">ah</a></br>Cent<a class="underline">ah</a>');
            $("#termA").css("color", "#DE6E64");
            o=false;
        }
        else {
            $("#termA").html('Rockefeller</br>Center');
            $("#termA").css("color", "#1D7FCA");
            o=true;
        }    
    });
  
  
  
     var termclick= true;
    $("#termA").click(function(){
        if (termclick==true) {
            
            $("#termA").css("top", "18%");
            $(this).unbind("mouseenter mouseleave");
            termclick=false;
        }
        else {
            $("#termA").css("top", "45%");
            
            termclick=true;
        }    
    });
  

var audio = $(".term")[0];
$(".term").mouseenter(function() {
  audio.play();
});
  
  
  
       var termBclick= true;
    $(".term").click(function(){
        if (termBclick==true) {
          
          $( "#termB" ).animate({
              opacity: "1"
              }, 200);
            
            $("#termB").css("top", "51%");
            $("#termB").css("visibility", "visible");

            termBclick=false;
        }
        else {
          
          $( "#termB" ).animate({
              opacity: "0"
              }, 200);
          
            $("#termB").css("top", "28%");
            $("#termB").css("visibility", "hidden");
            
            termBclick=true;
        }    
    });
  
         var di= true;
    $(".term").click(function(){
        if (di==true) {
          
          $( ".dialect" ).animate({
              opacity: "1"
              }, 800);

          $( ".leftcolumn2" ).animate({
              opacity: "1"
              }, 800);

          $( "#lingfeature" ).animate({
              opacity: "1"
              }, 800);

      
            di=false;
        }
        else {
          
          $( ".dialect" ).animate({
              opacity: "0"
              }, 800);

          $( ".leftcolumn2" ).animate({
              opacity: "0"
              }, 800);

          $( "#lingfeature" ).animate({
              opacity: "0"
              }, 800);
          
           
            di=true;
        }    
    });
  

  
  

  jQuery(function( $ ) {
    var keymap = {};

    // LEFT
    keymap[ 37 ] = "#prev";
    // RIGHT
    keymap[ 39 ] = "#next";

    $( document ).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
});


       var photo= true;
    $(".termcontainer").hover(function(){
        if (photo==true) {
          
          $( ".termcontainer" ).animate({
              opacity: "1"
              }, 500);

          $( ".overlay" ).animate({
              opacity: "1"
              }, 100);

          $( ".leftcolumn1" ).animate({
              opacity: "0"
              }, 500);

          
            photo=false;
        }
        else {
          
          $( "#termB" ).animate({
              opacity: "0"
              }, 200);
          
            
            photo=true;
        }    
    });
  
  
  
  
  
}); 