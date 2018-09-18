//conference-component
Vue.component('conference-item',{
    props: ['conference'],
    template:     
    '<li><span v-html="conference.detail"></span></li></br>'
})

//conference-object
var conference = new Vue({
    el: '#conference-list',
    data: {
      ConferencesList:
      [    {
        detail: 'Dipanjan Roy, Anirban Sengupta <em><strong>"Reusable Intellectual Property Core Protection for Both Buyer and Seller",</strong></em> Proc. 36th IEEE International Conference on Consumer Electronics (ICCE) 2018, Las Vegas, Accepted, Jan 2018.'
      }
      ]
  }
})