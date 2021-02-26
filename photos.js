"use strict";
const stop = document.querySelector(".content-caja");
const flecha = document.querySelector(".figura");
const flecha1 = document.querySelector(".figura1");
const img = document.getElementsByTagName("IMG");
// console.log(img);
let i=0;
flecha.addEventListener("click",(e)=>{
	i+=30;
	stop.setAttribute("style",`margin-right: ${i}%; transition: all 3s;`);
	
});
flecha.addEventListener("click",(e)=>{
	stop.setAttribute("style",`margin-right: ${i}%; transition: all 3s;`);
});

let j=0;
flecha1.addEventListener("click",(e)=>{
	j-=30;
		stop.setAttribute("style",`margin-left: ${j}%; transition: all 3s;`);
	
});
flecha1.addEventListener("click",(e)=>{
	stop.setAttribute("style",`margin-left: ${j}%; transition: all 3s;`);
	
});
document.querySelector(".content-caja")
	.addEventListener("click",(e)=>{
		e.target.setAttribute("style","filter: brightness(1.3);");
});



