//sr-projects component
Vue.component('sr-item',{
    props: ['sr'],
    template:  '<tr>'+
    '<td valign="middle">{{sr.Sno}}).&nbsp;</td>'+
    '<td valign="top"><br><font face="Georgia, Times New Roman, Times, serif" color="#4F3300"><p class="style2"><strong>Title: </strong><span v-html="sr.title"></span><br/>'+
          '<strong>Project Investigator: </strong> <span v-html="sr.projectInvestigator"></span><br/>'+
          '<strong>Sponsoring Agency: </strong>{{sr.sponsoringAgency}}<br>'+
          '<strong>Duration: </strong>{{sr.duration}}<br>'+
          '<strong>Funding Amount: </strong>{{sr.fundingAmount}}<br>'+
    '</td>'+       
    '</tr>'        
})


//sr-projects object
var Srprojects = new Vue({
    el: '#srprojects',
    data: {
      SRProjectsList:
      [ 
        {
          Sno: '1',
          title: 'Development of Novel Methodologies for Reliability Aware and Trojan Secured Architectural Synthesis.',
          projectInvestigator: 'Dr. Anirban Sengupta',
          sponsoringAgency: 'Sir Visvesvaraya Faculty Research Fellow, Ministry of Electronics &amp; IT (MEitY)',
          duration: '2017 - 2022',
          fundingAmount: 'INR 37  Lakhs'
        },
        {
          Sno: '2',
          title: 'Development of Novel Methodologies for Trusted and Secured IP chip design for Consumer Electronics.',
          projectInvestigator: 'Dr. Anirban Sengupta',
          sponsoringAgency: 'Council of Industrial &amp; Scientific Research, Extra Mural Research Division (CSIR-EMR)',
          duration: '2017 - 2020',
          fundingAmount: 'INR 26  Lakhs'
        },
        {
          Sno: '3',
          title: 'Design and Development of an Automated Surveillance System using Wireless Sensor Networks for the Melghat Tiger Reserve.',
          projectInvestigator: 'Dr. Abhishek Srivastava',
          sponsoringAgency: 'Defries-Bajpai Foundation, USA.',
          duration: '2017 - 2019',
          fundingAmount: 'INR 3.05  Lakhs'
        },
        {
          Sno: '4',
          title: 'Process Documentation for â?~Samagraâ?T Portal of Govt. of Madhya Pradesh.',
          projectInvestigator: 'Dr. Abhishek Srivastava (one of four investigators)',
          sponsoringAgency: 'UNICEF',
          duration: '2017 - 2018',
          fundingAmount: 'INR 35.30  Lakhs'
        },
        {
          Sno: '5',
          title: 'Design and Development of a Trusted and Accountable Cloud Computing Platform.',
          projectInvestigator: 'Dr. Neminath Hubballi',
          sponsoringAgency: 'Science and Engineering Research Board, Government of India',
          duration: '2015 - 2018',
          fundingAmount: 'INR 19.86  Lakhs'
        },
        {
          Sno: '6',
          title: 'Development of an Efficient Ear Biometric System and Investigation of Age Invariant Nature of Human Ear.',
          projectInvestigator: 'Dr. Surya Prakash',
          sponsoringAgency: 'Department of Science &amp; Technology (DST), Government of India',
          duration: '2015 - 2018',
          fundingAmount: 'INR 31.53 Lakhs'
        },
        {
          Sno: '7',
          title: 'Development of Multi-Objective Design Space Exploration Methodologies in Architectural Synthesis of Data Intensive Applications for Application Specific Processor Design.',
          projectInvestigator: 'Dr. Anirban Sengupta',
          sponsoringAgency: 'Department of Science &amp; Technology (DST), Government of India',
          duration: '2014 - 2017',
          fundingAmount: 'INR 12.73 Lakhs'
        },
        {
          Sno: '8',
          title: 'Recycling Krylov Subspaces for Parametric Model Order Reduction and Uncertainty Quantification.',
          projectInvestigator: 'Dr. Kapil Ahuja',
          sponsoringAgency: 'Council of Scientific and Industrial Research (CSIR), India',
          duration: '2013 - 2016',
          fundingAmount: 'INR 10.4 Lakhs'
        },
        {
          Sno: '9',
          title: 'Raw Material Combination Planning for Transmission Line Towers.',
          projectInvestigator: 'Dr. Abhishek Srivastava',
          sponsoringAgency: 'L &amp; T Costruction',
          duration: '2014 - 2015',
          fundingAmount: 'INR 62300'        
        }
      ]
  }
})