/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Jyotirmoy Roy",
	"role": "Postgrad IT Student",
	"contacts": {
		"mobile": 32164656,
		"email": "dsfds@gmail.com",
		"github": "roy09",
		"twitter": "roy09",
		"location": "Sydney"
	},
	"welcomeMessage": "Pls, I'm just learning. Disregard anything you see.",
	"skills": [
		"Python", "Javascrpt", "Java"
	],
	"biopic": "images/fry.jpg"
}

var education = {
	"schools" : [
	{
		"name": "University of Sydney",
		"city": "Sydney",
		"degree": "Masters in IT and IT Management",
		"major": "Research Pathway",
		"dates": 2019,
		"url": "sydney.edu.au"
	},
	{
		"name": "BRAC University",
		"city": "Dhaka",
		"degree": "Bachelor in Computer Science",
		"major": "CS",
		"dates": 2016,
		"url": "bracu'ac.bd"
	}
	],
	"onlineCourses":[
	{
		"title": "Machine Learning Nanodegree",
		"school": "Udacity",
		"dates": 2016,
		"url": "udacity.com"
	}]
}

var work = {
	"jobs":[
	{
		"employer": "University of Sydney",
		"title": "Digital Intern",
		"dates": "2016 - Present",
		"description": "A noob wiz in the making"
	},
	{
		"employer": "BRAC University",
		"title": "Teaching Assistant",
		"dates": "2014 - 2015",
		"description": "Tutor for Data Structure"
	}
	]
}

var projects = {
	"projects": [
		{
			"title": "Analysis of Brightkite Dataset",
			"dates": 2017,
			"desc": "Analysis of network growth and six degrees of seperation",
			"images" : [
				"images/fry.jpg",
				"images/fry.jpg"
			]
		}
	]
}


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName);


	var formatedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formatedPhone, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

	$("#header").append(formattedImage,formattedMessage);
	
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	};

	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	
	$("#footerContacts").append(formattedMobile,formattedEmail);
	
};

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDesc);
	}
}

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].desc);
		$(".project-entry:last").append(formattedDesc);


		for (image in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
		
	}
}

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);