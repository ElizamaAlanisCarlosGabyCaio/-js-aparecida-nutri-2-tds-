var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAlura = paciente.querySelector(".info-altura");
var altura = tdAlura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura); 

tdImc.textContent = imc;


console.log(imc);