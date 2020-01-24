$("#check").click( function(){
    if($("#exampleCheck1").prop("checked") == false){
        alert('Вы не подтвердили обработку персональных данных');
        return false;
    }
})