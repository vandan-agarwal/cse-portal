//sr-projects component
Vue.component('sr-item',{
    props: ['sr'],
    template:  '<tr>'+
  '<td>{{sr.Sno}}</td>'+
  '<td>{{sr.title}}</td>'+
  '<td>{{sr.projectInvestigator}}.</td>'+
  '<td>{{sr.sponsoringAgency}}</td>'+
  '<td>{{sr.duration}}</td>'+
  '<td>{{sr.fundingAmount}}</td>'+
'</tr>'
            
})
//table header
 Vue.component('sr-header',{
    template:  '<tr>'+
  '<th>S/N</th>'+
  '<th>Title</th>'+
  '<th>Project Investigator</th>'+
  '<th>Sponsoring Agency</th>'+
  '<th>Duration</th>'+
  '<th>Funding Amount</th>'+
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
      }
      ]
  }
})