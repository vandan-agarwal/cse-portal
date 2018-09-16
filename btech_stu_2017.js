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
                    name:' ABHIJEET SINGH YADAV',
                    img: 'stu_pics/btech_2017/17000 (1).jpg'
            },
            {
                    RollNo: 'CSE170001002',
                    name:'ADITYA GUPTA ',
                    img: 'stu_pics/btech_2017/17000 (2).jpg'
            },
            {
                    RollNo: 'CSE170001003',
                    name:' AJAYDEEP ',
                    img: 'stu_pics/btech_2017/17000 (3).jpg'
            },
            {
                    RollNo: 'CSE170001004',
                    name:' AKSHIT ',
                    img: 'stu_pics/btech_2017/17000 (4).jpg'
            },
            {
                    RollNo: 'CSE170001005',
                    name:'AMAN VERMA ',
                    img: 'stu_pics/btech_2017/17000 (5).jpg'
            },
            {
                    RollNo: 'CSE170001006',
                    name:' AMANPREET SINGH',
                    img: 'stu_pics/btech_2017/17000 (6).jpg'
            },
            {
                    RollNo: 'CSE170001007',
                    name:'ANKIT',
                    img: 'stu_pics/btech_2017/17000 (7).jpg'
            },
            {
                    RollNo: 'CSE170001008',
                    name:' ANKIT GEHLOT ',
                    img: 'stu_pics/btech_2017/17000 (8).jpg'
            },
            {
                    RollNo: 'CSE170001009',
                    name:' ARJIT ARORA ',
                    img: 'stu_pics/btech_2017/17000 (9).jpg'
            },
            {
                    RollNo: 'CSE170001010',
                    name:' ASHISH AZAD ',
                    img: 'stu_pics/btech_2017/17000 (10).jpg'
            },
            {
                    RollNo: 'CSE170001011',
                    name:' ASHUTOSH ANSHUL ',
                    img: 'stu_pics/btech_2017/17000 (11).jpg'
            },
            {
                    RollNo: 'CSE170001012',
                    name:' ASHWINI JHA ',
                    img: 'stu_pics/btech_2017/17000 (12).jpg'
            },
            {
                    RollNo: 'CSE170001013',
                    name:' ATCHE SRAVYA ',
                    img: 'stu_pics/btech_2017/17000 (13).jpg'
            },
            {
                    RollNo: 'CSE170001014',
                    name:' B RUSHYA SREE REDDY ',
                    img: 'stu_pics/btech_2017/17000 (14).jpg'
            },
            {
                    RollNo: 'CSE170001015',
                    name:'B.SAMHIT CHOWDARY ',
                    img: 'stu_pics/btech_2017/17000 (15).jpg'
            },
            {
                    RollNo: 'CSE170001016',
                    name:'B. VENKATA PAVAN ',
                    img: 'stu_pics/btech_2017/17000 (16).jpg'
            },
            {
                    RollNo: 'CSE170001017',
                    name:'C. SAI DINESH ',
                    img: 'stu_pics/btech_2017/17000 (17).jpg'
            },
            {
                    RollNo: 'CSE170001018',
                    name:' DEV KALRA ',
                    img: 'stu_pics/btech_2017/17000 (18).jpg'
            },
            {
                    RollNo: 'CSE170001019',
                    name:' DEVANSH SHAH ',
                    img: 'stu_pics/btech_2017/17000 (19).jpg'
            },
            {
                    RollNo: 'CSE170001020',
                    name:' DHANANJAY DIWAKAR ',
                    img: 'stu_pics/btech_2017/17000 (20).jpg'
            },
            {
                    RollNo: 'CSE170001021',
                    name:' DHARMESH KUMAR ',
                    img: 'stu_pics/btech_2017/17000 (21).jpg'
            },
            {
                    RollNo: 'CSE170001022',
                    name:' DHRUV SINGHAL ',
                    img: 'stu_pics/btech_2017/17000 (22).jpg'
            },
            {
                    RollNo: 'CSE170001023',
                    name:'DIVYANSH CHOUDHARY ',
                    img: 'stu_pics/btech_2017/17000 (23).jpg'
            },
            {
                    RollNo: 'CSE170001024',
                    name:' JHALAK GUPTA ',
                    img: 'stu_pics/btech_2017/17000 (24).jpg'
            },
            {
                    RollNo: 'CSE170001025',
                    name:' KALPIT KOTHARI ',
                    img: 'stu_pics/btech_2017/17000 (25).jpg'
            },
            {
                    RollNo: 'CSE170001026',
                    name:' KASTURI AJIT SHARMA ',
                    img: 'stu_pics/btech_2017/17000 (26).jpg'
            },
            {
                    RollNo: 'CSE170001027',
                    name:' KATURI PRUDHVI KIRAN ',
                    img: 'stu_pics/btech_2017/17000 (27).jpg'
            },
            {
                    RollNo: 'CSE170001028',
                    name:' MALISETTY KARTHIK ',
                    img: 'stu_pics/btech_2017/17000 (28).jpg'
            },
            {
                    RollNo: 'CSE170001029',
                    name:' MOHIT CHAUHAN',
                    img: 'stu_pics/btech_2017/17000 (29).jpg'
            },
            {
                    RollNo: 'CSE170001030',
                    name:'MRIGANK KRISHAN ',
                    img: 'stu_pics/btech_2017/17000 (30).jpg'
            },
            {
                    RollNo: 'CSE170001031',
                    name:' NAMAN JAIN ',
                    img: 'stu_pics/btech_2017/17000 (31).jpg'
            },
            {
                    RollNo: 'CSE170001032',
                    name:' NISARG SONI ',
                    img: 'stu_pics/btech_2017/17000 (32).jpg'
            },
            {
                    RollNo: 'CSE170001033',
                    name:'P SHARATH C.G. MITHRA ',
                    img: 'stu_pics/btech_2017/17000 (33).jpg'
            },
            {
                    RollNo: 'CSE170001034',
                    name:' P. VENKATA R. DEEPAK ',
                    img: 'stu_pics/btech_2017/17000 (34).jpg'
            },
            {
                    RollNo: 'CSE170001035',
                    name:'PRANSHU MAHESHWARI',
                    img: 'stu_pics/btech_2017/17000 (35).jpg'
            },
            {
                    RollNo: 'CSE170001036',
                    name:'PRATEEK K.TADAS',
                    img: 'stu_pics/btech_2017/17000 (36).jpg'
            },
            {
                    RollNo: 'CSE170001037',
                    name:' PRAYAG JAIN ',
                    img: 'stu_pics/btech_2017/17000 (37).jpg'
            },
            {
                    RollNo: 'CSE170001038',
                    name:' RAHUL ANAND YADAV ',
                    img: 'stu_pics/btech_2017/17000 (38).jpg'
            },
            {
                    RollNo: 'CSE170001039',
                    name:' RAVI PRAKASH MAURYA ',
                    img: 'stu_pics/btech_2017/17000 (39).jpg'
            },
            {
                    RollNo: 'CSE170001040',
                    name:' ROHAN PATEL ',
                    img: 'stu_pics/btech_2017/17000 (40).jpg'
            },
            {
                    RollNo: 'CSE170001041',
                    name:' RONAK BANDWAL ',
                    img: 'stu_pics/btech_2017/17000 (41).jpg'
            },
            {
                    RollNo: 'CSE170001042',
                    name:' SAHEJ GANERIWALA ',
                    img: 'stu_pics/btech_2017/17000 (42).jpg'
            },
            {
                    RollNo: 'CSE170001043',
                    name:' SAHIL KUMAR SONKAR ',
                    img: 'stu_pics/btech_2017/17000 (43).jpg'
            },
            {
                    RollNo: 'CSE170001044',
                    name:' SAKSHAM TANWAR ',
                    img: 'stu_pics/btech_2017/17000 (44).jpg'
            },
            {
                    RollNo: 'CSE170001045',
                    name:' SAURAV TAYAL ',
                    img: 'stu_pics/btech_2017/17000 (45).jpg'
            },
            {
                    RollNo: 'CSE170001046',
                    name:'SEEMANDHAR JAIN ',
                    img: 'stu_pics/btech_2017/17000 (46).jpg'
            },
            {
                    RollNo: 'CSE170001047',
                    name:' SIMRAN CHAUDHARY ',
                    img: 'stu_pics/btech_2017/17000 (47).jpg'
            },
            {
                    RollNo: 'CSE170001048',
                    name:' SONU SAGAR ',
                    img: 'stu_pics/btech_2017/17000 (48).jpg'
            },
            {
                    RollNo: 'CSE170001049',
                    name:' SPARSH GUPTA ',
                    img: 'stu_pics/btech_2017/17000 (49).jpg'
            },
            {
                    RollNo: 'CSE170001050',
                    name:' SUDHANSHU ARYA ',
                    img: 'stu_pics/btech_2017/17000 (50).jpg'
            },
            {
                    RollNo: 'CSE170001051',
                    name:' TANMAY SINGH ',
                    img: 'stu_pics/btech_2017/17000 (51).jpg'
            },
            {
                    RollNo: 'CSE170001052',
                    name:' TARUN KUMAR SINGH ',
                    img: 'stu_pics/btech_2017/17000 (52).jpg'
            },
            {
                    RollNo: 'CSE170001053',
                    name:' VAIBHAV ANAND ',
                    img: 'stu_pics/btech_2017/17000 (53).jpg'
            },
            {
                    RollNo: 'CSE170001054',
                    name:' VIKASH KUMAR ',
                    img: 'stu_pics/btech_2017/17000 (54).jpg'
            },
            {
                    RollNo: 'CSE170001055',
                    name:' VIKRAM KUSHWAHA ',
                    img: 'stu_pics/btech_2017/17000 (55).jpg'
            },
            {
                    RollNo: 'CSE170001056',
                    name:' VISHNUNARAYAN K I ',
                    img: 'stu_pics/btech_2017/17000 (56).jpg'
            },
            {
                    RollNo: 'CSE170001057',
                    name:'V. VAMSHI NAIK',
                    img: 'stu_pics/btech_2017/17000 (57).jpg'
            },
            {
                    RollNo: 'CSE170001058',
                    name:' VUTUKURU ROHITH',
                    img: 'stu_pics/btech_2017/17000 (58).jpg'
            }
      ]
  }
})