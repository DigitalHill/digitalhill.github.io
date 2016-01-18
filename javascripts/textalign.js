 $(document).ready(function() { //this programme will start once the mainpage has been loaded completely
              $('#arethusapen, #verbpen, #nounpen').css('cursor', 'pointer'); //the three ids change the appearance of the cursor by changing the stylesheets value of it to 'pointer'
	$('#arethusapen').click(function() { //by clicking on the pencil the marked up words shall be turned into a color according to their part of speech, clicking on it again will remove the class
		$('.marknoun').toggleClass('noun'), 
		$('.markverb').toggleClass('verb'),
		$('.markadj').toggleClass('adjective'),
		$('.markadv').toggleClass('adverb'),
		$('.markadp').toggleClass('adposition'),
		$('.markconj').toggleClass('conjunction'),
		$('.markpron').toggleClass('pronoun'),
		$('.markirr').toggleClass('irregular'),
		$('.markart').toggleClass('article'),
		$('.marknum').toggleClass('number');
		$('.markitr').toggleClass('interjunction'); 
		console.log('Toggled all classes.'); //this line s for debugging reasons only and writes the text to the console!
	});
	$('#verbpen').click(function() { //only verbs are toggled
	    $('.markverb').toggleClass('verb');
	    console.log('Toggled only the verbs.');
	});
	$('#nounpen').click(function() { // only nouns are toggled
	    $('.marknoun').toggleClass('noun');
	    console.log('Toggled only the nouns');
	});
});