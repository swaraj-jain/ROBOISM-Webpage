alumni_list = [
  {
    "Timestamp": "7/4/2020 19:24:52",
    "Year": "-2019",
    "branch": " Cipher System",
    "image-link": "./img/members/A Sai Ruthvik.jpg",
    "linkedin": "https://www.linkedin.com/in/sairuthvik",
    "mail": "ruthvik2548@gmail.com",
    "name": "A Sai Ruthvik"
  },
  {
    "Timestamp": "7/5/2020 8:31:57",
    "Year": "-2020",
    "branch": " Digit Insurance",
    "github": "https://github.com/Mittaladitech",
    "image-link": "./img/members/Aditya Mittal.jpg",
    "linkedin": "https://www.linkedin.com/in/adityamittal12/",
    "mail": "adityamittaliitism@gmail.com",
    "name": "Aditya Mittal"
  },
  {
    "Timestamp": "7/4/2020 21:29:11",
    "Year": "-2020",
    "branch": "Samsung Research Institute",
    "image-link": "./img/members/Deepak Agrawal.jpg",
    "linkedin": "https://www.linkedin.com/in/deepak-agrawal-810853177",
    "mail": "deepak1140488@gmail.com",
    "name": "Deepak Agrawal"
  },
  {
    "Timestamp": "7/4/2020 20:39:32",
    "Year": "-2020",
    "branch": "CGI India",
    "github": "https://github.com/deepak4669",
    "image-link": "./img/members/Deepak Goyal.jpg",
    "linkedin": "https://www.linkedin.com/in/deepak4669/",
    "mail": "deepak4669@gmail.com",
    "name": "Deepak Goyal"
  },
  {
    "Timestamp": "7/4/2020 19:56:19",
    "Year": "-2020",
    "branch": "Paytm",
    "image-link": "./img/members/Deepak Jain.jpg",
    "linkedin": "https://www.linkedin.com/in/deepak-jain-1a6853177",
    "mail": "deepak1998jain@gmail.com",
    "name": "Deepak Jain"
  },
  {
    "Timestamp": "7/5/2020 13:21:05",
    "Year": "-2020",
    "branch": "Microsoft",
    "image-link": "./img/members/Hitesh Kumar.jpg",
    "mail": "hkhitesh25@gmail.com",
    "name": "Hitesh Kumar"
  },
  {
    "Timestamp": "7/4/2020 19:45:19",
    "Year": "-2020",
    "branch": "Reliance Jio",
    "github": "https://github.com/gupta-mayank417",
    "image-link": "./img/members/Mayank Gupta.jpg",
    "linkedin": "https://www.linkedin.com/in/mayank-gupta-bb4699145",
    "mail": "gupta.mayank417@gmail.com",
    "name": "Mayank Gupta"
  },
  {
    "Timestamp": "7/5/2020 12:15:48",
    "Year": "-2020",
    "branch": "TechnipFMC",
    "image-link": "./img/members/Mayank Mathur.jpg",
    "linkedin": "https://www.linkedin.com/in/mayank-mathur-679621148",
    "mail": "m.mathur.1605@gmail.com",
    "name": "Mayank Mathur"
  },
  {
    "Timestamp": "7/5/2020 12:20:52",
    "Year": "-2017",
    "branch": "Machine Learning Engineer, Niveshi",
    "github": "https://github.com/markroxor",
    "image-link": "./img/members/Mohit Rathore.jpg",
    "linkedin": "https://linkedin.com/in/markroxor/",
    "mail": "mrmohitrathoremr@gmail.com",
    "name": "Mohit Rathore"
  },
  {
    "Timestamp": "7/5/2020 12:20:52",
    "Year": "-2020",
    "branch": "Sling Media",
    "image-link": "./img/members/Mudassar Raza.jpg",
    "mail": "mudassar.raza1312@gmail.com",
    "name": "Mudassar Raza"
  },
  {
    "Timestamp": "7/5/2020 0:15:31",
    "Year": "-2019",
    "branch": "Master in Embedded System TU Delf,Netherland",
    "github": "https://github.com/matiyau",
    "image-link": "./img/members/Nishad Mandlik.jpg",
    "linkedin": "https://www.linkedin.com/in/matiyau/",
    "mail": "mandliksg@gmail.com",
    "name": "Nishad Mandlik"
  },
  {
    "Timestamp": "7/5/2020 0:15:31",
    "Year": "-2019",
    "branch": " Quantiphi",
    "github": "https://github.com/Neelesh1121",
    "image-link": "./img/members/Neelesh Yadav.jpg",
    "linkedin": "https://www.linkedin.com/in/neelesh932/",
    "mail": "neelesh932@gmail.com",
    "name": "Neelesh Yadav"
  },
  {
    "Timestamp": "7/5/2020 13:53:39",
    "Year": "-2018",
    "branch": "JRF @ DRDO",
    "image-link": "./img/members/Suyash Shandilya.jpg",
    "linkedin": "https://www.linkedin.com/in/suyash23/",
    "mail": "su.sh2396@gmail.com",
    "name": "Suyash Shandilya"
  },
  {
    "Timestamp": "7/5/2020 13:53:39",
    "Year": "-2020",
    "branch": "OYO",
    "github": "https://github.com/UmangLilha/",
    "image-link": "./img/members/umang lilha.jpg",
    "linkedin": "https://www.linkedin.com/in/umang-lilha-981521151",
    "mail": "umanglilha@gmail.com",
    "name": "umang lilha"
  }
];

function add_new_member(name, branch, year, mail, github, linkedin, image) {
    console.log(image, image.length);
    var new_member = '<div class="col-md-4" id="oc">'
                        +'<div id="sym1">'
                            +'<div class="fornt"><img style="height:84%" src='+image+' alt="img"><h2 id="fn">'+name+'</h2></div>'
                            +'<div class="back">'
                                +'<h2 >'+ name +'</h2>'
                                +'<hr style="margin-bottom: 1%;">'
                                +'<p id="textb">'+ branch +'</p>'
                                +'<p  id="textb">'+year+'</p>'
                                +'<a href="mailto:'+mail+' add target="_blank" class="slo" style="padding-left: 1.6rem;" ><i class="fas fa-envelope"></i></a>'
                                +'<a href='+github+' add target="_blank" class="slo" ><i class="fab fa-github"></i></a>'
                                +'<a href='+linkedin+' add target="_blank" class="slo"><i class="fab fa-linkedin-in icon"></i></a>'
                            +'</div>'
                        +'</div>'
                    +'</div>';   
    
    $('.row').append(new_member)
}

function add_alumni(){
    alumni_list.forEach(member => {
        name = member['name'];
        branch = member['branch'];
        year = member['Year'];
        mail = member['mail'];
        github = member['github'];
        linkedin = member['linkedin'];
        image = member['image-link'];
        image = encodeURI(image);
        add_new_member(name, branch, year, mail, github, linkedin, image);
        console.log(name);
    });
}

add_alumni();