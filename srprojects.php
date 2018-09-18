<html lang="en">
<!DOCTYPE html>
<head>
  <link href="css/card.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <style type="text/css">
#srprojects font{
  color: #013953;
}
#srprojects
{
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
  width: 100%; 
  color: #013953;
  min-width: 1150px; 

  border-collapse:collapse;
}
#srprojects th
{
  color:#013953;
  text-align:left;-
  height:50px;
}
#srprojects tr
{
  border-top: 1px solid #DADADA;
  height:55px;
}
</style>
</head>
<body>
    <?php include('header.php') ; ?>
    <div class="container" style="background-color:white;">
    <div class="row">
        <?php include('menu1.php'); ?>

<h2 style="font-family: 'Audiowide', cursive; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;" >Sponsored Research Projects</h2>
<div class="container table-responsive">
<table width="850" id="srprojects" style="margin-top: 10px;">
	<div id="srprojects">
<sr-header> </sr-header>
<!--SR-Projects csn be added in Srprojects instance of srprojects.js file-->
<sr-item v-for="srp in SRProjectsList"
                    v-bind:sr="srp"
                    v-bind:key="srp.id">
</sr-item>
</div>
</table>
</div>
</div>
</div>
<?php include('footer.php') ; ?>
<script type="text/javascript" src="srprojects.js"></script>
    
</body>
</html>
