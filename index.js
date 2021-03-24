var valorEmDolarTexto = prompt("Qual o valor em Dólar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto) 

//alert(valorEmDolarNumero)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)

//Revisão
//Variáveis var int - float - string 
//alert - parseInt - parseFloat -prompt
// operações + somar * multiplicar 
//comentário final