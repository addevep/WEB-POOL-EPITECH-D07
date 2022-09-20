$(document).ready(function() {

    let select = $("button").first();
    let paragraph = $("p");

    select.click(function() {
        paragraph.hide();
    })

});