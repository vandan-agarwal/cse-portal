5


<html lang="en">
<!DOCTYPE html>
<head>
	<link href="css/card.css" rel="stylesheet">
			
	<link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<style type="text/css">
  .faculty_image{
  	height: 220px;
  	width: 70%;
  	margin: auto;
  	border-radius: 10%;
  	box-shadow: 0px 1px 3px 0 #013953;
  	}
  .cardnew >.cardnew-heading>a:before {
  top: 264px;
  }
  .cardnew-header{
            padding-top: 8px;
        }
        
        .card-header h2{
            font-size: 1em;
        }
 
</style>

</head>
<body>

    <!-- Navigation -->

    <!-- Page Content -->
    <?php include('header.php') ; ?>
    <div class="container" style="background-color:white;">

    <div class="row">
        <?php include('menu1.php'); ?>


<!-- 
 <!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
<meta charset="UTF-8" />
<title>Discipline of Computer Science and Engineering (CSE), IIT Indore.</title>

<script type="text/javascript" src="	jsfunctions.js"></script>
<link rel="stylesheet" type="text/css" media="all" href="cseweb.css" />
<link rel="stylesheet" type="text/css" href="footer.css" />

<style type="text/css" media="all">
</style>
</head>
<body class="page page-id-150 page-template page-template-default">
  <script type="text/javascript">
    toptext();
  </script>
 <script type="text/javascript">
    topmenu();
  </script>
 -->
 <div class="row" style="margin-top: 15px;" id="FacultyMembers">
 	<h2 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;" >Faculty Members</h2>
 	<!--Faculty's data can be edited from FacultyMembers instance of faculty-members.js -->
     <faculty-item v-for="faculty in FacultyList"
                    v-bind:Faculty="faculty"
                    v-bind:key="faculty.id">
     </faculty-item>
 	
</div>
</div>
</div>
 <?php include('footer.php') ; ?>
 <script type="text/javascript" src="faculty-members.js"></script>
 
    
</body>
</html>