$(document).ready(function() {

    let btn = $("button");
    let inp = $("#listItem");
    const main = $('main');

    btn.click({param : inp}, addDiv);

    function addDiv(e) {
        let content = e.data.param.val();
        main.append('<div>' + content + '</div>');
    }

});