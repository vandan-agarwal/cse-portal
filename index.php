	<head>
    <!-- Bootstrap Core CSS -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.css" />
    <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.js"></script>
   <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow|Crete+Round|Kanit|Monoton|Anton|Play|Ubuntu+Condensed" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css?family=Crete+Round|Exo|Lekton|Lobster|Merienda|Monoton|Pacifico|Josefin+Sans|Play|Righteous|Ruslan+Display" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Merienda|Monoton|Pacifico|Ruslan+Display" rel="stylesheet">
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
   <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
   <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
    <link href="css/header.css" rel="stylesheet">
    <link href="css/slider.css" rel="stylesheet">
    <link href="css/index.css" rel="stylesheet">
    <link href="css/event.css" rel="stylesheet">
    <link href="css/card.css" rel="stylesheet">


</head>

<style>
.carousel-caption{
	bottom: 0;
}
 
</style>


<html lang="en">
<!DOCTYPE html>
<body>


    <!-- Navigation -->

    <!-- Page Content -->
    <?php include('header.php') ; ?>
    <div class="container" style="background-color:white;">

    <div class="row" >
            <div class="col-md-12 col-sm-12 col-xs-12">
              <?php include('menu1.php'); ?>
              
    		   <div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin-top:10px;" >
                  <div class="carousel-inner my-slider" role="listbox" >
                    <div class="item active">
                      <img src="images/slider_img/cseiiti6.jpg" class="slider img-thumbnail" style="height: 100%;">
                       <div class="carousel-caption" style="left: 15%; width: 85%; bottom: 0; padding: 0; " >
                        <header class="Caption-header">
                        <div class="header__fg"></div>
                       <h4 class="Caption-heading">First Caption</h4>
                      </div>
                    </header>
                    </div>

                    <div class="item" >
                      <img src="images/slider_img/cseiiti13.jpg" class="slider img-thumbnail" style="height: 100%;">
                      <div class="carousel-caption" style="left: 15%; width: 85%; bottom: 0; padding: 0; " >
                        <header class="Caption-header">
                        <div class="header__fg"></div>
                       <h4 class="Caption-heading">Second caption</h4>
                      </div>
                    </header>
                    </div>


                    <div class="item">
                      <img src="images/slider_img/cseiiti9.jpg" class="slider img-thumbnail" style="height: 100%; bottom: 0;">
                      <div class="carousel-caption" style="left: 15%; width: 85%; bottom: 0; padding: 0; " >
                        <header class="Caption-header">
                        <div class="header__fg"></div>
                       <h4 class="Caption-heading">Third Caption</h4>
                      </div>
                    </header>
                    </div>

                    <div class="item">
                      <img src="images/slider_img/cseiiti11.jpg" class="slider img-thumbnail" style="height: 100%;">
                      <div class="carousel-caption" style="left: 15%; width: 85%; bottom: 0; padding: 0; " >
                        <header class="Caption-header">
                        <div class="header__fg"></div>
                       <h4 class="Caption-heading">Fourth caption</h4>
                      </div>
                    </header>
                    </div>
            </div>

  
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
          </div>
        </div>
   
        <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12" style="margin-top:-10px;"> 
                
                 <!-- <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"> -->
                  <div class="alert-success" style="margin-bottom:10px;">
                  <table width="100%">
                  <tr>
                   <td style="width: 25%; height: 30px;" class="latestupdates"><header style="background-color:#eef3f6 " class="aside-header latestupdates-header">
        <div class="header__bg" style="height: 100%; width: 100%;"></div>
        <h4 class="aside-heading" id="latest-updates">LATEST UPDATES :</h4>
        </header><td  width="86%" style="background-color: #eef3f6"> 
                       <marquee id='scroll_news' style="font-family: 'Sintony';" >
                      <div onMouseOver="document.getElementById('scroll_news').stop();" onMouseOut="document.getElementById('scroll_news').start();"> 
                          <a href="phdadmissionwebsite/2017_10/adv.html"><font color="#013953">PhD Admission Advertisement | </font></a> 
               <a href="http://www.iiti.ac.in/Careers/careers.php"><font color="#013953">Faculty Recruitment | </font></a> 
               <a href="http://academic.iiti.ac.in:8080/Admm/28_3_2018%20Advertisement-for%20MTech-Admission.pdf"><font color="#013953">MS admission advertisement</font></a>
                       </div>
                    </marquee>
                  </td>
                  </tr>
                  </table>
                   
                 </div>

         </div>
        </div>



<!-- Button trigger modal -->
  <div class="row" style="margin-top:10px;">
        <div class="col-md-12 col-sm-8 col-xs-12 col-lg-8"> 
          <div id="About_cse" style="margin-top: 20px; ">
            <h1 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb">&nbsp;ABOUT CSE</h1>
            <p style="text-align: justify; font-family: 'Exo', sans-serif; font-size: 1.15em; color: #013953; font-weight: 500;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Discipline of Computer Science and Engineering (CSE) was set up in July 2009. It is one of the disciplines under the School of Engineering and offers Bachelor of Technology (BTech) and Doctor of Philosophy (PhD) programs. The discipline adopts a modern approach to teaching wherein students are rendered in adequate academic freedom to innovate and learn in the process. State of the art facilities including the latest software and advanced hardware are available in various laboratories for the use in both teaching and research. This facilitates adequate implementation of major B.Tech projects and for verification and validation of research results.
                 <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The faculty members of the discipline are from diverse streams and specializations. Being a part of an emerging and relatively new institute, together with extremely competent research faculty, the Computer Science and Engineering faculty of IIT Indore offer a unique interactive platform for the students to explore the arena of fundamental and applied research.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indore is fast developing into a major IT hub in central India. Organizations like CSC and Impetus have a strong presence in the city and major players like TCS, Infosys, and Wipro are in the process of setting up their offices. For the discipline this provides an excellent opportunity to foster industry-academia partnerships.
            </p>
          </div>
        
    </div>
    <div class="col-md-12 col-sm-4 col-xs-12 col-lg-4" style="overflow: hidden;">
  <ul class="nav nav-pills">
    <li class="active" style="width: 50%; margin: 0;"><a style="border-radius: 0%; text-align: center; font-family: 'Josefin Sans', sans-serif; font-size: 1.2em;"data-toggle="pill" href="#home">NEWS</a></li>
    <li style="width: 50%;  margin: 0;"><a style="border-radius: 0%; text-align: center; font-size: 1.2em; font-family: 'Josefin Sans', sans-serif;" data-toggle="pill" href="#menu1">RECRUITMENTS</a></li>
  </ul>
  
  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <div class="News-list" style="height: 400px; overflow-y: scroll;    background-image:  linear-gradient(to bottom, #013953, #5d8aa8);
 ">
                        <ul class="News fa-ul">
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li> <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li> <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li> 
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                        
                        </ul>
        </div>    </div>
    <div id="menu1" class="tab-pane fade">
      
          <div class="News-list" style="height: 400px; overflow-y: scroll;    background-image:  linear-gradient(to bottom, #013953, #5d8aa8);
 ">
          <ul class="News fa-ul" style="margin-top: 20px;">
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; <a href="phdadmissionwebsite/2017_10/adv.html">PhD Admission Advertisement</a> </li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; <a href="http://www.iiti.ac.in/Careers/careers.php">Faculty Recruitment </a></li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; <a href="http://academic.iiti.ac.in:8080/Admm/28_3_2018%20Advertisement-for%20MTech-Admission.pdf">MS admission advertisement</a><li>
                      </ul>
                    </div>
  `        
    </div>
  </div>
  </div>

    <!-- 
    <div class="col-md-12 col-sm-4 col-xs-12 col-lg-3">
 
      <div class="Latest-updates panel-aside" style="width: 100%;">
        <header class="aside-header">
        <div class="header__bg"></div>
        <h4 class="aside-heading">LATEST UPDATES</h4>
        </header>
        <div class="aside-body">
          <ul>
            <li><a href="phdadmissionwebsite/2017_10/adv.html"><font color="#013953" >PhD Admission Advertisement </font></a> </li>
            <li><a href="http://www.iiti.ac.in/Careers/careers.php"><font color="#013953">Faculty Recruitment </font></a> </li>
            <li> <a href="http://academic.iiti.ac.in:8080/Admm/28_3_2018%20Advertisement-for%20MTech-Admission.pdf"><font color="#013953">MS admission advertisement</font></a></li>
          </ul>
        </div>
      </div>
      <div class="RECRUITMENTS panel-aside" style="width: 100%;">
        <header class="aside-header">
        <div class="header__bg"></div>
        <h4 class="aside-heading">RECRUITMENTS</h4>
        </header>
         <div class="aside-body">
          <ul>
            <li><a href="phdadmissionwebsite/2017_10/adv.html"><font color="#013953">PhD Admission Advertisement </font></a> </li>
            <li><a href="http://www.iiti.ac.in/Careers/careers.php"><font color="#013953">Faculty Recruitment </font></a> </li>
            <li> <a href="http://academic.iiti.ac.in:8080/Admm/28_3_2018%20Advertisement-for%20MTech-Admission.pdf"><font color="#013953">MS admission advertisement</font></a></li>
          </ul>
        </div>
      </div>
    </div> --> 
  </div>
    <div class="row" id="EVENTS" style="margin-top: 10px;">
 <div class="container">
  <header class="fullwidth-header">
        <div class="header_full"></div>
        <h2 class="fullwidth-heading" >EVENTS</h2>
        </header>
        <event-modal
                    v-for="Event in Eventslist"
                    v-bind:event="Event"
                  >
                      

    </event-modal>
  <div class="responsive"  style="background-color: ">
    <event-item
                    v-for="event in Eventslist"
                    v-bind:Event="event"
                  >
                      

    </event-item>
      <!--  <div class="eventnew col-sm-3  col-xs-12" style="min-height: 175px;">
                                  <time>
                                    <span class="day">17</span>
                                    <span class="month">Jul</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                    <h3 class="title">NTU-India Connect Program</h3>
                                    <p class="desc">NTU-India Connect Program during July 17 - 19, 2017.</p>
                                  <button type="button" class="btn btn-primary Details " data-toggle="modal" data-target="#exampleModalCenter">Details</button>
                   </div>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
<!--<div class="eventnew col-sm-3 col-xs-12" style="min-height: 175px;">
                                  <time datetime="2014-07-20">
                                    <span class="day">07</span>
                                    <span class="month">Apr</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                 
                                    <h3 class="title">Short Term Course  </h3>
                                    <p class="desc">Short Term Course On Recent Advances in Network and Cloud Security.</p>
                                    <a class="Details" href="#">Details</a>
                              
      </div>
       <div class="eventnew col-sm-3  col-xs-12" style="min-height: 175px;">
                                 <time datetime="2014-07-20">
                                    <span class="day">18</span>
                                    <span class="month">Apr</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                  
                                    <h3 class="title">Research Seminar </h3>
                                    <p class="desc">Statistical Modelling and Inference for Computer Experiments" by Prof. Pritam Ranjan IIM Indore.</p>
                                  <a class="Details" href="#">Details</a>
                                 
      </div>
      <div class="eventnew col-sm-3 col-xs-12" style="min-height: 175px;">

                                 <time datetime="2014-07-20">
                                    <span class="day">4</span>
                                    <span class="month">Jul</span>
                                    <span class="year">2014</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                    <h3 class="title">GIAN Course</h3>
                                    <p class="desc"> Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.</p>
                                  <a class="Details" href="#">Details</a>
       </div>
       <div class="eventnew col-sm-3  col-xs-12" style="min-height: 175px;">
                                  <time datetime="2014-07-20">
                                    <span class="day">17</span>
                                    <span class="month">Jul</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                    <h3 class="title">NTU-India Connect Program</h3>
                                    <p class="desc">NTU-India Connect Program during July 17 - 19, 2017.</p>
                                  <a class="Details" href="#">Details</a>
      </div>
<div class="eventnew col-sm-3 col-xs-12" style="min-height: 175px;">
                                  <time datetime="2014-07-20">
                                    <span class="day">07</span>
                                    <span class="month">Apr</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                 
                                    <h3 class="title">Short Term Course  </h3>
                                    <p class="desc">Short Term Course On Recent Advances in Network and Cloud Security.</p>
                                    <a class="Details" href="#">Details</a>
                              
      </div>
       <div class="eventnew col-sm-3  col-xs-12" style="min-height: 175px;">
                                 <time datetime="2014-07-20">
                                    <span class="day">18</span>
                                    <span class="month">Apr</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                  
                                    <h3 class="title">Research Seminar </h3>
                                    <p class="desc">Statistical Modelling and Inference for Computer Experiments" by Prof. Pritam Ranjan IIM Indore.</p>
                                  <a class="Details" href="#">Details</a>
                                 
      </div>
      <div class="eventnew col-sm-3 col-xs-12" style="min-height: 175px;">
                                  <time datetime="2014-07-20">
                                    <span class="day">07</span>
                                    <span class="month">Apr</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                 
                                    <h3 class="title">Short Term Course  </h3>
                                    <p class="desc">Short Term Course On Recent Advances in Network and Cloud Security.</p>
                                    <a class="Details" href="#">Details</a>
                              
      </div>
       <div class="eventnew col-sm-3  col-xs-12" style="min-height: 175px;">
                                 <time datetime="2014-07-20">
                                    <span class="day">18</span>
                                    <span class="month">Apr</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                  
                                    <h3 class="title">Research Seminar </h3>
                                    <p class="desc">Statistical Modelling and Inference for Computer Experiments" by Prof. Pritam Ranjan IIM Indore.</p>
                                  <a class="Details" href="#">Details</a>
                                 
       </div>
 --></div>
</div>
</div>
<div class="row" style="margin-top:25px;">
   <!--  <div class="col-sm-3">
      <div class="News panel-aside" style="width: 100%;">
        <header class="aside-header">
        <div class="header__bg"></div>
        <h3 class="aside-heading">News</h3>
        </header>
        <div class="News-list" style="height: 400px; overflow-y: scroll; background-color: #5d8aa8;">
                        <ul class="News fa-ul">
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li> <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li> <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li> 
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;<a href="#"> The Discipline of Computer Science and Engineering (CSE)</a> was set up in July 2009.</li>
                        <li><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp; The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                        
                        </ul>
        </div>
      </div>
    </div>
    -->  
   <div class="col-sm-12"> 
    <h1 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;" >Academics</h1>
  </div>

                  <div class="col-sm-4">
                      <div class="cardnew" style="height: 360px;">
                      <div class="cardnew-heading" style="height: 80px;">
                        <a href="btech_program.php" style="text-decoration: none;"><h2 class="cardnew-header">Undergraduate Program</h2></a>
                      </div>
                          <div class="cardnew-content" style="height: 200px;  top: 110px;">
                             Discipline of Computer Science and Engineering, IIT Indore currently offers a 4-year BTech program. Total number of seats available are 70. Admission to the program is offered through "IIT Joint Entrance Examination (JEE)".
                          </div>
                         <a class="Read-more" href="btech_program">Read more...</a>
                       </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="cardnew" style="height: 360px;">
                        <div class="cardnew-heading" style="height: 80px;">
                       <a href="#" style="text-decoration: none;"><h2 class="cardnew-header">Masters Program</h2></a>
                    </div>
                          <div class="cardnew-content" style="height: 200px;  top: 110px;">
                              M. Tech Program at Discipline of Computer Science & Engineering, IIT Indore
                          </div>
                       <a class="Read-more" href="btech_program">Read more...</a>
                       </div>
                    </div>
                  <div class="col-sm-4">
                        <div class="cardnew" style="height: 360px;">
                        <div class="cardnew-heading" style="height: 80px;">
                        <a href="phd_program.php"  style="text-decoration: none;  top: 100px;" ><h2 class="cardnew-header">Doctoral Program</h2></a> 
                        </div>
                          <div class="cardnew-content" style="height: 200px; top: 110px;">
                              Discipline of Computer Science and Engineering, IIT Indore offers Doctor of Philosophy (PhD) program in almost all current areas of Computer Science. 
It welcomes and accepts applications for admission to PhD program throughout the year. It is looking for highly motivated and dedicated research scholars for its PhD program. In general, students selected for PhD program have to undergo course-work during first two semesters before actually starting their individual doctoral research work. During these two semesters, students get an opportunity to acquaint themselves with the research activities of faculty members and suitably select their individual research supervisor.
                          </div>
                       <a class="Read-more" href="btech_program">Read more...</a>
                       </div>
                      </div>
</div>
</div>
               
 <?php include('footer.php') ; ?>

 <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="slick/slick.min.js"></script>


 <script type="text/javascript">
    $(document).ready(function(){
       $('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  autoplay: true,
  infinite: true,  
  autoplaySpeed: 6000,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    });



  </script>
  <script type="text/javascript" src="data.js"></script>
 
</body>


</html>


