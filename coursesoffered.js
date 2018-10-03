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
      [ 
        {              
          courseCode: 'CS 103',
          name: 'Computer Programming',
          LPT: '2-0-0',
          credits: '2'
        },
        {
          courseCode: 'CS 153',
          name: 'Computer Programming Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 201',
          name: 'Discrete Mathematical Structures',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 202',
          name: 'Automata Theory and Logic',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 203',
          name: 'Data Structure and Algorithms',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 253',
          name: 'Data Structure and Algorithms Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 204',
          name: 'Design and Analysis  of Algorithms',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 254',
          name: 'Design and Analysis  of Algorithms Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 206',
          name: 'Login Design ',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 206',
          name: 'Login Design Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 207',
          name: 'Database and Information System',
          LPT: '3-0-0',
          credits: '3'
        },
        {
          courseCode: 'CS 357',
          name: 'Database and Information System Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 208',
          name: 'Software Engineering',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 258',
          name: 'Software Engineering Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 302',
          name: 'Computer Graphics and Visualization',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 352',
          name: 'Computer Graphics and Visualization Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 304N',
          name: 'Computer Intelligence',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 354N',
          name: 'Computer Intelligence Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 306',
          name: 'Computer Networks',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 356',
          name: 'Computer Networks Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 309',
          name: 'Parallel Computing',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 359',
          name: 'Parallel Computing Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 303',
          name: 'Operating Systems',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 353',
          name: 'Operating Systems Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 305',
          name: 'Computer Architecture',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 355',
          name: 'Computer Architecture Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 307',
          name: 'Optimization Algorithms and Techniques',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 357',
          name: 'Optimization Algorithms and Techniques',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 308',
          name: 'Compiler Techniques',
          LPT: '2-1-0',
          credits: '3'
        },
        {
          courseCode: 'CS 358',
          name: 'Compiler Techniques Lab',
          LPT: '0-0-3',
          credits: '1.5'
        },
        {
          courseCode: 'CS 493',
          name: 'B Tech Project (BTP)',
          LPT: '0-0-40',
          credits: '20'       
        }
      ]
  }
})