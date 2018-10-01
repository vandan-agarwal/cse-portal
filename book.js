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
      [ 
        {
          detail: 'Neha Bharill, Aruna Tiwari,<strong> &quot;Handling Big Data with Fuzzy Based Classification Approach&quot;</strong>,  e-book: Studies in Fuzziness and Soft Computing,&nbsp;&nbsp; Mo Jamshidi  moj@wacong.org (2) Vladik Kreinovich vladik@utep.edu (3) Janusz Kacprzyk , &nbsp;  Springer International Publishing Switzerland, &nbsp; ISBN 978-3-319-03673-1,  &nbsp;16-18 Dec 2013.',
        },
        {
          detail: 'Arpit Bhardwaj and Aruna Tiwari, <strong>&quot;A Novel Genetic Programming Based Classifier Design Using a New Constructive  Crossover Operator with a Local Search Technique&quot;</strong>,&nbsp;&nbsp; De-Shuang Huang,  Vitoantonio Bevilacqua, Juan Carlos Figueroa, Prashan Premaratne, &nbsp;  Springer-Verlag Berlin Heidelberg, &nbsp; 978-3-642-39479-9, 28-31 July2013.',
        }
      ]
  }
})