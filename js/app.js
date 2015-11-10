window.onload=function(){
	$('#footerPhone').click(expandPhone);
	$('#footerEmail').click(expandEmail);
	$('#footerGithub').click(expandGithub);


};

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: console.log('left key');
        break;

        case 39: console.log('right key');
        break;


        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


var expandPhone = function(){
	$('#clickresult').hide().html('<p>Phone: 347-83-OWENS(69367)</p>').fadeIn(400);
};

var expandEmail = function(){
	$('#clickresult').hide().html('<p>Email: hi@owenso.com</p>').fadeIn(400);
};

var expandGithub = function(){
		$('#clickresult').hide().html('<p><a href="https://github.com/owenso" target="_blank">https://github.com/owenso</a></p>').fadeIn(400);
}