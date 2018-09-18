<html lang="en">
<!DOCTYPE html>
<head>
  <link href="css/card.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  
  <style type="text/css">
#fellowships font{
  color: #013953;
}
#fellowships
{
  font-family: Arial, Helvetica, sans-serif;
  width:100%; 
  border-collapse:collapse;
}-
#fellowships th
{
  color:#f47321;
  text-align:left;
  height:50px;
}
#fellowships tr
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

<h2 style="font-family: 'Audiowide'; color: #013953; text-shadow:2px 2px #bdcfdb; text-align: center;" >Fellowships</h2>
<table id="fellowships">
  <!--fellowships can be edited in the Fellowships instance of fellowships.js-->
 <tr v-for="fellowship in FellowshipsList"
                    v-bind:fellowship="fellowship"
                    v-bind:key="fellowship.id"
                    is="fellowship-item"
                    >
                  </tr>
  
</table>
</div>
</div>
<?php include('footer.php') ; ?>    
<script type="text/javascript" src="fellowships.js"></script>

</body>
</html>