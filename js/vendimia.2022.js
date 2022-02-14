var reinas=[
	[ 'Las Tortugas','img/Katherina.jpg','Ferro Katherina Betsab&eacute;',['19 a&ntilde;os','1,55 metros','Ojos Marrones','Cabello Rubio','2&deg; de Tecnicatura superior en anestesia. Profesora de danzas &aacute;rabes.']],
	[ 'San Francisco del Monte','img/Maria Eugenia.jpg','Falconi Mar&iacute;a Eugenia',['21 a&ntilde;os','1,63 metros','Ojos Marrones','Cabello Casta&ntilde;o Claro','3&deg; Licenciatura en Nutrici&oacute;n']],
	[ 'Presidente Sarmiento','img/Mayra.jpg','Ballesteros Mayra Luz',['19 a&ntilde;os','1,70 metros','Ojos Marrones','Cabello Rubio','Estudiante de Dise&ntilde;o de Indumentaria y Textil. First Certificate']],
	[ 'Villa Marini','img/Juliana.jpg','Zalazar Juliana',['18 a&ntilde;os','1,76 metros','Ojos Marrones','Casta&ntildeo Claro','2&deg; Licenciatura en Relaciones Institucionales']],
	[ 'Gobernador Benegas','img/Agostina.jpg','Pazzaglia Agostina',['19 a&ntilde;os','1,69 metros','Ojos Verdes','Cabello Rubio','1&deg; Ingenier&iacute;a Industrial en UNCuyo e ingreso a Derecho. First Certificate y preparando el CAE (Certificate in Advanced English) en Oxford']],
	[ 'Villa del Parque','img/Daniela.jpg','Andr&eacute; Daniela Roc&iacute;o',['19 a&ntilde;os','1,70 metros','Ojos Verdes','Cabello Casta&ntilde;o','2&deg; de Derecho  en Universidad de Mendoza']],
	[ 'Trapiche','img/Gisela.jpg','G&ouml;tte Gisella',['21 a&ntilde;os','1,70 metros','Ojos Marrones','Cabello Casta&ntilde;o Oscuro','3&deg; Lic. En fonoaudiolog&iacute;a y terapia del lenguaje']],
	[ 'Villa Hip&oacute;dromo','img/Laura.jpg','Alonso Raffaeli Mar&iacute;a Laura',['21 a&ntilde;os','1,67 metros','Ojos Verdes','Cabello Casta&ntilde; Claro','4&deg; Dise&ntilde;o Gr&aacute;fico UNCuyo']],
	[ 'Centro','img/Martina.jpg','S&aacute;nchez Martina',['19 a&ntilde;os','1,73 metros','Ojos Marrones','Cabello Casta&ntilde;o Claro','2&deg; Tecnicatura en Anestesiolog&iacute;a']],
	['Todas las Candidatas','img/Todas.jpg','',[]]
];
var columnas=5;
var filas=2;
var resolucion=[document.body.clientWidth,document.body.scrollHeight];
var horizontal=15,vertical=15,header=147,footer=85;
var arriba=header+vertical/2;
var izquierda=horizontal/2;
var confirmar=document.createElement('div');
confirmar.className='confirmar';
var label=document.createElement('div');
label.innerHTML='Por favor, ingres&aacute; tu n&uacute;mero de documento';
label.className='label';
var teclado=document.createElement('div');
teclado.className='teclado';
var dni=document.createElement('div');
dni.className='dni';
var reina='';
for(var i=9;i>-1;i--){
	var tecla=document.createElement('div');
	tecla.innerHTML=i;
	tecla.onclick=function(){
		dni.innerHTML+=this.innerHTML;
	};
	tecla.onmousedown=function(){
		this.style.color='#fff';
		this.style.background='#000';
	};
	tecla.onmouseup=tecla.onmouseout=function(){
		this.style.color='#000';
		this.style.background='#fff';
	};
	teclado.appendChild(tecla);
	if(i%3==1)teclado.appendChild(document.createElement('br'));
}
var tecla=document.createElement('div');
tecla.className='aceptar';
tecla.innerHTML='Confirmar Voto';
tecla.onclick=function(){
	if(dni.innerHTML.length==0)return false;
	alert('Validando: '+dni.innerHTML+' votando: '+reina);
	confirmar.style.display='none';
	confirmar.style.opacity=0;
	dni.innerHTML='';
	reducir();
};
tecla.onmousedown=function(){
	this.style.color='#fff';
	this.style.background='#000';
};
tecla.onmouseup=tecla.onmouseout=function(){
	this.style.color='';
	this.style.background='';
};
teclado.appendChild(tecla);
var tecla=document.createElement('div');
tecla.className='cancelar';
tecla.innerHTML='Cancelar';
tecla.onclick=function(){
	confirmar.style.display='none';
	confirmar.style.opacity=0;
	dni.innerHTML='';
	reina='';
	reducir();
};
tecla.onmousedown=function(){
	this.style.color='#fff';
	this.style.background='#000';
};
tecla.onmouseup=tecla.onmouseout=function(){
	this.style.color='';
	this.style.background='';
};
teclado.appendChild(tecla);
confirmar.appendChild(label);
confirmar.appendChild(dni);
confirmar.appendChild(teclado);
document.body.appendChild(confirmar);
var reducir=function(){
	var ancho=(resolucion[0])/columnas-horizontal;
	var alto=(resolucion[1]-header-footer)/filas-vertical;
	for(var i in reinas) {
		var posicion=[parseInt(i/columnas),i%columnas];
		reinas[i].className = 'f';
		reinas[i].style.width = ancho + 'px';
		reinas[i].style.height = alto + 'px';
		reinas[i].style.top = arriba + posicion[0] * (alto+vertical) + 'px';
		reinas[i].style.left = izquierda + posicion[1] * (ancho+horizontal) + 'px';
		reinas[i].onclick=ampliar;
	}
};
var confirm=function(){
	confirmar.style.display='block';
	confirmar.style.opacity=1;
	return false;
};
var votar=function(e){
	e.stopPropagation();
	reina=this.parentNode.parentNode.childNodes[1].innerHTML;
	var id=this.parentNode.parentNode.childNodes[1].id;
	if(confirm('Se va a imprimir un voto para '+(reina=='Todas las Candidatas'?'':'la candidata de ')+reina)){
		reducir();
		var httpRequest = new XMLHttpRequest();

		if (!httpRequest) {
			alert('Giving up :( Cannot create an XMLHTTP instance');
			return false;
		}
		httpRequest.onreadystatechange = function(a,b){
			console.log([a,b]);
		};
		httpRequest.open('GET', 'imprimir.php?r='+id);
		httpRequest.send();
	}
};
var ampliar= function (e) {
	var ancho=(resolucion[0])/reinas.length-horizontal;
	var alto=(resolucion[1]-header-footer)/3-vertical;
	var i;
	for(var seleccionado in this.parentNode.childNodes)
		if(this.parentNode.childNodes[seleccionado]==this)break;
	var anterior=this.parentNode.childNodes[(parseInt(reinas.length)+seleccionado-1)%reinas.length];
	var siguiente=this.parentNode.childNodes[(parseInt(reinas.length)+parseInt(seleccionado)+1)%reinas.length];
	var i2=(reinas.length+(seleccionado-parseInt(reinas.length/2)))%reinas.length,j=0;
	for(i=i2;i<reinas.length;i++,j++){
		if(this.parentNode.childNodes[i]==anterior||this.parentNode.childNodes[i]==siguiente)continue;
		this.parentNode.childNodes[i].style.top=arriba+alto+vertical+'px';
		this.parentNode.childNodes[i].style.left=izquierda+j*(ancho+horizontal)+'px';
		this.parentNode.childNodes[i].style.width=ancho+'px';
		this.parentNode.childNodes[i].style.height=alto+'px';
		this.parentNode.childNodes[i].style.zIndex=1;
		this.parentNode.childNodes[i].className='f';
	}
	for(i=0;i<i2;i++,j++){
		if(this.parentNode.childNodes[i]==anterior||this.parentNode.childNodes[i]==siguiente)continue;
		this.parentNode.childNodes[i].style.top=arriba+(alto+vertical)+'px';
		this.parentNode.childNodes[i].style.left=izquierda+j*(ancho+horizontal)+'px';
		this.parentNode.childNodes[i].style.width=ancho+'px';
		this.parentNode.childNodes[i].style.height=alto+'px';
		this.parentNode.childNodes[i].style.zIndex=1;
		this.parentNode.childNodes[i].className='f';
	}
	this.style.zIndex=99;
	var ancho2=100;
	var ancho=resolucion[0]-ancho2*2;
	var alto=(resolucion[1]-header-footer)-100;
	var alto2=((resolucion[1]-header-footer)/3-vertical)*2;
	this.style.top=arriba-vertical/2+(resolucion[1]-header-footer)/2-alto/2+'px';
	this.style.left=izquierda-horizontal/2+resolucion[0]/2-ancho/2+'px';
	this.style.width=ancho+'px';
	this.style.height=alto+'px';
	this.className = 'f maximizado';
	anterior.style.top=siguiente.style.top=arriba-vertical/2+(resolucion[1]-header-footer)/2-alto2/2+'px';
	anterior.style.width=siguiente.style.width=ancho2+'px';
	anterior.style.height=siguiente.style.height=alto2+'px';
	anterior.style.zIndex=siguiente.style.zIndex=98;
	anterior.style.left=izquierda-horizontal/2+resolucion[0]/2-ancho/2-ancho2+'px';
	siguiente.style.left=izquierda-horizontal/2+resolucion[0]/2+ancho/2+'px';
	anterior.className = 'f anterior';
	siguiente.className = 'f siguiente';
	anterior.onclick=ampliar;
	siguiente.onclick=ampliar;
	this.onclick=reducir;
};
var transforms=['-moz-transform','-o-transform','-ms-transform','transform'];
for(var i in reinas){
	var img=document.createElement('img');
	img.src=reinas[i][1];
	var distrito=document.createElement('div');
	distrito.className='distrito';
	distrito.innerHTML=reinas[i][0];
	distrito.id=parseInt(i)+1;
	var nombre=document.createElement('div');
	nombre.className='nombre';
	nombre.innerHTML=reinas[i][2];
	var ul=document.createElement('ul');
	ul.className='datos';
	for(var i2 in reinas[i][3]){
		var li=document.createElement('li');
		li.innerHTML=reinas[i][3][i2];
		ul.appendChild(li);
	}
	var boton=document.createElement('img');
	boton.src='votar.png';
	boton.onclick=votar;
	boton.onmousedown=function(){
		this.src='votar2.png';
	};
	boton.onmouseup=boton.onmouseout=function(){
		this.src='votar.png';
	};
	var data=document.createElement('div');
	data.appendChild(nombre);
	data.appendChild(ul);
	data.appendChild(boton);
	reinas[i]=document.createElement('div');
	reinas[i].style.backgroundColor='#FFF';
	reinas[i].className='f';
	reinas[i].appendChild(img);
	reinas[i].appendChild(distrito);
	reinas[i].appendChild(data);
	document.getElementById('carousel').appendChild(reinas[i]);
}
var fo=document.createElement('div');
fo.innerHTML='PARA CONOCER MEJOR A NUESTRAS CANDIDATAS Y VOTAR, PRESIONE SOBRE LA IMAGEN.';
document.getElementById('footer').appendChild(fo);
reducir();