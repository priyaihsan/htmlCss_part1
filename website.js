// Fungsi AJAX Jquery untuk meload isi file

$(function () {
	$("#about1").load("text/about1.txt");
	$("#about2").load("text/about2.txt");
});

var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
	interval: 1000,
	wrap: false,
});
