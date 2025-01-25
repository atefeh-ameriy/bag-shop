
var myElement = document.getElementById("myElement");
myElement.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevent the default right-click menu behavior
});

// Disable F12 key and Ctrl+Shift+I combo
document.addEventListener('keydown', event => {
    if (event.key === 123 || (event.ctrlKey && event.shiftKey && event.key === 73)) {
      event.preventDefault();
    }
  });
  function testKeyCode(e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    var e = e || window.event;
               if (e.ctrlKey &&
                      (e.keyCode === 67 ||
                       e.keyCode === 86 ||
                       e.keyCode === 85 ||
                       e.keyCode === 117)) {
       return false;
       } else {
        return true;
       }
    }
    document.onkeydown = testKeyCode;
  