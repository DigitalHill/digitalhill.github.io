console.log('This would be the main JS file.');

$(document).ready(function() {
	$('#colorpen').css('cursor', 'pointer');
	$('#colorpen').click(function() { //by clicking on the pencil the marked up words shall be turned into red or green
		$('.markred').toggleClass('red'), $('.markgreen').toggleClass('green'); //clicking it again will remove the class
	});
});

$(document).ready(function() {
	var $contchap3 = $('#contchap3');
	$contchap3.hide();
	$('a#chap3').click(function() {
		$contchap3.fadeToggle('slow');
		return false;
	});
	var $rosba = $('#rosba');
	$rosba.hide();
	var $rosaa = $('#rosaa');
	$rosaa.hide();
	$('a.rosmore').click(function() {
		$rosba.fadeToggle('slow');
		return false;
	});
	$('a.rosamore').click(function() {
		$rosaa.fadeToggle('slow');
		return false;
	});
	var $chap314 =$('#chap314');
	$chap314.hide();
	$('a.chap3ros').click(function() {
		$chap314.fadeToggle('slow');
		return false;
	});

})