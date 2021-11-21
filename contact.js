$(document).ready(function(){
  
  function init(){
  if(localStorage["name"]){
     $('#name').val(localstorage["name"]);
     
     }
  if(localStorage["email"]){
     $('#email').val(localstorage["email"]);
     
     }
      if(localStorage["message"]){
     $('#message').val(localstorage["message"]);
     
     }
  
     init();
  
  
  
}
 
   $('.store').change (function(){
    localStorage[$(this).attr('name')] =$(this).val();
  });
  
});
function loading(){
	alert("the page is loading")
  }
