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
      <li><a style="border-radius: 0%; text-align: center; font-size: ;  font-size: 1.5em;" href="#conference.php">Conferences</a></li>
      <li><a style="border-radius: 0%; text-align: center;  font-size: 1.5em;" href="patent.php">Patents</a></li>
      <li><a style="border-radius: 0%; text-align: center; font-size: 1.5em; "   href="book.php">Books</a></li>
      <li class="active"><a style="border-radius: 0%; text-align: center; font-size: 1.5em;" data-toggle="pill" href="#bookchapters">Book Chapters</a></li>
    </ul>
    <div class="tab-content">
     <div id="bookchapters" class="tab-pane fade in active">
    <ol style="margin-top: 20px;" id="bookChapter-list"> 
      <li v-for="bookChapter in BookChaptersList"
                    v-bind:bookchapter="bookChapter"
                    v-bind:key="bookChapter.id"
                    is="bookChapter-item"
                    >
                  </li>
<!-- <li class="style2">Anirban Sengupta, Dipanjan Roy <em><strong>"Low Cost Dual-Phase Watermark for Protecting CE Devices in IoT Framework"</strong></em>, Springer Book: Security and Fault Tolerance in Internet of Things, Invited Book Chapter, March 2018.</li>
<br>

<li class="style2">
  Anirban Sengupta<strong>,&nbsp;</strong>Saraju P.Mohanty <em><strong>"High-Level Synthesis of Digital Circuits in the Nanoscale, Mobile Electronics Era"</strong></em>,&nbsp;IET Book:&nbsp;Nano-CMOS and Post-CMOS Electronics: Circuits and Design,<strong><em>&nbsp;</em></strong><em>Invited Book Chapter</em>, e-ISBN: 9781785610004, pp: 219 - 261, June 2016.<br>
  
  <br>
</li>
<li class="style2">Surya Prakash, Kamlesh Tiwari and Phalguni Gupta,&nbsp;<strong>&quot;<em>Biometrics Using Scale Invariant Feature Transform&quot;</em></strong><em>,</em>&nbsp;Wiley Encyclopedia of Electrical and Electronics Engineering, 2015.&nbsp;</li>
</br>
<li class="style2">Surya Prakash, Phalguni Gupta and Raghunath Tiwari,&nbsp;<strong><em>&quot;Algorithms and their Design</em>&nbsp;in&nbsp;<em>Decision Sciences: Theory and Practice</em>&nbsp;(Chapter 16)&quot;</strong>, CRC Press, Taylor &amp; Francis Group, 2015</li>
</br>
<li class="style2">Neminath Hubballi and Deepanshu Goyal, <em><strong>"Discovering Periodicity in Network Flows for Security Monitoring" </strong></em>Handbook of Research on Modern Cryptographic Solutions for Computer and Cyber Security 2015&nbsp;(Accepted) Total Pages 20, IGI Global</li>
<span class="style2"></br>
</span>
<li class="style2">Anirban Sengupta, Saraju P. Mohanty <strong>&nbsp;<em>"High-Level Synthesis of Digital Circuits in the Nanoscale, Mobile Electronics Era"</em></strong>,&nbsp;Book Volume: Nano-CMOS and Post-CMOS Electronics: Circuits and Design, IET, &nbsp;&nbsp;March-2015 ,&nbsp;In Press&nbsp; Total Pages: 49</li>
<span class="style2"></br>
</span>
<li class="style2">Patel, O., Tiwari A.,<em><strong> &quot;Quantum Based Learning with Binary Neural Network&quot;</strong></em>, L.  C. Jain, Springer-Verlag Berlin Heidelberg, &nbsp; 978-81-322-2208-8,  &nbsp;19-21 Dec &nbsp;2014.</li><br>
<li class="style2">Patel O., Tiwari A.,<em><strong> &quot;Liver Disease Diagnosis using Quantum based Binary Neural Network  Learning Algorithm&quot;, </strong></em>K. N. Das , &nbsp; Springer-Verlag Berlin  Heidelberg, &nbsp; 978-81-322-2220-0, 27-29 Dec 2014.</li>
<br>
<li class="style2">Anirban Sengupta<strong>&nbsp;<em>"Design Space Exploration of Datapath (Architecture) in High Level Synthesis for Computation Intensive Applications"</em></strong>,&nbsp;Springer Book volume: Application of Evolutionary Algorithms for Multi-Objective Optimization in VLSI and Embedded Systems,&nbsp;&nbsp;Aug 2014,&nbsp;Print ISBN:&nbsp;<a href="callto:978-81-322-1957-6" onClick="window.top.Com_Zimbra_Phone.unsetOnbeforeunload()">978-81-322-1957-6</a>, pp. 93 - 111.</li>
<span class="style2"></br>
</span>
<li class="style2">Anirban Sengupta<strong>&nbsp;<em>"Design Flow from Algorithm To RTL using Evolutionary Exploration Approach" ,&nbsp;</em></strong>Springer Book volume: Application of Evolutionary Algorithms for Multi-Objective Optimization in VLSI and Embedded Systems,&nbsp;Aug 2014, Print ISBN:&nbsp;<a href="callto:978-81-322-1957-6" onClick="window.top.Com_Zimbra_Phone.unsetOnbeforeunload()">978-81-322-1957-6</a>, pp. 113 - 123.</li>
<span class="style2"></br>
</span>
<li class="style2">Neha Bharill, Aruna Tiwari,<em><strong> &quot;Handling Big Data with Fuzzy Based Classification Approach&quot;</strong></em>,  e-book: Studies in Fuzziness and Soft Computing,&nbsp;&nbsp; Mo Jamshidi  moj@wacong.org (2) Vladik Kreinovich vladik@utep.edu (3) Janusz Kacprzyk , &nbsp;  Springer International Publishing Switzerland, &nbsp; ISBN 978-3-319-03673-1,  &nbsp;16-18 Dec 2013.</li><br>
<li class="style2">Arpit Bhardwaj and Aruna Tiwari, <em><strong>&quot;A Novel Genetic Programming Based Classifier Design Using a New Constructive  Crossover Operator with a Local Search Technique&quot;</strong></em>,&nbsp;&nbsp; De-Shuang Huang,  Vitoantonio Bevilacqua, Juan Carlos Figueroa, Prashan Premaratne, &nbsp;  Springer-Verlag Berlin Heidelberg, &nbsp; 978-3-642-39479-9, 28-31 July2013.</li>
</br> -->
</ol>

</div>
 </div>
</div>
</div>
  <?php include('footer.php') ; ?>
  <script type="text/javascript" src="bookChapter.js"></script>    
</body>
</html> 
