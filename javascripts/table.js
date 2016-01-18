$(document).ready(function() { //this programme starts once the mainpage is loaded completely
    var $firstTable = $('#thuc115'); //a variable is created for each table, according to its id
    $firstTable.hide();                       //and then immediately hidden
    var $secTable = $('#thuc116');
    $secTable.hide();
    var $rdTable = $('#thuc117');
    $rdTable.hide();
    var $4thTable = $('#dio27');
    $4thTable.hide();
    var $5thTable = $('#dio28');
    $5thTable.hide();
    var $6thTable = $('#per24');
    $6thTable.hide();
    var $7thTable = $('#per25');
    $7thTable.hide();
    var $8thTable = $('#per26');
    $8thTable.hide();
    var $9thTable = $('#per27');
    $9thTable.hide();
    var $10thTable = $('#per28');
    $10thTable.hide();
    var $11thTable = $('#them2');
    $11thTable.hide();
    var $12thTable = $('#vh714');
    $12thTable.hide();
    var $13thTable = $('#vesp281');
    $13thTable.hide();
    var $14thTable = $('#vesp283');
    $14thTable.hide();
    var $15thTable = $('#pax697');
    $15thTable.hide();
    var $16thTable = $('#per37');
    $16thTable.hide();
    var $17thTable = $('#asp');
    $17thTable.hide();
    var $18thTable = $('#demop');
    $18thTable.hide();
    var $19thTable = $('#thuc321');
    $19thTable.hide();
    var $20thTable = $('#thuc3131');
    $20thTable.hide();
    var $21stTable = $('#ath603e');
    $21stTable.hide();
    var $22ndTable = $('#schol');
    $22ndTable.hide();
    var $23rdTable = $('#phot1');
    $23rdTable.hide();
    var $24thTable = $('#phot2');
    $24thTable.hide();
    var $25thTable = $('#vh29');
    $25thTable.hide();
    var $26thTable = $('#isoc15111');
    $26thTable.hide();
    var $27thTable = $('#ath328c');
    $27thTable.hide();
    var $28thTable = $('#nh781');
    $28thTable.hide();
    var $29thTable = $('#ath533e');
    $29thTable.hide();
    var $30thTable = $('#paro');
    $30thTable.hide();
    var $31stTable = $('#nep12');
    $31stTable.hide();
    var $32ndTable= $('#thuc757');
    $32ndTable.hide();
    var $33rdTable = $('#pol384');
    $33rdTable.hide();
    var $34thTable=$('#ath572f');
    $34thTable.hide();
    var $35thTable = $('#thuc234');
    $35thTable.hide();
    var $36thTable = $('#rhet1734');
    $36thTable.hide();
    var $37thTable = $('#rhet3107');
    $37thTable.hide();
    var $38thTable = $('#hdt');
    $38thTable.hide();
    var $39thTable = $('#suppl');
    $39thTable.hide();
    var $40thTable = $('#ath99d');
    $40thTable.hide();
    var $41stTable = $('#per8');
    $41stTable.hide();
    var $42ndTable = $('#harpger');
    $42ndTable.hide();
    var $43rdTable = $('#isocger');
    $43rdTable.hide();
    var $44thTable = $('#rhet1734ger');
    $44thTable.hide();
    var $45thTable= $('#rhet3107ger');
    $45thTable.hide();
    var $46thTable =$('#dio122728mar');
    $46thTable.hide();
    var $47thTable = $('#plutthem2mar');
    $47thTable.hide();
    var $48thTable = $('#aelvh714mar');
    $48thTable.hide();
    $('a.more').click(function() {  //according to the user"s click, a table's visibility is toggled
        $firstTable.fadeToggle('slow'); 
        var $link = $(this);  //the links text is cached in this variable
        if ($link.text() == 'See Thuc. 1.115') {  //if the text was 'See tablewhatsoever' the text is changed to 'undo selection'
            $link.text('undo selection'); 
        } else { 
            $link.text('See Thuc. 1.115');  //otherwise the text is switched to 'See tablewhatsoever'
            } 
        return false;  //the standardfunction of the link is delayed to prevent a reload of the page
    });
    $('a.morea').click(function() {
         $secTable.fadeToggle('slow');
         var $link = $(this); 
         if ($link.text() == 'See Thuc. 1.116') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Thuc. 1.116'); 
            } 
        return false; 
    });
    $('a.moreb').click(function() {
        $rdTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Thuc. 1.117') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Thuc. 1.117'); 
            } 
        return false; 
    });
    $('a.morec').click(function() {
        $4thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Dio 12.27') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Dio 12.27'); 
            } 
        return false; 
    });
    $('a.mored').click(function() {
        $5thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Dio 12.28') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Dio 12.28'); 
            } 
        return false; 
    });
    $('a.moree').click(function() {
        $6thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plut. Per. 24') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plut. Per. 24'); 
            } 
        return false; 
    });
    $('a.moref').click(function() {
       $7thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plut. Per. 25') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plut. Per. 25'); 
            } 
        return false; 
    });
    $('a.moreg').click(function() {
        $8thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plut. Per. 26') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plut. Per. 26'); 
            } 
        return false; 
    });
    $('a.moreh').click(function() {
        $9thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plut. Per. 27') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plut. Per. 27'); 
            } 
        return false; 
    });
    $('a.morei').click(function() {
        $10thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plut. Per. 28') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plut. Per. 28'); 
            } 
        return false; 
    });
    $('a.morej').click(function() {
        $11thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plut. Them. 2') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plut. Them. 2'); 
            } 
        return false; 
    });
    $('a.morek').click(function() {
        $12thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ael. V. H. 7.14') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ael. V. H. 7.14'); 
            } 
        return false; 
    });
    $('a.morel').click(function() {
        $13thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Arist. Vesp. 281') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Arist. Vesp. 281'); 
            } 
        return false;
    });
    $('a.morem').click(function() {
        $14thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Schol. in Arist. Vesp. 283') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Schol. in Arist. Vesp. 283'); 
            } 
        return false;
    });
    $('a.moren').click(function() {
        $15thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Schol. in Arist. Pax 697') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Schol. in Arist. Pax 697'); 
            } 
        return false;
    });
    $('a.moreo').click(function() {
        $16thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plut. Per. 37') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plut. Per. 37'); 
            } 
        return false;
    });
    $('a.morep').click(function() {
        $17thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Harp. Aspasia') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Harp. Aspasia'); 
            } 
        return false;
    });
    $('a.moreq').click(function() {
        $18thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Sud. Δημοποίητος') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Sud. Δημοποίητος'); 
            } 
        return false;
    });
    $('a.morer').click(function() {
        $19thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Thuc. 3.2.1') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Thuc. 3.2.1'); 
            } 
        return false;
    });
    $('a.mores').click(function() {
        $20thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Thuc. 3.13.1') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Thuc. 3.13.1'); 
            } 
        return false;
    });
    $('a.moret').click(function() {
        $21stTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ath. 13.603e') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ath. 13.603e'); 
            } 
        return false;
    });
    $('a.moreu').click(function() {
        $22ndTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Schol. in Ar.') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Schol. in Ar.'); 
            } 
        return false;
    });
    $('a.morev').click(function() {
        $23rdTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Phot. Σαμίων ὁ δῆμος') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Phot. Σαμίων ὁ δῆμος'); 
            } 
        return false;
    });
    $('a.morew').click(function() {
        $24thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Phot. τὰ Σαμίων') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Phot. τὰ Σαμίων'); 
            } 
        return false;
    });
    $('a.morex').click(function() {
        $25thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ael. V.H. 2.9') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ael. V.H. 2.9'); 
            } 
        return false;
    });
    $('a.morey').click(function() {
        $26thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Isoc. 15.111') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Isoc. 15.111'); 
            } 
        return false;
    });
    $('a.morez').click(function() {
        $27thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ath. 8.328c') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ath. 8.328c'); 
            } 
        return false;
    });
    $('a.more1').click(function() {
        $28thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plin. N. H. 7.81') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plin. N. H. 7.81'); 
            } 
        return false;
    });
    $('a.more2').click(function() {
        $29thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ath. 12.533e') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ath. 12.533e'); 
            } 
        return false;
    });
    $('a.more3').click(function() {
        $30thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Paroemigraphi Gr.') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Paroemigraphi Gr.'); 
            } 
        return false;
    });
    $('a.more4').click(function() {
        $31stTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Nep. Timoth. 1.2') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Nep. Timoth. 1.2'); 
            } 
        return false;
    });
    $('a.more5').click(function() {
        $32ndTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Thuc. 7.57.3-4') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Thuc. 7.57.3-4'); 
            } 
        return false;
    });
    $('a.more6').click(function() {
        $33rdTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ar. Pol. 3.8.4') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ar. Pol. 3.8.4'); 
            } 
        return false;
    });
    $('a.more7').click(function() {
        $34thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ath. 13.572f') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ath. 13.572f'); 
            } 
        return false;
    });
     $('a.more8').click(function() {
        $35thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Thuc. 2.34.1-7') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Thuc. 2.34.1-7'); 
            } 
        return false;
    });
    $('a.more9').click(function() {
        $36thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ar. Rhet. 1.7.34') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ar. Rhet. 1.7.34'); 
            } 
        return false;
    });
    $('a.more10').click(function() {
        $37thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ar. Rhet. 3.10.7') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ar. Rhet. 3.10.7'); 
            } 
        return false;
    });
    $('a.more11').click(function() {
        $38thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Hdt. 7.162') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Hdt. 7.162'); 
            } 
        return false;
    });
    $('a.more12').click(function() {
        $39thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Eurip. Suppl. 447-449') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Eurip. Suppl. 447-449'); 
            } 
        return false;
    });
    $('a.more13').click(function() {
        $40thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ath. 3.99d') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ath. 3.99d'); 
            } 
        return false;
    });
    $('a.more14').click(function() {
        $41stTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plut. Per. 8') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plut. Per. 8'); 
            } 
        return false;
    });
    $('a.more15').click(function() {
        if ($42ndTable.is(':hidden')) {
                $42ndTable.fadeIn('slow');
                $(this).text('undo selection');
                } else {
                    $42ndTable.fadeOut('slow');
                    $(this).text('See Harp. Aspasia Ger');
                    }
        return false;
    });
        $('a.more16').click(function() {
        $43rdTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Isoc. 15.111 Ger') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Isoc. 15.111 Ger'); 
            } 
        return false;
    });   
    $('a.more17').click(function() {
        $44thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ar. Rhet. 1.7.34 Ger') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ar. Rhet. 1.7.34 Ger'); 
            } 
        return false;
    });
        $('a.more18').click(function() {
        $45thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ar. Rhet. 3.10.7 Ger') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ar. Rhet. 3.10.7 Ger'); 
            } 
        return false;
    });
    $('a.more19').click(function() {
        $46thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Dio 12.27/28') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Dio 12.27/28'); 
            } 
        return false;
        });
        $('a.more20').click(function() {
        $47thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Plut. Them. 2') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Plut. Them. 2'); 
            } 
        return false;
        });
        $('a.more21').click(function() {
        $48thTable.fadeToggle('slow');
        var $link = $(this); 
        if ($link.text() == 'See Ael. V.H.7.14') { 
                 $link.text('undo selection'); 
        } else { 
            $link.text('See Ael. V.H.7.14'); 
            } 
        return false;
        });
});