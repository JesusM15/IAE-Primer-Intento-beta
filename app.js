addEventListener('DOMContentLoaded', () => {
	const productosSlide = ['img/pNieve1.jpg', 'img/pNieve2.jpg',
	'img/pNieve3.jpg', 'img/pNieve4.jpg', 'img/pNieve5.jpg',
	'img/pNieve6.jpg']

	let i = 1;
	const img1 = document.querySelector('#img-slide1');
	const img2 = document.querySelector('#img-slide2');
	const progressBar = document.querySelector('#progress-bar');
	const divIndicadores = document.querySelector('#indicadores');
	
	//manejar el que tanto avance la barra superior
	//                  ancho completo . imagenes que tengamos
	let porcentaje_base = 100/productosSlide.length;
	// Ir acumulando el porcentaje de la base hasta llegar al 100% y regresar
	// a su posicion inicial
	let porcentaje_actual = porcentaje_base;

	for (let index=0; index<productosSlide.length; index++){
		//añadir y crear el div y nombrarlo como circles
		const div = document.createElement('div');
		div.classList.add('circles');
		div.id = index; //para que este por delante
		divIndicadores.appendChild(div);
	}

	progressBar.style.width = `${porcentaje_base}%`;
	img1.src = productosSlide[0];
	// all porque son varios los que tienen esa clase
	const circulos =  document.querySelectorAll('.circles');
	circulos[0].classList.add('resaltado');

	const slideshow = () =>{
		img2.src = productosSlide[i];
		//  array.from para buscar dentro de la lista       // que sea igual a i
		const circuloActual = Array.from(circulos).find(el => el.id == i);
		Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'));
		circuloActual.classList.add('resaltado');

		img2.classList.add('active');
		i++;
		porcentaje_actual += porcentaje_base;
		progressBar.style.width = `${porcentaje_actual}%`;

		if (i == productosSlide.length){
			i = 0;
			porcentaje_actual = porcentaje_base - porcentaje_base;
		}
	

	    setTimeout(() =>{
	    	img1.src = img2.src
	    	img2.classList.remove('active')
	    }, 1000)
	}

	//4000 tiempo a ejecutar
	setInterval(slideshow, 4000);

})

let agregar1s =0;
let agregar2s = 0;
let agregar3s = 0;
let agregar4s = 0;
let agregar5s = 0;
let agregar6s = 0;
let agregar7s = 0;
let agregar8s = 0;

function agregar1() {
	agregar1s += 30;
	return 
}
function agregar2() {
	agregar2s += 100;
	return
}
function agregar3() {
	agregar3s += 50;
	return 
}
function agregar4() {
	agregar4s += 45;
	return 
}
function agregar5() {
	agregar5s += 70;
	return 
}
function agregar6() {
	agregar6s += 20;
	return 
}
function agregar7() {
	agregar7s += 50;
	return 
}
function agregar8() {
	agregar8s += 80;
	return 
}

let PrecioTotal

function carrito(agregar1, agregar2,agregar3, agregar4, agregar5, agregar6, agregar8, agregar7){
	PrecioTotal = agregar1s+agregar2s+agregar3s+agregar4s+agregar5s+agregar6s+agregar7s+agregar8s;
	Resultado = document.getElementById('resultado');
	Resultado.innerText = "El precio a pagar es:  " + "$" + PrecioTotal;    
	PrecioTotal=0;
    agregar1s =0;
    agregar2s = 0;
    agregar3s = 0;
    agregar4s = 0;
    agregar5s = 0;
    agregar6s = 0;
    agregar7s = 0;
    agregar8s = 0;
}

function compra1(){
	swal("Seguro que desea continuar?","Atencion este producto vale 30$ espero lo tome en cuenta", "info",{

		buttons: ["No", "Ok"]
	})
}
function compra2(){
	swal("Seguro que desea continuar?","Atencion este producto vale 100$ espero lo tome en cuenta", "info",{

		buttons: ["No", "Ok"]
	})
}
function compra3(){
	swal("Seguro que desea continuar?","Atencion este producto vale 50$ espero lo tome en cuenta", "info",{

		buttons: ["No", "Ok"]
	})
}
function compra4(){
	swal("Seguro que desea continuar?","Atencion este producto vale 45$ espero lo tome en cuenta", "info",{

		buttons: ["No", "Ok"]
	})
}
function compra5(){
	swal("Seguro que desea continuar?","Atencion este producto vale 70$ espero lo tome en cuenta", "info",{

		buttons: ["No", "Ok"]
	})
}
function compra6(){
	swal("Seguro que desea continuar?","Atencion este producto vale 20$ espero lo tome en cuenta", "info",{

		buttons: ["No", "Ok"]
	})
}
function compra7(){
	swal("Seguro que desea continuar?","Atencion este producto vale 50$ espero lo tome en cuenta", "info",{

		buttons: ["No", "Ok"]
	})
}
function compra8(){
	swal("Seguro que desea continuar?","Atencion este producto vale 80$ espero lo tome en cuenta", "info",{

		buttons: ["No", "Ok"]
	})
}