//event pada saat di klik
$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');

	

	//tangkap element
	var elemenTujuan=$(tujuan);


	//pindah eleman
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50 },1250 , 'easeInOutExpo');


	e.preventDefault();
});
