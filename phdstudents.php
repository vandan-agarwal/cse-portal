
<html lang="en">
<!DOCTYPE html>
<head>
  <link href="css/card.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <style type="text/css">

  .student_image{
    height: 180px;
    width: 170px;
    margin: auto;
    border-radius: 10%;
    box-shadow: 0px 1px 3px 0 #013953;
    }
    .cardnew{
      text-align: center;
    }
  .cardnew-header{
            padding-top: 8px;
    }
        
    .card-header h2{
            font-size: 1em;
        }
    .cardnew >.cardnew-heading>a:before{
      height: 3px;
      top: 212px;
    }
    
 
</style>

</head>
<body>
    <?php include('header.php') ; ?>
    <div class="container" style="background-color:white;">
    <div class="row">
        <?php include('menu1.php'); ?>


 <div class="row" style="margin-top: 15px;" id="PhdStudents">
  <h2 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;" >PhD Students</h2>
 
  <phd-item v-for="phdStudent in PhdList"
                    v-bind:phd="phdStudent"
                    v-bind:key="phdStudent.id">
     </phd-item>

</div>
<a href="graduated_phd.php"><h3 style=" margin-top: 15px;font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: right;" >Graduated PhD Students <i class="fas fa-arrow-circle-right"></i></h3></a>
</div>
</div>
<?php include('footer.php') ; ?>
<script type="text/javascript" src="phd_students.js"></script>
</body>
</html>