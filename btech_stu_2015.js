Vue.component('btech-item',{
    props: ['btech'],
    template:  
            '<div class="col-sm-2" style="margin-bottom: 15px;">'+
            '<div class="cardnew" style="height: 210px;">'+
                '<img class="student_image" v-bind:src="btech.img" style="margin-left: 14%; margin-top: 5px;">'+
                '<div class="cardnew-heading" style="height: 50px;">'+
                    '<h4 class="cardnew-header" style="line-height: 22px;">{{btech.name}}</br>{{btech.RollNo}}</h4>'+
                '</div>'+  
            '</div></div>'
})

//btech 2015-students object
var btechStudents2015 = new Vue({
    el: '#btech-2015',
    data: {
      BtechList:
      [    
        {
            RollNo: ' CSE140001001',
            name: 'AAKASH cHANDA',
            img: 'stu_pics/btech_2014/140001001_AAKASH HANDA .jpg'
        }
      ]
  }
})