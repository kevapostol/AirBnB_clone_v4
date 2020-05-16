$(function () {

/*
let $kevin = $('div.amenities ul li input');
*/



$('input:checkbox').click(function(){

let list =[];

if($(this).is(":checked")){
alert("Checkbox is checked." );

 $.each($("input:checked"), function(){
                list.push($(this).val());
            });
alert(list);
}




else if($(this).is(":not(:checked)")){
alert("Checkbox is unchecked." );

}

});

  });
