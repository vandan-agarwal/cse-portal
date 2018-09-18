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
        detail: 'Anirban Sengupta, Dipanjan Roy <em><strong>"Low Cost Dual-Phase Watermark for Protecting CE Devices in IoT Framework"</strong></em>, Springer Book: Security and Fault Tolerance in Internet of Things, Invited Book Chapter, March 2018.'
      }
      ]
  }
})