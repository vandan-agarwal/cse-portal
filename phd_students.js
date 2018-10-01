//phd-students component
Vue.component('phd-item',{
    props: ['phd'],
    template:  
            '<div class="col-sm-3" style="margin-bottom: 15px;">'+
            '<div class="cardnew" style="height: 345px;">'+
                '<img class="student_image" v-bind:src="phd.img" style="margin-top: 10px;">'+
                '<div class="cardnew-heading" style="height: 32px;">'+
                    '<a v-bind:href="phd.profileLink"  style="text-decoration: none;"><h4 class="cardnew-header">{{phd.name}}</h4></a>'+
                '</div>'+  
                '<div class="cardnew-content" style="height: 100px; top: 240px; overflow-y: scroll; text-align: left; padding-left: 10%;"><b>User-ID :</b> {{phd.userId}}<br><b>Research Area :</b> {{phd.research}}<br><b>e-mail :</b> {{phd.userId}} [AT] iiti [dot] ac [dot] in</div>'+
            '</div>'+
  '</div>' 
})

//phd-students object
var PhdStudents = new Vue({
    el: '#PhdStudents',
    data: {
      PhdList:
       [    
            {                      
                img: 'stu_pics/phd/phd (1).jpg',
                name: 'Raj Kumar Jain',
                profileLink: 'http://people.iiti.ac.in/~rkjain',
                research: 'Cluster Analysis',
                userId: 'rkjain'
            },
            {                      
                img: 'stu_pics/phd/phd (34).jpg',
                name: 'Prakash Chandra Sharma ',
                profileLink: 'http://people.iiti.ac.in/~pcsharma',
                research: 'Scheduling in Cellular Network',
                userId: ' pcsharma'
            },

            {          
                img: 'stu_pics/phd/phd (2).jpg',
                name: 'Ashish Jain',
                profileLink: 'http://people.iiti.ac.in/~phd11120101',
                research: 'Analysis and Design of Cryptography and Network Security Algorithms',
                userId: 'phd11120101'
            },
            {          
                img: 'stu_pics/phd/phd (3).jpg',
                name: 'Dheeraj Rane',
                profileLink: 'http://people.iiti.ac.in/~phd11120102',
                research: 'Performance Evaluation in Cloud Computing',
                userId: 'phd11120102'
            },
            {          
                img: 'stu_pics/phd/phd (4).jpg',
                name: 'Rakesh Kumar Sahu',
                profileLink: 'http://people.iiti.ac.in/~phd11120103',
                research: 'Efficient Routing in Wirelesss Ad-hoc Network',
                userId: 'phd11120103'
            },
            {          
                img: 'stu_pics/phd/phd (5).jpg',
                name: 'Rajat Saxena',
                profileLink: 'http://people.iiti.ac.in/~phd11120104',
                research: 'Security Issues in Cloud Computing',
                userId: 'phd11120104'
            },
            {          
                img: 'stu_pics/phd/phd (6).jpg',
                name: 'Rohit Verma',
                profileLink: 'http://people.iiti.ac.in/~phd12110101',
                research: 'Web Services',
                userId: 'phd12110101'
            },
            {          
                img: 'stu_pics/phd/phd (7).jpg',
                name: 'Shruti Bhillare',
                profileLink: 'http://people.iiti.ac.in/~phd12110103',
                research: 'Anti-spoofing in Hand Biometrics',
                userId: 'phd12110103'
            },
            {          
                img: 'stu_pics/phd/phd (8).jpg',
                name: 'Pramod Mane',
                profileLink: 'http://people.iiti.ac.in/~phd12110104',
                research: 'Game Theoretic Aspects of Social Cloud',
                userId: 'phd12110104'
            },
            {          
                img: 'stu_pics/phd/phd (9).jpg',
                name: 'Piyush Joshi',
                profileLink: 'http://people.iiti.ac.in/~phd1301101004',
                research: '',
                userId: ' phd1301101004'
            },

            {          
                img: 'stu_pics/phd/phd (10).jpg',
                name: 'Syed Sadaf Ali',
                profileLink: 'http://people.iiti.ac.in/~phd1301101006',
                research: '',
                userId: 'phd1301101006'
            },
            {          
                img: 'stu_pics/phd/phd (11).jpg',
                name: 'Navneet Pratap Singh',
                profileLink: 'http://people.iiti.ac.in/~phd1301201002',
                research: 'Numerical Linear Algebra',
                userId: 'phd1301201002'
            },
            {          
                img: 'stu_pics/phd/phd (12).jpg',
                name: 'Om Prakash Patel',
                profileLink: 'http://people.iiti.ac.in/~phd1301201003',
                research: '',
                userId: 'phd1301201003'
            },
            {          
                img: 'stu_pics/phd/phd (13).jpg',
                name: 'Rajendra Choudhary',
                profileLink: 'http://people.iiti.ac.in/~phd1301201004',
                research: '',
                userId: 'phd1301201004'
            },
            {          
                img: 'stu_pics/phd/phd (14).jpg',
                name: 'Rudresh Dwivedi',
                profileLink: 'http://people.iiti.ac.in/~phd1301201006',
                research: 'Biometrics',
                userId: 'phd1301201006'
            },
            {          
                img: 'stu_pics/phd/phd (15).jpg',
                name: 'Mayank Swarnkar',
                profileLink: 'http://people.iiti.ac.in/~phd1401101001',
                research: '',
                userId: 'phd1401101001'
            },
            {          
                img: 'stu_pics/phd/phd (16).jpg',
                name: 'Nikhil Tripathi',
                profileLink: 'http://people.iiti.ac.in/~phd1401101002',
                research: '',
                userId: 'phd1401101002'
            },
            {          
                img: 'stu_pics/phd/phd (17).jpg',
                name: 'Chandan Gautam',
                profileLink: 'http://people.iiti.ac.in/~phd1501101002',
                research: '',
                userId: 'phd1501101001'
            },
            {          
                img: 'stu_pics/phd/phd (18).jpg',
                name: 'G. Iyyakutti Iyappan',
                profileLink: 'http://people.iiti.ac.in/~phd1501101002',
                research: '3D image processing',
                userId: 'phd1501101002'
            },
            {          
                img: 'stu_pics/phd/phd (19).jpg',
                name: 'Gyan prakash Tiwary',
                profileLink: 'http://people.iiti.ac.in/~phd1501101003',
                research: 'Message Level Security in RESTful Web Services',
                userId: 'phd1501101003'
            },
            {          
                img: 'stu_pics/phd/phd (20).jpg',
                name: 'Animesh Chaturvedi',
                profileLink: 'http://people.iiti.ac.in/~phd1501101006',
                research: 'Data mining and Machine learning of Evolving Systems',
                userId: 'phd1501101006'
            },
            {          
                img: 'stu_pics/phd/phd (21).jpg',
                name: 'Deepak Kachave',
                profileLink: 'http://people.iiti.ac.in/~phd1501101009',
                research: '',
                userId: 'phd1501101009'
            },
            {          
                img: 'stu_pics/phd/phd (22).jpg',
                name: 'Aditya Shastri',
                profileLink: 'http://people.iiti.ac.in/~phd1501201001',
                research: 'Big Data',
                userId: 'phd1501201001'
            },
            {          
                img: 'stu_pics/phd/phd (23).jpg',
                name: 'Ram Prakash Sharma',
                profileLink: 'http://people.iiti.ac.in/~phd1501201003',
                research: 'Biometrics',
                userId: 'phd1501201003'
            },
            {          
                img: 'stu_pics/phd/phd (24).jpg',
                name: 'Rohit Agrawal',
                profileLink: 'http://people.iiti.ac.in/~phd1501201004',
                research: 'Compressed Sensing',
                userId: 'phd1501201004'
            },
            {          
                img: 'stu_pics/phd/phd (25).jpg',
                name: 'Aaditya Prakash Chouhan',
                profileLink: 'http://people.iiti.ac.in/~phd1501201006',
                research: 'Autonomous vehicles and supporting systems',
                userId: 'phd1501201006'
            },
            {          
                img: 'stu_pics/phd/phd (26).jpg',
                name: 'Dipanjan Roy',
                profileLink: 'http://people.iiti.ac.in/~phd1501201007',
                research: 'Electronic Design Automation (EDA), High Level Synthesis (HLS) and Intellectual Property (IP) Core Protection.',
                userId: 'phd1501201007'
            },
            {          
                img: 'stu_pics/phd/phd (27).jpg',
                name: 'Anuja Tayal',
                profileLink: 'http://people.iiti.ac.in/~phd1601101001',
                research: 'Fault Detection in Computer Networks',
                userId: 'phd1601101001'
            },
            {          
                img: 'stu_pics/phd/phd (28).jpg',
                name: 'Akhilesh Mohan Srivastava',
                profileLink: 'http://people.iiti.ac.in/~phd1701101001',
                research: 'Biometric security',
                userId: 'phd1701101001'
            },
            {          
                img: 'stu_pics/phd/phd (29).jpg',
                name: 'Mahesh Joshi',
                profileLink: 'http://people.iiti.ac.in/~phd1701101004',
                research: 'Biometric security',
                userId: 'phd1701101004'
            },
            {          
                img: 'stu_pics/phd/phd (30).jpg',
                name: 'Arun Kumar',
                profileLink: 'http://people.iiti.ac.in/~phd1701101005',
                research: '',
                userId: 'phd1701101005'
            },
            {          
                img: 'stu_pics/phd/phd (31).jpg',
                name: 'Vikash Chouhan',
                profileLink: 'http://people.iiti.ac.in/~phd1701101006',
                research: '',
                userId: 'phd1701101006'
            },
            {          
                img: 'stu_pics/phd/phd (32).jpg',
                name: 'Pratibha Khandait',
                profileLink: 'http://people.iiti.ac.in/~phd1801101001',
                research: '',
                userId: 'phd1801101001'
            },
            {          
                img: 'stu_pics/phd/phd (33).jpg',
                name: 'Ankit Jain',
                profileLink: 'http://people.iiti.ac.in/~phd1801101002',
                research: '',
                userId: 'phd1801101002'
            }
      ]
  }
})