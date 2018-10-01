//gian-students component
Vue.component('gian-item',{
    props: ['gian'],
    template:  '<tr>'+
  '<td valign="middle">{{gian.Sno}}).&nbsp;</td>'+
  '<td valign="top"><br><p class="style2"><strong>Course Title: </strong><span v-html="gian.title"></span><br/>'+
          '<strong>Offered By:</strong> <span v-html="gian.Offeredby"></span><br/>'+
          '<strong>Coordinator:</strong>{{gian.coordinator}}<br>'+
          '<strong>Course Schedule:</strong>{{gian.schedule}}<br>'+
           'To register for this course <a v-bind:href="gian.registerationLink" target="_blank">click here</a> | For course webpage&nbsp;<a v-bind:href="gian.courseWebpage" target="_blank">click here</a></p></td>'+
            '</tr>'
            
})

//gian-students object
var GianCourses = new Vue({
    el: '#gian',
    data: {
      GianCoursesList: 
      [    
        {
          Sno: '1',
          title: '<a href="GIAN/MSF_brochure_[10_days].pdf">Media Security and Forensics</a>',
          Offeredby: '<a href="http://www2.ece.rochester.edu/~gsharma/">Prof. Gaurav Sharma, </a>University of Rochester',
          coordinator: 'Dr. Surya Prakash',
          schedule: 'March 26 - April 06, 2018',
          registrationLink: "http://gian.iiti.ac.in/register.php",
          courseWebpage: "GIAN/MSF/index.html"
        },
        {
          Sno: '2',
          title: ' <a href="GIAN/APRTB_brochure_[5_days].pdf">Advanced Pattern Recognition Techniques for Biometrics</a>',
          Offeredby: '<a href="https://scholar.google.com/citations?user=DdyCvCgAAAAJ">Prof. Massimo Tistarelli, </a> University of Sassari, Italy.',
          coordinator: 'Dr. Surya Prakash',
          schedule: 'March 5 - 9, 2018',
          registrationLink: "http://gian.iiti.ac.in/register.php",
          courseWebpage: "GIAN/APRT/index.html"
        },
        {
          Sno: '3',
          title: '<a href="GIAN/GIAN-UbiquitousComputing.pdf">Ubiquitous Computing</a>',
          Offeredby: '<a href="http://utri.skku.ac.kr/professor">Prof. Hee Yong Youn,</a>Director, Ubiquitous Computing Technology Research Institute Sungkyunkwan University Suwon Korea',
          coordinator: 'Dr. Abhishek Srivastava',
          schedule: ' January 15 - 26, 2018',
          registrationLink: "http://gian.iiti.ac.in/register.php"
        },
        {
          Sno: '4',
          title: '<a href="http://people.iiti.ac.in/~somnathd/GIAN/">Data protection - from principles to practice</a>',
          Offeredby: '<a href="http://research.ntu.edu.sg/expertise/academicprofile/Pages/StaffProfile.aspx?ST_EMAILID=ANWITAMAN">Prof. Anwitaman Datta, </a>EPFL, Lausanne (Switzerland)',
          coordinator: 'Dr. Somnath Dey',
          schedule: ' December 18 - 22, 2017',
          registrationLink: "http://gian.iiti.ac.in/register.php"
        },
        {
          Sno: '5',
          title: '<a href="#">Fundamentals and Applications of the Principles of Optimization to various disciplines – Engineering, Business, Life Sciences ,Social Sciences and Physical Sciences</a>',
          Offeredby: '<a href="http://calstate.fullerton.edu/news/inside/2007/putcha.html">Prof. Chandrasekhar Putcha, </a> California State University, USA',
          coordinator: 'Dr. Neminath Hubballi',
          schedule: 'July 17-21, 2017',
          registrationLink: "http://gian.iiti.ac.in/register.php"
        },
        {
          Sno: '6',
          title: '<a href="GIAN/PMBP_data/brochure.pdf">Probabilistic models and Belief Propagation</a>',
          Offeredby: '<a href="http://www.ece.rochester.edu/~gsharma">Prof. Gaurav Sharma</a>, University of Rochester, USA',
          coordinator: 'Dr. Surya Prakash',
          schedule: 'August 01-10, 2016',
          registrationLink: "http://gian.iiti.ac.in/register.php",
          courseWebpage: "http://cse.iiti.ac.in/GIAN/PMBP_data/index.html"
        },
        {
          Sno: '7',
          title: ' <a href="GIAN/GIAN_Linear and Nonlinear Systems and Optimization with Applications in Medical Imaging, Optimal Design, and Graphics.pdf">Linear and Non-linear Systems with Applications in Medical  Imaging, Optimal Design, and Graphics</a>',
          Offeredby: '<a href="http://www.math.vt.edu/people/sturler">Prof. Eric de Sturler, </a>Virginia Tech, USA',
          coordinator: 'Dr. Kapil Ahuja',
          schedule: 'July 25 - August 05, 2016',
          registrationLink: "http://gian.iiti.ac.in/register.php"
        },
        {
          Sno: '8',
          title: '<a href="GIAN/GIAN_Neural Network Learning Theory-Advanced Topics.pdf">Neural Network Learning Theory-Advanced Topics</a>',
          Offeredby: '<a href="http://www.ntu.edu.sg/home/ssundaram">Dr. Suresh Sundaram</a>, Nanyang Technological University  Singapore',
          coordinator: 'Dr. Aruna Tiwari',
          schedule: 'July 06 -  15, 2016',
          registrationlink: "http://gian.iiti.ac.in/register.php",
          courseWebpage: "GIAN/Pictures/GIAN_AT/test/at.html"
        },
        {
          Sno: '9',
          title: '<a href="http://iiti.ac.in/GIAN/course_Brochure/GIAN-Course-IITI-in-BigData.pdf"> Basic Concepts and Issues in Big Data Management</a>',
          Offeredby: '<a href="http://www.math.vt.edu/people/sturler">Prof. Dr. Spyratos Nicholas, </a>University of Paris-South, France',
          coordinator: ' Dr. Gourinath Banda',
          schedule: 'December 05 -  17, 2016',
          registrationLink: "http://gian.iiti.ac.in/register.php"
        }
      ]
  }
})
