//bookChapter-component
Vue.component('bookChapter-item',{
    props: ['bookchapter'],
    template:     
    '<li><span v-html="bookchapter.detail"></span></li></br>'
})

//bookChapter-object
var bookChapter = new Vue({
    el: '#bookChapter-list',
    data: {
      BookChaptersList:
      [   
        
{
  detail: 'Surya Prakash&nbsp;and Phalguni Gupta,&nbsp;<strong><a href = "http://link.springer.com/book/10.1007/978-981-287-375-0">"Ear Biometrics in 2D and 3D: Localization and Recognition"</a></strong>, Springer, 2015, ISBN 978-981-287-374-3.',
},      
{
  detail: 'Somnath Dey and Debasis Samanta, <b><strong><a href = "http://www.degruyter.com/view/product/248399">"Unimodal and Multimodal Biometric Data Indexing"</a></strong></b>, De Gruyter, Berlin, Boston, 2014.',
},  
{
  detail: 'Anirban Sengupta, Deepak Kachave, <strong>"Transient Fault-Tolerant Datapath during High Level Synthesis for DSP Cores: Data Intensive Applications"</strong>, IET Book: VLSI and Post-CMOS Devices, Circuits and Modelling, Invited Book Chapter, 2018.',
},
{
  detail: 'Anirban Sengupta, Dipanjan Roy <strong>"Low Cost Dual-Phase Watermark for Protecting CE Devices in IoT Framework"</strong>, Springer Book: Security and Fault Tolerance in Internet of Things, Invited Book Chapter, March 2018.',
},
{
  detail: '  Anirban Sengupta<strong>,&nbsp;</strong>Saraju P.Mohanty <strong>"High-Level Synthesis of Digital Circuits in the Nanoscale, Mobile Electronics Era"</strong>,&nbsp;IET Book:&nbsp;Nano-CMOS and Post-CMOS Electronics: Circuits and Design,<strong>&nbsp;</strong>Invited Book Chapter, e-ISBN: 9781785610004, pp: 219 - 261, June 2016.    ',
},
{
    detail: 'Surya Prakash, Kamlesh Tiwari and Phalguni Gupta,&nbsp;<strong>&quot;Biometrics Using Scale Invariant Feature Transform&quot;</strong>,&nbsp;Wiley Encyclopedia of Electrical and Electronics Engineering, 2015.&nbsp;',
  },
{
  detail: 'Surya Prakash, Phalguni Gupta and Raghunath Tiwari,&nbsp;<strong>&quot;Algorithms and their Design&nbsp;in&nbsp;Decision Sciences: Theory and Practice&nbsp;(Chapter 16)&quot;</strong>, CRC Press, Taylor &amp; Francis Group, 2015',
},
{
  detail: 'Neminath Hubballi and Deepanshu Goyal, <strong>"Discovering Periodicity in Network Flows for Security Monitoring" </strong>Handbook of Research on Modern Cryptographic Solutions for Computer and Cyber Security 2015&nbsp;(Accepted) Total Pages 20, IGI Global',
},
{
  detail: 'Anirban Sengupta, Saraju P. Mohanty <strong>&nbsp;"High-Level Synthesis of Digital Circuits in the Nanoscale, Mobile Electronics Era"</strong>,&nbsp;Book Volume: Nano-CMOS and Post-CMOS Electronics: Circuits and Design, IET, &nbsp;&nbsp;March-2015 ,&nbsp;In Press&nbsp; Total Pages: 49',
},
{
  detail: 'Patel, O., Tiwari A.,<strong> &quot;Quantum Based Learning with Binary Neural Network&quot;</strong>, L.  C. Jain, Springer-Verlag Berlin Heidelberg, &nbsp; 978-81-322-2208-8,  &nbsp;19-21 Dec &nbsp;2014.',
},
{
  detail: 'Patel O., Tiwari A.,<strong> &quot;Liver Disease Diagnosis using Quantum based Binary Neural Network  Learning Algorithm&quot;, </strong>K. N. Das , &nbsp; Springer-Verlag Berlin  Heidelberg, &nbsp; 978-81-322-2220-0, 27-29 Dec 2014.',
},
{
  detail: 'Anirban Sengupta<strong>&nbsp;"Design Space Exploration of Datapath (Architecture) in High Level Synthesis for Computation Intensive Applications"</strong>,&nbsp;Springer Book volume: Application of Evolutionary Algorithms for Multi-Objective Optimization in VLSI and Embedded Systems,&nbsp;&nbsp;Aug 2014,&nbsp;Print ISBN:&nbsp;<a href="callto:978-81-322-1957-6" onClick="window.top.Com_Zimbra_Phone.unsetOnbeforeunload()">978-81-322-1957-6</a>, pp. 93 - 111.',
},
{
  detail: 'Anirban Sengupta<strong>&nbsp;"Design Flow from Algorithm To RTL using Evolutionary Exploration Approach" ,&nbsp;</strong>Springer Book volume: Application of Evolutionary Algorithms for Multi-Objective Optimization in VLSI and Embedded Systems,&nbsp;Aug 2014, Print ISBN:&nbsp;<a href="callto:978-81-322-1957-6" onClick="window.top.Com_Zimbra_Phone.unsetOnbeforeunload()">978-81-322-1957-6</a>, pp. 113 - 123.',
}
      ]
  }
})