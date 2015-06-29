  // wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {

var reset = document.querySelector(".resetbtn")
reset.addEventListener("click", function(event) {
	event.preventDefault();
	window.location.reload();
});

var boxes = document.querySelectorAll(".box");
var maxMoves = "9"
var xMoves = document.querySelectorAll(".xmove");
var oMoves = document.querySelectorAll(".omove");


for (i = 0; i < boxes.length; i++) {
  	boxes[i].addEventListener("click", function show_image(event) {
  		event.preventDefault();
        var img = document.createElement("img");
        if ((xMoves.length) == "") {
        img.setAttribute("class", "xmove");
	    img.src = "http://sweetclipart.com/multisite/sweetclipart/files/x_mark_red.png"
	   	img.width = 160;
	   	img.height = 145;
	   	this.appendChild(img);
	    } else {
	    img.setAttribute("class", "omove")
	    img.src = "http://i.c-b.co/is/image/LandOfNod/Letter_Giant_Enough_O_232343_LL/$web_zoom$&wid=550&hei=550&/1308310656/not-giant-enough-letter-o.jpg"
	    img.width = 155;
	    img.height = 135;
	    this.appendChild(img);
	    }
})};


// end
});


