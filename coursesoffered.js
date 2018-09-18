//courseoffered-projects component
Vue.component('courseoffered-item',{
    props: ['courseoffered'],
    template:   '<tr>'+
    '<td>{{courseoffered.courseCode}}</td>'+
    '<td>{{courseoffered.name}}</td>'+
    '<td>{{courseoffered.LPT}}</td>'+
    '<td>{{courseoffered.credits}}</td>'+
    '</tr>'     
})


//courseoffered-projects object
var courses = new Vue({
    el: '#courses',
    data: {
      CoursesList:
      [    {
        courseCode: 'CS 103',
        name: 'Computer Programming',
        LPT: '2-0-0',
        credits: '2' 
      }
      ]
  }
})