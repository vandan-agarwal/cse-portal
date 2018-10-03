//graduatedPhd-students component
Vue.component('graduated-item',{
    props: ['graduated'],
    template:  
            '<div class="col-sm-3" style="margin-bottom: 15px;">'+
            '<div class="cardnew" style="height: 340px;">'+
                '<img class="student_image" v-bind:src="graduated.img" style="margin-top: 10px;">'+
                '<div class="cardnew-heading" style="height: 32px;">'+
                    '<h4 class="cardnew-header">{{graduated.name}}</h4>'+
                '</div>'+  
                '<div class="cardnew-content" style="height: 90px; top: 245px; overflow-y: scroll; text-align: left; padding-left: 10%;"><b>Thesis title:</b> {{graduated.Thesistitle}}<br><b>Year of Graduation:</b> {{graduated.yearOfGraduation}}</div>'+
            '</div>'+
  '</div>' 
})

//graduatedPhd-students object
var graduatedPhdStudents = new Vue({
    el: '#Graduated',
    data: {
      graduatedPhdList:
      [   
            {
                name: 'Jaya Thomas',
                img: 'imgs/images.jpg',
                Thesistitle: 'Approaches for Cutting Stock and Strip Packing Problems',
                yearOfGraduation: '2014'
            },
            {
                name: 'Neetesh Saxena',
                img: 'imgs/images.jpg',
                Thesistitle: 'Authentication and Message Security in Cellular Networks',
                yearOfGraduation: 'Jan 2015'
            },
            {
                name: 'Vipul Kumar Mishra ',
                img: 'imgs/images.jpg',
                Thesistitle: 'Multi-Objective Design Space Exploration in High Level Synthesis for Application Specific Computing',
                yearOfGraduation: 'July 2015'
            },
            {
                name: 'Arpit Bharadwaj',
                img: 'imgs/images.jpg',
                Thesistitle: 'Investigation in Tree based Genetic Programming for Data Classification',
                yearOfGraduation: 'December 2015'
            },
            {
                name: 'Saumya Bhadauria',
                img: 'imgs/images.jpg',
                Thesistitle: 'Low Cost Fault Reliability and Trojan Security Aware High Level Synthesis for Application Specific Datapath Processors',yearOfGraduation: 'Apri           l 201  6'
            },
            {
                name: 'Neha Bharill',
                img: 'imgs/images.jpg',
                Thesistitle: 'Supervised and Unsupervised Learning',
                yearOfGraduation: 'Jan 2018'
            },
            {
                name: 'Robin Singh Bhadoria',
                img: 'imgs/images.jpg',
                Thesistitle: 'Assessment of Data and Interfacing of Service-Oriented Systems with Sensors',
                yearOfGraduation: 'Jan 2018'
            },
            {
                name: 'Tanveer Ahmed ',
                img: 'imgs/images.jpg',
                Thesistitle: 'Understanding and Evaluating Human Behavior: An Application of Psychology and Machine Learning    ',
                yearOfGraduation: 'August 2018'         
            }
        ]
  }
})
