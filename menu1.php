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
     top:0;left:100%;
     margin-top:-6px;margin-left:-1px;
     -webkit-border-radius:0 6px 6px 6px;-moz-border-radius:0 6px 6px 6px;border-radius:0 6px 6px 6px;
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
   
  .dropdown-menu > li  {
    /*color: red!important;*/
    /*text-decoration: underline;*/
    /*background-color: #436187!important; */
  }  
    

  .dropdown-submenu:hover>a:after {
      border-left-color:#555;
   }

  
  .dropdown-menu > li > a:hover, .dropdown-menu > .active > a:hover {
    /*text-decoration: underline;*/
    /*color: red!important;*/
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
      /*color: red!important;*/
      background-color: #ccc;
      border-radius: 4px;
      margin-top: 2px;
      margin-left: 0px;   
    }
     .navbar-default .navbar-nav .open .dropdown-menu > li > a {
       color: #333;
	   /*background-color: red!important;*/

     }
      .dropdown-submenu {
      min-width: 0px;
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
      min-width: 40%;
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
  }  
#navbar-collapse-1{
  background-color:#21abcd!important;
  color: black!important;
}
#navbar-collapse-1 ul li{
  color: white!important;
}

</style>

<div id="navbar" style="overflow-y: visible;">
  <nav class="navbar navbar-default navbar-static-top" role="navigation" style="background-color:#21abcd; margin-top:10px; margin-bottom:0px; overflow-y: visible;">
    <div class="navbar-header" style="overflow-y: visible;">
      <button type="button" class="navbar-toggle" data-toggle="collapse"  data-target="#navbar-collapse-1" style="background-color: white" >
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar" style="background-color: #21abcd;"></span>
      <span class="icon-bar" style="background-color: #21abcd;"></span>
      <span class="icon-bar" style="background-color: #21abcd;"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbar-collapse-1" style="overflow-y: visible;">
      <ul class="nav navbar-nav">
        <li><a href="index.php"> <font size="3" color="White"> <b>Home </b></font> </a></li>

        <li class="dropdown">
          <a href="#" class="dropdown-toggle  trial" data-toggle="dropdown"><font size="3" color="White"><b>People</b></font>  <b class="caret"></b> </a> 
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
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><font size="3" color="White"><b>Research</b></font> <b class="caret"></b></a> 
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
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><font size="3" color="White"><b>Teaching</b></font> <b class="caret"></b></a> 
          <ul class="dropdown-menu dropdown1">
            <li><a href="cse_courses.php">Courses</a></li>
            <li><a href="http://moodle.cse.iiti.ac.in/moodle/" target="_blank">Moodle Login</a></li>
            
            
          </ul>
        </li>
		<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <font size="3" color="White"><b>Programs</b></font>  <b class="caret"></b></a> 
          <ul class="dropdown-menu dropdown1">
            <li><a href="phd_program.php">PhD</a></li>
            <li><a href="btech_program.php">BTech</a></li>
            
            
          </ul>
        </li>

		<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><font size="3" color="White"><b>Admissions</b></font> <b class="caret"></b></a> 
          <ul class="dropdown-menu dropdown1">
            <li><a href="http://academic.iiti.ac.in:8080/nregistration.jsp"target="_blank">PhD</a></li>
            <li><a href="https://www.jeeadv.ac.in//"target="_blank">JEE</a></li>
          </ul>
        </li>

		<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><font size="3" color="White"><b>About us</b> </font><b class="caret"></b></a> 
          <ul class="dropdown-menu dropdown1">
            <li><a href="cse_discipline_iit_indore.php"target="_blank">Discipline</a></li>
      			<li><a href="administration.php"target="_blank">Administration </a></li>
            <li><a href="facilities.php"target="_blank">Facilities</a></li>
      			<li><a href="contact_us.php"target="_blank">Contact us</a></li>
            <li><a href="about_indore.php"target="_blank">About Indore</a></li>
          </ul>
        </li>
       <li><a href="reach_iiti.php"><font size="3" color="White"><b>How to reach</b> </font>  </a></li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
  </nav>
</div>
