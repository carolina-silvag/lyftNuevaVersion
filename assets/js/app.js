

$(document).ready(function(){
  $('header').fadeOut(1000);
  $('#demo').intlTelInput({
      utilsScript: "build/js/utils.js"
     
  });

  	var validar = makeid();

	$('.numberRegistro').hide();
	$('.numberVerificar').hide();
	$('.registro').hide();

    $('.btnUp').click(registro1);
    $('.glyphicon1').click(volverPrincipal);
    $('.btnNext').click(registro2);
    $('.glyphicon2').click(volverRegistro1);
    $('.btnNextVerificar').click(registro3);
    $('.glyphicon3').click(volverRegistro2);
    $('.btnResed').click(verificar);
    /*$('.btnNextFinal').click(registro4);*/
    

    /*funciones*/
    function verificar() {
    	var numberComparar = $('.numberValidar').val();
    	if (validar==numberComparar){
    		$('.btnNextVerificar').removeAttr('disabled');
    	}
    }

    function registro1() {
    	$('section').removeClass('fondoPrincipal');
    	$('body').css({'background-image':'none'});
    	$('.pantallaPrincipal').hide();
    	$('.numberRegistro').show();

    }

    function volverPrincipal() {
    	$('section').addClass('fondoPrincipal');
    	$('.numberRegistro').hide();
    	$('.pantallaPrincipal').show();

    }

    function registro2() {
    	$('section').removeClass('fondoPrincipal');
    	$('body').css({'background-image':'none'});
    	$('.numberRegistro').hide();
    	$('.numberVerificar').show();
    	alert('tu código: LAB-'+ makeid());

    }
    function volverRegistro1() {
    	$('.numberVerificar').hide();
    	$('.numberRegistro').show();

    }

    function registro3() {
    	$('.fondoPrincipal').css({'background-image':'none'});
    	$('body').css({'background-image':'none'});
    	$('.numberVerificar').hide();
    	$('.registro').show();
    }
    function volverRegistro2() {
    	$('.registro').hide();
    	$('.numberVerificar').show();

    }

    //Habilita el boton next al ingresar 10 digitos
  	$('.numberPhone').keyup(function() {
    	var num = $('.numberPhone').val();
      	if (num.length == 10) {
        	$('.btnNext').removeAttr('disabled');
      	}
  	});


	function makeid() {
	    var text = "";
	    var possible = "0123456789";

	for (var i = 0; i < 3; i++)
	    text += possible.charAt(Math.floor(Math.random() * possible.length));

	   return text;
	}

});




