<style type="text/css">
   
  .dropdown-menu > li.kopie > a {
      padding-left:5px;
  }
   
  .dropdown-submenu {
      position:relative;
  }
  .dropdown-submenu li{
      /*position:relative;*/
      color: red!important;
  }
  .dropdown-submenu>.dropdown-menu {
     top:0;
     left:100%;
     -webkit-border-radius:4px 4px 4px 4px;
   }
    
  .dropdown-submenu > a:after {
    border-color: transparent transparent transparent #333;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    content: " ";
    display: block;
    float: right;  
    height: 0;     
    margin-right: -10px;
    margin-top: 5px;
    width: 0;
  }
    

  .dropdown-submenu:hover>a:after {
      border-left-color:#555;
   } 
  .dropdown1{
     background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#5d8aa8), to(#013953));
  }
  .dropdown-menu{
        border: 1px solid #ccc;
  }
  .dropdown-menu>li>a, .dropdown-menu>li>span{
    color: white;
  }
  .dropdown2{
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#5d8aa8), to(#013953));
  }
  a.dropdown-toggle::after{
    color: white;
  }
   .navbar-default .navbar-nav>li>a {
    color: white;
    font-weight: 400;
  }
  .navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {
    color: #013953;
    font-weight: 550;
    text-decoration: none;
    background-color: white;
  }
  .navbar-default .navbar-nav>li>a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  top: 1px;
  left: 0;
  background-color: #013953;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;
}
.navbar-default .navbar-nav>li>a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
  @media (max-width: 767px) {
    .navbar-nav  {
       display: inline;
    }
    .navbar-default .navbar-brand {
      display: inline;
    }
    .navbar-default .navbar-toggle .icon-bar {
      background-color: #fff;
    }
    .navbar-default .navbar-nav .dropdown-menu > li > a {
      border-radius: 4px;
      margin-top: 2px;
      margin-left: 0px;   
    }
     .navbar-default .navbar-nav .open .dropdown-menu > li > a {
       color: #333;

     }
      .dropdown-submenu {
      min-width: 30%;
  }


     .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
     .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
       background-color: #ccc;
       
     }

     .navbar-nav .open .dropdown-menu { 
       border-radius: 0;
     }
    .dropdown1 {
        padding-left: 0px;
        z-index: 1000;
        display: none;
    }
    .dropdown:hover >.dropdown1{
      display: block;
    }
    .dropdown2{
        display: none;
     }
     .dropdown-submenu:hover >.dropdown2{
        display: block;
     }
     .dropdown-menu{
      min-width: 50%  ;
      padding: 0px 0;
      margin: 0px 0 0;
     }
    .dropdown-menu .dropdown-menu {
        padding-left: 0px;
        min-width: 0px;
     }
     .dropdown-menu .dropdown-menu .dropdown-menu {
        padding-left: 0px;
     }
     li.dropdown.open {
      border: 0px solid red;
     }
     .navbar{
      overflow: visible;
    }
    

  }
   
  @media (min-width: 768px) {
    ul.nav li:hover > ul.dropdown-menu {
      display: block;
    }
    #navbar {
      text-align: center ;
    }
    .menu1>li>a{
      padding-right: 20px;
      padding-left: 30px;
    }
  }  
#navbar-collapse-1{
  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#013953), to(#5d8aa8));
  color: black!important;
}

</style>

<div id="navbar" style="overflow-y: visible;">
  <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-top:10px; margin-bottom:0px; overflow-y: visible;">
    <div class="navbar-header" style="overflow-y: visible; background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#013953), to(#5d8aa8));">
      <button type="button" class="navbar-toggle" data-toggle="collapse"  data-target="#navbar-collapse-1" style="background-color: white" >
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar" style="background-color: #013953;"></span>
      <span class="icon-bar" style="background-color: #013953;"></span>
      <span class="icon-bar" style="background-color: #013953;"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbar-collapse-1" style="overflow-y: visible;">
      <ul class="nav navbar-nav menu1">
        <li><a href="index.php"> <font size="3"
           > Home </font> </a></li>

        <li class="dropdown">
          <a href="#" class="dropdown-toggle  trial" data-toggle="dropdown"><font size="3">People</font>  <b class="caret" style="color: white;"></b> </a> 
          <ul class="dropdown-menu dropdown1" id="Peoples">
            <li><a href="faculty.php" target="_blank"> Faculty</a></li>
            <li><a href="staff.php" target="_blank">Staff</a></li>
			       <li><a href="phdstudents.php" target="_blank" >PhD Students </a></li>
				   <li class="dropdown dropdown-submenu">
            <a href="#" class="dropdown-toggle " data-toggle="dropdown">B. Tech Students</a>
            <ul class="dropdown-menu dropdown2">
              <li><a href="btech_stu_2014.php">2014 Btach</a></li>
              <li><a href="btech_stu_2015.php">2015 Btach</a></li>
			  <li><a href="btech_stu_2016.php">2016 Btach</a></li>
			  <li><a href="btech_stu_2017.php">2017 Btach</a></li>
              
			  </ul>
            		
			</li>
			                        
          </ul>
        </li>
		<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><font size="3">Research</font> <b class="caret" style="color: white;"></b></a> 
          <ul class="dropdown-menu dropdown1">
            <li><a href="research_area.php">Area</a></li>
            <li class="dropdown dropdown-submenu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Sponsored Projects</a>
		      	<ul class="dropdown-menu dropdown2">
		    	  <li><a href="srprojects.php">Research Projects</a></li>
            <li><a href="gian.php">GIAN Projects</a></li>
			      <li><a href="patent.php">Fellowships</a></li>
            </ul>
		      	</li>
				    <li class="dropdown dropdown-submenu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Publication</a>
            <ul class="dropdown-menu dropdown2">
              <li><a href="journal.php">Journal</a></li>
              <li><a href="conference.php">Conference</a></li>
			  <li><a href="patent.php">Patent</a></li>
              <li><a href="book.php">Books</a></li>
              <li><a href="bookchapter.php">Book Chapter</a></li>
             
            </ul>
          </li>
          </ul>
        </li>


		<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><font size="3" >Teaching</font> <b class="caret" style="color: white;"></b></a> 
          <ul class="dropdown-menu dropdown1">
            <li><a href="cse_courses.php">Courses</a></li>
            <li><a href="http://moodle.cse.iiti.ac.in/moodle/" target="_blank">Moodle Login</a></li>
            
            
          </ul>
        </li>
		<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <font size="3">Programs</font><b class="caret" style="color: white;"></b></a> 
          <ul class="dropdown-menu dropdown1">
            <li><a href="phd_program.php">PhD</a></li>
            <li><a href="btech_program.php">BTech</a></li>
            
            
          </ul>
        </li>

		<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><font size="3">Admissions</font> <b class="caret" style="color: white;"></b></a> 
          <ul class="dropdown-menu dropdown1">
            <li><a href="http://academic.iiti.ac.in:8080/nregistration.jsp"target="_blank">PhD</a></li>
            <li><a href="https://www.jeeadv.ac.in//"target="_blank">JEE</a></li>
          </ul>
        </li>

		<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><font size="3">About us</font><b class="caret" style="color: white;"></b></a> 
          <ul class="dropdown-menu dropdown1">
            <li><a href="cse_discipline_iit_indore.php"target="_blank">Discipline</a></li>
      			<li><a href="administration.php"target="_blank">Administration </a></li>
            <li><a href="facilities.php"target="_blank">Facilities</a></li>
      			<li><a href="contact_us.php"target="_blank">Contact us</a></li>
            <li><a href="about_indore.php"target="_blank">About Indore</a></li>
          </ul>
        </li>
       <li><a href="reach_iiti.php"><font size="3">How to reach</font>  </a></li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
  </nav>
</div>
