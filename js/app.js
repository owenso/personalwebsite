window.onload=function(){
	$('#footerPhone').click(expandPhone);
	$('#footerEmail').click(expandEmail);
	$('#footerGithub').click(expandGithub);

};


var expandPhone = function(){
	$('#clickresult').hide().html('<p>Phone: 347-83-OWENS(9367)</p>').fadeIn(400);
};

var expandEmail = function(){
	$('#clickresult').hide().html('<p>Email: hi@owenso.com</p>').fadeIn(400);
};

var expandGithub = function(){
		$('#clickresult').hide().html('<p>https://github.com/owenso</p>').fadeIn(400);
}