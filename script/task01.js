    const selec = document.getElementsByTagName('div');
    const  btn = selec[2];
    var click = 0;

    btn.onclick = function() {
        btn.innerHTML = "Click me: " + ++click;
      };
