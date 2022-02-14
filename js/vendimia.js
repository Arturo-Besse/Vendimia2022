var reinas=[
	[ 'Godoy Cruz','img/godoycruz.jpg','Z&aacute;rate Mar&iacute;a Florencia',['23 a&ntilde;os','1,75 metros','Ojos Marrones','Cabello Casta&ntilde;o','Lic. en Relaciones Institucionales (tesis)','Cantar, bailar']],
	[ 'Maipú','img/maipu.jpg','Rodriguez Carina',['22 a&ntilde;os','1,78 metros','Ojos Marrones','Cabello Casta&ntilde;o','En&oacute;loga, cursando la Licenciatura en Enolog&iacute;a','Jugar al v&oacute;ley y modelar']],
	[ 'Santa Rosa','img/santarosa.jpg','Oyola Ludmila',['21 a&ntilde;os','1,55 metros','Ojos Marrones','Cabellos Casta&ntilde;os','Tec. En Periodismo y Curso Lengua de Se&ntilde;as - Idiomas: Ingl&eacute;s y franc&eacute;s','Leer, cocinar, escribir, caminar']],
	[ 'Junín','img/junin.jpg','Brizuela Perez Agustina',['20 a&ntilde;os','1,64 metros','Ojos Verdes','Cabello Casta&ntilde;o','3&deg; a&ntilde;o Lic. en Comunicaci&oacute;n Social','Actividades eclesi&aacute;sticas, estar con ni&ntilde;os']],
	[ 'La Paz','img/lapaz.jpg','Santos Amira Victoria',['19 a&ntilde;os','1,71 metros','Ojos Verdes','Cabello Casta&ntilde;o','3&deg; a&ntilde;o Lic. en Relaciones Institucionales','Leer, pasar el tiempo libre con amigos']],
	[ 'San Carlos','img/sancarlos.jpg','Sosa Mar&iacute;a Agostina',['18 a&ntilde;os','1,68 metros','Ojos Verdes','Cabello Casta&ntilde;o','Pre universitario de medicina','Bailar freedance']],
	[ 'Lavalle','img/lavalle.jpg','Meli Marzo Julieta',['23 a&ntilde;os','1,63 metros','Ojos Marrones','Cabello Rubio','Visitador m&eacute;dico','Bailar, cantar, leer']],
	[ 'Las Heras','img/lasheras.jpg','Stroppiana Marzoratti Mar&iacute;a Paula',['19 a&ntilde;os','1,68 metros','Ojos Miel','Cabello Rubio','2&deg; a&ntilde;o de Abogac&iacute;a - Idiomas: ingl&eacute;s e italiano','Realizar deportes, cantar, cocinar, equitaci&oacute;n']],
	[ 'Rivadavia','img/rivadavia.jpg','Brondo Mengoni Roc&iacute;o',['19 a&ntilde;os','1,67 metros','Ojos Verdes','Cabello Rubio','1&deg; a&ntilde;o Dise&ntilde;o de Indumentaria','Patinar, hacer deportes']],
	[ 'Tunuyán','img/tunuyan.jpg','Rodriguez Carina',['22 a&ntilde;os','1,78 metros','Ojos Marrones','Cabello Casta&ntilde;o','En&oacute;loga, cursando la Licenciatura en Enolog&iacute;a','Jugar al v&oacute;ley y modelar']],
	[ 'General Alvear','img/generalalvear.jpg','Oyola Ludmila',['21 a&ntilde;os','1,55 metros','Ojos Marrones','Cabellos Casta&ntilde;os','Tec. En Periodismo y Curso Lengua de Se&ntilde;as - Idiomas: Ingl&eacute;s y franc&eacute;s','Leer, cocinar, escribir, caminar']],
	[ 'Malargüe','img/malargue.jpg','Brizuela Perez Agustina',['20 a&ntilde;os','1,64 metros','Ojos Verdes','Cabello Casta&ntilde;o','3&deg; a&ntilde;o Lic. en Comunicaci&oacute;n Social','Actividades eclesi&aacute;sticas, estar con ni&ntilde;os']],
	[ 'San Rafael','img/sanrafael.jpg','Santos Amira Victoria',['19 a&ntilde;os','1,71 metros','Ojos Verdes','Cabello Casta&ntilde;o','3&deg; a&ntilde;o Lic. en Relaciones Institucionales','Leer, pasar el tiempo libre con amigos']],
	[ 'Lujan de Cuyo','img/lujandecuyo.jpg','Sosa Mar&iacute;a Agostina',['18 a&ntilde;os','1,68 metros','Ojos Verdes','Cabello Casta&ntilde;o','Pre universitario de medicina','Bailar freedance']],
	[ 'San Martín','img/sanmartin.jpg','Meli Marzo Julieta',['23 a&ntilde;os','1,63 metros','Ojos Marrones','Cabello Rubio','Visitador m&eacute;dico','Bailar, cantar, leer']],
	[ 'Tupungato','img/tupungato.jpg','Stroppiana Marzoratti Mar&iacute;a Paula',['19 a&ntilde;os','1,68 metros','Ojos Miel','Cabello Rubio','2&deg; a&ntilde;o de Abogac&iacute;a - Idiomas: ingl&eacute;s e italiano','Realizar deportes, cantar, cocinar, equitaci&oacute;n']],
	[ 'Guaymallén','img/guaymallen.jpg','Brondo Mengoni Roc&iacute;o',['19 a&ntilde;os','1,67 metros','Ojos Verdes','Cabello Rubio','1&deg; a&ntilde;o Dise&ntilde;o de Indumentaria','Patinar, hacer deportes']],
	[ 'Ciudad de Mendoza','img/ciudad.jpg','Reina de Ciudad',['19 a&ntilde;os','1,67 metros','Ojos Verdes','Cabello Rubio','1&deg; a&ntilde;o Dise&ntilde;o de Indumentaria','Patinar, hacer deportes']]
];
var columnas=6;
var filas=3;
var resolucion=[1366,768];
var horizontal=15,vertical=15,header=147,footer=85;
var arriba=header+vertical/2;
var izquierda=horizontal/2;
var reina='';
var fo=document.createElement('div');
// Este parámetro de opciones puede ser una cadena para la compatibilidad web.
fo.innerHTML='PARA CONOCER MEJOR A NUESTRAS CANDIDATAS Y VOTAR, PRESIONE SOBRE LA IMAGEN.';
// La propiedad innerHTML de JavaScript establece el contenido HTML de un elemento en una página web. InnerHTML es 
// una propiedad del HTML DOM. innerHTML se usa a menudo para establecer y modificar el contenido de un elemento <p>.
// El navegador define un modelo de objeto de documento (DOM) cuando se carga una página.
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
	fo.onclick=undefined;
	fo.innerHTML='PARA CONOCER MEJOR A NUESTRAS CANDIDATAS Y VOTAR, PRESIONE SOBRE LA IMAGEN.';
};
var confirmar2=document.createElement('div');
confirmar2.className='confirmar';
var pregunta=document.createElement('div');
pregunta.className='pregunta';
confirmar2.appendChild(pregunta);
// inserta un nuevo nodo dentro de la estructura DOM de un documento, y es la segunda parte del proceso
//  central uno-dos, crear-y-añadir para construir páginas web a base de programación.
var si=document.createElement('img');
si.src='confirmar.png';
si.onmousedown=function(){
	this.src='confirmar2.png';
};
si.onmouseup=si.onmouseout=function(){
	this.src='confirmar.png';
};
si.className='si';
var no=document.createElement('img');
no.src='cancelar.png';
no.onmousedown=function(){
	this.src='cancelar2.png';
};
no.onmouseup=no.onmouseout=function(){
	this.src='cancelar.png';
};
no.className='no';
confirmar2.appendChild(pregunta);
confirmar2.appendChild(no);
confirmar2.appendChild(si);
no.onclick=function() {
	document.body.removeChild(confirmar2);
	reducir();
};
var votar=function(e){
	document.body.appendChild(confirmar2);
	e.stopPropagation();
	reina=this.parentNode.parentNode.childNodes[1].innerHTML;
	var id=this.parentNode.parentNode.childNodes[1].id;
	pregunta.innerHTML='Se va a imprimir un voto para '+(reina=='Todas las Candidatas'?'todas las candidatas':'la candidata de '+reina);
	si.onclick=function(){
		document.body.removeChild(confirmar2);
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
	};
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
	fo.onclick=reducir;
	fo.innerHTML='VOLVER';
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
document.getElementById('footer').appendChild(fo);
reducir();
document.getElementById('vpt').addEventListener('click',function(e){
	document.body.appendChild(confirmar2);
	e.stopPropagation();
	var id=19;
	pregunta.innerHTML='Se va a imprimir un voto para todas las candidatas';
	si.onclick=function(){
		document.body.removeChild(confirmar2);
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
	};
});