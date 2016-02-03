//This programme hides additional texts and makes them visible, once the symbol is hovered over
$(document).ready(function() {
    $('.extratext1').hide(); //the passages are hidden
    $('.extratext2').hide();
    var cancel = false; // a Boolean variable to check if the the text is hidden
    var cancel1 = false;
    $('.extra, .extratext1').hover(function() {
        cancel = !cancel; //the Boolean variable becomes True 
        if (!cancel) {
            $('.extratext1').hide(); //if the variable is not True, the passage is hidden again
        } else if (cancel) {
            $('.extratext1').show(); // otherwise it is shown and displayed on a higher level than the rest of the text and gets a little border to make it better readable
            $('.extratext1').css({'position':'absolute', 'padding':'1em', 'width':'50em', 'background-color':'#f1f1f1', 'border':'outset 1px black', 'z-index':'2', 'box-shadow':'0 0.5em 0.5em grey'});   
            }
    });
    $('.extra1, .extratext2').hover(function() {
        cancel1 = !cancel1; //the Boolean variable becomes True 
        if (!cancel1) {
            $('.extratext2').hide(); //if the variable is not True, the passage is hidden again
        } else if (cancel1) {
            $('.extratext2').show(); // otherwise it is shown and displayed on a higher level than the rest of the text and gets a little border to make it better readable
            $('.extratext2').css({'position':'absolute', 'padding':'1em', 'width':'50em', 'background-color':'#f1f1f1', 'border':'outset 1px black', 'z-index':'2', 'box-shadow':'0 0.5em 0.5em grey'});   
            }
    });
});