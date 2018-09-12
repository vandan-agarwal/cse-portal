Vue.component('event-item',{
    props: ['Event'],
    template:  '<div class="eventnew col-sm-3  col-xs-12" style="min-height: 175px;"><time><span class="day">{{Event.day}}</span><span class="month">{{Event.month}}</span><span class="year">{{Event.year}}</span><span class="time">{{Event.time}}</span></time><h3 class="title">{{Event.title}}</h3><p class="desc">{{Event.description}}</p><a class="Details" href="#">Details</a></div>'
});

var Events = new Vue({
    el: '#EVENTS',
    data: {
      Eventslist:
      [    { 
            day:  17,
            month: "Jul",
            year: 2017,
            time: "All DAY",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.", 
            Details: "abc"
        },
        { 
            day:  07,
            month: "apr",
            year: 2017,
            time: "All DAY",
            title: "Short Term Course",
            description: "Short Term Course On Recent Advances in Network and Cloud Security.",
            Details: "abc"
        },
        { 
            day:  18,
            month: "Jul",
            year: 2014,
            time: "All DAY",
            title: "GIAN Course",
            description: "Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.",
            Details: "abc"
        },
        { 
            day:  17,
            month: "Jul",
            year: 2017,
            time: "All DAY",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.",
            Details: "abc"
        },
         { 
            day:  17,
            month: "Jul",
            year: 2017,
            time: "All DAY",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.", 
            Details: "abc"
        },
        { 
            day:  07,
            month: "apr",
            year: 2017,
            time: "All DAY",
            title: "Short Term Course",
            description: "Short Term Course On Recent Advances in Network and Cloud Security.",
            Details: "abc"
        },
        { 
            day:  18,
            month: "Jul",
            year: 2014,
            time: "All DAY",
            title: "GIAN Course",
            description: "Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.",
            Details: "abc"
        },
        { 
            day:  17,
            month: "Jul",
            year: 2017,
            time: "All DAY",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.",
            Details: "abc"
        },
        { 
            day:  07,
            month: "apr",
            year: 2017,
            time: "All DAY",
            title: "Short Term Course",
            description: "Short Term Course On Recent Advances in Network and Cloud Security.",
            Details: "abc"
        },
        { 
            day:  18,
            month: "Jul",
            year: 2014,
            time: "All DAY",
            title: "GIAN Course",
            description: "Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.",
            Details: "abc"
        },
        { 
            day:  17,
            month: "Jul",
            year: 2017,
            time: "All DAY",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.",
            Details: "abc"
        },
         { 
            day:  18,
            month: "Jul",
            year: 2014,
            time: "All DAY",
            title: "GIAN Course",
            description: "Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.",
            Details: "abc"
        }
        ]
    }
})