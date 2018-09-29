    //recruitments component
Vue.component('recruitments-item',{
    props: ['recruitment'],
    template: '<li><i class="far fa-newspaper" style="padding-right: 10px;"></i><span v-html="recruitment.content"></span></li>'
})


//recruitments object
var Recruitments = new Vue({
    el: '#RECRUITMENTS',
    data: {
      RecruitmentsList:
      [    { 
            id: 1,          //id must be unique
            content: '<a href="http://academic.iiti.ac.in/phd_advertisement/advertisement%20from%20CSE.pdf" target="_blank">PhD Admission Advertisement</a>'
        },
       { 
            id: 2,          //id must be unique
            content: '<a href="http://www.iiti.ac.in/Careers/careers.php" target="_blank">Faculty Recruitment </a>'
        },
        { 
            id: 3,         //id must be unique
            content: ' <a href="http://academic.iiti.ac.in:8080/Admm/28_3_2018%20Advertisement-for%20MTech-Admission.pdf" target="_blank">MS admission advertisement</a>'
        }
        ]
    }
})