portfolioApp.controller("mainController",function(e){e.message="Everyone come and see how good I look!",$("#home-link").addClass("selected-link"),$("#work-link").removeClass("selected-link"),$("#fun-link").removeClass("selected-link"),$("#contact-link").removeClass("selected-link")}),portfolioApp.controller("workController",function(e){e.message="work!",$("#work-link").addClass("selected-link"),$("#home-link").removeClass("selected-link"),$("#fun-link").removeClass("selected-link"),$("#contact-link").removeClass("selected-link")}),portfolioApp.controller("funController",function(e){e.message="fun page! parallax! wooo!",$("#fun-link").addClass("selected-link"),$("#home-link").removeClass("selected-link"),$("#work-link").removeClass("selected-link"),$("#contact-link").removeClass("selected-link")}),portfolioApp.controller("contactController",function(e){e.message="Contact page",$("#contact-link").addClass("selected-link"),$("#work-link").removeClass("selected-link"),$("#fun-link").removeClass("selected-link"),$("#home-link").removeClass("selected-link")});