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
      [    { 
            userId: "rkjain" ,
            name: "Raj Kumar Jain",
            img: 'stu_pics/phd/Raj Kumar Jain.jpg',
            research: "Cluster Analysis" ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'
            },
            { 
            userId: "phd11120101" ,
            name: "Prakash Chandra Sharma ",
            img: 'stu_pics/phd/pcsharma.jpg',
            research: "Scheduling in Cellular Network" ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'          },
            { 
            userId: "phd11120101" ,
            name: "Ashish Jain",
            img: 'stu_pics/phd/phd11120101_Ashish Jain.jpg',
            research: "Analysis and Design of Cryptography and Network Security Algorithms" ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'
            },
            { 
            userId: "phd11120102" ,
            name: "Dheeraj Rane",
            img: 'stu_pics/phd/phd11120102_Dheeraj Rane.jpg',
            research: "Performance Evaluation in Cloud Computing " ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'
            },
            {
             userId: "phd11120103" ,
            name: "Rakesh Kumar Sahu",
            img: 'stu_pics/phd/phd11120103_Rakesh Kumar Sahu.jpg',
            research: "Efficient Routing in Wirelesss Ad-hoc Network" ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'
            },
            {
             userId: "phd11120104" ,
            name: "Rajat Saxena",
            img: 'stu_pics/phd/phd11120104_Rajat Saxena.jpg',
            research: "Security Issues in Cloud Computing " ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'
            },

            {
             userId: "phd12110101" ,
            name: "Rohit Verma",
            img: 'stu_pics/phd/phd12110101_Rohit Verma.jpg',
            research: "Web Services" ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'
            },

            {
             userId: "phd12110103" ,
            name: "Shruti Bhillare",
            img: 'stu_pics/phd/phd12110103_Shruti Bhillare.jpg',
            research: "Anti-spoofing in Hand Biometrics" ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'
            },

            {
             userId: "phd12110104" ,
            name: "Pramod Mane",
            img: 'stu_pics/phd/phd12110104_Pramod Mane.jpg',
            research: "Game Theoretic Aspects of Social Cloud " ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'
            },

            {
             userId: "phd12120101" ,
            name: ">Tanveer Ahmed ",
            img: 'stu_pics/phd/phd12120101_Tanveer Ahmed.jpg',
            research: "     Understanding and Evaluating Human Behavior: An Application of Psychology and Machine Learning" ,
            profileLink: 'http://people.iiti.ac.in/~'+this.userId+'/'
            },

            {
             userId: "phd1301101004" ,
            name: "Piyush Joshi ",
            img: 'stu_pics/phd/phd1301101004_Piyush Joshi.jpg',
            research: "" ,
            profileLink: 'http://people.iiti.ac.in/~/'
            }
      ]
  }
})