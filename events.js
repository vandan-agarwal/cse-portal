//Events-component
Vue.component('event-item',{
    props: ['Event'],
    template:  '<div class="eventnew col-sm-3  col-xs-12" style="min-height: 230px;">'+
    '<time>'+
        '<span class="day">{{Event.day}}</span>'+
        '<span class="month">{{Event.month}}</span>'+
        '<span class="year">{{Event.year}}</span>'+
        '<span class="time">{{Event.time}}</span>'+
        '</time>'+
        '<h3 class="title" v-html="Event.title"></h3>'+
        '<p class="desc" v-html="Event.description"></p>'+
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
                    '<h2 class="modal-title" id="exampleModalCenterTitle" v-html="event.title"></h2>'+
                    '<h5 class="modal-title" id="exampleModalCenterTitle">{{event.day}}-{{event.month}}-{{event.year}}, {{event.time}}</h5>'+
                    '<h5 class="modal-title" id="exampleModalCenterTitle">Venue: {{event.venue}}</h5>'+
                    '<h4 class="modal-title" id="exampleModalCenterTitle" v-html="event.description"></h4>'+
                    '</div>'+
                '<div class="modal-body"><span v-html="event.Details"></span></div>'+
                '</div>'+
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
            day:  13,
            month: 'Aug',      
            year: 2018,
            time: '15:30 hour',
            venue: 'POD 1E-203',
            title: 'Expert talk by Prof. Harish Karnick',   // A short heading is appreciable
            description: 'A talk on <strong>"On Representing Words"</strong> by Prof. Harish Karnick, Professor, Department of Computer Science and Engineering, IIT Kanpur.', //not more than 15 words
            Details: 'Mitchell et al. [1] showed substantial predictability for generating fMRI images for unseen concrete nouns that were based on a computational model that was constructed using 360 fMRI images per subject for 9 subjects where each subject was shown a stimulus containing a word and a drawing. There were 60 concrete nouns and exposures were repeated 6 times. There was substantial within subject and between subject similarity similarity in the fMRI images.'+
            		 '<br/>Their model used an intermediate set of words that functioned as semantic features for the set of concrete nouns and the generation was done as a linear combination of 25 such semantic features used as a basis set. The semantic features were generated using a large text corpus.'+
					 '<br />We wanted to ask the reverse question. Given the fMRI images how accurately can the stimulus word be predicted? While attempts to do this by using intermediate semantic attributes failed we got surprisingly good results by directly using voxel level activations to predict the stimulus.'+
					 'The talk will first give some background regarding existing theories for how words/concepts are represented then discuss implications of Mitchell et al\'s results and end with our attempt to solve the reverse problem.'+
					 '<br/> 1. T Mitchell, et al., Predicting Human Brain Activity Associated with the Meanings of Nouns, Science, 320, 1191-1195, 2008.'
        },
        { 
            id: 2,          //id must be unique
            day:  6,
            month: 'Apr',
            year: 2018,
            time: '15:30 hour',
            venue: 'SB 309',
            title: 'Expert talk by Prof. Gaurav Sharma',  // A short heading is appreciable
            description: 'A talk on <strong>"Initiating Research Effectively: A Guide and Personal Perspectives"</strong> by Prof. Gaurav Sharma, University of Rochester, USA.', //not more than 15 words
            Details: 'Mitchell et al. [1] showed substantial predictability for generating fMRI images for unseen concrete nouns that were based on a computational model that was constructed using 360 fMRI images per subject for 9 subjects where each subject was shown a stimulus containing a word and a drawing. There were 60 concrete nouns and exposures were repeated 6 times. There was substantial within subject and between subject similarity similarity in the fMRI images.'+
            		 '<br/>Their model used an intermediate set of words that functioned as semantic features for the set of concrete nouns and the generation was done as a linear combination of 25 such semantic features used as a basis set. The semantic features were generated using a large text corpus.'+
					 '<br />We wanted to ask the reverse question. Given the fMRI images how accurately can the stimulus word be predicted? While attempts to do this by using intermediate semantic attributes failed we got surprisingly good results by directly using voxel level activations to predict the stimulus.'+
					 'The talk will first give some background regarding existing theories for how words/concepts are represented then discuss implications of Mitchell et al\'s results and end with our attempt to solve the reverse problem.'+
					 '<br/> 1. T Mitchell, et al., Predicting Human Brain Activity Associated with the Meanings of Nouns, Science, 320, 1191-1195, 2008.'
        },
        { 
            id: 3,          //id must be unique
            day:  10,
            month: 'Jan',
            year: 2018,
            time: '15:30 hour',
            venue: 'SB 309',
            title: 'Research talk by Prof. Sanjay K Madria',  // A short heading is appreciable
            description: 'Research talk on <strong>"Efficient Privacy-preservation of Massive-scale Trajectory Data"</strong> by Prof. Sanjay K Madria, Missouri University of Science and Technology, Rolla, USA', //not more than 15 words
            Details: ''
        },
        { 
            id: 4,          //id must be unique
            day:  17,
            month: 'Jul',
            year: 2018,
            time: 'All DAY',
            venue: 'POD 1B-201',
            title: 'NTU-India Connect Program',  // A short heading is appreciable
            description: 'It is initiated to enable undergraduate and graduate students to pursue their research interest at Nanyang Technological University, Singapore (NTU).', 
            Details: 'The NTU-India Connect Research Internship Programme is a university-wide short-term research programme that lasts for 2 to 6 months. It is initiated to enable undergraduate and graduate students from Indian universities and institutes of higher learning to pursue their research interest at Nanyang Technological University, Singapore (NTU). Students of this programme will work under the supervision of NTU faculty, develop a strong research interest and expertise in a given research field, experience multicultural living, gain a network of friends and a better understanding of Singapore.'
        },
        { 
            id: 5,
            day:  18,
            month: 'Apr',
            year: 2017,
            venue: 'POD 1B-201',
            time: '15:30 hour',
            title: 'Research seminar by Prof. Pritam Ranjan',   // A short heading is appreciable
            description: 'Research Seminar "Statistical Modelling and Inference for Computer Experiments" by <strong>Prof. Pritam Ranjan</strong> IIM Indore', 
            Details:' '
        }
        ]
    }
})

