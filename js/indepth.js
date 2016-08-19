
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "¿Qué deportista ha ganado más medallas de oro en la historia?",
				      "respuestas": [
				        {
				          "respuesta": "Usain Bolt",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Michael Phelps",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Nadia Comaneci",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Rafael Nadal",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué nadadora es apodada “Iron Lady”?",
				      "respuestas": [
				        {
				          "respuesta": "Katinka Hosszú",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Marijose Alcalá",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Katie Ledecky",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Paola Longoria",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién posee el actual récord en los 100 metros planos?",
				      "respuestas": [
				        {
				          "respuesta": "Michael Johnson",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Carl Lewis",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Usain Bolt",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Tyson Gay",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién ganó la medalla de oro en tenis en Londres 2012?",
				      "respuestas": [
				        {
				          "respuesta": "Andy Murray",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Novak Djokovic",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Roger Federer",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Stan Wawrinka",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién obtuvo la primera medalla de oro olímpica para una mujer mexicana?",
				      "respuestas": [
				        {
				          "respuesta": "Paola Espinosa",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Aída Román",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "María del Rosario Espinoza",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Soraya Jiménez",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Nadador que ha sido el único en arrebatar un oro a Michael Phelps en los 200 metros mariposa",
				      "respuestas": [
				        {
				          "respuesta": "Chad Le Clos",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Alexander Popov",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ian Thorpe",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Juan José Veloz",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién obtuvo la única medalla para México en Atlanta 1996?",
				      "respuestas": [
				        {
				          "respuesta": "Carlos Mercenario",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bernardo Segura",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Víctor Estrada",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Nelson Vargas",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién ganó la primera medalla de oro en Río 2016?",
				      "respuestas": [
				        {
				          "respuesta": "Virginia Thrasher",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Michael Phelps",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Katie Ledecky",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Katinka Hosszú",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Taekwondoín mexicana que ha ganado dos medallas olímpicas",
				      "respuestas": [
				        {
				          "respuesta": "Iridia Salazar",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bernadette Pujals",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Vanessa Zambotti",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "María del Rosario Espinoza",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué atleta nacido en Cuba participó con los colores de México en Río 2016?",
				      "respuestas": [
				        {
				          "respuesta": "Rommel Pacheco",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jahir Ocampo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bredni Roque",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Marcos Madrid",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En dónde se realizarán los próximos Juegos Olímpicos de verano?",
				      "respuestas": [
				        {
				          "respuesta": "Los Ángeles",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ámsterdam",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Seúl",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Tokio",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué gimnasta estadounidense es considerada la nueva Nadia Comaneci?",
				      "respuestas": [
				        {
				          "respuesta": "Simone Biles",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Dominique Moceanu",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Gabrielle Douglas",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Aly Raisman",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Nadadora que posee actualmente los récords mundiales en los 400, 800 y 1,500 metros",
				      "respuestas": [
				        {
				          "respuesta": "Katie Ledecky",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Hope Solo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Katinka Hosszú",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alex Morgan",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién es el actual campeón en el baloncesto olímpico?",
				      "respuestas": [
				        {
				          "respuesta": "Brasil",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Argentina",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estados Unidos",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Puerto Rico",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Arquera mexicana con mejor posición en Río 2016",
				      "respuestas": [
				        {
				          "respuesta": "Aída Román",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alejandra Valencia",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Mariana Avitia",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Gabriela Bayardo",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué atleta independiente ganó una medalla de oro en Río?",
				      "respuestas": [
				        {
				          "respuesta": "Fehaid Aldeehani",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Missy Franklin",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Almaz Ayana",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "John Carlos",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Único gimnasta mexicano que ha participado en los últimos dos Juegos Olímpicos",
				      "respuestas": [
				        {
				          "respuesta": "Jahir Ocampo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Iván García",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Saúl Mendoza",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Daniel Corral",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "Representante mexicano en bádminton",
				      "respuestas": [
				        {
				          "respuesta": "Marcos Madrid",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Lino Muñoz",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Joselito Velázquez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Dionicio Cerón",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién ganó el oro en tiro con arco femenil en Londres 2012?",
				      "respuestas": [
				        {
				          "respuesta": "Ki Bo Bae",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Aída Román",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Svetlana Jórkina",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alejandra Valencia",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Clavadista que hizo pareja con Paola Espinosa en la plataforma de 10 metros sincronizados en Río 2016",
				      "respuestas": [
				        {
				          "respuesta": "Jashia Luna",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Laura Sánchez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alejandra Orozco",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "María José Alcalá",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		});
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if(aciertos<=5){
	  	aficionado="";
	  	msg="nomás fuiste a turistear… Tantita vergüenza.";
  	}
  	
  	if(aciertos<=10 && aciertos >= 6){
	  	aficionado="";
	  	msg="pues bueno, por corazón no paraste y se vio. Pudo ser mejor…";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="¡Eres el futuro de México! Te veo repitiendo medalla en Tokio 2020";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="el tiburón de Baltimore te envidia. Eres un histórico de los Olímpicos";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: Brasil "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Alemania primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/pizzafut-final-euro");
		window.open("https://twitter.com/share?text="+text+"&hashtags=pizzafut&url="+url,"","width=500, height=300");

	} else {
		
		
		
	}
	
	});
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


