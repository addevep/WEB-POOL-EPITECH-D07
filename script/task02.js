const selec = document.getElementsByTagName('div');
const btn = selec[2];

btn.onclick = function() {

   var name = prompt("What's your name ?")
   if (name == null || name == "") {
    btn.onclick();
   } else {
    if(confirm("Are you sure that " + name + " is your name ?")) {
        alert("Hello " + name + " !")
        btn.innerHTML = name;
    } else {
        btn.onclick();
    }
}
}