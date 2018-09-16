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

//btech 2017-students object
var btechStudents2017 = new Vue({
    el: '#btech-2017',
    data: {
      BtechList:
      [    
        {
            RollNo: 'CSE170001001',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001002',
            name: 'ADITYA GUPTA',
            img: 'stu_pics/btech_2017/170001002_ADITYA GUPTA.jpg'
        },
        {
            RollNo:  'CSE170001003',
            name: 'AJAYDEEP',
            img: 'stu_pics/btech_2017/170001003_AJAYDEEP.jpg'
        },
        {
            RollNo: 'CSE170001004',
            name: 'AKSHIT',
            img: 'stu_pics/btech_2017/170001004_AKSHIT.jpg'
        },
        {
            RollNo: 'CSE170001005',
            name: 'AMAN VERMA',
            img: 'stu_pics/btech_2017/170001005_AMAN VERMA.jpg'
        },
        {
            RollNo: 'CSE170001006',
            name: 'AMANPREET SINGH',
            img: 'stu_pics/btech_2017/170001006_AMANPREET SINGH.jpg'
        },
        {
            RollNo: 'CSE170001007',
            name: 'ANKIT',
            img: 'stu_pics/btech_2017/170001007_ANKIT.jpg'
        },
        {
            RollNo: 'CSE170001008',
            name:  'ANKIT GEHLOT',
            img: 'stu_pics/btech_2017/170001008_ANKIT GEHLOT.jpg'
        },
        {
            RollNo: 'CSE170001009',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001010',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001011',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001012',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001013',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001014',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001015',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001016',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001017',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001018',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001019',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001020',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001021',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001022',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001023',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001024',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001025',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001026',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001027',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001028',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001029',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001030',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001031',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001032',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001033',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001034',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001035',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001036',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001037',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001038',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001039',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001040',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001041',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001042',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001043',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001044',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001045',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001046',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },

        {
            RollNo: 'CSE170001047',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001048',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001049',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001050',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001051',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001052',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001053',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001054',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001055',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001056',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001057',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },
        {
            RollNo: 'CSE170001058',
            name: ' ABHIJEET SINGH YADAV',
            img: 'stu_pics/btech_2017/170001001_ABHIJEET SINGH YADAV.jpg'
        },

      ]
  }
})