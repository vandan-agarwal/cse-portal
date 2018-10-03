//Ms-students component
Vue.component('ms-item',{
    props: ['Ms'],
    template:  
            '<div class="col-sm-3" style="margin-bottom: 15px;">'+
            '<div class="cardnew" style="height: 345px;">'+
                '<img class="student_image" v-bind:src="Ms.img" style="margin-top: 10px;">'+
                '<div class="cardnew-heading" style="height: 32px;">'+
                    '<a v-bind:href="Ms.profileLink"  style="text-decoration: none;"><h4 class="cardnew-header">{{Ms.name}}</h4></a>'+
                '</div>'+  
                '<div class="cardnew-content" style="height: 100px; top: 240px; overflow-y: scroll; text-align: left; padding-left: 10%;"><b>User-ID :</b> {{Ms.userId}}<br><b>Research Area :</b> {{Ms.research}}<br><b>e-mail :</b> {{Ms.userId}} [AT] iiti [dot] ac [dot] in</div>'+
            '</div>'+
  '</div>' 
})

//Ms-students object
var MsStudents = new Vue({
    el: '#MsStudents',
    data: {
      MsList:
       [    
            {
                img: " stu_pics/ms/ms1804101001_Neha Sharma.jpg",
                profileLink: "http://people.iiti.ac.in/~ms1804101001/",
                name: 'Neha Sharma',
                userId: 'ms1804101001',  
                research: ''
            },
            {
                img: " stu_pics/ms/ms1804101002_Prarthi Jain.jpg",
                profileLink: "http://people.iiti.ac.in/~ms1804101002/",
                name: 'Prarthi Jain',
                userId: 'ms1804101002',  
                research: ''
            },
            {
                img: " stu_pics/ms/ms1804101003_Pratik Kumar Mishra.jpg",
                profileLink: "http://people.iiti.ac.in/~ms1804101003/",
                name: 'Pratik Kumar Mishra',
                userId: 'ms1804101003',  
                research: ''
            },
            {
                img: " stu_pics/ms/ms1804101005_Shubham.jpg",
                profileLink: "http://people.iiti.ac.in/~ms1804101005/",
                name: 'Shubham',
                userId: 'ms1804101005',  
                research: ''
            },
            {
                img: " stu_pics/ms/ms1804101006_Siddharth Gupta.jpg",
                profileLink: "http://people.iiti.ac.in/~ms1804101006/",
                name: 'Siddharth Gupta ',
                userId: 'ms1804101006',  
                research: ''
            },
            {
                img: " stu_pics/ms/ms1804101007_Umar Aalam.jpg",
                profileLink: "http://people.iiti.ac.in/~ms1804101007/",
                name: 'Umar Aalam',
                userId: 'ms1804101007',  
                research: ''
            },
            {
                img: " stu_pics/ms/ms1804101008 _Anagha Rameshwarrao Bhople .jpg",
                profileLink: "http://people.iiti.ac.in/~ms1804101008/",
                name: 'Anagha Rameshwarrao Bhople',
                userId: 'ms1804101008',  
                research: ''
            }
      ]
  }
})