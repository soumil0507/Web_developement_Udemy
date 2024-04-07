// Change style in jQuery

// add class to element in html
$("h1").addClass("big-title border-50")

// remove class from element 
// $("h1").removeClass("big-title border-50")


// Change text in JQuery
$("h1").text("Hello Again")

$("button").html("<em>Hey</em>")


// Change attributes in jQuery

$("a").addClass("bolder-search")
$("a").attr("href","https://www.yahoo.com/search")


// Add event listener using jQuery
$("button").click(function() {

    // First change the color to purple
    $("h1").css("color", "purple")
    
    // Then revert the color back after 200ms
    setTimeout(function() {
    
        $("h1").css("color", "red")
    
    }, 200)
}) 

// Whatever key is pressed show that in h1
$(document).keypress(function(event){
    $("h1").html(event.key)
});

// Another way to add event listener
$("h1").on("mouseenter", function(){
    $("h1").css("color", "purple")
})

$("h1").on("mouseout", function(){
    $("h1").css("color", "red")
})

