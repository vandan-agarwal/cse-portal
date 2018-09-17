Vue.component('btech-item',{
    props: ['btech'],
    template:  
            '<div class="col-sm-2" style="margin-bottom: 15px;">'+
            '<div class="cardnew" style="height: 210px;">'+
                '<img class="student_image" v-bind:src="btech.img" style=" margin-top: 5px;">'+
                '<div class="cardnew-heading" style="height: 50px;">'+
                    '<h5 class="cardnew-header" style="line-height: 22px;">{{btech.name}}</br>{{btech.RollNo}}</h5>'+
                '</div>'+  
            '</div></div>'
})

//btech 2015-students object
var btechStudents2015 = new Vue({
    el: '#btech-2015',
    data: {
      BtechList:
      [    
        // {
        //     RollNo: ' CSE140001001',
        //     name: 'AAKASH cHANDA',
        //     img: 'stu_pics/btech_2015/140001001_AAKASH HANDA .jpg'
        // }
            {
                    RollNo: 'CSE150001001',
                    name:' ADITYA JAIN ',
                    img: 'stu_pics/btech_2015/15000 (1).jpg'
            },
            {
                    RollNo: 'CSE150001002',
                    name:' APOORVA JOSHI ',
                    img: 'stu_pics/btech_2015/15000 (2).jpg'
            },
            {
                    RollNo: 'CSE150001003',
                    name:' B. HARSHA VARDHAN ',
                    img: 'stu_pics/btech_2015/15000 (3).jpg'
            },
            {
                    RollNo: 'CSE150001004',
                    name:' BELLAM KONDA ROHITH ',
                    img: 'stu_pics/btech_2015/15000 (4).jpg'
            },
            {
                    RollNo: 'CSE150001005',
                    name:' BHOR BHASKAR VERMA ',
                    img: 'stu_pics/btech_2015/15000 (5).jpg'
            },
            {
                    RollNo: 'CSE150001006',
                    name:' BIKASH KUMAR TUDU ',
                    img: 'stu_pics/btech_2015/15000 (6).jpg'
            },
            {
                    RollNo: 'CSE150001007',
                    name:' C. CHAKRADHAR REDDY ',
                    img: 'stu_pics/btech_2015/15000 (7).jpg'
            },
            {
                    RollNo: 'CSE150001008',
                    name:'C. MANISH SADASHIV ',
                    img: 'stu_pics/btech_2015/15000 (8).jpg'
            },
            {
                    RollNo: 'CSE150001009',
                    name:' DHRUV CHADHA ',
                    img: 'stu_pics/btech_2015/15000 (9).jpg'
            },
            {
                    RollNo: 'CSE150001010',
                    name:' DIP KUMAR DAS ',
                    img: 'stu_pics/btech_2015/15000 (10).jpg'
            },
            {
                    RollNo: 'CSE150001011',
                    name:' E RANJITH KUMAR ',
                    img: 'stu_pics/btech_2015/15000 (11).jpg'
            },
            {
                    RollNo: 'CSE150001012',
                    name:'K GANESH RAJ ',
                    img: 'stu_pics/btech_2015/15000 (12).jpg'
            },
            {
                    RollNo: 'CSE150001013',
                    name:'K. PIYUSH PREMCHAND',
                    img: 'stu_pics/btech_2015/15000 (13).jpg'
            },
            {
                    RollNo: 'CSE150001014',
                    name:' KESHAV GOYAL ',
                    img: 'stu_pics/btech_2015/15000 (14).jpg'
            },
            {
                    RollNo: 'CSE150001015',
                    name:' KUNAL GUPTA ',
                    img: 'stu_pics/btech_2015/15000 (15).jpg'
            },
            {
                    RollNo: 'CSE150001016',
                    name:' KUNAL SIKRI ',
                    img: 'stu_pics/btech_2015/15000 (16).jpg'
            },
            {
                    RollNo: 'CSE150001017',
                    name:' MAINAK BISWAS ',
                    img: 'stu_pics/btech_2015/15000 (17).jpg'
            },
            {
                    RollNo: 'CSE150001018',
                    name:' MOHIT MOHTA ',
                    img: 'stu_pics/btech_2015/15000 (18).jpg'
            },
            {
                    RollNo: 'CSE150001019',
                    name:'N. PRAJWAL CHANDRA ',
                    img: 'stu_pics/btech_2015/15000 (19).jpg'
            },
            {
                    RollNo: 'CSE150001020',
                    name:' NITISH KUMAR RAJ ',
                    img: 'stu_pics/btech_2015/15000 (20).jpg'
            },
            {
                    RollNo: 'CSE150001021',
                    name:' PARSHALLU PRASAD ',
                    img: 'stu_pics/btech_2015/15000 (21).jpg'
            },
            {
                    RollNo: 'CSE150001022',
                    name:' PRAKASH CHOUDHARY',
                    img: 'stu_pics/btech_2015/15000 (22).jpg'
            },
            {
                    RollNo: 'CSE150001023',
                    name:' PRIYANKA MEENA ',
                    img: 'stu_pics/btech_2015/15000 (23).jpg'
            },
            {
                    RollNo: 'CSE150001024',
                    name:' PUNIT LAKSHWANI ',
                    img: 'stu_pics/btech_2015/15000 (24).jpg'
            },
            {
                    RollNo: 'CSE150001025',
                    name:' RADHESHYAM GUPTA',
                    img: 'stu_pics/btech_2015/15000 (25).jpg'
            },
            {
                    RollNo: 'CSE150001026',
                    name:' RAHUL CHOUDHARY ',
                    img: 'stu_pics/btech_2015/15000 (26).jpg'
            },
            {
                    RollNo: 'CSE150001027',
                    name:' ROHIT RANJAN ',
                    img: 'stu_pics/btech_2015/15000 (27).jpg'
            },
            {
                    RollNo: 'CSE150001028',
                    name:' SHAH VINIT HARESH',
                    img: 'stu_pics/btech_2015/15000 (28).jpg'
            },
            {
                    RollNo: 'CSE150001029',
                    name:' SHASHWAT RAGHUVANSHI',
                    img: 'stu_pics/btech_2015/15000 (29).jpg'
            },
            {
                    RollNo: 'CSE150001030',
                    name:'S. KAILAS NAGARAJ ',
                    img: 'stu_pics/btech_2015/15000 (30).jpg'
            },
            {
                    RollNo: 'CSE150001031',
                    name:' SHIVAM BHOSALE ',
                    img: 'stu_pics/btech_2015/15000 (31).jpg'
            },
            {
                    RollNo: 'CSE150001032',
                    name:' SHIVAM PARASHAR',
                    img: 'stu_pics/btech_2015/15000 (32).jpg'
            },
            {
                    RollNo: 'CSE150001033',
                    name:' SHIVAM TAYAL ',
                    img: 'stu_pics/btech_2015/15000 (33).jpg'
            },
            {
                    RollNo: 'CSE150001034',
                    name:' TAPISH PRATAP SINGH ',
                    img: 'stu_pics/btech_2015/15000 (34).jpg'
            },
            {
                    RollNo: 'CSE150001035',
                    name:'T. SRI RANGA VINEEL',
                    img: 'stu_pics/btech_2015/15000 (35).jpg'
            },
            {
                    RollNo: 'CSE150001036',
                    name:' UTKARSH K. SINGH ',
                    img: 'stu_pics/btech_2015/15000 (36).jpg'
            },
            {
                    RollNo: 'CSE150001037',
                    name:' YADAV SIDDHARTH',
                    img: 'stu_pics/btech_2015/15000 (37).jpg'
            },
            {
                    RollNo: 'CSE150001038',
                    name:' YASH KRISHAN VERMA ',
                    img: 'stu_pics/btech_2015/15000 (38).jpg'
            },
            {
                    RollNo: 'EE150002024',
                    name:' PARIDHI YADAV',
                    img: 'stu_pics/btech_2015/15000 (39).jpg'
            },
            {
                    RollNo: 'EE150002034',
                    name:' SHRESTHA KUMAR ',
                    img: 'stu_pics/btech_2015/15000 (40).jpg'
            }
      ]
  }
})