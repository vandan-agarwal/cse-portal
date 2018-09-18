//sr-projects component
Vue.component('sr-item',{
    props: ['sr'],
    template:  '<tr>'+
    '<td valign="middle">{{sr.Sno}}).&nbsp;</td>'+
    '<td valign="top"><br><p class="style2"><strong>Title: </strong><span v-html="sr.title"></span><br/>'+
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
      [    {
        Sno: '1',
        title: 'Development of Novel Methodologies for Reliability Aware and Trojan Secured Architectural Synthesis.',
        projectInvestigator:  'Dr. Anirban Sengupta',
        sponsoringAgency: 'Sir Visvesvaraya Faculty Research Fellow, Ministry of Electronics & IT (MEitY)',
        duration: '2017 - 2022',
        fundingAmount: 'INR 37 Lakhs'
      },
      {
        Sno: '2',
        title: 'Development of Novel Methodologies for Reliability Aware and Trojan Secured Architectural Synthesis.',
        projectInvestigator:  'Dr. Anirban Sengupta',
        sponsoringAgency: 'Sir Visvesvaraya Faculty Research Fellow, Ministry of Electronics & IT (MEitY)',
        duration: '2017 - 2022',
        fundingAmount: 'INR 37 Lakhs'
      }
      ]
  }
})