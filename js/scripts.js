$(document).ready(function() {
  var cart =[];
  $("#book1").click(function() {
    cart += "<br/>" + $("#book1").val();
  });
  $("#book2").click(function() {
    cart += "<br/>" + $("#book2").val();
  });
  $("#book3").click(function() {
    cart += "<br/>" + $("#book3").val();
  });

  $("form#input").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    $(".name").text(name);
    $(".address").text(address);
    $("#purchase").append(cart);
    $("#receipt").show();
  });


});
