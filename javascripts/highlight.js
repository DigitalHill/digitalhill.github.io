$(document).ready(function() {  //this programme starts once the mainpage is loaded completely
	$('span').hover(function() {   //when the user hovers his cursor over a word that is tagged within a span, the following happens
		var hl = $(this).prop('title');   //the title attribute is cached in this variable
		var $elementTable = $(this).parents('table');     //the parent elements of this span are beeing searched for the name "table" and then cached in this variable
		if (hl != 0 ) {       //when the span has a title attribute, both its value and the id of the table are given to the console; this is for test reasons only
			console.log(hl);
			console.log($elementTable.prop('id'));
		}; // according to the title, all spans with the same title-attribute are found and the class highlight is toggled on them
		if (hl == "1-1") {
			$elementTable.find('span[title=1-1]').toggleClass('highlight');
		}
		else if (hl == "1-2") {
			$elementTable.find('span[title=1-2]').toggleClass('highlight');
		}
		else if (hl == "1-3") {
			$elementTable.find('span[title=1-3]').toggleClass('highlight');
		}
		else if (hl == "1-4") {
			$elementTable.find('span[title=1-4]').toggleClass('highlight');
		}
		else if (hl == "1-5") {
			$elementTable.find('span[title=1-5]').toggleClass('highlight');
		}
		else if (hl == "1-6") {
			$elementTable.find('span[title=1-6]').toggleClass('highlight');
		}
		else if (hl == "1-7") {
			$elementTable.find('span[title=1-7]').toggleClass('highlight');
		}
		else if (hl == "1-8") {
			$elementTable.find('span[title=1-8]').toggleClass('highlight');
		}
		else if (hl == "1-9") {
			$elementTable.find('span[title=1-9]').toggleClass('highlight');
		}
		else if (hl == "1-10") {
			$elementTable.find('span[title=1-10]').toggleClass('highlight');
		}
		else if (hl == "1-11") {
			$elementTable.find('span[title=1-11]').toggleClass('highlight');
		}
		else if (hl == "1-12") {
			$elementTable.find('span[title=1-12]').toggleClass('highlight');
		}
		else if (hl == "1-13") {
			$elementTable.find('span[title=1-13]').toggleClass('highlight');
		}
		else if (hl == "1-14") {
			$elementTable.find('span[title=1-14]').toggleClass('highlight');
		}
		else if (hl == "1-15") {
			$elementTable.find('span[title=1-15]').toggleClass('highlight');
		}
		else if (hl == "1-16") {
			$elementTable.find('span[title=1-16]').toggleClass('highlight');
		}
		else if (hl == "1-17") {
			$elementTable.find('span[title=1-17]').toggleClass('highlight');
		}
		else if (hl == "1-18") {
			$elementTable.find('span[title=1-18]').toggleClass('highlight');
		}
		else if (hl == "1-19") {
			$elementTable.find('span[title=1-19]').toggleClass('highlight');
		}
		else if (hl == "1-20") {
			$elementTable.find('span[title=1-20]').toggleClass('highlight');
		}
		else if (hl == "1-21") {
			$elementTable.find('span[title=1-21]').toggleClass('highlight');
		}
		else if (hl == "1-22") {
			$elementTable.find('span[title=1-22]').toggleClass('highlight');
		}
		else if (hl == "1-23") {
			$elementTable.find('span[title=1-23]').toggleClass('highlight');
		}
		else if (hl == "1-24") {
			$elementTable.find('span[title=1-24]').toggleClass('highlight');
		}
		else if (hl == "1-25") {
			$elementTable.find('span[title=1-25]').toggleClass('highlight');
		}
		else if (hl == "1-26") {
			$elementTable.find('span[title=1-26]').toggleClass('highlight');
		}
		else if (hl == "1-27") {
			$elementTable.find('span[title=1-27]').toggleClass('highlight');
		}
		else if (hl == "1-28") {
			$elementTable.find('span[title=1-28]').toggleClass('highlight');
		}
		else if (hl == "1-29") {
			$elementTable.find('span[title=1-29]').toggleClass('highlight');
		}
		else if (hl == "1-30") {
			$elementTable.find('span[title=1-30]').toggleClass('highlight');
		}
		else if (hl == "1-31") {
			$elementTable.find('span[title=1-31]').toggleClass('highlight');
		}
		else if (hl == "1-32") {
			$elementTable.find('span[title=1-32]').toggleClass('highlight');
		}
		else if (hl == "1-33") {
			$elementTable.find('span[title=1-33]').toggleClass('highlight');
		}
		else if (hl == "1-34") {
			$elementTable.find('span[title=1-34]').toggleClass('highlight');
		}
		else if (hl == "1-35") {
			$elementTable.find('span[title=1-35]').toggleClass('highlight');
		}
		else if (hl == "1-36") {
			$elementTable.find('span[title=1-36]').toggleClass('highlight');
		}
		else if (hl == "1-37") {
			$elementTable.find('span[title=1-37]').toggleClass('highlight');
		}
		else if (hl == "1-38") {
			$elementTable.find('span[title=1-38]').toggleClass('highlight');
		}
		else if (hl == "1-39") {
			$elementTable.find('span[title=1-39]').toggleClass('highlight');
		}
		else if (hl == "1-40") {
			$elementTable.find('span[title=1-40]').toggleClass('highlight');
		}
		else if (hl == "1-41") {
			$elementTable.find('span[title=1-41]').toggleClass('highlight');
		}
		else if (hl == "1-42") {
			$elementTable.find('span[title=1-42]').toggleClass('highlight');
		}
		else if (hl == "1-43") {
			$elementTable.find('span[title=1-43]').toggleClass('highlight');
		}
		else if (hl == "1-44") {
			$elementTable.find('span[title=1-44]').toggleClass('highlight');
		}
		else if (hl == "1-45") {
			$elementTable.find('span[title=1-45]').toggleClass('highlight');
		}
		else if (hl == "1-46") {
			$elementTable.find('span[title=1-46]').toggleClass('highlight');
		}
		else if (hl == "1-47") {
			$elementTable.find('span[title=1-47]').toggleClass('highlight');
		}
		else if (hl == "1-48") {
			$elementTable.find('span[title=1-48]').toggleClass('highlight');
		}
		else if (hl == "1-49") {
			$elementTable.find('span[title=1-49]').toggleClass('highlight');
		}
		else if (hl == "1-50") {
			$elementTable.find('span[title=1-50]').toggleClass('highlight');
		}
		else if (hl == "1-51") {
			$elementTable.find('span[title=1-51]').toggleClass('highlight');
		}
		else if (hl == "1-52") {
			$elementTable.find('span[title=1-52]').toggleClass('highlight');
		}
		else if (hl == "1-53") {
			$elementTable.find('span[title=1-53]').toggleClass('highlight');
		}
		else if (hl == "1-54") {
			$elementTable.find('span[title=1-54]').toggleClass('highlight');
		}
		else if (hl == "2-1") {
			$elementTable.find('span[title=2-1]').toggleClass('highlight');
		}
		else if (hl == "2-2") {
			$elementTable.find('span[title=2-2]').toggleClass('highlight');
		}
		else if (hl == "2-3") {
			$elementTable.find('span[title=2-3]').toggleClass('highlight');
		}
		else if (hl == "2-4") {
			$elementTable.find('span[title=2-4]').toggleClass('highlight');
		}
		else if (hl == "2-5") {
			$elementTable.find('span[title=2-5]').toggleClass('highlight');
		}
		else if (hl == "2-6") {
			$elementTable.find('span[title=2-6]').toggleClass('highlight');
		}
		else if (hl == "2-7") {
			$elementTable.find('span[title=2-7]').toggleClass('highlight');
		}
		else if (hl == "2-8") {
			$elementTable.find('span[title=2-8]').toggleClass('highlight');
		}
		else if (hl == "2-9") {
			$elementTable.find('span[title=2-9]').toggleClass('highlight');
		}
		else if (hl == "2-10") {
			$elementTable.find('span[title=2-10]').toggleClass('highlight');
		}
		else if (hl == "2-11") {
			$elementTable.find('span[title=2-11]').toggleClass('highlight');
		}
		else if (hl == "2-12") {
			$elementTable.find('span[title=2-12]').toggleClass('highlight');
		}
		else if (hl == "2-13") {
			$elementTable.find('span[title=2-13]').toggleClass('highlight');
		}
		else if (hl == "2-14") {
			$elementTable.find('span[title=2-14]').toggleClass('highlight');
		}
		else if (hl == "2-15") {
			$elementTable.find('span[title=2-15]').toggleClass('highlight');
		}
		else if (hl == "2-16") {
			$elementTable.find('span[title=2-16]').toggleClass('highlight');
		}
		else if (hl == "2-17") {
			$elementTable.find('span[title=2-17]').toggleClass('highlight');
		}
		else if (hl == "2-18") {
			$elementTable.find('span[title=2-18]').toggleClass('highlight');
		}
		else if (hl == "2-19") {
			$elementTable.find('span[title=2-19]').toggleClass('highlight');
		}
		else if (hl == "2-20") {
			$elementTable.find('span[title=2-20]').toggleClass('highlight');
		}
		else if (hl == "2-21") {
			$elementTable.find('span[title=2-21]').toggleClass('highlight');
		}
		else if (hl == "2-22") {
			$elementTable.find('span[title=2-22]').toggleClass('highlight');
		}
		else if (hl == "2-23") {
			$elementTable.find('span[title=2-23]').toggleClass('highlight');
		}
		else if (hl == "2-24") {
			$elementTable.find('span[title=2-24]').toggleClass('highlight');
		}
		else if (hl == "2-25") {
			$elementTable.find('span[title=2-25]').toggleClass('highlight');
		}
		else if (hl == "2-26") {
		              $elementTable.find('span[title=2-26]').toggleClass('highlight');
		}
		else if (hl == "2-27") {
			$elementTable.find('span[title=2-27]').toggleClass('highlight');
		}
		else if (hl == "2-28") {
			$elementTable.find('span[title=2-28]').toggleClass('highlight');
		};
		if (hl == "2-29") {
			$elementTable.find('span[title=2-29]').toggleClass('highlight');
		};
		if (hl == "2-30") {
			$elementTable.find('span[title=2-30]').toggleClass('highlight');
		};
		if (hl == "2-31") {
			$elementTable.find('span[title=2-31]').toggleClass('highlight');
		};
		if (hl == "2-32") {
			$elementTable.find('span[title=2-32]').toggleClass('highlight');
		};
		if (hl == "2-33") {
			$elementTable.find('span[title=2-33]').toggleClass('highlight');
		};
		if (hl == "2-34") {
			$elementTable.find('span[title=2-34]').toggleClass('highlight');
		};
		if (hl == "2-35") {
			$elementTable.find('span[title=2-35]').toggleClass('highlight');
		};
		if (hl == "2-36") {
			$elementTable.find('span[title=2-36]').toggleClass('highlight');
		};
		if (hl == "2-37") {
			$elementTable.find('span[title=2-37]').toggleClass('highlight');
		};
		if (hl == "2-38") {
			$elementTable.find('span[title=2-38]').toggleClass('highlight');
		};
		if (hl == "2-39") {
			$elementTable.find('span[title=2-39]').toggleClass('highlight');
		};
		if (hl == "2-40") {
			$elementTable.find('span[title=2-40]').toggleClass('highlight');
		};
		if (hl == "2-41") {
			$elementTable.find('span[title=2-41]').toggleClass('highlight');
		};
		if (hl == "3-1") {
			$elementTable.find('span[title=3-1]').toggleClass('highlight');
		};
		if (hl == "3-2") {
			$elementTable.find('span[title=3-2]').toggleClass('highlight');
		};
		if (hl == "3-3") {
			$elementTable.find('span[title=3-3]').toggleClass('highlight');
		};
		if (hl == "3-4") {
			$elementTable.find('span[title=3-4]').toggleClass('highlight');
		};
		if (hl == "3-5") {
			$elementTable.find('span[title=3-5]').toggleClass('highlight');
		};
		if (hl == "3-6") {
			$elementTable.find('span[title=3-6]').toggleClass('highlight');
		};
		if (hl == "3-7") {
			$elementTable.find('span[title=3-7]').toggleClass('highlight');
		};
		if (hl == "3-8") {
			$elementTable.find('span[title=3-8]').toggleClass('highlight');
		};
		if (hl == "3-9") {
			$elementTable.find('span[title=3-9]').toggleClass('highlight');
		};
		if (hl == "3-10") {
			$elementTable.find('span[title=3-10]').toggleClass('highlight');
		};
		if (hl == "3-11") {
			$elementTable.find('span[title=3-11]').toggleClass('highlight');
		};
		if (hl == "3-12") {
			$elementTable.find('span[title=3-12]').toggleClass('highlight');
		};
		if (hl == "3-13") {
			$elementTable.find('span[title=3-13]').toggleClass('highlight');
		};
		if (hl == "3-14") {
			$elementTable.find('span[title=3-14]').toggleClass('highlight');
		};
		if (hl == "3-15") {
			$elementTable.find('span[title=3-15]').toggleClass('highlight');
		};
		if (hl == "3-16") {
			$elementTable.find('span[title=3-16]').toggleClass('highlight');
		};
		if (hl == "3-17") {
			$elementTable.find('span[title=3-17]').toggleClass('highlight');
		};
		if (hl == "3-18") {
			$elementTable.find('span[title=3-18]').toggleClass('highlight');
		};
		if (hl == "3-19") {
			$elementTable.find('span[title=3-19]').toggleClass('highlight');
		};
		if (hl == "3-20") {
			$elementTable.find('span[title=3-20]').toggleClass('highlight');
		};
		if (hl == "3-21") {
			$elementTable.find('span[title=3-21]').toggleClass('highlight');
		};
		if (hl == "3-22") {
			$elementTable.find('span[title=3-22]').toggleClass('highlight');
		};
		if (hl == "3-23") {
			$elementTable.find('span[title=3-23]').toggleClass('highlight');
		};
		if (hl == "3-24") {
		              $elementTable.find('span[title=3-24]').toggleClass('highlight');  
		};
		if (hl == "3-25") {
		              $elementTable.find('span[title=3-25]').toggleClass('highlight');  
		};
		if (hl == "3-26") {
		              $elementTable.find('span[title=3-26]').toggleClass('highlight');
		};
		if (hl == "3-27") {
			$elementTable.find('span[title=3-27]').toggleClass('highlight');
		};
		if (hl == "3-28") {
			$elementTable.find('span[title=3-28]').toggleClass('highlight');
		};
		if (hl == "3-29") {
			$elementTable.find('span[title=3-29]').toggleClass('highlight');
		};
		if (hl == "3-30") {
			$elementTable.find('span[title=3-30]').toggleClass('highlight');
		};
		if (hl == "3-31") {
			$elementTable.find('span[title=3-31]').toggleClass('highlight');
		};
		if (hl == "3-32") {
			$elementTable.find('span[title=3-32]').toggleClass('highlight');
		};
		if (hl == "3-33") {
			$elementTable.find('span[title=3-33]').toggleClass('highlight');
		};
		if (hl == "3-34") {
			$elementTable.find('span[title=3-34]').toggleClass('highlight');
		};
		if (hl == "4-1") {
			$elementTable.find('span[title=4-1]').toggleClass('highlight');
		};
		if (hl == "4-2") {
			$elementTable.find('span[title=4-2]').toggleClass('highlight');
		};
		if (hl == "4-3") {
			$elementTable.find('span[title=4-3]').toggleClass('highlight');
		};
		if (hl == "4-4") {
			$elementTable.find('span[title=4-4]').toggleClass('highlight');
		};
		if (hl == "4-5") {
			$elementTable.find('span[title=4-5]').toggleClass('highlight');
		};
		if (hl == "4-6") {
			$elementTable.find('span[title=4-6]').toggleClass('highlight');
		};
		if (hl == "4-7") {
			$elementTable.find('span[title=4-7]').toggleClass('highlight');
		};
		if (hl == "4-8") {
			$elementTable.find('span[title=4-8]').toggleClass('highlight');
		};
		if (hl == "4-9") {
			$elementTable.find('span[title=4-9]').toggleClass('highlight');
		};
		if (hl == "4-10") {
			$elementTable.find('span[title=4-10]').toggleClass('highlight');
		};
		if (hl == "4-11") {
			$elementTable.find('span[title=4-11]').toggleClass('highlight');
		};
		if (hl == "4-12") {
			$elementTable.find('span[title=4-12]').toggleClass('highlight');
		};
		if (hl == "4-13") {
			$elementTable.find('span[title=4-13]').toggleClass('highlight');
		};
		if (hl == "4-14") {
			$elementTable.find('span[title=4-14]').toggleClass('highlight');
		};
		if (hl == "4-15") {
			$elementTable.find('span[title=4-15]').toggleClass('highlight');
		};
		if (hl == "4-16") {
			$elementTable.find('span[title=4-16]').toggleClass('highlight');
		};
		if (hl == "4-17") {
			$elementTable.find('span[title=4-17]').toggleClass('highlight');
		};
		if (hl == "4-18") {
			$elementTable.find('span[title=4-18]').toggleClass('highlight');
		};
		if (hl == "4-19") {
			$elementTable.find('span[title=4-19]').toggleClass('highlight');
		};
		if (hl == "4-20") {
			$elementTable.find('span[title=4-20]').toggleClass('highlight');
		};
		if (hl == "4-21") {
			$elementTable.find('span[title=4-21]').toggleClass('highlight');
		};
		if (hl == "4-22") {
			$elementTable.find('span[title=4-22]').toggleClass('highlight');
		};
		if (hl == "4-23") {
			$elementTable.find('span[title=4-23]').toggleClass('highlight');
		};
		if (hl == "4-24") {
			$elementTable.find('span[title=4-24]').toggleClass('highlight');
		};
		if (hl == "4-25") {
			$elementTable.find('span[title=4-25]').toggleClass('highlight');
		};
		if (hl == "4-26") {
			$elementTable.find('span[title=4-26]').toggleClass('highlight');
		};
		if (hl == "4-27") {
			$elementTable.find('span[title=4-27]').toggleClass('highlight');
		};
		if (hl == "4-28") {
			$elementTable.find('span[title=4-28]').toggleClass('highlight');
		};
		if (hl == "4-29") {
			$elementTable.find('span[title=4-29]').toggleClass('highlight');
		};
		if (hl == "4-30") {
			$elementTable.find('span[title=4-30]').toggleClass('highlight');
		};
		if (hl == "4-31") {
			$elementTable.find('span[title=4-31]').toggleClass('highlight');
		};
		if (hl == "4-32") {
			$elementTable.find('span[title=4-32]').toggleClass('highlight');
		};
		if (hl == "4-33") {
			$elementTable.find('span[title=4-33]').toggleClass('highlight');
		};
		if (hl == "5-1") {
			$elementTable.find('span[title=5-1]').toggleClass('highlight');
		};
		if (hl == "5-2") {
			$elementTable.find('span[title=5-2]').toggleClass('highlight');
		};
		if (hl == "5-3") {
			$elementTable.find('span[title=5-3]').toggleClass('highlight');
		};
		if (hl == "5-4") {
			$elementTable.find('span[title=5-4]').toggleClass('highlight');
		};
		if (hl == "5-5") {
			$elementTable.find('span[title=5-5]').toggleClass('highlight');
		};
		if (hl == "5-6") {
			$elementTable.find('span[title=5-6]').toggleClass('highlight');
		};
		if (hl == "5-7") {
			$elementTable.find('span[title=5-7]').toggleClass('highlight');
		};
		if (hl == "5-8") {
			$elementTable.find('span[title=5-8]').toggleClass('highlight');
		};
		if (hl == "5-9") {
			$elementTable.find('span[title=5-9]').toggleClass('highlight');
		};
		if (hl == "5-10") {
			$elementTable.find('span[title=5-10]').toggleClass('highlight');
		};
		if (hl == "5-11") {
			$elementTable.find('span[title=5-11]').toggleClass('highlight');
		};
		if (hl == "5-12") {
			$elementTable.find('span[title=5-12]').toggleClass('highlight');
		};
		if (hl == "5-13") {
			$elementTable.find('span[title=5-13]').toggleClass('highlight');
		};
		if (hl == "5-14") {
			$elementTable.find('span[title=5-14]').toggleClass('highlight');
		};
		if (hl == "5-15") {
			$elementTable.find('span[title=5-15]').toggleClass('highlight');
		};
		if (hl == "5-16") {
			$elementTable.find('span[title=5-16]').toggleClass('highlight');
		};
		if (hl == "5-17") {
			$elementTable.find('span[title=5-17]').toggleClass('highlight');
		};
		if (hl == "5-18") {
			$elementTable.find('span[title=5-18]').toggleClass('highlight');
		};
		if (hl == "5-19") {
			$elementTable.find('span[title=5-19]').toggleClass('highlight');
		};
		if (hl == "5-20") {
			$elementTable.find('span[title=5-20]').toggleClass('highlight');
		};
		if (hl == "5-21") {
			$elementTable.find('span[title=5-21]').toggleClass('highlight');
		};
		if (hl == "5-22") {
			$elementTable.find('span[title=5-22]').toggleClass('highlight');
		};
		if (hl == "5-23") {
			$elementTable.find('span[title=5-23]').toggleClass('highlight');
		};
		if (hl == "5-24") {
			$elementTable.find('span[title=5-24]').toggleClass('highlight');
		};
		if (hl == "5-25") {
			$elementTable.find('span[title=5-25]').toggleClass('highlight');
		};
		if (hl == "5-26") {
			$elementTable.find('span[title=5-26]').toggleClass('highlight');
		};
		if (hl == "5-27") {
			$elementTable.find('span[title=5-27]').toggleClass('highlight');
		};
		if (hl == "5-28") {
			$elementTable.find('span[title=5-28]').toggleClass('highlight');
		};
		if (hl == "5-29") {
			$elementTable.find('span[title=5-29]').toggleClass('highlight');
		};
		if (hl == "5-30") {
			$elementTable.find('span[title=5-30]').toggleClass('highlight');
		};
		if (hl == "5-31") {
			$elementTable.find('span[title=5-31]').toggleClass('highlight');
		};
		if (hl == "5-32") {
			$elementTable.find('span[title=5-32]').toggleClass('highlight');
		};
		if (hl == "6-1") {
			$elementTable.find('span[title=6-1]').toggleClass('highlight');
		};
		if (hl == "6-2") {
			$elementTable.find('span[title=6-2]').toggleClass('highlight');
		};
		if (hl == "6-3") {
			$elementTable.find('span[title=6-3]').toggleClass('highlight');
		};
		if (hl == "6-4") {
			$elementTable.find('span[title=6-4]').toggleClass('highlight');
		};
		if (hl == "6-5") {
			$elementTable.find('span[title=6-5]').toggleClass('highlight');
		};
		if (hl == "6-6") {
			$elementTable.find('span[title=6-6]').toggleClass('highlight');
		};
		if (hl == "6-7") {
			$elementTable.find('span[title=6-7]').toggleClass('highlight');
		};
		if (hl == "6-8") {
			$elementTable.find('span[title=6-8]').toggleClass('highlight');
		};
		if (hl == "6-9") {
			$elementTable.find('span[title=6-9]').toggleClass('highlight');
		};
		if (hl == "6-10") {
			$elementTable.find('span[title=6-10]').toggleClass('highlight');
		};
		if (hl == "6-11") {
			$elementTable.find('span[title=6-11]').toggleClass('highlight');
		};
		if (hl == "6-12") {
			$elementTable.find('span[title=6-12]').toggleClass('highlight');
		};
		if (hl == "6-13") {
			$elementTable.find('span[title=6-13]').toggleClass('highlight');
		};
		if (hl == "6-14") {
			$elementTable.find('span[title=6-14]').toggleClass('highlight');
		};
		if (hl == "6-15") {
			$elementTable.find('span[title=6-15]').toggleClass('highlight');
		};
		if (hl == "6-16") {
			$elementTable.find('span[title=6-16]').toggleClass('highlight');
		};
		if (hl == "6-17") {
			$elementTable.find('span[title=6-17]').toggleClass('highlight');
		};
		if (hl == "6-18") {
			$elementTable.find('span[title=6-18]').toggleClass('highlight');
		};
		if (hl == "6-19") {
			$elementTable.find('span[title=6-19]').toggleClass('highlight');
		};
		if (hl == "6-20") {
			$elementTable.find('span[title=6-20]').toggleClass('highlight');
		};
		if (hl == "6-21") {
			$elementTable.find('span[title=6-21]').toggleClass('highlight');
		};
		if (hl == "6-22") {
			$elementTable.find('span[title=6-22]').toggleClass('highlight');
		};
		if (hl == "6-23") {
			$elementTable.find('span[title=6-23]').toggleClass('highlight');
		};
		if (hl == "6-24") {
			$elementTable.find('span[title=6-24]').toggleClass('highlight');
		};
		if (hl == "6-25") {
			$elementTable.find('span[title=6-25]').toggleClass('highlight');
		};
		if (hl == "6-26") {
			$elementTable.find('span[title=6-26]').toggleClass('highlight');
		};
		if (hl == "6-27") {
			$elementTable.find('span[title=6-27]').toggleClass('highlight');
		};
		if (hl == "6-28") {
			$elementTable.find('span[title=6-28]').toggleClass('highlight');
		};
		if (hl == "6-29") {
			$elementTable.find('span[title=6-29]').toggleClass('highlight');
		};
		if (hl == "6-30") {
			$elementTable.find('span[title=6-30]').toggleClass('highlight');
		};
		if (hl == "6-31") {
			$elementTable.find('span[title=6-31]').toggleClass('highlight');
		};
		if (hl == "6-32") {
			$elementTable.find('span[title=6-32]').toggleClass('highlight');
		};
		if (hl == "6-33") {
			$elementTable.find('span[title=6-33]').toggleClass('highlight');
		};
		if (hl == "6-34") {
			$elementTable.find('span[title=6-34]').toggleClass('highlight');
		};
		if (hl == "6-35") {
			$elementTable.find('span[title=6-35]').toggleClass('highlight');
		};
		if (hl == "6-36") {
			$elementTable.find('span[title=6-36]').toggleClass('highlight');
		};
		if (hl == "6-37") {
			$elementTable.find('span[title=6-37]').toggleClass('highlight');
		};
		if (hl == "6-38") {
			$elementTable.find('span[title=6-38]').toggleClass('highlight');
		};
		if (hl == "6-39") {
			$elementTable.find('span[title=6-39]').toggleClass('highlight');
		};
		if (hl == "6-40") {
			$elementTable.find('span[title=6-40]').toggleClass('highlight');
		};
		if (hl == "6-41") {
			$elementTable.find('span[title=6-41]').toggleClass('highlight');
		};
		if (hl == "6-42") {
			$elementTable.find('span[title=6-42]').toggleClass('highlight');
		};
		if (hl == "6-43") {
			$elementTable.find('span[title=6-43]').toggleClass('highlight');
		};
		if (hl == "6-44") {
			$elementTable.find('span[title=6-44]').toggleClass('highlight');
		};
		if (hl == "6-45") {
			$elementTable.find('span[title=6-45]').toggleClass('highlight');
		};
		if (hl == "6-46") {
			$elementTable.find('span[title=6-46]').toggleClass('highlight');
		};
		if (hl == "6-47") {
			$elementTable.find('span[title=6-47]').toggleClass('highlight');
		};
		if (hl == "6-48") {
			$elementTable.find('span[title=6-48]').toggleClass('highlight');
		};
		if (hl == "6-49") {
			$elementTable.find('span[title=6-49]').toggleClass('highlight');
		};
		if (hl == "6-50") {
			$elementTable.find('span[title=6-50]').toggleClass('highlight');
		};
		if (hl == "6-51") {
			$elementTable.find('span[title=6-51]').toggleClass('highlight');
		};
		if (hl == "6-52") {
			$elementTable.find('span[title=6-52]').toggleClass('highlight');
		};
		if (hl == "6-53") {
			$elementTable.find('span[title=6-53]').toggleClass('highlight');
		};
		if (hl == "6-54") {
			$elementTable.find('span[title=6-54]').toggleClass('highlight');
		};
		if (hl == "6-55") {
			$elementTable.find('span[title=6-55]').toggleClass('highlight');
		};
		if (hl == "6-56") {
			$elementTable.find('span[title=6-56]').toggleClass('highlight');
		};
		if (hl == "6-57") {
			$elementTable.find('span[title=6-57]').toggleClass('highlight');
		};
		if (hl == "6-58") {
			$elementTable.find('span[title=6-58]').toggleClass('highlight');
		};
		if (hl == "6-59") {
			$elementTable.find('span[title=6-59]').toggleClass('highlight');
		};
		if (hl == "6-60") {
			$elementTable.find('span[title=6-60]').toggleClass('highlight');
		};
		if (hl == "6-61") {
			$elementTable.find('span[title=6-61]').toggleClass('highlight');
		};
		if (hl == "6-62") {
			$elementTable.find('span[title=6-62]').toggleClass('highlight');
		};
		if (hl == "6-63") {
			$elementTable.find('span[title=6-63]').toggleClass('highlight');
		};
		if (hl == "6-64") {
			$elementTable.find('span[title=6-64]').toggleClass('highlight');
		};
		if (hl == "6-65") {
			$elementTable.find('span[title=6-65]').toggleClass('highlight');
		};
		if (hl == "6-66") {
			$elementTable.find('span[title=6-66]').toggleClass('highlight');
		};
		if (hl == "6-67") {
			$elementTable.find('span[title=6-67]').toggleClass('highlight');
		};
		if (hl == "6-68") {
			$elementTable.find('span[title=6-68]').toggleClass('highlight');
		};
		if (hl == "7-1") {
			$elementTable.find('span[title=7-1]').toggleClass('highlight');
		};
		if (hl == "7-2") {
			$elementTable.find('span[title=7-2]').toggleClass('highlight');
		};
		if (hl == "7-3") {
			$elementTable.find('span[title=7-3]').toggleClass('highlight');
		};
		if (hl == "7-4") {
			$elementTable.find('span[title=7-4]').toggleClass('highlight');
		};
		if (hl == "7-5") {
			$elementTable.find('span[title=7-5]').toggleClass('highlight');
		};
		if (hl == "7-6") {
			$elementTable.find('span[title=7-6]').toggleClass('highlight');
		};
		if (hl == "7-7") {
			$elementTable.find('span[title=7-7]').toggleClass('highlight');
		};
		if (hl == "7-8") {
			$elementTable.find('span[title=7-8]').toggleClass('highlight');
		};
		if (hl == "7-9") {
			$elementTable.find('span[title=7-9]').toggleClass('highlight');
		};
		if (hl == "7-10") {
			$elementTable.find('span[title=7-10]').toggleClass('highlight');
		};
		if (hl == "7-11") {
			$elementTable.find('span[title=7-11]').toggleClass('highlight');
		};
		if (hl == "7-12") {
			$elementTable.find('span[title=7-12]').toggleClass('highlight');
		};
		if (hl == "7-13") {
			$elementTable.find('span[title=7-13]').toggleClass('highlight');
		};
		if (hl == "7-14") {
			$elementTable.find('span[title=7-14]').toggleClass('highlight');
		};
		if (hl == "7-15") {
			$elementTable.find('span[title=7-15]').toggleClass('highlight');
		};
		if (hl == "7-16") {
			$elementTable.find('span[title=7-16]').toggleClass('highlight');
		};
		if (hl == "7-17") {
			$elementTable.find('span[title=7-17]').toggleClass('highlight');
		};
		if (hl == "7-18") {
			$elementTable.find('span[title=7-18]').toggleClass('highlight');
		};
		if (hl == "7-19") {
			$elementTable.find('span[title=7-19]').toggleClass('highlight');
		};
		if (hl == "7-20") {
			$elementTable.find('span[title=7-20]').toggleClass('highlight');
		};
		if (hl == "7-21") {
			$elementTable.find('span[title=7-21]').toggleClass('highlight');
		};
		if (hl == "7-22") {
			$elementTable.find('span[title=7-22]').toggleClass('highlight');
		};
		if (hl == "7-23") {
			$elementTable.find('span[title=7-23]').toggleClass('highlight');
		};
		if (hl == "7-24") {
			$elementTable.find('span[title=7-24]').toggleClass('highlight');
		};
		if (hl == "7-25") {
			$elementTable.find('span[title=7-25]').toggleClass('highlight');
		};
		if (hl == "7-26") {
			$elementTable.find('span[title=7-26]').toggleClass('highlight');
		};
		if (hl == "7-27") {
			$elementTable.find('span[title=7-27]').toggleClass('highlight');
		};
		if (hl == "7-28") {
			$elementTable.find('span[title=7-28]').toggleClass('highlight');
		};
		if (hl == "7-29") {
			$elementTable.find('span[title=7-29]').toggleClass('highlight');
		};
		if (hl == "7-30") {
			$elementTable.find('span[title=7-30]').toggleClass('highlight');
		};
		if (hl == "7-31") {
			$elementTable.find('span[title=7-31]').toggleClass('highlight');
		};
		if (hl == "7-32") {
			$elementTable.find('span[title=7-32]').toggleClass('highlight');
		};
		if (hl == "7-33") {
			$elementTable.find('span[title=7-33]').toggleClass('highlight');
		};
		if (hl == "7-34") {
			$elementTable.find('span[title=7-34]').toggleClass('highlight');
		};
		if (hl == "7-35") {
			$elementTable.find('span[title=7-35]').toggleClass('highlight');
		};
		if (hl == "7-36") {
			$elementTable.find('span[title=7-36]').toggleClass('highlight');
		};
		if (hl == "7-37") {
			$elementTable.find('span[title=7-37]').toggleClass('highlight');
		};
		if (hl == "7-38") {
			$elementTable.find('span[title=7-38]').toggleClass('highlight');
		};
		if (hl == "7-39") {
			$elementTable.find('span[title=7-39]').toggleClass('highlight');
		};
		if (hl == "7-40") {
			$elementTable.find('span[title=7-40]').toggleClass('highlight');
		};
		if (hl == "7-41") {
			$elementTable.find('span[title=7-41]').toggleClass('highlight');
		};
		if (hl == "7-42") {
			$elementTable.find('span[title=7-42]').toggleClass('highlight');
		};
		if (hl == "7-43") {
			$elementTable.find('span[title=7-43]').toggleClass('highlight');
		};
		if (hl == "7-44") {
			$elementTable.find('span[title=7-44]').toggleClass('highlight');
		};
		if (hl == "7-45") {
			$elementTable.find('span[title=7-45]').toggleClass('highlight');
		};
		if (hl == "7-46") {
			$elementTable.find('span[title=7-46]').toggleClass('highlight');
		};
		if (hl == "7-47") {
			$elementTable.find('span[title=7-47]').toggleClass('highlight');
		};
		if (hl == "7-48") {
			$elementTable.find('span[title=7-48]').toggleClass('highlight');
		};
		if (hl == "7-49") {
			$elementTable.find('span[title=7-49]').toggleClass('highlight');
		};
		if (hl == "7-50") {
			$elementTable.find('span[title=7-50]').toggleClass('highlight');
		};
		if (hl == "8-1") {
			$elementTable.find('span[title=8-1]').toggleClass('highlight');
		};
		if (hl == "8-2") {
			$elementTable.find('span[title=8-2]').toggleClass('highlight');
		};
		if (hl == "8-3") {
			$elementTable.find('span[title=8-3]').toggleClass('highlight');
		};
		if (hl == "8-4") {
			$elementTable.find('span[title=8-4]').toggleClass('highlight');
		};
		if (hl == "8-5") {
			$elementTable.find('span[title=8-5]').toggleClass('highlight');
		};
		if (hl == "8-6") {
			$elementTable.find('span[title=8-6]').toggleClass('highlight');
		};
		if (hl == "8-7") {
			$elementTable.find('span[title=8-7]').toggleClass('highlight');
		};
		if (hl == "8-8") {
			$elementTable.find('span[title=8-8]').toggleClass('highlight');
		};
		if (hl == "8-9") {
			$elementTable.find('span[title=8-9]').toggleClass('highlight');
		};
		if (hl == "8-10") {
			$elementTable.find('span[title=8-10]').toggleClass('highlight');
		};
		if (hl == "8-11") {
			$elementTable.find('span[title=8-11]').toggleClass('highlight');
		};
		if (hl == "8-12") {
			$elementTable.find('span[title=8-12]').toggleClass('highlight');
		};
		if (hl == "8-13") {
			$elementTable.find('span[title=8-13]').toggleClass('highlight');
		};
		if (hl == "8-14") {
			$elementTable.find('span[title=8-14]').toggleClass('highlight');
		};
		if (hl == "8-15") {
			$elementTable.find('span[title=8-15]').toggleClass('highlight');
		};
		if (hl == "8-16") {
			$elementTable.find('span[title=8-16]').toggleClass('highlight');
		};
		if (hl == "8-17") {
			$elementTable.find('span[title=8-17]').toggleClass('highlight');
		};
		if (hl == "8-18") {
			$elementTable.find('span[title=8-18]').toggleClass('highlight');
		};
		if (hl == "8-19") {
			$elementTable.find('span[title=8-19]').toggleClass('highlight');
		};
		if (hl == "9-1") {
			$elementTable.find('span[title=9-1]').toggleClass('highlight');
		};
		if (hl == "9-2") {
			$elementTable.find('span[title=9-2]').toggleClass('highlight');
		};
		if (hl == "9-3") {
			$elementTable.find('span[title=9-3]').toggleClass('highlight');
		};
		if (hl == "9-4") {
			$elementTable.find('span[title=9-4]').toggleClass('highlight');
		};
		if (hl == "9-5") {
			$elementTable.find('span[title=9-5]').toggleClass('highlight');
		};
		if (hl == "9-6") {
			$elementTable.find('span[title=9-6]').toggleClass('highlight');
		};
		if (hl == "9-7") {
			$elementTable.find('span[title=9-7]').toggleClass('highlight');
		};
		if (hl == "9-8") {
			$elementTable.find('span[title=9-8]').toggleClass('highlight');
		};
		if (hl == "9-9") {
			$elementTable.find('span[title=9-9]').toggleClass('highlight');
		};
		if (hl == "9-10") {
			$elementTable.find('span[title=9-10]').toggleClass('highlight');
		};
		if (hl == "9-11") {
			$elementTable.find('span[title=9-11]').toggleClass('highlight');
		};
		if (hl == "9-12") {
			$elementTable.find('span[title=9-12]').toggleClass('highlight');
		};
		if (hl == "9-13") {
			$elementTable.find('span[title=9-13]').toggleClass('highlight');
		};
		if (hl == "9-14") {
			$elementTable.find('span[title=9-14]').toggleClass('highlight');
		};
		if (hl == "9-15") {
			$elementTable.find('span[title=9-15]').toggleClass('highlight');
		};
		if (hl == "9-16") {
			$elementTable.find('span[title=9-16]').toggleClass('highlight');
		};
		if (hl == "9-17") {
			$elementTable.find('span[title=9-17]').toggleClass('highlight');
		};
		if (hl == "9-18") {
			$elementTable.find('span[title=9-18]').toggleClass('highlight');
		};
		if (hl == "9-19") {
			$elementTable.find('span[title=9-19]').toggleClass('highlight');
		};
		if (hl == "9-20") {
			$elementTable.find('span[title=9-20]').toggleClass('highlight');
		};
		if (hl == "9-21") {
			$elementTable.find('span[title=9-21]').toggleClass('highlight');
		};
		if (hl == "9-22") {
			$elementTable.find('span[title=9-22]').toggleClass('highlight');
		};
		if (hl == "9-23") {
			$elementTable.find('span[title=9-23]').toggleClass('highlight');
		};
		if (hl == "9-24") {
			$elementTable.find('span[title=9-24]').toggleClass('highlight');
		};
		if (hl == "9-25") {
			$elementTable.find('span[title=9-25]').toggleClass('highlight');
		};
		if (hl == "9-26") {
			$elementTable.find('span[title=9-26]').toggleClass('highlight');
		};
		if (hl == "10-1") {
			$elementTable.find('span[title=10-1]').toggleClass('highlight');
		};
		if (hl == "10-2") {
			$elementTable.find('span[title=10-2]').toggleClass('highlight');
		};
		if (hl == "10-3") {
			$elementTable.find('span[title=10-3]').toggleClass('highlight');
		};
		if (hl == "10-4") {
			$elementTable.find('span[title=10-4]').toggleClass('highlight');
		};
		if (hl == "10-5") {
			$elementTable.find('span[title=10-5]').toggleClass('highlight');
		};
		if (hl == "10-6") {
			$elementTable.find('span[title=10-6]').toggleClass('highlight');
		};
		if (hl == "10-7") {
			$elementTable.find('span[title=10-7]').toggleClass('highlight');
		};
		if (hl == "10-8") {
			$elementTable.find('span[title=10-8]').toggleClass('highlight');
		};
		if (hl == "10-9") {
			$elementTable.find('span[title=10-9]').toggleClass('highlight');
		};
		if (hl == "10-10") {
			$elementTable.find('span[title=10-10]').toggleClass('highlight');
		};
		if (hl == "10-11") {
			$elementTable.find('span[title=10-11]').toggleClass('highlight');
		};
		if (hl == "10-12") {
			$elementTable.find('span[title=10-12]').toggleClass('highlight');
		};
		if (hl == "10-13") {
			$elementTable.find('span[title=10-13]').toggleClass('highlight');
		};
		if (hl == "10-14") {
			$elementTable.find('span[title=10-14]').toggleClass('highlight');
		};
		if (hl == "10-15") {
			$elementTable.find('span[title=10-15]').toggleClass('highlight');
		};
		if (hl == "10-16") {
			$elementTable.find('span[title=10-16]').toggleClass('highlight');
		};
		if (hl == "10-17") {
			$elementTable.find('span[title=10-17]').toggleClass('highlight');
		};
		if (hl == "10-18") {
			$elementTable.find('span[title=10-18]').toggleClass('highlight');
		};
		if (hl == "10-19") {
			$elementTable.find('span[title=10-19]').toggleClass('highlight');
		};
		if (hl == "10-20") {
			$elementTable.find('span[title=10-20]').toggleClass('highlight');
		};
		if (hl == "10-21") {
			$elementTable.find('span[title=10-21]').toggleClass('highlight');
		};
		if (hl == "10-22") {
			$elementTable.find('span[title=10-22]').toggleClass('highlight');
		};
		if (hl == "10-23") {
			$elementTable.find('span[title=10-23]').toggleClass('highlight');
		};
		if (hl == "10-24") {
			$elementTable.find('span[title=10-24]').toggleClass('highlight');
		};
		if (hl == "10-25") {
			$elementTable.find('span[title=10-25]').toggleClass('highlight');
		};
		if (hl == "11-1") {
			$elementTable.find('span[title=11-1]').toggleClass('highlight');
		};
		if (hl == "11-2") {
			$elementTable.find('span[title=11-2]').toggleClass('highlight');
		};
		if (hl == "11-3") {
			$elementTable.find('span[title=11-3]').toggleClass('highlight');
		};
		if (hl == "11-4") {
			$elementTable.find('span[title=11-4]').toggleClass('highlight');
		};
		if (hl == "11-5") {
			$elementTable.find('span[title=11-5]').toggleClass('highlight');
		};
		if (hl == "11-6") {
			$elementTable.find('span[title=11-6]').toggleClass('highlight');
		};
		if (hl == "11-7") {
			$elementTable.find('span[title=11-7]').toggleClass('highlight');
		};
		if (hl == "11-8") {
			$elementTable.find('span[title=11-8]').toggleClass('highlight');
		};
		if (hl == "11-9") {
			$elementTable.find('span[title=11-9]').toggleClass('highlight');
		};
		if (hl == "11-10") {
			$elementTable.find('span[title=11-10]').toggleClass('highlight');
		};
		if (hl == "11-11") {
			$elementTable.find('span[title=11-11]').toggleClass('highlight');
		};
		if (hl == "11-12") {
			$elementTable.find('span[title=11-12]').toggleClass('highlight');
		};
		if (hl == "11-13") {
			$elementTable.find('span[title=11-13]').toggleClass('highlight');
		};
		if (hl == "11-14") {
			$elementTable.find('span[title=11-14]').toggleClass('highlight');
		};
		if (hl == "11-15") {
			$elementTable.find('span[title=11-15]').toggleClass('highlight');
		};
		if (hl == "11-16") {
			$elementTable.find('span[title=11-16]').toggleClass('highlight');
		};
		if (hl == "11-17") {
			$elementTable.find('span[title=11-17]').toggleClass('highlight');
		};
		if (hl == "11-18") {
			$elementTable.find('span[title=11-18]').toggleClass('highlight');
		};
		if (hl == "11-19") {
			$elementTable.find('span[title=11-19]').toggleClass('highlight');
		};
		if (hl == "11-20") {
			$elementTable.find('span[title=11-20]').toggleClass('highlight');
		};
		if (hl == "11-21") {
			$elementTable.find('span[title=11-21]').toggleClass('highlight');
		};
		if (hl == "11-22") {
			$elementTable.find('span[title=11-22]').toggleClass('highlight');
		};
		if (hl == "11-23") {
			$elementTable.find('span[title=11-23]').toggleClass('highlight');
		};
		if (hl == "11-24") {
			$elementTable.find('span[title=11-24]').toggleClass('highlight');
		};
		if (hl == "11-25") {
			$elementTable.find('span[title=11-25]').toggleClass('highlight');
		};
		if (hl == "11-26") {
			$elementTable.find('span[title=11-26]').toggleClass('highlight');
		};
		if (hl == "11-27") {
			$elementTable.find('span[title=11-27]').toggleClass('highlight');
		};
		if (hl == "11-28") {
			$elementTable.find('span[title=11-28]').toggleClass('highlight');
		};
		if (hl == "11-29") {
			$elementTable.find('span[title=11-29]').toggleClass('highlight');
		};
		if (hl == "11-30") {
			$elementTable.find('span[title=11-30]').toggleClass('highlight');
		};
		if (hl == "11-31") {
			$elementTable.find('span[title=11-31]').toggleClass('highlight');
		};
		if (hl == "11-32") {
			$elementTable.find('span[title=11-32]').toggleClass('highlight');
		};
		if (hl == "12-1") {
			$elementTable.find('span[title=12-1]').toggleClass('highlight');
		};
		if (hl == "12-2") {
			$elementTable.find('span[title=12-2]').toggleClass('highlight');
		};
		if (hl == "12-3") {
			$elementTable.find('span[title=12-3]').toggleClass('highlight');
		};
		if (hl == "12-4") {
			$elementTable.find('span[title=12-4]').toggleClass('highlight');
		};
		if (hl == "12-5") {
			$elementTable.find('span[title=12-5]').toggleClass('highlight');
		};
		if (hl == "12-6") {
			$elementTable.find('span[title=12-6]').toggleClass('highlight');
		};
		if (hl == "12-7") {
			$elementTable.find('span[title=12-7]').toggleClass('highlight');
		};
		if (hl == "12-8") {
			$elementTable.find('span[title=12-8]').toggleClass('highlight');
		};
		if (hl == "12-9") {
			$elementTable.find('span[title=12-9]').toggleClass('highlight');
		};
		if (hl == "12-10") {
			$elementTable.find('span[title=12-10]').toggleClass('highlight');
		};
		if (hl == "12-11") {
			$elementTable.find('span[title=12-11]').toggleClass('highlight');
		};
		if (hl == "12-12") {
			$elementTable.find('span[title=12-12]').toggleClass('highlight');
		};
		if (hl == "12-13") {
			$elementTable.find('span[title=12-13]').toggleClass('highlight');
		};
		if (hl == "12-14") {
			$elementTable.find('span[title=12-14]').toggleClass('highlight');
		};
		if (hl == "12-15") {
			$elementTable.find('span[title=12-15]').toggleClass('highlight');
		};
		if (hl == "12-16") {
			$elementTable.find('span[title=12-16]').toggleClass('highlight');
		};
		if (hl == "12-17") {
			$elementTable.find('span[title=12-17]').toggleClass('highlight');
		};
		if (hl == "12-18") {
			$elementTable.find('span[title=12-18]').toggleClass('highlight');
		};
		if (hl == "12-19") {
			$elementTable.find('span[title=12-19]').toggleClass('highlight');
		};
		if (hl == "12-20") {
			$elementTable.find('span[title=12-20]').toggleClass('highlight');
		};
		if (hl == "12-21") {
			$elementTable.find('span[title=12-21]').toggleClass('highlight');
		};
		if (hl == "13-1") {
			$elementTable.find('span[title=13-1]').toggleClass('highlight');
		};
		if (hl == "13-2") {
			$elementTable.find('span[title=13-2]').toggleClass('highlight');
		};
		if (hl == "13-3") {
			$elementTable.find('span[title=13-3]').toggleClass('highlight');
		};
		if (hl == "13-4") {
			$elementTable.find('span[title=13-4]').toggleClass('highlight');
		};
		if (hl == "13-5") {
			$elementTable.find('span[title=13-5]').toggleClass('highlight');
		};
		if (hl == "13-6") {
			$elementTable.find('span[title=13-6]').toggleClass('highlight');
		};
		if (hl == "13-7") {
			$elementTable.find('span[title=13-7]').toggleClass('highlight');
		};
		if (hl == "13-8") {
			$elementTable.find('span[title=13-8]').toggleClass('highlight');
		};
		if (hl == "13-9") {
			$elementTable.find('span[title=13-9]').toggleClass('highlight');
		};
		if (hl == "13-10") {
			$elementTable.find('span[title=13-10]').toggleClass('highlight');
		};
		if (hl == "13-11") {
			$elementTable.find('span[title=13-11]').toggleClass('highlight');
		};
		if (hl == "13-12") {
			$elementTable.find('span[title=13-12]').toggleClass('highlight');
		};
		if (hl == "13-13") {
			$elementTable.find('span[title=13-13]').toggleClass('highlight');
		};
		if (hl == "13-14") {
			$elementTable.find('span[title=13-14]').toggleClass('highlight');
		};
		if (hl == "13-15") {
			$elementTable.find('span[title=13-15]').toggleClass('highlight');
		};
		if (hl == "13-16") {
			$elementTable.find('span[title=13-16]').toggleClass('highlight');
		};
		
		if (hl == "13-17") {
			$elementTable.find('span[title=13-17]').toggleClass('highlight');
		};
		if (hl == "13-18") {
			$elementTable.find('span[title=13-18]').toggleClass('highlight');
		};
		if (hl == "13-19") {
			$elementTable.find('span[title=13-19]').toggleClass('highlight');
		};
		if (hl == "13-20") {
			$elementTable.find('span[title=13-20]').toggleClass('highlight');
		};
		if (hl == "13-21") {
			$elementTable.find('span[title=13-21]').toggleClass('highlight');
		};
		if (hl == "13-22") {
			$elementTable.find('span[title=13-22]').toggleClass('highlight');
		};
		if (hl == "13-23") {
			$elementTable.find('span[title=13-23]').toggleClass('highlight');
		};
		if (hl == "13-24") {
			$elementTable.find('span[title=13-24]').toggleClass('highlight');
		};
		if (hl == "13-25") {
			$elementTable.find('span[title=13-25]').toggleClass('highlight');
		};
		if (hl == "14-1") {
			$elementTable.find('span[title=14-1]').toggleClass('highlight');
		};
		if (hl == "14-2") {
			$elementTable.find('span[title=14-2]').toggleClass('highlight');
		};
		if (hl == "14-3") {
			$elementTable.find('span[title=14-3]').toggleClass('highlight');
		};
		if (hl == "14-4") {
			$elementTable.find('span[title=14-4]').toggleClass('highlight');
		};
		if (hl == "14-5") {
			$elementTable.find('span[title=14-5]').toggleClass('highlight');
		};
		if (hl == "14-6") {
			$elementTable.find('span[title=14-6]').toggleClass('highlight');
		};
		if (hl == "14-7") {
			$elementTable.find('span[title=14-7]').toggleClass('highlight');
		};
		if (hl == "14-8") {
			$elementTable.find('span[title=14-8]').toggleClass('highlight');
		};
		if (hl == "14-9") {
			$elementTable.find('span[title=14-9]').toggleClass('highlight');
		};
		if (hl == "14-10") {
			$elementTable.find('span[title=14-10]').toggleClass('highlight');
		};
		if (hl == "14-11") {
			$elementTable.find('span[title=14-11]').toggleClass('highlight');
		};
		if (hl == "14-12") {
			$elementTable.find('span[title=14-12]').toggleClass('highlight');
		};
		if (hl == "14-13") {
			$elementTable.find('span[title=14-13]').toggleClass('highlight');
		};
		if (hl == "14-14") {
			$elementTable.find('span[title=14-14]').toggleClass('highlight');
		};
		if (hl == "15-1") {
			$elementTable.find('span[title=15-1]').toggleClass('highlight');
		};
		if (hl == "15-2") {
			$elementTable.find('span[title=15-2]').toggleClass('highlight');
		};
		if (hl == "15-3") {
			$elementTable.find('span[title=15-3]').toggleClass('highlight');
		};
		if (hl == "15-4") {
			$elementTable.find('span[title=15-4]').toggleClass('highlight');
		};
		if (hl == "15-5") {
			$elementTable.find('span[title=15-5]').toggleClass('highlight');
		};
		if (hl == "15-6") {
			$elementTable.find('span[title=15-6]').toggleClass('highlight');
		};
		if (hl == "15-7") {
			$elementTable.find('span[title=15-7]').toggleClass('highlight');
		};
		if (hl == "15-8") {
			$elementTable.find('span[title=15-8]').toggleClass('highlight');
		};
		if (hl == "15-9") {
			$elementTable.find('span[title=15-9]').toggleClass('highlight');
		};
		if (hl == "15-10") {
			$elementTable.find('span[title=15-10]').toggleClass('highlight');
		};
		if (hl == "15-11") {
			$elementTable.find('span[title=15-11]').toggleClass('highlight');
		};
		if (hl == "15-12") {
			$elementTable.find('span[title=15-12]').toggleClass('highlight');
		};
		if (hl == "15-13") {
			$elementTable.find('span[title=15-13]').toggleClass('highlight');
		};
		if (hl == "15-14") {
			$elementTable.find('span[title=15-14]').toggleClass('highlight');
		};
		if (hl == "16-1") {
			$elementTable.find('span[title=16-1]').toggleClass('highlight');
		};
		if (hl == "16-2") {
			$elementTable.find('span[title=16-2]').toggleClass('highlight');
		};
		if (hl == "16-3") {
			$elementTable.find('span[title=16-3]').toggleClass('highlight');
		};
		if (hl == "16-4") {
			$elementTable.find('span[title=16-4]').toggleClass('highlight');
		};
		if (hl == "16-5") {
			$elementTable.find('span[title=16-5]').toggleClass('highlight');
		};
		if (hl == "16-6") {
			$elementTable.find('span[title=16-6]').toggleClass('highlight');
		};
		if (hl == "16-7") {
			$elementTable.find('span[title=16-7]').toggleClass('highlight');
		};
		if (hl == "16-8") {
			$elementTable.find('span[title=16-8]').toggleClass('highlight');
		};
		if (hl == "16-9") {
			$elementTable.find('span[title=16-9]').toggleClass('highlight');
		};
		if (hl == "16-10") {
			$elementTable.find('span[title=16-10]').toggleClass('highlight');
		};
		if (hl == "16-11") {
			$elementTable.find('span[title=16-11]').toggleClass('highlight');
		};
		if (hl == "16-12") {
			$elementTable.find('span[title=16-12]').toggleClass('highlight');
		};
		if (hl == "16-13") {
			$elementTable.find('span[title=16-13]').toggleClass('highlight');
		};
		if (hl == "16-14") {
			$elementTable.find('span[title=16-14]').toggleClass('highlight');
		};
		if (hl == "16-15") {
			$elementTable.find('span[title=16-15]').toggleClass('highlight');
		};
		if (hl == "16-16") {
			$elementTable.find('span[title=16-16]').toggleClass('highlight');
		};
		if (hl == "16-17") {
			$elementTable.find('span[title=16-17]').toggleClass('highlight');
		};
		if (hl == "17-1") {
			$elementTable.find('span[title=17-1]').toggleClass('highlight');
		};
		if (hl == "17-2") {
			$elementTable.find('span[title=17-2]').toggleClass('highlight');
		};
		if (hl == "17-3") {
			$elementTable.find('span[title=17-3]').toggleClass('highlight');
		};
		if (hl == "17-4") {
			$elementTable.find('span[title=17-4]').toggleClass('highlight');
		};
		if (hl == "17-5") {
			$elementTable.find('span[title=17-5]').toggleClass('highlight');
		};
		if (hl == "17-6") {
			$elementTable.find('span[title=17-6]').toggleClass('highlight');
		};
		if (hl == "17-7") {
			$elementTable.find('span[title=17-7]').toggleClass('highlight');
		};
		if (hl == "17-8") {
			$elementTable.find('span[title=17-8]').toggleClass('highlight');
		};
		if (hl == "17-9") {
			$elementTable.find('span[title=17-9]').toggleClass('highlight');
		};
		if (hl == "17-10") {
			$elementTable.find('span[title=17-10]').toggleClass('highlight');
		};
		if (hl == "17-11") {
			$elementTable.find('span[title=17-11]').toggleClass('highlight');
		};
		if (hl == "17-12") {
			$elementTable.find('span[title=17-12]').toggleClass('highlight');
		};
		if (hl == "17-13") {
			$elementTable.find('span[title=17-13]').toggleClass('highlight');
		};
		if (hl == "17-14") {
			$elementTable.find('span[title=17-14]').toggleClass('highlight');
		};
		if (hl == "17-15") {
			$elementTable.find('span[title=17-15]').toggleClass('highlight');
		};
		if (hl == "17-16") {
			$elementTable.find('span[title=17-16]').toggleClass('highlight');
		};
		if (hl == "18-1") {
			$elementTable.find('span[title=18-1]').toggleClass('highlight');
		};
		if (hl == "18-2") {
			$elementTable.find('span[title=18-2]').toggleClass('highlight');
		};
		if (hl == "18-3") {
			$elementTable.find('span[title=18-3]').toggleClass('highlight');
		};
		if (hl == "18-4") {
			$elementTable.find('span[title=18-4]').toggleClass('highlight');
		};
		if (hl == "18-5") {
			$elementTable.find('span[title=18-5]').toggleClass('highlight');
		};
		if (hl == "18-6") {
			$elementTable.find('span[title=18-6]').toggleClass('highlight');
		};
		if (hl == "18-7") {
			$elementTable.find('span[title=18-7]').toggleClass('highlight');
		};
		if (hl == "18-8") {
			$elementTable.find('span[title=18-8]').toggleClass('highlight');
		};
		if (hl == "18-9") {
			$elementTable.find('span[title=18-9]').toggleClass('highlight');
		};
		if (hl == "18-10") {
			$elementTable.find('span[title=18-10]').toggleClass('highlight');
		};
		if (hl == "18-11") {
			$elementTable.find('span[title=18-11]').toggleClass('highlight');
		};
		if (hl == "18-12") {
			$elementTable.find('span[title=18-12]').toggleClass('highlight');
		};
		if (hl == "18-13") {
			$elementTable.find('span[title=18-13]').toggleClass('highlight');
		};
		if (hl == "18-14") {
			$elementTable.find('span[title=18-14]').toggleClass('highlight');
		};
		if (hl == "18-15") {
			$elementTable.find('span[title=18-15]').toggleClass('highlight');
		};
		if (hl == "18-16") {
			$elementTable.find('span[title=18-16]').toggleClass('highlight');
		};
		if (hl == "18-17") {
			$elementTable.find('span[title=18-17]').toggleClass('highlight');
		};
		if (hl == "19-1") {
			$elementTable.find('span[title=19-1]').toggleClass('highlight');
		};
		if (hl == "19-2") {
			$elementTable.find('span[title=19-2]').toggleClass('highlight');
		};
		if (hl == "19-3") {
			$elementTable.find('span[title=19-3]').toggleClass('highlight');
		};
		if (hl == "19-4") {
			$elementTable.find('span[title=19-4]').toggleClass('highlight');
		};
		if (hl == "19-5") {
			$elementTable.find('span[title=19-5]').toggleClass('highlight');
		};
		if (hl == "19-6") {
			$elementTable.find('span[title=19-6]').toggleClass('highlight');
		};
		if (hl == "19-7") {
			$elementTable.find('span[title=19-7]').toggleClass('highlight');
		};
		if (hl == "20-1") {
			$elementTable.find('span[title=20-1]').toggleClass('highlight');
		};
		if (hl == "20-2") {
			$elementTable.find('span[title=20-2]').toggleClass('highlight');
		};
		if (hl == "21-1") {
			$elementTable.find('span[title=21-1]').toggleClass('highlight');
		};
		if (hl == "21-2") {
			$elementTable.find('span[title=21-2]').toggleClass('highlight');
		};
		if (hl == "21-3") {
			$elementTable.find('span[title=21-3]').toggleClass('highlight');
		};
		if (hl == "21-4") {
			$elementTable.find('span[title=21-4]').toggleClass('highlight');
		};
		if (hl == "21-5") {
			$elementTable.find('span[title=21-5]').toggleClass('highlight');
		};
		if (hl == "21-6") {
			$elementTable.find('span[title=21-6]').toggleClass('highlight');
		};
		if (hl == "21-7") {
			$elementTable.find('span[title=21-7]').toggleClass('highlight');
		};
		if (hl == "21-8") {
			$elementTable.find('span[title=21-8]').toggleClass('highlight');
		};
		if (hl == "21-9") {
			$elementTable.find('span[title=21-9]').toggleClass('highlight');
		};
		if (hl == "21-10") {
			$elementTable.find('span[title=21-10]').toggleClass('highlight');
		};
		if (hl == "21-11") {
			$elementTable.find('span[title=21-11]').toggleClass('highlight');
		};
		if (hl == "22-1") {
			$elementTable.find('span[title=22-1]').toggleClass('highlight');
		};
		if (hl == "22-2") {
			$elementTable.find('span[title=22-2]').toggleClass('highlight');
		};
		if (hl == "22-3") {
			$elementTable.find('span[title=22-3]').toggleClass('highlight');
		};
		if (hl == "22-4") {
			$elementTable.find('span[title=22-4]').toggleClass('highlight');
		};
		if (hl == "22-5") {
			$elementTable.find('span[title=22-5]').toggleClass('highlight');
		};
		if (hl == "22-6") {
			$elementTable.find('span[title=22-6]').toggleClass('highlight');
		};
		if (hl == "22-7") {
			$elementTable.find('span[title=22-7]').toggleClass('highlight');
		};
		if (hl == "22-8") {
			$elementTable.find('span[title=22-8]').toggleClass('highlight');
		};
		if (hl == "22-9") {
			$elementTable.find('span[title=22-9]').toggleClass('highlight');
		};
		if (hl == "22-10") {
			$elementTable.find('span[title=22-10]').toggleClass('highlight');
		};
		if (hl == "22-11") {
			$elementTable.find('span[title=22-11]').toggleClass('highlight');
		};
		if (hl == "22-12") {
			$elementTable.find('span[title=22-12]').toggleClass('highlight');
		};
		if (hl == "22-13") {
			$elementTable.find('span[title=22-13]').toggleClass('highlight');
		};
		if (hl == "22-14") {
			$elementTable.find('span[title=22-14]').toggleClass('highlight');
		};
		if (hl == "22-15") {
			$elementTable.find('span[title=22-15]').toggleClass('highlight');
		};
		if (hl == "22-16") {
			$elementTable.find('span[title=22-16]').toggleClass('highlight');
		};
		if (hl == "22-17") {
			$elementTable.find('span[title=22-17]').toggleClass('highlight');
		};
		if (hl == "22-18") {
			$elementTable.find('span[title=22-18]').toggleClass('highlight');
		};
		if (hl == "22-19") {
			$elementTable.find('span[title=22-19]').toggleClass('highlight');
		};
		if (hl == "22-20") {
			$elementTable.find('span[title=22-20]').toggleClass('highlight');
		};
		if (hl == "22-21") {
			$elementTable.find('span[title=22-21]').toggleClass('highlight');
		};
		if (hl == "22-22") {
			$elementTable.find('span[title=22-22]').toggleClass('highlight');
		};
		if (hl == "22-23") {
			$elementTable.find('span[title=22-23]').toggleClass('highlight');
		};
		if (hl == "22-24") {
			$elementTable.find('span[title=22-24]').toggleClass('highlight');
		};
		if (hl == "22-25") {
			$elementTable.find('span[title=22-25]').toggleClass('highlight');
		};
		if (hl == "22-26") {
			$elementTable.find('span[title=22-26]').toggleClass('highlight');
		};
		if (hl == "22-27") {
			$elementTable.find('span[title=22-27]').toggleClass('highlight');
		};
		if (hl == "22-28") {
			$elementTable.find('span[title=22-28]').toggleClass('highlight');
		};
		if (hl == "22-29") {
			$elementTable.find('span[title=22-29]').toggleClass('highlight');
		};
		if (hl == "23-1") {
			$elementTable.find('span[title=23-1]').toggleClass('highlight');
		};
		if (hl == "23-2") {
			$elementTable.find('span[title=23-2]').toggleClass('highlight');
		};
		if (hl == "23-3") {
			$elementTable.find('span[title=23-3]').toggleClass('highlight');
		};
		if (hl == "23-4") {
			$elementTable.find('span[title=23-4]').toggleClass('highlight');
		};
		if (hl == "23-5") {
			$elementTable.find('span[title=23-5]').toggleClass('highlight');
		};
		if (hl == "24-1") {
			$elementTable.find('span[title=24-1]').toggleClass('highlight');
		};
		if (hl == "24-2") {
			$elementTable.find('span[title=24-2]').toggleClass('highlight');
		};
		if (hl == "24-3") {
			$elementTable.find('span[title=24-3]').toggleClass('highlight');
		};
		if (hl == "24-4") {
			$elementTable.find('span[title=24-4]').toggleClass('highlight');
		};
		if (hl == "24-5") {
			$elementTable.find('span[title=24-5]').toggleClass('highlight');
		};
		if (hl == "24-6") {
			$elementTable.find('span[title=24-6]').toggleClass('highlight');
		};
		if (hl == "24-7") {
			$elementTable.find('span[title=24-7]').toggleClass('highlight');
		};
		if (hl == "24-8") {
			$elementTable.find('span[title=24-8]').toggleClass('highlight');
		};
		if (hl == "24-9") {
			$elementTable.find('span[title=24-9]').toggleClass('highlight');
		};
		if (hl == "24-10") {
			$elementTable.find('span[title=24-10]').toggleClass('highlight');
		};
		if (hl == "25-1") {
			$elementTable.find('span[title=25-1]').toggleClass('highlight');
		};
		if (hl == "25-2") {
			$elementTable.find('span[title=25-2]').toggleClass('highlight');
		};
		if (hl == "25-3") {
			$elementTable.find('span[title=25-3]').toggleClass('highlight');
		};
		if (hl == "25-4") {
			$elementTable.find('span[title=25-4]').toggleClass('highlight');
		};
		if (hl == "25-5") {
			$elementTable.find('span[title=25-5]').toggleClass('highlight');
		};
		if (hl == "25-6") {
			$elementTable.find('span[title=25-6]').toggleClass('highlight');
		};
		if (hl == "25-7") {
			$elementTable.find('span[title=25-7]').toggleClass('highlight');
		};
		if (hl == "25-8") {
			$elementTable.find('span[title=25-8]').toggleClass('highlight');
		};
		if (hl == "25-9") {
			$elementTable.find('span[title=25-9]').toggleClass('highlight');
		};
		if (hl == "25-10") {
			$elementTable.find('span[title=25-10]').toggleClass('highlight');
		};
		if (hl == "25-11") {
			$elementTable.find('span[title=25-11]').toggleClass('highlight');
		};
		if (hl == "25-12") {
			$elementTable.find('span[title=25-12]').toggleClass('highlight');
		};
	});
});