Vue.component('btech-item',{
    props: ['btech'],
    template:  
            '<div class="col-sm-2" style="margin-bottom: 15px;">'+
            '<div class="cardnew" style="height: 210px;">'+
                '<img class="student_image" v-bind:src="btech.img" style="margin-top: 5px;">'+
                '<div class="cardnew-heading" style="height: 50px;">'+
                    '<h5 class="cardnew-header" style="line-height: 22px;">{{btech.name}}</br>{{btech.RollNo}}</h5>'+
                '</div>'+  
            '</div></div>'
})

//btech 2018-students object
var btechStudents2018 = new Vue({
    el: '#btech-2018',
    data: {
      BtechList:
      [    
            {
                RollNo: 'CSE180001001',
                name: ' ADARSH BAGHEL',
                img: 'stu_pics/btech_2018/18000 (1).jpg'
            },
            {
                RollNo: 'CSE180001002',
                name: 'ADITI ',
                img: 'stu_pics/btech_2018/18000 (2).jpg'
            },
            {
                RollNo: 'CSE18000103',
                name: ' ADITI CHAUHAN ',
                img: 'stu_pics/btech_2018/18000 (3).jpg'
            },
            {
                RollNo: 'CSE180001004',
                name: 'AKSHAY PRAKASH ',
                img: 'stu_pics/btech_2018/18000 (4).jpg'
            },
            {
                RollNo: 'CSE180001005',
                name: 'ANIKET SANGWAN ',
                img: 'stu_pics/btech_2018/18000 (5).jpg'
            },
            {
                RollNo: 'CSE180001006',
                name: ' ANISH AVINASH SHENDE',
                img: 'stu_pics/btech_2018/18000 (6).jpg'
            },
            {
                RollNo: 'CSE180001007',
                name: 'ANMOL GOMRA',
                img: 'stu_pics/btech_2018/18000 (7).jpg'
            },
            {
                RollNo: 'CSE180001008',
                name: ' CARYAN VERMA ',
                img: 'stu_pics/btech_2018/18000 (8).jpg'
            },
            {
                RollNo: 'CSE180001009',
                name: ' ARYANT SUNIL DHARGAWE ',
                img: 'stu_pics/btech_2018/18000 (9).jpg'
            },
            {
                RollNo: 'CSE180001010',
                name: ' ASHUTOSH PATEL ',
                img: 'stu_pics/btech_2018/18000 (10).jpg'
            },
            {
                RollNo: 'CSE180001011',
                name: ' AYUSH AGRAWAL ',
                img: 'stu_pics/btech_2018/18000 (11).jpg'
            },
            {
                RollNo: 'CSE180001012',
                name: ' BHASKAR ',
                img: 'stu_pics/btech_2018/18000 (12).jpg'
            },
            {
                RollNo: 'CSE180001013',
                name: ' BHUKYA SNEHASHRIIE ',
                img: 'stu_pics/btech_2018/18000 (13).jpg'
            },
            {
                RollNo: 'CSE180001014',
                name: ' BOPPANI DURGA MAHESH ',
                img: 'stu_pics/btech_2018/18000 (14).jpg'
            },
            {
                RollNo: 'CSE180001015',
                name: ' GAURAV ',
                img: 'stu_pics/btech_2018/18000 (15).jpg'
            },
            {
                RollNo: 'CSE180001016',
                name: ' HANUPRIYA ',
                img: 'stu_pics/btech_2018/18000 (16).jpg'
            },
            {
                RollNo: 'CSE180001017',
                name: ' CHARITH VASUDEVAN ',
                img: 'stu_pics/btech_2018/18000 (17).jpg'
            },
            {
                RollNo: 'CSE180001018',
                name: 'HARSH CHAURASIA',
                img: 'stu_pics/btech_2018/18000 (18).jpg'
            },
            {
                RollNo: 'CSE180001019',
                name: 'HARSHIL BHAVSAR ',
                img: 'stu_pics/btech_2018/18000 (19).jpg'
            },
            {
                RollNo: 'CSE180001020',
                name: ' HEMANT THARAD ',
                img: 'stu_pics/btech_2018/18000 (20).jpg'
            },
            {
                RollNo: 'CSE180001021',
                name: ' JAGRUTHI PATIBANDLA',
                img: 'stu_pics/btech_2018/18000 (21).jpg'
            },
            {
                RollNo: 'CSE180001022',
                name: 'JAY BANGAR ',
                img: 'stu_pics/btech_2018/18000 (22).jpg'
            },
            {
                RollNo: 'CSE180001023',
                name: 'JEMIN VAGADIA ',
                img: 'stu_pics/btech_2018/18000 (23).jpg'
            },
            {
                RollNo: 'CSE180001024',
                name: ' KANDULA CHANDRA KANTH ',
                img: 'stu_pics/btech_2018/18000 (24).jpg'
            },
            {
                RollNo: 'CSE180001025',
                name: ' KANISHK PATEL ',
                img: 'stu_pics/btech_2018/18000 (25).jpg'
            },
            {
                RollNo: 'CSE180001026',
                name: 'KOLLA KRISHNA TEJA',
                img: 'stu_pics/btech_2018/18000 (26).jpg'
            },
            {
                RollNo: 'CSE180001027',
                name: 'KUMPATLA VIJAY BABU ',
                img: 'stu_pics/btech_2018/18000 (27).jpg'
            },
            {
                RollNo: 'CSE180001028',
                name: ' KUNAL KUMAR SAGAR ',
                img: 'stu_pics/btech_2018/18000 (28).jpg'
            },
            {
                RollNo: 'CSE180001029',
                name: ' MAMILLAPALLI SRIKRISHNA',
                img: 'stu_pics/btech_2018/18000 (29).jpg'
            },
            {
                RollNo: 'CSE180001030',
                name: 'METTUKURU UDAYKUMAR REDDY ',
                img: 'stu_pics/btech_2018/18000 (30).jpg'
            },
            {
                RollNo: 'CSE180001031',
                name: ' NAMAN JAIN ',
                img: 'stu_pics/btech_2018/18000 (31).jpg'
            },
            {
                RollNo: 'CSE180001032',
                name: ' NAMANI SREEHARSH ',
                img: 'stu_pics/btech_2018/18000 (32).jpg'
            },
            {
                RollNo: 'CSE180001033',
                name: 'PIYUSH GAURAV ',
                img: 'stu_pics/btech_2018/18000 (33).jpg'
            },
            {
                RollNo: 'CSE180001034',
                name: ' PRADEEP PATIDAR ',
                img: 'stu_pics/btech_2018/18000 (34).jpg'
            },
            {
                RollNo: 'CSE180001035',
                name: ' PRAKHAR RAI ',
                img: 'stu_pics/btech_2018/18000 (35).jpg'
            },
            {
                RollNo: 'CSE180001036',
                name: ' PRANJAL JANARDHAN SOMKUWAR ',
                img: 'stu_pics/btech_2018/18000 (36).jpg'
            },
            {
                RollNo: 'CSE180001037',
                name: ' PRASHANT KUMAR RAJAK ',
                img: 'stu_pics/btech_2018/18000 (37).jpg'
            },
            {
                RollNo: 'CSE180001038',
                name: 'PRITESH DINESH PALOD ',
                img: 'stu_pics/btech_2018/18000 (38).jpg'
            },
            {
                RollNo: 'CSE180001039',
                name: ' PUCHAKAYALA JEEVAN REDDY ',
                img: 'stu_pics/btech_2018/18000 (39).jpg'
            },
            {
                RollNo: 'CSE180001040',
                name: ' PULIVARTHI KARTHIK CHAKRAVARTHI ',
                img: 'stu_pics/btech_2018/18000 (40).jpg'
            },
            {
                RollNo: 'CSE180001041',
                name: ' RAPOLU PULAKITHA',
                img: 'stu_pics/btech_2018/18000 (41).jpg'
            },
            {
                RollNo: 'CSE180001042',
                name: ' ROHIT SHALIGRAM NIKAM ',
                img: 'stu_pics/btech_2018/18000 (42).jpg'
            },
            {
                RollNo: 'CSE180001043',
                name: ' ROOP RAJ B S ',
                img: 'stu_pics/btech_2018/18000 (43).jpg'
            },
            {
                RollNo: 'CSE180001044',
                name: ' RUCHIR MEHTA ',
                img: 'stu_pics/btech_2018/18000 (44).jpg'
            },
            {
                RollNo: 'CSE180001045',
                name: ' RUSHABH SUDAM KADAM ',
                img: 'stu_pics/btech_2018/18000 (45).jpg'
            },
            {
                RollNo: 'CSE180001046',
                name: 'SAMARTH ANAND ',
                img: 'stu_pics/btech_2018/18000 (46).jpg'
            },
            {
                RollNo: 'CSE180001047',
                name: ' SARTHAK JAIN ',
                img: 'stu_pics/btech_2018/18000 (47).jpg'
            },
            {
                RollNo: 'CSE180001048',
                name: ' SAWARKAR SALONI RAVINDRA ',
                img: 'stu_pics/btech_2018/18000 (48).jpg'
            },
            {
                RollNo: 'CSE180001049',
                name: ' SHAH MITEN HARESH',
                img: 'stu_pics/btech_2018/18000 (49).jpg'
            },
            {
                RollNo: 'CSE180001050',
                name: ' SHAIKH MOHD UBAID MOHD JAWED ',
                img: 'stu_pics/btech_2018/18000 (50).jpg'
            },
            {
                RollNo: 'CSE180001051',
                name: ' SHIVA SHUKLA ',
                img: 'stu_pics/btech_2018/18000 (51).jpg'
            },
            {
                RollNo: 'CSE180001052',
                name: ' SHRAVYA RAMASAHAYAM ',
                img: 'stu_pics/btech_2018/18000 (52).jpg'
            },
            {
                RollNo: 'CSE180001053',
                name: ' SHREYANSH JAIN ',
                img: 'stu_pics/btech_2018/18000 (53).jpg'
            },
            {
                RollNo: 'CSE180001054',
                name: ' SHUBHAM NIMESH ',
                img: 'stu_pics/btech_2018/18000 (54).jpg'
            },
            {
                RollNo: 'CSE180001055',
                name: 'SIMPLE MALIK ',
                img: 'stu_pics/btech_2018/18000 (55).jpg'
            },
            {
                RollNo: 'CSE180001056',
                name: 'SRIJAN ',
                img: 'stu_pics/btech_2018/18000 (56).jpg'
            },
            {
                RollNo: 'CSE180001057',
                name: ' SUNDESH GUPTA ',
                img: 'stu_pics/btech_2018/18000 (57).jpg'
            },
            {
                RollNo: 'CSE180001058',
                name: ' SURYAPOGU AKSHAY RAJ',
                img: 'stu_pics/btech_2018/18000 (58).jpg'
            },
            {
                RollNo: 'CSE180001059',
                name: ' TARUN GUPTA ',
                img: 'stu_pics/btech_2018/18000 (59).jpg'
            },
            {
                RollNo: 'CSE180001060',
                name: ' TUMOJU SATHVIK',
                img: 'stu_pics/btech_2018/18000 (60).jpg'
            },
            {
                RollNo: 'CSE180001061',
                name: ' VINESH KATEWA ',
                img: 'stu_pics/btech_2018/18000 (61).jpg'
            },
            {
                RollNo: 'CSE180001062',
                name: ' VISHAL PRALHAD THAKRE',
                img: 'stu_pics/btech_2018/18000 (62).jpg'
            },
            {
                RollNo: 'CSE180001063',
                name: ' YANAMADALA SAI ARAVIND ',
                img: 'stu_pics/btech_2018/18000 (63).jpg'
            },
            {
                RollNo: 'CSE180001064',
                name: ' YASH VARDHAN GUTGUTIA',
                img: 'stu_pics/btech_2018/18000 (64).jpg'
            }
    ]
  }
})