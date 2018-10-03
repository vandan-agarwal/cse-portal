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
      [  
      {
        courseCode: 'CS 401 / CS 601',
        name: 'Soft Computing',
        LPT: '2-0-2',
        credits: '3'
      },
      {
        courseCode: 'CS 404 / EE 304',
        name: 'Digital Signal Processing',
        LPT: '3-1-0 ',
        credits: '4'
      },
      {
        courseCode: 'CS 406 / CS 606',
        name: 'Data Mining and Data Warehousing',
        LPT: '2-0-2',
        credits: '3'
      },
      {
        courseCode: 'CS 407 ',
        name: ' Peripherals and Interfaces',
        LPT: '2-0-2',
        credits: '3'
      },
      {
        courseCode: 'CS 408 ',
        name: ' Algorithms for Convex Programming',
        LPT: '2-0-2',
        credits: '3'
      },
      {
        courseCode: 'CS 409 / CS 609',
        name: 'Advanced Topics in Database Management Systems',
        LPT: ' 2-1-0',
        credits: '  3'
      },
      {
        courseCode: 'CS 410 ',
        name: ' Genetic Algorithms',
        LPT: '2-0-2',
        credits: ' 3'
      },
      {
        courseCode: 'CS 411 ',
        name: 'Advanced Algorithms',
        LPT: '2-0-2',
        credits: '3'
      },
      {
        courseCode: 'CS 412 ',
        name: 'Pattern Recognition',
        LPT: '2-0-2',
        credits: '3'
      },
      {
        courseCode: 'CS 413 ',
        name: 'Topics in Artificial Intelligence Programming',
        LPT: '2-1-0',
        credits: '3'
      },
      {
        courseCode: 'CS 414 / CS 614',
        name: 'Cloud Computing and Applications',
        LPT: '2-1-0',
        credits: '  3'
      },
      {
        courseCode: 'CS 416 / CS 616',
        name: 'Service Oriented Systems',
        LPT: '2-1-0',
        credits: '  3'
      },
      {
        courseCode: 'CS 417 / CS 617',
        name: 'Cryptography and Network Security',
        LPT: '2-1-0',
        credits: '  3'
      },
      {
        courseCode: 'CS 418 / CS 618',
        name: 'Systems and Usable Security',
        LPT: '2-1-0',
        credits: '  3'
      },
      {
        courseCode: 'CS 419 / CS 619 / ICS 419',
        name: '  Computer Vision',
        LPT: '2-1-0',
        credits: '  3'
      },
      {
        courseCode: 'CS 420 / CS 620',
        name: 'Embedded Systems',
        LPT: '2-1-0',
        credits: '  3'
      },
      {
        courseCode: 'CS 422 / CS 622',
        name: 'Numerical Simulation',
        LPT: '2-1-0',
        credits: '  3'
      },
      {
        courseCode: 'CS 424 ',
        name: 'Functional and Logic Programming',
        LPT: '2-0-2',
        credits: '3'
      },
      {
        courseCode: 'CS 701',
        name: 'Selected Topics in Advanced Algorithms',
        LPT: '2-1-0',
        credits: '  3'
      }
      ]
  }
})