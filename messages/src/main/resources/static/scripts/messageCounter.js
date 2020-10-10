$(document).ready(domReady);

 function domReady() {

 $('#message').keyup(function (){
   var count = $(this).val().length;
   console.log('msg');
   $('#messageCounter').html(count);
 });
 }
