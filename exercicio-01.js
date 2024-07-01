var peso = parseFloat(prompt("Qual é o seu peso em kg?"))
var altura = parseFloat(prompt("Qual é a sua altura?"))

var imc = peso / (altura ^ 2)

alert("Seu IMC é: " + imc.toFixed(2))

if (imc < 18.5){
    alert("O seu IMC indica magreza!")
} else if (imc >= 18.5 && imc <= 24.9) {
    alert("O seu IMC indica normalizade!");
} else if (imc >= 25 && imc <= 29.9) {
    alert("O seu IMC indica sobrepeso");
} else if (imc >= 30 && imc <= 39.9) {
    alert("O seu IMC indica obesidade!Cuidado!");
} else (imc >= 40.0){
    alert("O seu IMC indica obesidade grave!!!");
}