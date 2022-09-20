const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext("2d");
const btns = document.getElementsByTagName('button');
const bt1 = btns[0];
const bt2 = btns[1];
const bt3 = btns[2];


ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

var audio = new Audio("https://file-examples.com/storage/fe783a5cbb6323602a28c66/2017/11/file_example_MP3_700KB.mp3");
canvas.onclick = function() {
  audio.play();
};

bt1.onclick = function(){
    audio.pause();
}
bt2.onclick = function(){
    audio.pause();
    audio.currentTime = 0;
}
bt3.onclick = function(){
    if (audio.muted != true) {
        audio.muted = true;
    } else {
        audio.muted = false;
    }
}


