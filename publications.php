<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">


    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">

    <!-- Custom CSS -->
    <link href="css/heroic-features.css" rel="stylesheet">
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
    <link href="https://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css" rel="stylesheet">



    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

<style>
     
      ol li{
        background-color: #ffffff;
        /* border: 1px solid #eeeeee; */
        margin-left: -10px!important;
        margin-right: 15px!important;
        margin-bottom: 5px!important;
        text-align: justify;
        /*padding-top: 10px;*/
      }

</style>
</head>


<body>

    <!-- Navigation -->
    <?php include('menu.php') ; ?>
    
      <div class="container">
        <div class="panel panel-default">
        <div class="panel-heading" align="center"><strong> <font color="#08569F" style="font-size:1.2em;">PUBLICATIONS</font></strong></div>
         <div class="panel-body">
        <div class="row">
        <ol>
           <li>Mishra, N., Baud, I., Pfeffer, K., van Dijk, T., Richter, C., Bon, B., Sridharan, N., Pancholi, V., Saharan, T. 2013.<strong> The Development of Kalyan-Dombivli: Fringe City in Metropolitan Region.</strong> Chance2Sustain Project.European Association of Development Research and Training Institutes (EADI- Bonn, Germany).</li><br />

           <li>Mishra, N. 2011.<strong>Unravelling Governance Networks in Development Projects- Depoliticization as an Analytical Framework.Environment and Urbanization ASIA. 2(2), 153-168.</strong></li><br />

           <li>Mishra, N. 2010. <strong>'A Watershed in Watershed governance': Democracy and Depoliticization of development in India.</strong> SVH Press, Saarbruecken, Germany.</li><br />

           <li>Mishra, N. 2008. Representation of the state in watershed development projects in India. <strong>The 23rd annual general body meeting and conference,</strong> March 12-14; Pakistan Institute of Development Economics, Quaid-i-Azam University, Islamabad.</li><br />


        </ol>
              

        </div>
        </div>
      </div> 
      <!-- row end -->
<?php include('footer.php') ; ?>
</div>
</div>
      

      </div>

      <script type="text/javascript">
      $(document).ready(function() {
          $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
              e.preventDefault();
              $(this).siblings('a.active').removeClass("active");
              $(this).addClass("active");
              var index = $(this).index();
              $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
              $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
          });
      });
      </script>
       


    
</body>

</html>
