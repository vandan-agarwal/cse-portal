<html lang="en">
<!DOCTYPE html>
<head>
  <link href="css/card.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Crete+Round|Exo|Lekton|Lobster|Merienda|Monoton|Pacifico|Josefin+Sans|Play|Righteous|Ruslan+Display" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  
 <style type="text/css">
 .nav-pills>li>a, .nav-pills>li>a:focus, .nav-pills>li>a:hover{
    color: #013953; 
 }
 .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{
    background-image:  linear-gradient(to top left, #013953, #5d8aa8); 
 }
 ol{
    color: #013953;
   }
  
   
 </style>
 }
</head>
<body>
   <?php include('header.php') ; ?>
    <div class="container" style="background-color:white;">
    <div class="row">
        <?php include('menu1.php'); ?>
      <ul class="nav nav-pills" style="margin-top: 15px; border-bottom: 2px groove #5d8aa8;">
      <li><a style="border-radius: 0%; text-align: center; font-size: 1.5em;" href="journal.php">Journals</a></li>
      <li><a style="border-radius: 0%; text-align: center; font-size: ;  font-size: 1.5em;" href="  conference.php">Conferences</a></li>
      <li><a style="border-radius: 0%; text-align: center;  font-size: 1.5em;" href="patent.php">Patents</a></li>
      <li class="active"><a style="border-radius: 0%; text-align: center; font-size: 1.5em; "  data-toggle="pill" href="#books">Books</a></li><li><a style="border-radius: 0%; text-align: center; font-size: 1.5em;" href="bookchapter.php">Book Chapters</a></li>
    </ul>
    <div class="tab-content">
     <div id="books" class="tab-pane fade in active">
    <ol style="margin-top: 20px;" id="book-list">
    <!--books can be added from book instance of book.js-->
    <li v-for="book in BooksList"
                    v-bind:book="book"
                    v-bind:key="book.id"
                    is="book-item"
                    >
    </li>
                  <!-- <li class="style2">Surya Prakash&nbsp;and Phalguni Gupta,&nbsp;<strong><em><a href = "http://link.springer.com/book/10.1007/978-981-287-375-0">Ear Biometrics in 2D and 3D: Localization and Recognition</a></em></strong>, Springer, 2015, ISBN 978-981-287-374-3.</li>
  <span class="style2"></br>
  </span>
  <li class="style2">Somnath Dey and Debasis Samanta, <b><strong><em><a href = "http://www.degruyter.com/view/product/248399">"Unimodal and Multimodal Biometric Data Indexing"</a></em></strong></b>, De Gruyter, Berlin, Boston, 2014.</li> -->
</ol>

</div>
 </div>
</div>
</div>
  <?php include('footer.php') ; ?>    
  <script type="text/javascript" src="book.js"></script>
</body>
</html> 
