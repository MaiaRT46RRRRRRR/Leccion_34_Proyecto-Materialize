
  $('#textarea1').trigger('autoresize');
window.onload=function(){
  var soloLetras = function(e){
  var codigoTecla = e.keyCode;
  if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32)
  {
      this.classList.add("valid");
      this.classList.remove("invalid");
      return true;
  }
  else
  {
      this.classList.remove("valid");
      this.classList.add("invalid");
      return false;
  }
}
var name=document.getElementById("first_name");
var lastName=document.getElementById("last_name");
name.onkeypress=soloLetras;
lastName.onkeypress=soloLetras;
}
