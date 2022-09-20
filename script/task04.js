const selec = document.getElementsByTagName('button');
const bt1 = selec[0]
const bt2 = selec[1]

var bd = window.getComputedStyle(document.body);
var elt = document.body.style;

var select = document.getElementsByTagName('select')[0];

bt1.onclick = function(){
    var fz = parseInt(bd.getPropertyValue("font-size"));
    fz++;
    fz = fz + 'px';
    elt.fontSize = fz;
}
bt2.onclick = function(){
    var fz = parseInt(bd.getPropertyValue("font-size"));
    fz--;
    fz = fz + 'px';
    elt.fontSize = fz;
}

select.addEventListener('change', function(e) {
    var update = e.target.value;
    elt.backgroundColor = update;
  });



    



