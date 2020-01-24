$(function () {
    $('[data-toggle="popover"]').popover()
  })

  if ($(window).width() < 775) {
    $('[data-toggle="popover"]').removeAttr("data-trigger").attr("data-placement", "top")
 }

 $("#check").click( function(){
  if($("#exampleCheck1").prop("checked") == false){
      alert('Вы не подтвердили обработку персональных данных');
      return false;
  }
})