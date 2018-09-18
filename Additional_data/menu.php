<head>
	<link rel="stylesheet" type="text/css" href="css/menu.css">
</head>

<style type="text/css">
 
   
  .dropdown-submenu {
      position:relative;
  }
  .dropdown-submenu>.dropdown-menu {
     top:0;left:100%;
     margin-top:-6px;margin-left:-1px;
     -webkit-border-radius:0 6px 6px 6px;-moz-border-radius:0 6px 6px 6px;border-radius:0 6px 6px 6px;
   }
    
  .dropdown-submenu > a:after {
    border-color: transparent transparent transparent #333;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    content: " ";
    display: block;
    float: right;  
    height: 0;     
    margin-right: -10px;
    margin-top: 5px;
    width: 0;
  }
   
  .dropdown-submenu:hover>a:after {
      border-left-color:#555;
   }

   

</style>


<nav class="navbar-default" style="margin-top:10px;">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> 
        	<i class="fa fa-bars"></i> 
        </button>
    </div>
    <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="nav navbar-nav mobile-menu">
			<li> <a href="#!">HOME</a> <span class="has-dropdown"></span>
			
      		</li>
      	
	      	<li> <a href="#">About us</a> <span class="has-dropdown"></span>
		        <ul class="dropdown-menu">
		          	<li> <a href="#">About</a> </li>
		          	<li> <a href="#">About 2</a> </li>
		          	<li> <a href="#">About 3</a> </li>
		          	<li> <a href="#">history</a> </li>
		          	<li> <a href="#">career</a> </li>
		          	<li> <a href="#">partnerships</a> </li>
		          	<li> <a href="#">leadership</a> </li>
		        </ul>
	      	</li>
	      	<li> <a href="#" class="dropdown-toggle" data-toggle="dropdown">services</a> <span class="has-dropdown"></span>
	       		<ul class="dropdown-menu">
					<li><a href="#">Services</a></li>
					<li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Business Loan</a>
					<ul class="dropdown-menu">
						<li><a href="#">Financial Planing</a></li>
						<li><a href="#">Insurance Consulting</a></li>
						<li><a href="#">Investments Managment</a></li>
						<li><a href="#">Saving Investing</a></li>
						<li><a href="#">Taxes Planing</a></li>
					</ul>
					</li>
				</ul>
	      	</li>
	      	<li> <a href="#">Project</a> <span class="has-dropdown"></span>
		        <ul class="dropdown-menu">
		          	<li> <a href="#">project</a> </li>
		          	<li> <a href="#">Projec Details</a> </li>
		        </ul>
	      	</li>
	    	<li> <a href="#">blog</a> <span class="has-dropdown"></span>
		        <ul class="dropdown-menu">
		          	<li> <a href="#">Blog</a> </li>
		          	<li> <a href="#">Blog Details</a> </li>
		        </ul>
	      	</li>
	      	<li> <a href="#">pages</a> <span class="has-dropdown"></span>
		        <ul class="dropdown-menu">
		          	<li> <a href="#">Gallery Grid</a> </li>
		          	<li> <a href="#">Gallery Masonry</a> </li>
		          	<li> <a href="#">Team</a> </li>
		          	<li> <a href="#">pricing</a> </li>
		          	<li> <a href="#">Faq</a> </li>
		          	<li> <a href="#">Register</a> </li>
		          	<li> <a href="#">login</a> </li>
		          	<li> <a href="#">Testimonials</a> </li>
		          	<li> <a href="#">404 Error</a> </li>
		          	<li> <a href="#">blank</a> </li>
		        </ul>
	      	</li>
		    <li> <a href="#">Shop</a> <span class="has-dropdown"></span>  
		        <ul class="dropdown-menu">
		          	<li> <a href="#">Shop</a> </li>
		          	<li> <a href="#">shop sidebar</a> </li>
		          	<li> <a href="#">shop details</a> </li>
		          	<li> <a href="#">cart</a> </li>
		          	<li> <a href="#">Checkout</a> </li>
		        </ul>
		    </li>
	      	<li> <a href="#">Contact us</a> <span class="has-dropdown"></span>
		        <ul class="dropdown-menu">
		          	<li> <a href="#">contact</a> </li>
		          	<li> <a href="#">contact 2</a> </li>
		        </ul>
	      	</li>
		  	<li><a href="#">Find Advisor</a></li>
    	</ul>
    </div>
</nav>
<script>

$(".mobile-menu> li >a").click(function(){
        if ($(window).width() <= 991) {
            $('.mobile-menu> li').removeClass('on');
            $('.mobile-menu> li> ul').slideUp('normal');
            if ($(this).next().next('ul').is(':hidden') === true) { 
                $(this).parent('li').addClass('on');
                $(this).next().next('ul').slideDown('normal');
            }
        }
    });
</script>