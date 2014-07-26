/**
@author Jeremy Jao

Functions so I don"t have to retype parts of the file...
*/

function header(title) {
	document.write(
		"<title>" + title + "</title>" +
		"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"></meta>" +
		"<link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\">" +
		"<link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css\">" +
		"<script src=\"http://code.jquery.com/jquery-1.11.0.min.js\"></script>" +
		"<script src=\"http://code.jquery.com/jquery-migrate-1.2.1.min.js\"></script>" +
		"<script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"></script>"
	);
}
private function whichIsActive(number) {
	active = []
	for(var i=0;i<6;++i) {
		if(i == number)
			active[i] = "True";
		else
			active[i] = "False";
	}
	return active;
	
}
function navbar(headerNumber) {
	var setActive = whichIsActive(headerNumber);
	document.write(
	"<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">" +
		"<div class=\"container-fluid\">" +
			"<div class=\"navbar-header\">" +
				"<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#mobile-collapse\">" +
					"<span class=\"sr-only\">Toggle Navigation</span>" +
					"<span class=\"icon-bar\"></span>" +
				"</button>" +
			"<a class=\"navbar-brand\" href=''>Jeremy Jao</a>" +
			"</div>" +
			"<div class=\"collapse navbar-collapse\" id=\"mobile-collapse\">" +
				"<ul class=\"nav navbar-nav\">" +
					"<li><a href=\"#\">Hello</a></li>" +
					"<li><a href=\"#\">Who Am I?</a></li>" +
					"<li class=\"dropdown\">" +
						"<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">What Have I done....<span class=\"caret\"></span></a>" +
					"</li>" +
					"<li><a href=\"#\">EMR Meaningful Use Blog</a></li>" +
					"<li><a href=\"#\">Current Projects</a></li>" +
				"</ul>" +
				"<ul class=\"nav navbar-nav navbar-right\">" +
					"<li><a href=\"#\">Contact Me</a></li>" +
				"</ul>" +
			"</div>" +
		"</div>" +
	"</nav>"
	);
}