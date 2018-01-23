

$("#link_about").on("click", function(e){
    $('#contentWrapper').animate({
        scrollRight: $("#contentWrapper").offset({left:-605})
    });  
    e.preventDefault();
});

$("#link_skills").on("click", function(e){
    $('#contentWrapper').animate({
        scrollRight: $("#contentWrapper").offset({left:-1410})
    });  
    e.preventDefault();
});