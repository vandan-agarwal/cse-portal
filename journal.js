//journal-component
Vue.component('journal-item',{
    props: ['journal'],
    template:     
    '<li><span v-html="journal.detail"></span></li></br>'
})

//journal-object
var Journals = new Vue({
    el: '#journals-list',
    data: {
      JournalsList:
      [    {
        detail: 'Syed Sadaf Ali and Surya Prakash,  <em><strong>"3-Dimensional Secured Fingerprint Shell",</strong></em>  Pattern Recognition Letters, 2018 (Accepted). <a href="https://www.sciencedirect.com/science/article/pii/S0167865518301375?via%3Dihub">[Link]</a>'
      }
      ]
  }
})