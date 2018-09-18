//Events-component
Vue.component('event-item',{
    props: ['Event'],
    template:  '<div class="eventnew col-sm-3  col-xs-12" style="min-height: 175px;">'+
    '<time>'+
        '<span class="day">{{Event.day}}</span>'+
        '<span class="month">{{Event.month}}</span>'+
        '<span class="year">{{Event.year}}</span>'+
        '<span class="time">{{Event.time}}</span>'+
        '</time>'+
        '<h3 class="title">{{Event.title}}</h3>'+
        '<p class="desc">{{Event.description}}</p>'+
        '<button type="button" class="btn btn-primary Details " data-toggle="modal" :data-target="\'#\'+Event.id">Details</button>'+
        '</div>'
})
//Events-component
Vue.component('event-modal',{
    props: ['event'],
    template:  '<div class="modal fade" v-bind:id="event.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
                    '<div class="modal-dialog modal-dialog-centered" role="document">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                    '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                    '<h3 class="modal-title" id="exampleModalCenterTitle">{{event.title}}</h3>'+
                    '<h4 class="modal-title" id="exampleModalCenterTitle">{{event.day}}-{{event.month}}-{{event.year}}, {{event.time}}</h4>'+
                    '<h5 class="modal-title" id="exampleModalCenterTitle">Venue: {{event.venue}}</h5>'+
                    '</div>'+
                '<div class="modal-body">{{event.Details}}</div>'+
                '</div>'+
                '</div>'+
                '</div>'
})

//Faculty members-components
Vue.component('Faculty-modal',{
    props: ['Faculty'],
    template:  '<div class="col-sm-4" style="margin-bottom: 15px;">'+
            '<div class="cardnew" style="height: 500px;">'+
                '<img class="faculty_image" v-bind:src="Faculty.img" style="margin-left: 15%; margin-top: 10px;"/>'+
                '<div class="cardnew-heading" style="height: 39px;">'+
                    '<a v-bind:href="Faculty.profileLink"  style="text-decoration: none;  top: 500px;" ><h3 class="cardnew-header">{{Faculty.name}}</h3></a>'+ 
                '</div>'+
                '<div class="cardnew-content" style="height: 170px; top: 300px; overflow: hidden; text-align: left; padding-left: 10%;">'+
                    '<em>PhD, {{Faculty.phdFrom}}</em><br/>'+
                    '<em>{{Faculty.currentPost}}</em><br/>'+
                    '<strong>Research Interests :</strong>{{Faculty.ResearchInterest}}<br/>'+
                    '<strong>e-mail:</strong> {{Faculty.email}}<br/>'+
                '</div>'+
                '<a class="Read-more" v-bind:href="{{Faculty.profileLink}}" target="_newTab">Read more <span class="glyphicon glyphicon-new-window"></span></a>'+
            '</div>'+
    '</div>'
})
//Events-object
var Events = new Vue({
    el: '#EVENTS',
    data: {
      Eventslist:
      [    { 
            id: 1,          //id must be unique
            day:  17,
            month: "Jul",
            year: 2017,
            time: "All DAY",
            venue: "POD 1B-201",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.", //not more than 15 words
            Details: "abc"
        },
        { 
            id: 2,
            day:  07,
            month: "apr",
            year: 2017,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "Short Term Course",
            description: "Short Term Course On Recent Advances in Network and Cloud Security.",
            Details: "abc"
        },
        { 
            id: 3,
            day:  18,
            month: "Jul",
            year: 2014,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "GIAN Course",
            description: "Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.",
            Details: "abc"
        },
        { 
            id: 4,
            day:  17,
            month: "Jul",
            year: 2017,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.",
            Details: "abc"
        },
         { 
            id: 5,
            day:  17,
            month: "Jul",
            year: 2017,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.", 
            Details: "abc"
        },
        { 
            id: 6,
            day:  07,
            month: "apr",
            year: 2017,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "Short Term Course",
            description: "Short Term Course On Recent Advances in Network and Cloud Security.",
            Details: "abc"
        },
        { 
            id: 7,
            day:  18,
            month: "Jul",
            year: 2014,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "GIAN Course",
            description: "Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.",
            Details: "abc"
        },
        {   
            id: 8,
            day:  17,
            month: "Jul",
            year: 2017,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.",
            Details: "abc"
        },
        { 
            id: 9,
            day:  07,
            month: "apr",
            year: 2017,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "Short Term Course",
            description: "Short Term Course On Recent Advances in Network and Cloud Security.",
            Details: "abc"
        },
        { 
            id: 10,
            day:  18,
            month: "Jul",
            year: 2014,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "GIAN Course",
            description: "Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.",
            Details: "abc"
        },
        { 
            id: 11,
            day:  17,
            month: "Jul",
            year: 2017,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "NTU-India Connect Program",
            description: "NTU-India Connect Program during July 17 - 19, 2017.",
            Details: "abc"
        },
         { 
            id: 12,
            day:  18,
            month: "Jul",
            year: 2014,
            venue: "POD 1B-201",
            time: "All DAY",
            title: "GIAN Course",
            description: "Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.",
            Details: "abc"
        }
        ]
    }
})

