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
            content: '<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.'
        },
        { 
            id: 2,          //id must be unique
            content: 'The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.'
        },
        { 
            id: 3,         //id must be unique
            content: 'The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.'
        },
        { 
            id: 4,          //id must be unique
            content: 'The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.'
        },
        { 
            id: 5,          //id must be unique
            content: '<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.'
        },
        { 
            id: 6,          //id must be unique
            content: '<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.'
        },
        { 
            id: 7,          //id must be unique
            content: '<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.'
        },
        { 
            id: 8,          //id must be unique
            content: '<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.'
        },
        { 
            id: 9,          //id must be unique
            content: '<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.'
        }
        ]
    }
})