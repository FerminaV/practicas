let dia1 = document.getElementById("dia1");
let dia2 = document.getElementById("dia2");
let dia3 = document.getElementById("dia3");
let dia4 = document.getElementById("dia4");
let dia5 = document.getElementById("dia5");
let dia6 = document.getElementById("dia6");
let dia7 = document.getElementById("dia7");

function mifuncion(nomeBoton) {
  switch (nomeBoton) {
    case "luns":
      dia1.style.display = "block";
      dia7.style.display = "none";
      break;
    case "martes":
      dia2.style.display = "block";
      dia1.style.display = "none";
      break;
    case "mercores":
      dia3.style.display = "block";
      dia2.style.display = "none";
      break;
    case "xoves":
      dia4.style.display = "block";
      dia3.style.display = "none";
      break;
    case "venres":
      dia5.style.display = "block";
      dia4.style.display = "none";
      break;
    case "sabado":
      dia6.style.display = "block";
      dia5.style.display = "none";
      break;
    case "domingo":
      dia7.style.display = "block";
      dia6.style.display = "none";
      break;
  }
}
