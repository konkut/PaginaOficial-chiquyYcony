"use strict";
const modal = document.getElementById("modal");
const modal1 = document.getElementById("modalVideo");
const modal2 = document.getElementById("modalAudio");

const etiqueta = document.querySelector(".change");
const etiqueta1 = document.querySelector(".change1");
const etiqueta2 = document.querySelector(".change2");


etiqueta.setAttribute("hidden","true");
modal.addEventListener("click",(e)=>{
	comprobar(etiqueta,"change");
});

etiqueta1.setAttribute("hidden","true");
modal1.addEventListener("click",(e)=>{
	comprobar(etiqueta1,"change1");
});

etiqueta2.setAttribute("hidden","true");
modal2.addEventListener("click",(e)=>{
	comprobar(etiqueta2,"change2");
});

const comprobar =(NumEti,clase)=>{
	const verificar =  NumEti.classList.contains(clase);
	if(verificar){
		NumEti.removeAttribute("hidden");
	}else{
		NumEti.setAttribute("hidden","true");
	}
	NumEti.classList.toggle(clase);
}

etiqueta.style.padding ="10px";
etiqueta.setAttribute("style","background: linear-gradient(to bottom,transparent, #f26)");
etiqueta.style.width ="fit-content";
etiqueta.style.marginLeft = "30vw";



