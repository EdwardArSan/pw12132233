var numero
var cantidad
var datos = [];

async function apirandomuser(){
    numero = 0;
    cantidad = document.getElementById("cantidad").value;
    const respuesta = await fetch("https://randomuser.me/api?results="+cantidad);
    datos = await respuesta.json();
    muestra();
    console.log(datos);
}

function anterior(){
  numero --;
  if (numero<0){
    numero=0;

  }
  muestra();    
}

function siguiente(){
  numero ++;
  if (numero=cantidad){
      numero=0;
  }
    muestra();
}

function muestra(){
  console.log("arreglo posicion"+numero);
  let foto = document.getElementById("foto");
  let nombre =document.getElementById("nombre");
  let telefono =document.getElementById("telefono");
  foto.setAttribute("src",datos.results[numero].picture.large);
  nombre.innerHTML=datos.results[numero].name.first+" "+datos.results[numero].name.last;
  nombre.style.color= "red";
  telefono.innerHTML= datos.results[numero].phone;
}