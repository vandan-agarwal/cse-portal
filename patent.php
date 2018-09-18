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
      <li ><a style="border-radius: 0%; text-align: center; font-size: 1.5em;" href="journal.php">Journals</a></li>
      <li ><a style="border-radius: 0%; text-align: center; font-size: ;  font-size: 1.5em;" href="conference.php">Conferences</a></li>
      <li class="active"><a style="border-radius: 0%; text-align: center;  font-size: 1.5em;" data-toggle="pill" href="#patents">Patents</a></li>
      <li><a style="border-radius: 0%; text-align: center; font-size: 1.5em; "  href="book.php">Books</a></li><li><a style="border-radius: 0%; text-align: center; font-size: 1.5em;" href="bookchapter.php">Book Chapters</a></li>
    </ul>
    <div class="tab-content">
     <div id="patents" class="tab-pane fade in active">
      <ol style="margin-top: 20px" id="patent-list">
      <!--patents can be added inside patetn instance of patent.js file--> 
        <li v-for="patent in PatentsList"
                    v-bind:patent="patent"
                    v-bind:key="patent.id"
                    is="patent-item"
                    >
                  </li>
<!-- <li class="style2">Anirban Sengupta, "<em><strong>Embedding Watermark based on Multi-Variable Signature Encoding at Behaviour Level for Reusable IP Core Protection"</strong></em>,&nbsp;Indian Patent Office (IPO)<strong><em>,</em></strong>4466/MUM/2015, Nov 27,2015.</li>
<br>
<li class="style2">Dr. Gourinath Banda<em>,<strong>&nbsp;&ldquo;System And Method For Electrical Energy Conservation&rdquo;</strong>,<strong>&nbsp;</strong></em>Filing Date: 28th&nbsp;of October, 2015, &nbsp;Application No.: 4092/MUM/2015.</li><br>
<li class="style2">Anirban Sengupta<strong>, <em>&ldquo;Design Space Exploration Of An Optimized Hardware Trojan Detectable/Secured Datapath During High Level Synthesis </em></strong><em>&rdquo;</em>,&nbsp;Patent # 1666/MUM/2015, Publication Date : 05/06/2015.</li>
<span class="style2"></br>
</span>
<li class="style2">Anirban Sengupta<strong>, <em>&ldquo;Design Space Exploration of Optimal Kc-Cycle Transient Fault Secured Datapath System with Intelligent Cut Insertion</em></strong><em>&rdquo;</em>,&nbsp;Patent No. 63/MUM/2015, Publication Date : 05/06/2015.</li>
<span class="style2"></br>
</span>
<li class="style2">Anirban Sengupta<strong>&nbsp;<em>"Design Space Exploration System and Method Thereof Using a Bacterial Foraging Optimization Mechanism&rdquo;</em>,&nbsp;</strong><em>Patent No.</em>2440/MUM/2014, Publication Date : 05/06/2015.</li>
<span class="style2"></br>
</span>
<li class="style2">Anirban Sengupta<strong>&nbsp;<em>"Design Space Exploration of Optimal k-Cycle Transient Fault Tolerant Datapath Based on Multi-Objective Power-Performance Tradeoff&rdquo;</em>,&nbsp;</strong>Patent No.&nbsp;2456/MUM/2014, Publication Date : 05/06/2015.</li>
<span class="style2"></br>
</span>
<li class="style2">Anirban Sengupta<strong>&nbsp;<em>"Improved Schedule Delay Estimation Process for Datapath during High Level Synthesis of Application Specific Processors&rdquo;</em>, </strong>Patent No.&nbsp;2482/MUM/2014, Publication Date : 05/06/2015.</li>
<span class="style2"></br>
</span>
<li class="style2">Aruna Tiwari, Ashok  Pencily Poothiyat, Kunal Chaudhary, <em><strong>&quot;System And Method For  Sign Language Gesture Recognition&quot;</strong></em>, 1988/MUM/2015 , 2015.</li>
<span class="style2"></br>
</span>
<li class="style2">Anirban Sengupta co-inventor: Reza Sedaghat), <strong><em>"System and Method for Development of System Architecture"</em>,</strong>US Patent granted by United Sates Patent and Trademark Office (USPTO)</strong></em>, Publication no. US20120303560A1,&nbsp;<span id="OBJ_PREFIX_DWT269_com_zimbra_date">May 2014</span>. STATUS: Allowed</li><br>
<li class="style2">Anirban Sengupta, <i><strong>&quot;System and Methodology for Development of System Architecture&quot;</strong></i>, US patent granted by United Sates Patent and Trademark Office (USPTO), US8397204 B2, March 2013 (co-inventor: Reza Sedaghat). <a href = "
http://www.google.com/patents/US8397204?dq=anirban+sengupta&hl=en&sa=X&ei=7TLJUdTiAY3fOJGhgagJ&sqi=2&pjf=1&ved=0CHMQ6AEwCQ" target="_newTab">Link</a>.</li> -->
</ol>

 </div>
</div>
</div>
</div>
  <?php include('footer.php') ; ?>    

  <script type="text/javascript" src="patent.js"></script>
</body>
</html> 
