//news component
Vue.component('news-item',{
    props: ['news'],
    template: '<li><i class="far fa-newspaper" style="padding-right: 10px; "></i><span v-html="news.content"></span></li>'
})
//NEWS object
var News = new Vue({
    el: '#NEWS',
    data: {
      NewsList:
      [    { 
            id: 1,          //id must be unique
            content: '<a href="https://pmrf.in/">Prime Minister’s Research Fellowship (PMRF)</a>'
        },
        { 
            id: 2,          //id must be unique
            content: '<a href="https://euristica.in/">Euristica 2018 - IIT Indore\'s First Coding Fest</a>'
        },
        { 
            id: 3,         //id must be unique
            content: '<a href="gian.html">Courses offered under GIAN @ CSE, IIT Indore</a>'
        },
        { 
            id: 4,          //id must be unique
            content: 'Graduating student, <strong>Mr. Chaware Ketan Uday</strong>, of CSE receives The President of India Gold Medal in the 5th Convocation of IIT Indore.'
        },
        { 
            id: 5,          //id must be unique
            content: '.Graduating student, <strong>Mr. Aishwary Gagrani</strong>, of CSE receives the Silver Medal in the 5th Convocation of IIT Indore.'
        },
        { 
            id: 6,          //id must be unique
            content: '<strong>Dr. Surya Prakash</strong> has taken over as Head, Discipline of CSE'
        }
        ]
    }
})