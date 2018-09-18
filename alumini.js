//alumini-students component
Vue.component('alumini-item',{
    props: ['alumini'],
    template:  
            '<div class="col-sm-3" style="margin-bottom: 15px;">'+
            '<div class="cardnew" style="height: 325px;">'+
                '<img class="student_image" v-bind:src="alumini.img" style="margin-top: 10px;">'+
                '<div class="cardnew-heading" style="height: 32px;">'+
                    '<h4 class="cardnew-header">{{alumini.name}}</h4>'+
                '</div>'+  
                '<div class="cardnew-content" style="height: 80px; top: 245px; overflow-y: scroll; text-align: left; padding-left: 10%;"><b>Thesis title:</b> {{alumini.Thesistitle}}<br><b>Year of Graduation:</b> {{alumini.yearOfGraduation}}</div>'+
            '</div>'+
  '</div>' 
})

//alumini-students object
var AluminiStudents = new Vue({
    el: '#Alumini',
    data: {
      AluminiList:
      [    { 
            name: "Raj Kumar Jain",
            img: 'imgs/images.jpg',
            Thesistitle: "Cluster Analysis" ,
            yearOfGraduation: '2017'
            },
            { 
            name: "Raj Kumar Jain",
            img: 'imgs/images.jpg',
            Thesistitle: "Cluster Analysis" ,
            yearOfGraduation: '2017'
            }

      ]
  }
})
