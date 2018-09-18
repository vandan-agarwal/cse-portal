//fellowship-component
Vue.component('fellowship-item',{
    props: ['fellowship'],
    template:  '<tr>'+
    '<td valign="middle">{{fellowship.Sno}}).&nbsp;</td>'+
    '<td valign="top"><br><font face="Georgia, Times New Roman, Times, serif" color="#4F3300"><p class="style2"><strong>Title: </strong><span v-html="fellowship.title"></span><br/>'+
          '<strong>Project Investigator: </strong> <span v-html="fellowship.projectInvestigator"></span><br/>'+
          '<strong>Sponsoring Agency: </strong>{{fellowship.sponsoringAgency}}<br>'+
          '<strong>Duration: </strong>{{fellowship.duration}}<br>'+
          '<strong>Funding Amount: </strong>{{fellowship.fundingAmount}}<br>'+
    '</td>'+       
    '</tr>'        
})


//fellowship-object
var Fellowships = new Vue({
    el: '#fellowships',
    data: {
      FellowshipsList:
      [    {
        Sno: '1',
        title: 'Efficient Solution of Linear Systems arising in Non-Parametric Model Reduction of Second Order Systems.',
        projectInvestigator:  'Dr. Kapil Ahuja',
        sponsoringAgency: 'IIT-TU9 Faculty Exchange Program of DAAD (German Academic Exchange Service).',
        duration: 'Visit&nbsp;to TU Braunschweig for month of June 2014 (Approved on 19th March 2014).',
        fundingAmount: '2200 Euros'
      }
      ]
  }
})