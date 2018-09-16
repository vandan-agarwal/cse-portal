//Faculty members-components
Vue.component('faculty-item',{
    props: ['Faculty'],
    template:  '<div class="col-sm-4" style="margin-bottom: 20px;">'+
            '<div class="cardnew" style="height: 500px;">'+
                '<img class="faculty_image" v-bind:src="Faculty.img" style="margin-left: 15%; margin-top: 10px;"/>'+
                '<div class="cardnew-heading" style="height: 39px;">'+
                    '<a v-bind:href="Faculty.profileLink"  style="text-decoration: none;  top: 500px;" ><h3 class="cardnew-header">{{Faculty.name}}</h3></a>'+ 
                '</div>'+
                '<div class="cardnew-content" style="height: 170px; top: 300px; overflow-y: scroll; text-align: left; padding-left: 10%;">'+
                    '<em>PhD, {{Faculty.phdFrom}}</em><br/>'+
                    '<span v-html="Faculty.currentPost"></span><br/>'+
                    '<strong>Research Interests : </strong>{{Faculty.ResearchInterest}}<br/>'+
                    '<strong>e-mail:</strong> {{Faculty.email}}<br/>'+
                '</div>'+
                '<a class="Read-more" v-bind:href="Faculty.profileLink" target="_newTab">Read more <span class="glyphicon glyphicon-new-window"></span></a>'+
            '</div>'+
    '</div>'
})

//Faculty-members-object
var FacultyMembers = new Vue({
    el: '#FacultyMembers',
    data: {
      FacultyList:
      [    { 
            name: "Dr. Abhishek Srivastava",
            img: 'faculty_pics/abhishek.jpg',
            phdFrom: "University of Alberta, Edmonton, Canada",
            currentPost: "Associate Professor " ,
            ResearchInterest: "Service-Oriented Systems, Dynamic Systems, Geographically Distributed Development Environments, Agile Techniques, Software-as-a-Service." ,
            email: "asrivastava@iiti.ac.in",
            profileLink: "http://www.iiti.ac.in/people/~asrivastava"
        },
         { 
            name: "Dr. Aruna Tiwari",
            img: 'faculty_pics/aruna.jpg',
            phdFrom: "RGPV Bhopal",
            currentPost: "Associate Professor " ,
            ResearchInterest: "Soft Computing Techniques, Neural Network Learning Algorithms, Genetic Algorithms/Evolutionary Approaches." ,
            email: "artiwari@iiti.ac.in",
            profileLink: "http://iiti.ac.in/people/~artiwari/"
        },
        { 
            name: "Dr. Anirban Sengupta",
            img: 'faculty_pics/anirban.jpg',
            phdFrom: "Ryerson University, Toronto, Canada ",
            currentPost: "Associate Professor" ,
            ResearchInterest: "CAD-VLSI, EDA, High Level Synthesis, IP core Security, Hardware Trojan, Fault Security, Digital Watermark in digital chip, Optimization of Hardware Accelerators, Design Automation." ,
            email: "asengupt@iiti.ac.in",
            profileLink: "http://www.iiti.ac.in/people/~asengupt"
        }, 
        { 
            name: "Dr. Bodhisatwa Mazumdar",
            img: 'faculty_pics/bodhi.jpg',
            phdFrom: "IIT Kharagpur",
            currentPost: "Associate Professor " ,
            ResearchInterest: "Hardware Security, Side-channel Analysis, Cryptography, Digital VLSI Design." ,
            email: "bodhisatwa@iiti.ac.in",
            profileLink: "http://iiti.ac.in/people/~bodhisatwa/"
        }, 
        { 
            name: "Dr. Gourinath Banda",
            img: 'faculty_pics/gourinath.jpg',
            phdFrom: "CBIT, Roskilde University",
            currentPost: "Associate Professor " ,
            ResearchInterest: "Embedded Systems (Cyber-physical systems, Internet-of-Things, Wireless Sensor Networks, etc.) and theirÂ Formal Verification (Model Checking, Abstract Interpretation, Program Transformation and Generation, Program Analysis),Â Semantics-based Emulation of Languages and Systems." ,
            email: "gourinath@iiti.ac.in",
            profileLink: "http://iitiiot.bitbucket.org/index.html"
        },
         { 
            name: "Dr. Kapil Ahuja",
            img: 'faculty_pics/kapil.jpg',
            phdFrom: "Virginia Tech",
            currentPost: "Associate Professor " ,
            ResearchInterest: "Numerical Linear Algebra, Numerical Analysis, Computational Science and Engineering." ,
            email: "kahuja@iiti.ac.in",
            profileLink: "http://www.iiti.ac.in/people/~kahuja/"
        },
        { 
           name: "Dr. Narendra S. Chaudhari",
           img: 'faculty_pics/nsc.jpg',
           phdFrom: "IIT Bombay",
           currentPost: "Professor (currently on deputation to VNIT Nagpur as Director)" ,
           ResearchInterest: "Algorithms, Theoretical Computer Science, Soft Computing, Game Artificial Intellignce (AI)." ,
           email: "nsc@iiti.ac.in",
           profileLink: "http://iiti.ac.in/people/~narendra/"
        },
        { 
           name: "Dr. Neminath Hubballi",
           img: 'faculty_pics/neminath.jpg',
           phdFrom: "IIT Guwahati",
           currentPost: "Associate Professor " ,
           ResearchInterest: " Network Security, System Security, Cloud Security, Dependable Systems and Data Mining." ,
           email: "neminath@iiti.ac.in",
           profileLink: "http://iiti.ac.in/people/~neminath/"
        },
         { 
            name: "Dr. Somnath Dey",
            img: 'faculty_pics/somnath.jpg',
            phdFrom: "IIT Kharagpur",
            currentPost: "Assistant Professor " ,
            ResearchInterest: "Human Computer Interaction, Image Processing, Computer Graphics, Biometric Security." ,
            email: "somnathd@iiti.ac.in",
            profileLink: "http://www.iiti.ac.in/people/~asrivastava"
        },
         { 
            name: "Dr. Surya Prakash",
            img: 'faculty_pics/surya.jpg',
            phdFrom: "IIT Kanpur",
            currentPost: "Assistant Professor and <b>Head</b>" ,
            ResearchInterest: "Pattern Recognition, Computer Vision, Image Processing, Biometrics." ,
            email: "surya@iiti.ac.in",
            profileLink: "http://www.iiti.ac.in/people/~surya"
        }
        
        ]
    }
})