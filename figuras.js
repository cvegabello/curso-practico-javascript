// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  document.getElementById("resCuadrado").innerHTML = "PERIMETRO: " + perimetro;
  // alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  document.getElementById("resCuadrado").innerHTML = "AREA: " + area;
  // alert(area);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  document.getElementById("resCirculo").innerHTML = "PERIMETRO: " + perimetro;
  // alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  document.getElementById("resCirculo").innerHTML = "AREA: " + area;
  // alert(area);
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputLado1Triangulo");
  const lado1 = parseInt(input1.value);

  const input2 = document.getElementById("InputLado2Triangulo");
  const lado2 = parseInt(input2.value);

  const input3 = document.getElementById("InputBaseTriangulo");
  const base = parseInt(input3.value);
    
  const perimetro = perimetroTriangulo(lado1, lado2, base);

  document.getElementById("resTriangulo").innerHTML = "PERIMETRO: " + perimetro;

  // alert(perimetro);
}

function calcularAreaTriangulo() {
  
  const input1 = document.getElementById("InputBaseTriangulo");
  const base = parseInt(input1.value);
  
  const input2 = document.getElementById("InputAlturaTriangulo");
  const altura = parseInt(input2.value);

  const area = areaTriangulo(base, altura)
  document.getElementById("resTriangulo").innerHTML = "AREA: " + area;
  // alert(area);
}


