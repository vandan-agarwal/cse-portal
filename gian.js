//gian-students component
Vue.component('gian-item',{
    props: ['gian'],
    template:  '<tr>'+
  '<td valign="middle">{{gian.Sno}}).&nbsp;</td>'+
  '<td valign="top"><br><p class="style2"><strong>Course Title: </strong><span v-html="gian.title"></span><br/>'+
          '<strong>Offered By:</strong> <span v-html="gian.Offeredby"></span><br/>'+
          '<strong>Coordinator:</strong>{{gian.coordinator}}<br>'+
          '<strong>Course Schedule:</strong>{{gian.schedule}}<br>'+
           'To register for this course <a v-bind:href="gian.registerationLink">click here</a> | For course webpage&nbsp;<a v-bind:href="gian.courseWebpage" target="_blank">click here</a></p></td>'+
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
            Offeredby: '<a href="http://www2.ece.rochester.edu/~gsharma/">Prof. Gaurav Sharma, </a> University of Rochester',
            coordinator: ' Dr. Surya Prakash',
            schedule: ' March 26 - April 06, 2018',
            registerationLink: 'http://gian.iiti.ac.in/register.php',
            courseWebpage: 'GIAN/MSF/index.html'
        },
        {
            Sno: '1',
            title: '<a href="GIAN/MSF_brochure_[10_days].pdf">Media Security and Forensics</a>',
            Offeredby: '<a href="http://www2.ece.rochester.edu/~gsharma/">Prof. Gaurav Sharma, </a> University of Rochester',
            coordinator: ' Dr. Surya Prakash',
            schedule: ' March 26 - April 06, 2018',
            registerationLink: 'http://gian.iiti.ac.in/register.php',
            courseWebpage: 'GIAN/MSF/index.html'
        }
      ]
  }
})
