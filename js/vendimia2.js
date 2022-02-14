var reinas=[['1','reina.jpg'],['2','reina.jpg'],['3','reina.jpg'],['4','reina.jpg'],['5','reina.jpg'],['6','reina.jpg'],['7','reina.jpg'],['8','reina.jpg'],['9','reina.jpg']];
var resolucion=[document.body.clientWidth,document.body.scrollHeight];
var horizontal=10,vertical=10,header=132,footer=70;
var arriba=header+vertical/2;
var izquierda=horizontal/2;
var votar=function(e){
	console.log(e);
	console.log(this);
};
var ampliar= function (e) {
	var ancho=(resolucion[0])/9-horizontal;
	var alto=(resolucion[1]-header-footer)/3-vertical;
	var i;
	for(var seleccionado in this.parentNode.childNodes)
		if(this.parentNode.childNodes[seleccionado]==this)break;
	var anterior=this.parentNode.childNodes[(9+seleccionado-1)%9];
	var siguiente=this.parentNode.childNodes[(9+seleccionado+1)%9];
	var i2=(9+(seleccionado-4))% 9,j=0;
	for(i=i2;i<9;i++,j++){
		if(this.parentNode.childNodes[i]==anterior||this.parentNode.childNodes[i]==siguiente)continue;
		this.parentNode.childNodes[i].style.top=arriba+alto+vertical+'px';
		this.parentNode.childNodes[i].style.left=izquierda+j*(ancho+horizontal)+'px';
		this.parentNode.childNodes[i].style.width=ancho+'px';
		this.parentNode.childNodes[i].style.height=alto+'px';
		this.parentNode.childNodes[i].style.zIndex=1;
	}
	for(i=0;i<i2;i++,j++){
		if(this.parentNode.childNodes[i]==anterior||this.parentNode.childNodes[i]==siguiente)continue;
		this.parentNode.childNodes[i].style.top=arriba+(alto+vertical)+'px';
		this.parentNode.childNodes[i].style.left=izquierda+j*(ancho+horizontal)+'px';
		this.parentNode.childNodes[i].style.width=ancho+'px';
		this.parentNode.childNodes[i].style.height=alto+'px';
		this.parentNode.childNodes[i].style.zIndex=1;
	}
	this.style.zIndex=99;
	var ancho=resolucion[0]-100;
	var alto=(resolucion[1]-202)-100;
	var ancho2=50;
	var alto2=((resolucion[1]-202)/3-vertical)*2;
	this.style.top=arriba-vertical/2+(resolucion[1]-202)/2-alto/2+'px';
	this.style.left=izquierda-horizontal/2+resolucion[0]/2-ancho/2+'px';
	this.style.width=ancho+'px';
	this.style.height=alto+'px';
	anterior.style.top=siguiente.style.top=arriba-vertical/2+(resolucion[1]-202)/2-alto2/2+'px';
	anterior.style.width=siguiente.style.width=ancho2+'px';
	anterior.style.height=siguiente.style.height=alto2+'px';
	anterior.style.zIndex=siguiente.style.zIndex=98;
	anterior.style.left=izquierda-horizontal/2+resolucion[0]/2-ancho/2-ancho2+'px';
	siguiente.style.left=izquierda-horizontal/2+resolucion[0]/2+ancho/2+'px';
};
var transforms=['-moz-transform','-o-transform','-ms-transform','transform'];
for(var i in reinas){
	var img=document.createElement('img');
	img.src=reinas[i][1];
	var a=document.createElement('a');
	a.innerHTML=reinas[i][0];
	a.href='javascript:void(0)';
	a.onclick=votar;
	reinas[i]=document.createElement('a');
	reinas[i].href='javascript:void(0)';
	reinas[i].style.backgroundColor='#F00';
	reinas[i].className='f';
	reinas[i].appendChild(img);
	reinas[i].appendChild(a);
	document.getElementById('carousel').appendChild(reinas[i]);
	reinas[i].innerHTML=i;
	reinas[i].onclick=ampliar;
}
var reducir=function(){
	var ancho=(resolucion[0])/3-horizontal;
	var alto=(resolucion[1]-header-footer)/3-vertical;
	for(var i in reinas) {
		var posicion=[parseInt(i/3),i%3];
		reinas[i].style.width = ancho + 'px';
		reinas[i].style.height = alto + 'px';
		reinas[i].style.top = arriba + posicion[0] * (alto+vertical) + 'px';
		reinas[i].style.left = izquierda + posicion[1] * (ancho+horizontal) + 'px';
	}
};
reducir();