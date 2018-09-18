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
      [    {
        detail: 'Anirban Sengupta, "<em><strong>Embedding Watermark based on Multi-Variable Signature Encoding at Behaviour Level for Reusable IP Core Protection"</strong></em>,&nbsp;Indian Patent Office (IPO)<strong><em>,</em></strong>4466/MUM/2015, Nov 27,2015.'
      }
      ]
  }
})