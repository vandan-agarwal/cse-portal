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
.courselist td
{
   margin-left:30px;
   
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
<!--<tr><td>CS 103</td><td>Computer Programming</td><td>2-0-0</td><td>2</td></tr>
<tr><td>CS 153</td><td>Computer Programming Lab</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 201</td><td>Discrete Mathematical Structures</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 202</td><td>Automata Theory and Logic</td><td>2-1-0</td><td>3</td></tr>

<tr><td>CS 203</td><td>Data Structure and Algorithms</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 253</td><td>Data Structure and Algorithms Lab</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 204</td><td>Design and Analysis  of Algorithms</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 254</td><td>Design and Analysis  of Algorithms Lab</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 206</td><td>Login Design </td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 206</td><td>Login Design Lab</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 207</td><td>Database and Information System</td><td>3-0-0</td><td>3</td></tr>
<tr><td>CS 357</td><td>Database and Information System Lab</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 208</td><td>Software Engineering</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 258</td><td>Software Engineering Lab</td><td>0-0-3</td><td>1.5</td></tr>


<tr><td>CS 302</td><td>Computer Graphics and Visualization</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 352</td><td>Computer Graphics and Visualization Lab</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 304N</td><td>Computer Intelligence</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 354N</td><td>Computer Intelligence Lab</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 306</td><td>Computer Networks</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 356</td><td>Computer Networks Lab</td><td>0-0-3</td><td>1.5</td></tr>


<tr><td>CS 309</td><td>Parallel Computing</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 359</td><td>Parallel Computing Lab</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 303</td><td>Operating Systems</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 353</td><td>Operating Systems Lab</td><td>0-0-3</td><td>1.5</td></tr>
  
<tr><td>CS 305</td><td>Computer Architecture</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 355</td><td>Computer Architecture Lab</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 307</td><td>Optimization Algorithms and Techniques</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 357</td><td>Optimization Algorithms and Techniques</td><td>0-0-3</td><td>1.5</td></tr>

<tr><td>CS 308</td><td>Compiler Techniques</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 358</td><td>Compiler Techniques Lab</td><td>0-0-3</td><td>1.5</td></tr>


<tr><td>CS 493</td><td>B Tech Project (BTP)</td><td>0-0-40</td><td>20</td></tr>
 -->
</table>
</div>

<h2 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;">Elective Courses</h2>
<div class="container table-responsive" style="margin-top: 15px;">
<table class="courselist" id="electivecourses">
   <!--electivecourses can be added in electivecourses instance of electivecourses.js-->
   <tr><th>Course Code</th><th>Course Name</th><th>L-P-T</th><th>Credit</th></tr>
  <tr v-for="electivecourse in CoursesList"
                    v-bind:electivecourse="electivecourse"
                    v-bind:key="electivecourse.id"
                    is="electivecourse-item"
                    >
  </tr>
<!-- <tr><td>CS 401 / CS 601</td><td>Soft Computing</td>                             <td>2-0-2</td><td>3</td></tr>
<tr><td>CS 404 / EE 304</td><td>Digital Signal Processing</td> <td>3-1-0 </td><td>4</td></tr>
<tr><td>CS 406 / CS 606</td><td>Data Mining and Data Warehousing</td>           <td>2-0-2</td><td>3</td></tr>-
<tr><td>CS 407 </td><td> Peripherals and Interfaces</td><td>2-0-2</td><td>3</td></tr>
<tr><td>CS 408 </td><td> Algorithms for Convex Programming</td> <td>2-0-2</td><td>3</td> </tr>
<tr><td>CS 409 / CS 609</td><td>Advanced Topics in Database Management Systems</td><td> 2-1-0</td><td>  3</td></tr>
<tr><td>CS 410 </td><td> Genetic Algorithms</td><td>2-0-2</td><td> 3</td></tr>
<tr><td>CS 411 </td><td>Advanced Algorithms</td><td>2-0-2</td><td>3</td></tr>
<tr><td>CS 412 </td><td>Pattern Recognition</td><td>2-0-2</td><td>3</td></tr>
<tr><td>CS 413 </td><td>Topics in Artificial Intelligence Programming</td><td>2-1-0</td><td>3</td></tr>
<tr><td>CS 414 / CS 614</td><td>Cloud Computing and Applications</td>           <td>2-1-0</td><td>  3</td></tr>
<tr><td>CS 416 / CS 616</td><td>Service Oriented Systems</td>                         <td>2-1-0</td><td>  3</td></tr>
<tr><td>CS 417 / CS 617</td><td>Cryptography and Network Security</td>            <td>2-1-0</td><td>  3</td> </tr>
<tr><td>CS 418 / CS 618</td><td>Systems and Usable Security</td>                    <td>2-1-0</td><td>  3</td> </tr>
<tr><td>CS 419 / CS 619 / ICS 419</td><td>  Computer Vision</td>                        <td>2-1-0</td><td>  3</td></tr>
<tr><td>CS 420 / CS 620</td><td>Embedded Systems</td>                   <td>2-1-0</td><td>  3</td></tr>
<tr><td>CS 422 / CS 622</td><td>Numerical Simulation</td>                 <td>2-1-0</td><td>  3</td></tr>
<tr><td>CS 424 </td><td>Functional and Logic Programming</td><td>2-0-2</td><td>3</td></tr>
<tr><td>CS 701</td>    <td>Selected Topics in Advanced Algorithms</td>            <td>2-1-0</td><td>  3</td> </tr> -->
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