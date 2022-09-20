const dragItem = document.getElementsByTagName('canvas')[0];
dragItem.style.cursor = 'move';
dragItem.setAttribute('draggable', 'true');

const container = document.getElementsByTagName('div')[2];

var pos = document.getElementsByTagName('div')[3];

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;


container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;
  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd() {
  initialX = currentX;
  initialY = currentY;
  active = false;
}

function drag(e) {
  if (active) {

    var parentPos = container.getBoundingClientRect();
    var childPos = dragItem.getBoundingClientRect();
    relativePos = {};
    relativePos.top = childPos.top - parentPos.top,
    relativePos.right = childPos.right - parentPos.right,
    relativePos.bottom = childPos.bottom - parentPos.bottom,
    relativePos.left = childPos.left - parentPos.left;

    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    xOffset = currentX;
    yOffset = currentY;

    if (relativePos.top < 0 || relativePos.right > 0 || relativePos.bottom > 0 || relativePos.left < 0) {
      setTranslate(0, 0, dragItem);
    } else {
      setTranslate(currentX, currentY, dragItem);
    }

  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  pos.innerHTML = "New coordinates => {x:" + xPos + ", y:" + yPos + "}";
}





