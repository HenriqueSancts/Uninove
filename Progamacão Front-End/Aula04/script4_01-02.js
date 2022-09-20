let a,b;
a=prompt("Digite um número");
a=parseInt(a);
b=parseInt(prompt("Digite outro número"));
document.write (`soma: ${(a+b)} <br>`);
document.write ("subtração: "+ (a-b) +"<br>" );
document.write (`A multiplicação de ${a} por ${b} vale ${(a*b)}<br>`);
document.write (`a divisão de ${a} por ${b} vale ${a/b} <br>`)
document.write (`o resto de divisão de ${a} por ${b} é ${a%b} <br>`)
document.write (`o potencia de ${a} e ${b} é ${a**b} <br>`)
