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

//btech 2016-students object
var btechStudents2016 = new Vue({
    el: '#btech-2016',
    data: {
      BtechList:
      [    
        // {
        //     RollNo: ' CSE140001001',
        //     name: 'AAKASH cHANDA',
        //     img: 'stu_pics/btech_2014/140001001_AAKASH HANDA .jpg'
        // }
            {
                    RollNo: 'CSE160001001',
                    name:' ABHISHEK MISHRA ',
                    img: 'stu_pics/btech_2016/16000 (1).jpg'
            },
            {
                    RollNo: 'CSE160001002',
                    name:'AKASH KUMAR',
                    img: 'stu_pics/btech_2016/16000 (2).jpg'
            },
            {
                    RollNo: 'CSE160001003',
                    name:' AMEY KIRAN PATEL ',
                    img: 'stu_pics/btech_2016/16000 (3).jpg'
            },
            {
                    RollNo: 'CSE160001004',
                    name:' AMIT KUMAR MEENA ',
                    img: 'stu_pics/btech_2016/16000 (4).jpg'
            },
            {
                    RollNo: 'CSE160001005',
                    name:'ANURAG VERMA ',
                    img: 'stu_pics/btech_2016/16000 (5).jpg'
            },
            {
                    RollNo: 'CSE160001006',
                    name:' ARAVIND RAVIKUMAR',
                    img: 'stu_pics/btech_2016/16000 (6).jpg'
            },
            {
                    RollNo: 'CSE160001007',
                    name:' ARJUN SRIVASATAVA ',
                    img: 'stu_pics/btech_2016/16000 (7).jpg'
            },
            {
                    RollNo: 'CSE160001008',
                    name:' ARUSHI JAIN ',
                    img: 'stu_pics/btech_2016/16000 (8).jpg'
            },
            {
                    RollNo: 'CSE160001009',
                    name:' ASHISH ARUN GAWAI ',
                    img: 'stu_pics/btech_2016/16000 (9).jpg'
            },
            {
                    RollNo: 'CSE160001010',
                    name:' ASHISH MANDAL ',
                    img: 'stu_pics/btech_2016/16000 (10).jpg'
            },
            {
                    RollNo: 'CSE160001011',
                    name:' ASHUTOSH BANG ',
                    img: 'stu_pics/btech_2016/16000 (11).jpg'
            },
            {
                    RollNo: 'CSE160001012',
                    name:' AYUSH MANTRI ',
                    img: 'stu_pics/btech_2016/16000 (12).jpg'
            },
            {
                    RollNo: 'CSE160001013',
                    name:' AYUSH PRASAD ',
                    img: 'stu_pics/btech_2016/16000 (13).jpg'
            },
            {
                    RollNo: 'CSE160001014',
                    name:' BANALA ASHISH ',
                    img: 'stu_pics/btech_2016/16000 (14).jpg'
            },
            {
                    RollNo: 'CSE160001015',
                    name:' BIPLAB KUMAR SAHOO ',
                    img: 'stu_pics/btech_2016/16000 (15).jpg'
            },
            {
                    RollNo: 'CSE160001016',
                    name:' BITAN PAUL ',
                    img: 'stu_pics/btech_2016/16000 (16).jpg'
            },
            {
                    RollNo: 'CSE160001017',
                    name:' BITAN PAUL ',
                    img: 'stu_pics/btech_2016/16000 (17).jpg'
            },
            {
                    RollNo: 'CSE160001018',
                    name:' CHINMAY ANAND ',
                    img: 'stu_pics/btech_2016/16000 (18).jpg'
            },
            {
                    RollNo: 'CSE160001019',
                    name:'D. PRAVEEN KUMAR ',
                    img: 'stu_pics/btech_2016/16000 (19).jpg'
            },
            {
                    RollNo: 'CSE160001020',
                    name:' DHAARNA MAHESHWARI ',
                    img: 'stu_pics/btech_2016/16000 (20).jpg'
            },
            {
                    RollNo: 'CSE160001021',
                    name:' G VENKATA SAI AKHIL ',
                    img: 'stu_pics/btech_2016/16000 (21).jpg'
            },
            {
                    RollNo: 'CSE160001022',
                    name:' GHANSHYAM BAIRWA ',
                    img: 'stu_pics/btech_2016/16000 (22).jpg'
            },
            {
                    RollNo: 'CSE160001023',
                    name:' GOEL ISHAN MOHIT ',
                    img: 'stu_pics/btech_2016/16000 (23).jpg'
            },
            {
                    RollNo: 'CSE160001024',
                    name:' GUGULOTH PAVAN NAIK ',
                    img: 'stu_pics/btech_2016/16000 (24).jpg'
            },
            {
                    RollNo: 'CSE160001025',
                    name:' HARSH VARDHAN ',
                    img: 'stu_pics/btech_2016/16000 (25).jpg'
            },
            {
                    RollNo: 'CSE160001026',
                    name:' JOSHI NIRANJAN SUHAS ',
                    img: 'stu_pics/btech_2016/16000 (26).jpg'
            },
            {
                    RollNo: 'CSE160001027',
                    name:' K NITHIN KUMAR ',
                    img: 'stu_pics/btech_2016/16000 (27).jpg'
            },
            {
                    RollNo: 'CSE160001028',
                    name:' KANISHKAR J ',
                    img: 'stu_pics/btech_2016/16000 (28).jpg'
            },
            {
                    RollNo: 'CSE160001029',
                    name:' KODI VIKAS ',
                    img: 'stu_pics/btech_2016/16000 (29).jpg'
            },
            {
                    RollNo: 'CSE160001030',
                    name:'KOVIDH VENGALA ',
                    img: 'stu_pics/btech_2016/16000 (30).jpg'
            },
            {
                    RollNo: 'CSE160001031',
                    name:' KRITIK SHARMA ',
                    img: 'stu_pics/btech_2016/16000 (31).jpg'
            },
            {
                    RollNo: 'CSE160001032',
                    name:' KUMAR ABHINAV ',
                    img: 'stu_pics/btech_2016/16000 (32).jpg'
            },
            {
                    RollNo: 'CSE160001033',
                    name:' MAHESH KUMAR ',
                    img: 'stu_pics/btech_2016/16000 (33).jpg'
            },
            {
                    RollNo: 'CSE160001034',
                    name:'M. ANISH SRI CHANDRA ',
                    img: 'stu_pics/btech_2016/16000 (34).jpg'
            },
            {
                    RollNo: 'CSE160001035',
                    name:' MOHIT MALVIYA ',
                    img: 'stu_pics/btech_2016/16000 (35).jpg'
            },
            {
                    RollNo: 'CSE160001036',
                    name:' MUKKAMALLA MOUNIKA ',
                    img: 'stu_pics/btech_2016/16000 (36).jpg'
            },
            {
                    RollNo: 'CSE160001037',
                    name:' NAIK PRATHAMESH UMESH ',
                    img: 'stu_pics/btech_2016/16000 (37).jpg'
            },
            {
                    RollNo: 'CSE160001038',
                    name:' NAMAN SINGHAL ',
                    img: 'stu_pics/btech_2016/16000 (38).jpg'
            },
            {
                    RollNo: 'CSE160001039',
                    name:'N. PANKAJ SIDDHARTH ',
                    img: 'stu_pics/btech_2016/16000 (39).jpg'
            },
            {
                    RollNo: 'CSE160001040',
                    name:'N. GAURAV HARISHCHANDRA ',
                    img: 'stu_pics/btech_2016/16000 (40).jpg'
            },
            {
                    RollNo: 'CSE160001041',
                    name:' NEERUDI SAI VIKAS ',
                    img: 'stu_pics/btech_2016/16000 (41).jpg'
            },
            {
                    RollNo: 'CSE160001042',
                    name:' NEHA NAGENDRA ',
                    img: 'stu_pics/btech_2016/16000 (42).jpg'
            },
            {
                    RollNo: 'CSE160001043',
                    name:'P. SAI KUMAR REDDY ',
                    img: 'stu_pics/btech_2016/16000 (43).jpg'
            },
            {
                    RollNo: 'CSE160001044',
                    name:'P. BALAMANGARAJ ',
                    img: 'stu_pics/btech_2016/16000 (44).jpg'
            },
            {
                    RollNo: 'CSE160001045',
                    name:' PRANAY MUNDA ',
                    img: 'stu_pics/btech_2016/16000 (45).jpg'
            },
            {
                    RollNo: 'CSE160001046',
                    name:' PUSHPENDRA KUMAR ',
                    img: 'stu_pics/btech_2016/16000 (46).jpg'
            },
            {
                    RollNo: 'CSE160001047',
                    name:' RAHUL KUMAR',
                    img: 'stu_pics/btech_2016/16000 (47).jpg'
            },
            {
                    RollNo: 'CSE160001048',
                    name:' RISHABH K.VERMA ',
                    img: 'stu_pics/btech_2016/16000 (48).jpg'
            },
            {
                    RollNo: 'CSE160001049',
                    name:' RISHABH VERMA ',
                    img: 'stu_pics/btech_2016/16000 (49).jpg'
            },
            {
                    RollNo: 'CSE160001050',
                    name:' RISHIKA PATEL ',
                    img: 'stu_pics/btech_2016/16000 (50).jpg'
            },
            {
                    RollNo: 'CSE160001051',
                    name:' ROTTE PRIYANKA AJAY ',
                    img: 'stu_pics/btech_2016/16000 (51).jpg'
            },
            {
                    RollNo: 'CSE160001052',
                    name:' SAHAJ KHANDELWAL ',
                    img: 'stu_pics/btech_2016/16000 (52).jpg'
            },
            {
                    RollNo: 'CSE160001053',
                    name:' SANDARBH SAHU ',
                    img: 'stu_pics/btech_2016/16000 (53).jpg'
            },
            {
                    RollNo: 'CSE160001054',
                    name:' SHASHANK GIRI ',
                    img: 'stu_pics/btech_2016/16000 (54).jpg'
            },
            {
                    RollNo: 'CSE160001055',
                    name:' SHUBHANKIT SINGH ',
                    img: 'stu_pics/btech_2016/16000 (55).jpg'
            },
            {
                    RollNo: 'CSE160001056',
                    name:' SOMESH PATIL ',
                    img: 'stu_pics/btech_2016/16000 (56).jpg'
            },
            {
                    RollNo: 'CSE160001057',
                    name:' SUNAND AGARWAL ',
                    img: 'stu_pics/btech_2016/16000 (57).jpg'
            },
            {
                    RollNo: 'CSE160001058',
                    name:'T. VENKAT NIKHIL',
                    img: 'stu_pics/btech_2016/16000 (58).jpg'
            },
            {
                    RollNo: 'CSE160001059',
                    name:' TOGARU SURYA TEJA ',
                    img: 'stu_pics/btech_2016/16000 (59).jpg'
            },
            {
                    RollNo: 'CSE160001060',
                    name:'V. VANDANA ',
                    img: 'stu_pics/btech_2016/16000 (60).jpg'
            },
            {
                    RollNo: 'CSE160001061',
                    name:' VISHAL MAURYA ',
                    img: 'stu_pics/btech_2016/16000 (61).jpg'
            },
            {
                    RollNo: 'CSE160002052',
                    name:' SAPTARSHI GHOSH ',
                    img: 'stu_pics/btech_2016/16000 (62).jpg'
            },
            {
                    RollNo: 'CSE160002056',
                    name:' SOUVIK MANDAL ',
                    img: 'stu_pics/btech_2016/16000 (63).jpg'
            }
      ]
  }
})