$(document).ready(function() {

  $("form#input").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    $(".name").text(name);
    $(".address").text(address);
    $("#receipt").show();
  });

});
