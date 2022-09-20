const selec = document.getElementsByTagName('div');
const btn = selec[2];
var tab = [];

window.addEventListener('keypress', Char);

    function Char(e) {
        tab.push(e.key);
        if (tab.length <= 42) {
            btn.textContent = tab.join('');
        } else {
            tab = tab.slice(1);
            btn.textContent = tab.join('');
        }
    }

