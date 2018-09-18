//book-component
Vue.component('book-item',{
    props: ['book'],
    template:     
    '<li><span v-html="book.detail"></span></li></br>'
})

//book-object
var book = new Vue({
    el: '#book-list',
    data: {
      BooksList:
      [    {
        detail: 'Surya Prakash&nbsp;and Phalguni Gupta,&nbsp;<strong><em><a href = "http://link.springer.com/book/10.1007/978-981-287-375-0">Ear Biometrics in 2D and 3D: Localization and Recognition</a></em></strong>, Springer, 2015, ISBN 978-981-287-374-3.'
      }
      ]
  }
})