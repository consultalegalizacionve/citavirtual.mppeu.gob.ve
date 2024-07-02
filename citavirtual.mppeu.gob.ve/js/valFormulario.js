

function solo_numeros(evt){

	// NOTE: Backspace = 8, Enter = 13, '0' = 48, '9' = 57
	//-var key = nav4 ? evt.which : evt.keyCode;
	//-return (key <= 12 || (key >= 48 && key <= 57)) ;
	tecla = (document.all) ? evt.keyCode : evt.which;
    if (tecla==8) return true;
    if (tecla==0) return true;
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function ValidaEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
// Funcion para validar ingreso de solo numeros
function soloNumeros(evt){   

//var charCode = (evt.which) ? evt.which : event.keyCode
  //  return (charCode == 8 || charCode == 9 || (charCode >= 44 && charCode <= 57) || charCode == 188 || (charCode >= 96 && charCode <= 105));


/*
var nav4 = window.Event ? true : false;
	function soloNumeros(evt)
	{	// NOTE: Backspace = 8, Enter = 13, '0' = 48, '9' = 57	
		var key = nav4 ? evt.which : evt.keyCode;	
                
		return (key <= 13 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
	}
*/

 (function(a) {
            a.fn.validCampoMCTI = function(b) {
                a(this).on({keypress: function(a) {
                        var c = a.which, d = a.keyCode, e = String.fromCharCode(c).toLowerCase(), f = b;
                        (-1 != f.indexOf(e) || 9 == d || 37 != c && 37 == d || 39 == d && 39 != c || 8 == d || 46 == d && 46 != c) && 161 != c || a.preventDefault()
                    }})
            }
        })(jQuery);

        $(function() {
            $('#persona_cedula_gestor').validCampoMCTI('0123456789');
            $('#cedula_valida_gestor').validCampoMCTI('0123456789');
            $('#persona_cedula').validCampoMCTI('0123456789');
            $('#nro_acta').validCampoMCTI('0123456789');
            $('#nro_registro').validCampoMCTI('0123456789');
            $('#nro_folio').validCampoMCTI('0123456789');
            $('#telefono_gestor').validCampoMCTI('0123456789');
        });

}

function valTelefono(valor,mensaje){
v_telefono =  $(valor).val();
		var er_tlfono = /^([0-9\s\+\-])+$/
		 var num_telefono = v_telefono.length
                 
		 if(!er_tlfono.test(v_telefono)){
		 	alert(v_telefono + " no es formato valido para telefono");
                        $(valor).val('');
                        return false
                 }
                 
		 else if(num_telefono < 9){
                        mens= "Numero de "+mensaje+" Muy corto";
		 	alert(mens);
                    }
                 else if(num_telefono > 11){
                        mens= "Numero de "+mensaje+" Muy Largo";
		 	alert("numero Muy Largo")
                    }
                 else if  ( $(valor).val().charAt(0) != 0)
                        alert("Formato de teléfono no válido. \n Debe comenzar con cero (0)")
		 else{}
}

function valRif(valor){
v_rif =  $(valor).val();
		var er_tlfono = /^([0-9jJ\s\+\-])+$/
		 var rif = v_rif.length
                 
		 if(!er_tlfono.test(v_rif)){
		 	alert(v_rif + "El Rif debe ser jurídico, ejemplo: J123456789");
                        $(valor).val('');
                        return false
                 }
                 
		 else if(rif < 7){
		 	alert("Rif Muy corto")
                        $(valor).val('');
                        return false
                 }
                 else if(rif > 11){
		 	alert("numero Muy Largo")
                        $(valor).val('');
                        return false
                 }
                 else if  ( $(valor).val().charAt(0) != 'J'){
                        alert("Formato no valido, el Rif debe comenzar con 'J'")
                        $(valor).val('');
                        return false
                 }
		 else{}
}

function calculaMonto(cantidad,costo,costoTotal){
    document.getElementById(costoTotal).value = document.getElementById(cantidad).value *  document.getElementById(costo).value;
}

function upperCase ( input ) {
    setTimeout( function () {
        input.value = input.value.toUpperCase();    
    }, 0 );    
}