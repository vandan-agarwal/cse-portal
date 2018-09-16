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

//btech 2014-students object
var btechStudents2014 = new Vue({
    el: '#btech-2014',
    data: {
      BtechList:
      [    
        // {
        //     RollNo: ' CSE140001001',
        //     name: 'AAKASH HANDA',
        //     img: 'stu_pics/btech_2014/140001001_AAKASH HANDA .jpg'
        // }
            {
                    RollNo: 'CSE140001001',
                    name:' AAKASH HANDA ',
                    img: 'stu_pics/btech_2014/14000 (1).jpg'
            },
            {
                    RollNo: 'CSE140001002',
                    name:' ADITI AGRAWAL ',
                    img: 'stu_pics/btech_2014/14000 (2).jpg'
            },
            {
                    RollNo: 'CSE140001003',
                    name:' AKASH ANAND KAMAT  ',
                    img: 'stu_pics/btech_2014/14000 (3).jpg'
            },
            {
                    RollNo: 'CSE140001004',
                    name:'AKASH KUMAR  ',
                    img: 'stu_pics/btech_2014/14000 (4).jpg'
            },
            {
                    RollNo: 'CSE140001005',
                    name:' AKSHAY S.CHAUHAN',
                    img: 'stu_pics/btech_2014/14000 (5).jpg'
            },
            {
                    RollNo: 'CSE140001006',
                    name:'AKSHAYA KUMAR ',
                    img: 'stu_pics/btech_2014/14000 (6).jpg'
            },
            {
                    RollNo: 'CSE140001007',
                    name:' AMAN SINGH  ',
                    img: 'stu_pics/btech_2014/14000 (7).jpg'
            },
            {
                    RollNo: 'CSE140001008',
                    name:' APOORV KULSHRESTHA',
                    img: 'stu_pics/btech_2014/14000 (8).jpg'
            },
            {
                    RollNo: 'CSE140001009',
                    name:'ARNAB SAMANTA  ',
                    img: 'stu_pics/btech_2014/14000 (9).jpg'
            },
            {
                    RollNo: 'CSE140001010',
                    name:' DEEPIKA  ',
                    img: 'stu_pics/btech_2014/14000 (10).jpg'
            },
            {
                    RollNo: 'CSE140001011',
                    name:' GARIGAPATI KALYAN  ',
                    img: 'stu_pics/btech_2014/14000 (11).jpg'
            },
            {
                    RollNo: 'CSE140001012',
                    name:'GUDURU SAI TEJA ',
                    img: 'stu_pics/btech_2014/14000 (12).jpg'
            },
            {
                    RollNo: 'CSE140001013',
                    name:' HARSHIT JAIN  ',
                    img: 'stu_pics/btech_2014/14000 (13).jpg'
            },
            {
                    RollNo: 'CSE140001014',
                    name:' K.SUDHARSAN  ',
                    img: 'stu_pics/btech_2014/14000 (14).jpg'
            },
            {
                    RollNo: 'CSE140001015',
                    name:' KHUSHBOO SHARMA ',
                    img: 'stu_pics/btech_2014/14000 (15).jpg'
            },
            {
                    RollNo: 'CSE140001016',
                    name:' LALIT GAUTAM  ',
                    img: 'stu_pics/btech_2014/14000 (16).jpg'
            },
            {
                    RollNo: 'CSE140001017',
                    name:' MAHAK GARG ',
                    img: 'stu_pics/btech_2014/14000 (17).jpg'
            },
            {
                    RollNo: 'CSE140001018',
                    name:' M. JASHVANT SEVAK ',
                    img: 'stu_pics/btech_2014/14000 (18).jpg'
            },
            {
                    RollNo: 'CSE140001019',
                    name:'N. AMAR NATH REDDY ',
                    img: 'stu_pics/btech_2014/14000 (19).jpg'
            },
            {
                    RollNo: 'CSE140001020',
                    name:' NITESH KUMAR SINGH ',
                    img: 'stu_pics/btech_2014/14000 (20).jpg'
            },
            {
                    RollNo: 'CSE140001021',
                    name:'P. SRI HARSHA  ',
                    img: 'stu_pics/btech_2014/14000 (21).jpg'
            },
            {
                    RollNo: 'CSE140001022',
                    name:' PRIYANSHU KUMAR  ',
                    img: 'stu_pics/btech_2014/14000 (22).jpg'
            },
            {
                    RollNo: 'CSE140001023',
                    name:' RAHUL KUMAR KESHRI  ',
                    img: 'stu_pics/btech_2014/14000 (23).jpg'
            },
            {
                    RollNo: 'CSE140001024',
                    name:' RAJVEER SINGH  ',
                    img: 'stu_pics/btech_2014/14000 (24).jpg'
            },
            {
                    RollNo: 'CSE140001025',
                    name:' RAMAN N.BANSAL ',
                    img: 'stu_pics/btech_2014/14000 (25).jpg'
            },
            {
                    RollNo: 'CSE140001026',
                    name:' RISHABH RAJ ',
                    img: 'stu_pics/btech_2014/14000 (26).jpg'
            },
            {
                    RollNo: 'CSE140001027',
                    name:' R. RAMESH RATHORE ',
                    img: 'stu_pics/btech_2014/14000 (27).jpg'
            },
            {
                    RollNo: 'CSE140001028',
                    name:'RUCHIR GARG  ',
                    img: 'stu_pics/btech_2014/14000 (28).jpg'
            },
            {
                    RollNo: 'CSE140001029',
                    name:' SHUBHA NEEMA  ',
                    img: 'stu_pics/btech_2014/14000 (29).jpg'
            },
            {
                    RollNo: 'CSE140001030',
                    name:' SHUBHAM BUREWAR ',
                    img: 'stu_pics/btech_2014/14000 (30).jpg'
            },
            {
                    RollNo: 'CSE140001031',
                    name:' SHUBHAM GOYAL  ',
                    img: 'stu_pics/btech_2014/14000 (31).jpg'
            },
            {
                    RollNo: 'CSE140001032',
                    name:' SIDDHARTH S.PRASAD ',
                    img: 'stu_pics/btech_2014/14000 (32).jpg'
            },
            {
                    RollNo: 'CSE140001033',
                    name:' SURENDRA CHOUHAN ',
                    img: 'stu_pics/btech_2014/14000 (33).jpg'
            },
            {
                    RollNo: 'CSE140001034',
                    name:' TANMAY SARASWAT ',
                    img: 'stu_pics/btech_2014/14000 (34).jpg'
            },
            {
                    RollNo: 'CSE140001035',
                    name:' UTKARSH SAXENA ',
                    img: 'stu_pics/btech_2014/14000 (35).jpg'
            },
            {
                    RollNo: 'CSE140001036',
                    name:' VARSHA DHAKAD ',
                    img: 'stu_pics/btech_2014/14000 (36).jpg'
            },
            {
                    RollNo: 'CSE140001037',
                    name:'V. VINAYAK JOGLEKAR  ',
                    img: 'stu_pics/btech_2014/14000 (37).jpg'
            },
            {
                    RollNo: 'CSE140001038',
                    name:' VEDAANTA AGARWALLA  ',
                    img: 'stu_pics/btech_2014/14000 (38).jpg'
            },
            {
                    RollNo: 'CSE140001039',
                    name:' VISHAL NEMADE  ',
                    img: 'stu_pics/btech_2014/14000 (39).jpg'
            },
            {
                    RollNo: 'EE140002025',
                    name:' RAMESH BALAJI  ',
                    img: 'stu_pics/btech_2014/14000 (40).jpg'
            }
      ]
  }
})