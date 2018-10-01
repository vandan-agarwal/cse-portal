//patent-component
Vue.component('patent-item',{
    props: ['patent'],
    template:     
    '<li><span v-html="patent.detail"></span></li></br>'
})

//patent-object
var patent = new Vue({
    el: '#patent-list',
    data: {
      PatentsList:
      [    
{
  detail: 'Anirban Sengupta, "<strong>Embedding Watermark based on Multi-Variable Signature Encoding at Behaviour Level for Reusable IP Core Protection"</strong>,&nbsp;Indian Patent Office (IPO)<strong>,</strong>4466/MUM/2015, Nov 27,2015.',
},
{
  detail: 'Dr. Gourinath Banda,<strong>&nbsp;&ldquo;System And Method For Electrical Energy Conservation&rdquo;</strong>,<strong>&nbsp;</strong>Filing Date: 28th&nbsp;of October, 2015, &nbsp;Application No.: 4092/MUM/2015.',
},
{
  detail: 'Anirban Sengupta<strong>, &ldquo;Design Space Exploration Of An Optimized Hardware Trojan Detectable/Secured Datapath During High Level Synthesis </strong>&rdquo;,&nbsp;Patent # 1666/MUM/2015, Publication Date : 05/06/2015.',
},
{
  detail: 'Anirban Sengupta<strong>, &ldquo;Design Space Exploration of Optimal Kc-Cycle Transient Fault Secured Datapath System with Intelligent Cut Insertion</strong>&rdquo;,&nbsp;Patent No. 63/MUM/2015, Publication Date : 05/06/2015.',
},
{
  detail: 'Anirban Sengupta<strong>&nbsp;"Design Space Exploration System and Method Thereof Using a Bacterial Foraging Optimization Mechanism&rdquo;,&nbsp;</strong>Patent No.2440/MUM/2014, Publication Date : 05/06/2015.',
},
{
  detail: 'Anirban Sengupta<strong>&nbsp;"Design Space Exploration of Optimal k-Cycle Transient Fault Tolerant Datapath Based on Multi-Objective Power-Performance Tradeoff&rdquo;,&nbsp;</strong>Patent No.&nbsp;2456/MUM/2014, Publication Date : 05/06/2015.',
},
{
  detail: 'Anirban Sengupta<strong>&nbsp;"Improved Schedule Delay Estimation Process for Datapath during High Level Synthesis of Application Specific Processors&rdquo;, </strong>Patent No.&nbsp;2482/MUM/2014, Publication Date : 05/06/2015.',
},
{
  detail: 'Aruna Tiwari, Ashok  Pencily Poothiyat, Kunal Chaudhary, <strong>&quot;System And Method For  Sign Language Gesture Recognition&quot;</strong>, 1988/MUM/2015 , 2015.',
},
{
  detail: 'Anirban Sengupta co-inventor: Reza Sedaghat), <strong>"System and Method for Development of System Architecture",</strong>US Patent granted by United Sates Patent and Trademark Office (USPTO)</strong>, Publication no. US20120303560A1,&nbsp;May 2014. STATUS: Allowed',
},
{
  detail: 'Anirban Sengupta, <i><strong>&quot;System and Methodology for Development of System Architecture&quot;</strong></i>, US patent granted by United Sates Patent and Trademark Office (USPTO), US8397204 B2, March 2013 (co-inventor: Reza Sedaghat). <a href = "http://www.google.com/patents/US8397204?dq=anirban+sengupta&hl=en&sa=X&ei=7TLJUdTiAY3fOJGhgagJ&sqi=2&pjf=1&ved=0CHMQ6AEwCQ" target="_newTab">Link</a>.',
}
      ]
  }
})