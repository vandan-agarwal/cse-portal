//electivecourse-projects component
Vue.component('electivecourse-item',{
    props: ['electivecourse'],
    template:   '<tr>'+
    '<td>{{electivecourse.courseCode}}</td>'+
    '<td>{{electivecourse.name}}</td>'+
    '<td>{{electivecourse.LPT}}</td>'+
    '<td>{{electivecourse.credits}}</td>'+
    '</tr>'     
})


//electivecourse-projects object
var electivecourses = new Vue({
    el: '#electivecourses',
    data: {
      CoursesList:
      [    {
        courseCode: 'CS 401 / CS 601',
        name: 'Soft Computing',
        LPT: '2-0-2',
        credits: '3' 
      }
      ]
  }
})