//var role="Boss Sauce";
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").prepend(formattedRole);
//
//var name="Zach Attas";
//var formattedName = HTMLheaderName.replace("%data%", name);
//$("#header").prepend(formattedName);

//};
//bio["city"] = "Mountain View";
//bio.email = "zachy.attas";
////This is one style of writing to an object
//var work = {};
//work.position = "Prep Chef";
//work.employer = "Robinia LLC";
//work.years = "0.2"
//
//var education = {};
//education["name"] = "Wesleyan University";
//education["years"] = "2009-2013";
//education["city"] = "Middletown, CT";

var education = {
    "schools": [
        {
            "name": "Wesleyan Univ",
            "city": "MiddleT",
            "major": ["Philosophy", "science in society"]
        },
        {
            "name": "NVRHS",
            "city": "demarest NJ"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Robinia LLC",
            "title": "Prep Chef",
            "location": "Madison, WI",
            "dates": "Oct - February",
            "description": "Learned many knife skills and independent thinking"
        },
        {
            "employer": "Epic",
            "title": "QA",
            "location": "Verona, WI",
            "dates": "2013 - 2015",
            "description": "QA lyfe"
        }
    ]
};

var projects = {
    "project": [
        {
            "title": "IngredientSlam",
            "dates": "Live 2016",
            "description": "Search engine for recipes",
            "images": "image broken",
        },
        {
            "title": "Audico",
            "dates": "Live 2016",
            "description": "Search engine for audio",
            "images": "image broken",
        },
    ]
};

var bio = {
    "name": "Zach Attas",
    "role": "Web Wizard",
    "contacts": {
        "mobile": "551-206-8388",
        "email": "zach.attas@gmail.com",
        "github": "snackattas",
        "twitter": "ZachParmesan",
        "location": "Madison, WI"
    },
    "welcomeMessage": "Welcome to my first website, I hope you have fun here!",
    "skills": [
        "chillness", "crafts", "crode", "comeraderie"
    ],
    "biopic": "images/fry.jpg"
};

var num_skills = bio.skills.length
var formattedSkill = ""

if (num_skills > 0) {
    $("#header").append(HTMLheaderName);
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < (num_skills); i++) {
        formattedSkill += HTMLskills.replace("%data%", bio.skills[i]);
        console.log(formattedSkill);
    };
    $("#skills").append(formattedSkill);
} else {
    console.log("Not able to print out the skills!");
};

for (job in work.jobs) {
    if (work.jobs.hasOwnProperty(job)) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation+formattedDates+formattedDescription);
    };
};