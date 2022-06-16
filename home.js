$(document).ready(function(){
    $(".morechoco").click(function(){
      $(".choco").slideToggle(500);
    });
  });

$(document).ready(function(){
    $(".moreyogurt").click(function(){
      $(".yogurt").slideToggle(500);
    });
  });

$(document).ready(function(){
    $(".morecake").click(function(){
      $(".cake").slideToggle(500);
    });
  });
  
  $(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $(".#").addClass(".#");
      } else {
        $(".#").removeClass(".#");
      }
    });
  });