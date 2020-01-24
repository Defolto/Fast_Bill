// $(document).ready( function(){     
//     if($("#exampleCheck1").prop("checked") = 'checked') { 
//         window.alert('Дайте свое согласие на обработку данных!');
//         return false;
//     }
//     return true;
// }

// );

// var col = $("#exampleCheck1").prop("checked");
// alert(col);

$("#check").click( function(){
    if($("#exampleCheck1").prop("checked") == false){
        alert('Вы не подтвердили обработку персональных данных');
        return false;
    }
})