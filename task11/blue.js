$(document).ready(function() {

    let hov = $('main p');

    hov.mouseenter(function() {
        $(this).css('color', 'blue');
    }).mouseleave(function() {
        $(this).css('color', 'black');
    })

    $(document).click(function(){
        hov.toggle('highlight');
    })
});