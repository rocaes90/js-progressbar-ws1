function loading() {
    var elem = document.getElementById("myBar"); 
    var elemIndicator = document.getElementById("indicator");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 56) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elemIndicator.innerHTML = width * 1 + '%';
            elemIndicator.style.left = ((width/100) * 80) * 1 + '%';
        }
    }
}