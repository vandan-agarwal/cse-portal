<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap Dropdown Hover CSS -->
    <link href="css/animate.min.css" rel="stylesheet">
    <link href="css/bootstrap-dropdownhover.min.css" rel="stylesheet">

     <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Bootstrap Dropdown Hover JS -->
    <script src="js/bootstrap-dropdownhover.min.js"></script>

  </head>
  <body>
   
    <div class="dropdown">
      <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown">
       Dropdown <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li class="dropdown">
          <a href="#">One more dropdown</a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li class="dropdown">
              <a href="#">One more dropdown</a>
              <ul class="dropdown-menu">
              ...
              </ul>
            </li>
            <li><a href="#">Something else here</a></li>
            <li><a href="#">Separated link</a></li>
           </ul>
        </li>
        <li><a href="#">Something else here</a></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>
  </body>
</html>