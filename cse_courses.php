<html lang="en">
<!DOCTYPE html>
<head>
  <link href="css/card.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 
  <style type="text/css">
.courselist
{
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
  margin-top: 15px;
  width: 100%; 
  min-width:850px;  
  border-collapse:collapse;
  color: #013953;
}
.courselist th
{
  text-align:left;
  font-size: 1.4em;
}
.courselist tr
{
  border-top: 1px solid #DADADA;
  height:50px;
}
</style>
</head>
<body>
    <?php include('header.php') ; ?>
    <div class="container" style="background-color:white;">
    <div class="row">
        <?php include('menu1.php'); ?>

<h2 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;">Courses Offered</h2>
<div id="inner_content">
<div class="table-responsive" style="margin-top: 15px;">
  <table class="courselist" id="courses">
 <tr><th>Course Code</th><th>Course Name</th><th>L-P-T</th><th>Credit</th></tr>
 <!--coourse can be added in courses instance of coursesoffered.js-->
  <tr v-for="courseOffered in CoursesList"
                    v-bind:courseoffered="courseOffered"
                    v-bind:key="courseOffered.id"
                    is="courseoffered-item"
                    >
                  </tr>
</table>
</div>

<h2 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;">Elective Courses</h2>
<div class="table-responsive" style="margin-top: 15px;">
<table class="courselist" id="electivecourses">
   <!--electivecourses can be added in electivecourses instance of electivecourses.js-->
   <tr><th>Course Code</th><th>Course Name</th><th>L-P-T</th><th>Credit</th></tr>
  <tr v-for="electivecourse in CoursesList"
                    v-bind:electivecourse="electivecourse"
                    v-bind:key="electivecourse.id"
                    is="electivecourse-item"
                    >
  </tr>
</table>
</div>
</div>
</div>
</div>
</body>
  <?php include('footer.php') ; ?>
  <script type="text/javascript" src="coursesoffered.js"></script>
  <script type="text/javascript" src="electivecourses.js"></script>
</body>
</html>