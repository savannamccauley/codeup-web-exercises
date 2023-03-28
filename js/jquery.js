$('h1').click(function(){
    $(this).css("background-color", "pink")
})
$('p').dblclick(function(){
    $(this).css("font-size","18px");
})

$('li').hover(
    function() {
        $(this).css("color", "pink");
    },
    function(){
        $(this).css("color", "black");

})