$('#showpwd').click(
  function(){
    if ($('#showpwd').is(":checked"))
    {
      $("#password").attr('type', 'text')
    }else{
      $("#password").attr('type', 'password')
    }    
  }
);