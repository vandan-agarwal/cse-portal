
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


 <div class="row" style="margin-top: 15px;" id="MsStudents">
  <h2 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;" >MS Students</h2>
 
  <ms-item v-for="MsStudent in MsList"
                    v-bind:Ms="MsStudent"
                    v-bind:key="MsStudent.id">
     </ms-item>

</div>
</div>
</div>
<?php include('footer.php') ; ?>
<script type="text/javascript" src="ms_students.js"></script>
</body>
</html>