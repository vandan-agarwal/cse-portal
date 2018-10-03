
<html lang="en">
<!DOCTYPE html>
<head>
  <link href="css/card.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <style type="text/css">
  .cardnew{
    border-radius: 3px;
  }
  .student_image{
    height: 140px;
    width: 76%;
    max-width: 135px;
    margin: auto;
    border-radius: 0%;
    box-shadow: 0px 1px 3px 0 #013953;
    }
    .cardnew{
      text-align: center;
    }
  .cardnew-header{
    padding: 4px 5px 4px 5px;
    }
        
    .card-header h2{
    font-size: 1em;
    }
   
</style>

</head>
<body>
    <?php include('header.php') ; ?>
    <div class="container" style="background-color:white;">
    <div class="row">
        <?php include('menu1.php'); ?>


 <div class="row" style="margin-top: 15px;" id="btech-2015">
  <h2 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;" >2015 BTech Students</h2>
  <!-- list can be edited from btechStudents2014 instance of btech_stu_2014.js-->
    <btech-item v-for="student in BtechList"
                    v-bind:btech="student"
                    v-bind:key="student.id">
     </btech-item>
</div>
</div>
</div>
<?php include('footer.php') ; ?>
<script type="text/javascript" src="btech_stu_2015.js"></script>
</body>
</html> 