<head>
    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/event.css" rel="stylesheet">
    <link href="css/card.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.css" />
    <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.js"></script>


</head>

<style>
h3{
  color: #5e5d5d!important;
}

.panel-body ul{
    /*color: red;*/
    color: #463e1e;
    padding-left: 2px;
    margin-left: 0px;
    margin-top: -10px;
    /*padding-bottom: 15px;*/
}

.panel-default{
  border-radius: 0px!important;
}
.panel-body {
    text-align: justify;
}
.panel-heading{
  color: red!important;
  /*font-weight: bold;*/
}
.carousel-control {
  padding-top:10%;
  width:5%!important;

  /*background-color: red;*/
}
.carousel-indicators{
  /*background-color: red!important;*/
  /*margin-bottom: -10px!important;*/
}
.carousel-control.left, .carousel-control.right {
    background-image: none
}

.glyphicon-chevron-right:hover{
     display:block!important;
}
.carousel-caption p{
  background-color:rgba(255, 255, 255, 0.5)!important;
  height: 35px!important;
  margin-left: 0px!important;
  color: #022d10;
  /*font-style: italic;*/
  font-weight: bold;
  text-align: left;
  padding-left: 10px!important;
  padding-top: 8px!important;
  font-family: 'Sintony';
  font-size: 1.1em;
  
}
.slider{
  min-height: 400px;
  width: 1200px;
  /*margin-bottom: 50px;*/
}

.panel-footer{
  /*background-color: LightGray!important;*/
  font-weight: bold;
}
.carousel-control.left{
  background-image: none!important;
}

.carousel-control.right {
  background-image: none!important;
}

.carousel-control.left, .carousel-control.right:hover {
  background-image: none;
}
.img-thumbnail{
  border-radius: 0px!important;
}
.myImg{
  /*background-color: red!important;*/
  margin-bottom: 10px;
  
  /*margin-right: 20px;*/
  /*width:550px!important;*/
  height: 100px!important;
  /*border-radius: 5px!important;*/
}

</style>


<html lang="en">
<!DOCTYPE html>
<body>

    <!-- Navigation -->

    <!-- Page Content -->
    <?php include('header.php') ; ?>
    <div class="container" style="background-color:white; margin-top:-20px;">

    <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <?php include('menu1.php'); ?>

            <div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin-top:10px;">
                 
                  <div class="carousel-inner" role="listbox">
                    <div class="item active">
                      <img src="images/slider_img/cseiiti1.jpg" class="slider img-thumbnail">
                       <div class="carousel-caption">
                       <p>First Caption</p>
                      </div>
                    </div>

                    <div class="item">
                      <img src="images/slider_img/cseiiti2.jpg" class="slider img-thumbnail">
                      <div class="carousel-caption">
                       <p>Second Caption</p>
                      </div>
                    </div>

                    <div class="item">
                      <img src="images/slider_img/cseiiti3.jpg" class="slider img-thumbnail">
                      <div class="carousel-caption">
                       <p>Third Caption</p>
                      </div>
                    </div>

                    <div class="item">
                      <img src="images/slider_img/cseiiti4.jpg" class="slider img-thumbnail">
                      <div class="carousel-caption">
                       <p>Fourth Caption</p>
                      </div>
                    </div>

                   

                   
                  </div>

  <!-- Left and right controls -->
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


        <div class="row" style="margin-top:20px;">
              <div class="col-md-12 col-sm-12 col-xs-12" style="margin-top:-10px;"> 

                 <!-- <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"> -->
                  <div class="alert-success" style="margin-bottom:10px; height:30px;">
                  <table width="100%">
                  <tr>
                  <td style="background-color:#022d10; height:30px; color:white; font-weight:bold; font-family: 'Sintony';" width="14%">
                  &nbsp;LATEST UPDATES :
                  </td>
                  <td width="86%"> 
                    <marquee id='scroll_news' style="font-family: 'Sintony';" >
                      <div onMouseOver="document.getElementById('scroll_news').stop();" onMouseOut="document.getElementById('scroll_news').start();"> 
                          <a href="phdadmissionwebsite/2017_10/adv.html"><font color="#022d10">PhD Admission Advertisement | </font></a> 
						   <a href="http://www.iiti.ac.in/Careers/careers.php"><font color="#022d10">Faculty Recruitment | </font></a> 
						   <a href="http://academic.iiti.ac.in:8080/Admm/28_3_2018%20Advertisement-for%20MTech-Admission.pdf"><font color="##022d10">MS admission advertisement</font></a>
                       </div>
                    </marquee>
                  </td>
                  </tr>
                  </table>
                   
                 </div>

                 


          </div>
        </div>
  <div class="row" style="margin-top:5px;">
        <div class="col-md-12 col-sm-12 col-xs-12"> 

        <div class="panel panel-default">
            <div class="panel-heading"><strong> <font color="#08569F" style="font-size:1.2em; font-family: 'Sintony', sans-serif; ">About CSE</font></strong></div>
                <div class="panel-body">
                
                 <span align="justify" style="font-family: 'Sintony', sans-serif; font-size:1em; color:#051e42;">The Discipline of Computer Science and Engineering (CSE) was set up in July 2009. It is one of the disciplines under the School of Engineering and offers Bachelor of Technology (BTech) and Doctor of Philosophy (PhD) programs. The discipline adopts a modern approach to teaching wherein students are rendered in adequate academic freedom to innovate and learn in the process. State of the art facilities including the latest software and advanced hardware are available in various laboratories for the use in both teaching and research. This facilitates adequate implementation of major B.Tech projects and for verification and validation of research results.
                 <br /><br />
                  The faculty members of the discipline are from diverse streams and specializations. Being a part of an emerging and relatively new institute, together with extremely competent research faculty, the Computer Science and Engineering faculty of IIT Indore offer a unique interactive platform for the students to explore the arena of fundamental and applied research.
                  <br /><br />
                  Indore is fast developing into a major IT hub in central India. Organizations like CSC and Impetus have a strong presence in the city and major players like TCS, Infosys, and Wipro are in the process of setting up their offices. For the discipline this provides an excellent opportunity to foster industry-academia partnerships.</span>
                </div>
        </div>
    </div>

       <!--  <div class="col-md-4 col-sm-12 col-xs-12"> 

        <div class="panel panel-default">
            <div class="panel-heading" style="text-align:center;"><strong> <font color="#08569F" style="font-size:1.2em; font-family: 'Sintony', sans-serif; ">Photo Gallery</font></strong></div>
                <div class="panel-body" style="min-height:370px;">
                
                <marquee id='scroll_notification' style="font-family: 'Sintony';" marquee direction = "up" height="340" scrolldelay="150">
                  <div onMouseOver="document.getElementById('scroll_notification').stop();" onMouseOut="document.getElementById('scroll_notification').start();"> 
                    <ul style="padding-left: 17px; text-decoration: none;">
                      <li><a href="phdadmissionwebsite/2017_10/adv.html"><font color="#051e42">Indore is fast developing into a major IT hub in central India. Organizations like CSC and Impetus have a strong presence in the city and major players like TCS. </font></a> </li>
                      <li><a href="phdadmissionwebsite/2017_10/adv.html"><font color="#051e42">PhD Admission Advertisement </font></a> </li>
                    </ul>                    
                   </div>
                </marquee>
                 
                
                </div>
        </div>
    </div> -->


        <!-- <div class="col-md-4 col-sm-12 col-xs-12"> 

        <div class="panel panel-default">
            <div class="panel-heading" style="text-align:center;"><strong> <font color="#08569F" style="font-size:1.2em; font-family: 'Sintony', sans-serif; ">Student's Corner</font></strong></div>
                <div class="panel-body" style="min-height:370px;">

                
                
                </div>
        </div>
    </div> -->
  </div>

 

  <div class="row mb-5" style="background-color:#F9F6EF">
    <p align="center" style="font-family: 'Fjalla One', sans-serif; font-size:2em; padding-top:5px;"><font color="black"><strong>Academics</strong></font></p>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <div class="card card-inverse card-info">
                      <img class="card-img-top" src="images/ug.jpg">
                      <div class="card-block">
                        <h4 class="card-title mt-3">Undergraduate Program</h4>
                          <div class="card-text">
                              B. Tech Program at Discipline of Computer Science & Engineering, IIT Indore
                          </div>
                        <br /><a href="" class="btn btn-info float-right btn-sm">Read More...</a>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <div class="card card-inverse card-info">
                      <img class="card-img-top" src="images/phd.jpg">
                      <div class="card-block">
                        <h4 class="card-title mt-3">Masters Program</h4>
                          <div class="card-text">
                              M. Tech Program at Discipline of Computer Science & Engineering, IIT Indore
                          </div>
                        <br /><a href="" class="btn btn-info float-right btn-sm">Read More...</a>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                  <div class="card card-inverse card-info">
                      <img class="card-img-top" src="images/pg.jpg">
                      <div class="card-block">
                        <h4 class="card-title mt-3">Doctoral Program</h4>
                          <div class="card-text">
                               Ph. D. Program at Discipline of Computer Science & Engineering, IIT Indore
                          </div>
                        <br /><a href="" class="btn btn-info float-right btn-sm">Read More...</a>
                      </div>
                  </div>
              </div>

              
          </div>


    <div class="row" style="margin-top:15px;"> 

        
        <div class="col-md-6 col-sm-12 col-xs-12"> 
            <div class="panel panel-default">
                <div class="panel-heading"><strong> <font color="#08569F" style="font-size:1.2em; font-family: 'Sintony', sans-serif;">L-A-T-E-S-T </font></strong></div>
                    <div class="panel-body" style="height:440px; overflow-y: scroll; padding-left:20px;">
                      <ul style="font-size:.96em; font-family: 'Sintony', sans-serif;">
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         <li>The Discipline of Computer Science and Engineering (CSE) was set up in July 2009.</li>
                         </ul>
                    </div>
                <div class="panel-footer">
                  <a href="" style="font-size:1em; font-family: 'Sintony', sans-serif;">More Announcement</a>
                </div>
            </div>
            
        </div>

        <div class="col-md-6 col-sm-12 col-xs-12"> 

            <div class="panel panel-default">
                <div class="panel-heading"><strong> <font color="#08569F" style="font-size:1.2em; font-family: 'Sintony', sans-serif;">EVENTS</font></strong></div>
                    <div class="panel-body" style="height:440px; overflow-y: scroll; padding-left:20px;">
                      <ul class="event-list">

                                <li>
                                  <time datetime="2014-07-20">
                                    <span class="day">4</span>
                                    <span class="month">Jul</span>
                                    <span class="year">2014</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                  <div class="info">
                                    <h2 class="title">GIAN Course</h2>
                                    <p class="desc"> Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics.</p>
                                  <ul>
                                      <li style="width:50%;"><a href="#website">
                                      <!-- <span class="fa fa-globe"></span> -->
                                       Details</a></li>
                                    </ul>
                                  </div>
                                </li>

                                <li>
                                  <time datetime="2014-07-20">
                                    <span class="day">17</span>
                                    <span class="month">Jul</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                  <div class="info">
                                    <h2 class="title">NTU-India Connect Program</h2>
                                    <p class="desc">NTU-India Connect Program during July 17 - 19, 2017.</p>
                                  <ul>
                                      <li style="width:50%;"><a href="#website">
                                      <!-- <span class="fa fa-globe"></span> -->
                                       Details</a></li>
                                    </ul>
                                  </div>
                                </li>

                                <li>
                                  <time datetime="2014-07-20">
                                    <span class="day">18</span>
                                    <span class="month">Apr</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                  <div class="info">
                                    <h2 class="title">Research Seminar </h2>
                                    <p class="desc">Statistical Modelling and Inference for Computer Experiments" by Prof. Pritam Ranjan IIM Indore.</p>
                                  <ul>
                                      <li style="width:50%;"><a href="#website">
                                      <!-- <span class="fa fa-globe"></span> -->
                                       Details</a></li>
                                    </ul>
                                  </div>
                                </li>

                                <li>
                                  <time datetime="2014-07-20">
                                    <span class="day">07</span>
                                    <span class="month">Apr</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                  <div class="info">
                                    <h2 class="title">Research Seminar </h2>
                                    <p class="desc">High Performance Parallel Programming on Modern Processors.</p>
                                  <ul>
                                      <li style="width:50%;"><a href="#website">
                                      <!-- <span class="fa fa-globe"></span> -->
                                       Details</a></li>
                                    </ul>
                                  </div>
                                </li>

                                <li>
                                  <time datetime="2014-07-20">
                                    <span class="day">07</span>
                                    <span class="month">Apr</span>
                                    <span class="year">2017</span>
                                    <span class="time">ALL DAY</span>
                                  </time>
                                  <div class="info">
                                    <h2 class="title">Short Term Course  </h2>
                                    <p class="desc">Short Term Course On Recent Advances in Network and Cloud Security.</p>
                                  <ul>
                                      <li style="width:50%;"><a href="#website">
                                      <!-- <span class="fa fa-globe"></span> -->
                                       Details</a></li>
                                    </ul>
                                  </div>
                                </li>


                                

                              </ul>
                    </div>
                    <div class="panel-footer">
                      <a href="" style="font-size:1em; font-family: 'Sintony', sans-serif;">All Events</a>
                    </div>
            </div>
        </div>
 </div>
<?php include('footer.php') ; ?>
</body>

</html>


