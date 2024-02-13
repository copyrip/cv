$(document).ready(function(){

  $("#dark").click(function() {
    if($("body").hasClass("dark")){
      $("body").removeClass("dark");
      $(this).text("dark");
    }
    else {
      $("body").addClass("dark");
      $(this).text("light");
    }
  });

  $("ul#all li").hide();

  $("form input[type=\"checkbox\"]").each(function(){
    display($(this).attr('name'),$(this).is(':checked'));
  });
  /* more infos */

  $("ul li dd").hide(); 

  $("ul li dt").mouseenter(function(){
    $(this).next().slideDown(5);
  });

  $("ul li dt").mouseleave(function(){
    $(this).next().slideUp(3);
  });


  /* sorting */

  $("form input[type=\"checkbox\"]").change(function(){
    display($(this).attr('name'),$(this).is(':checked'));
  });

});

function display(c,is){
  c = "."+c;
  is ? $(c).show() : $(c).hide();
}