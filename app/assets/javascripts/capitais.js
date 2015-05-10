var estados = ['do Rio grande do sul', 'de Santa Catarina', 'do Paraná', 'do São Paulo', 'do Rio de janeiro', 'do Espírito Santo', 'de Minas gerais', 'de Goias', 'do Mato grosso', 'do Mato Grosso do sul', 'de Rondônia', 'do Acre', 'de Amazonas', 'do Pará', 'de Roraima', 'de Amapá', 'de Tocantins', 'do Piauí', 'do Maranhão', 'do Ceará', 'do Rio grande do norte', 'da Paraiba', 'de Alagoas', 'de Pernambuco', 'de Sergipe', 'da Bahia']
var capitais = ['Porto alegre', 'Florianópolis', 'Curitiba', 'São Paulo', 'Rio de janeiro', 'Vitória', 'Belo horizonte', 'Goiánia', 'Cuiabá', 'Campo grande', 'Porto velho', 'Rio branco', 'Manaus', 'Belém', 'Boa vista', 'Macapá', 'Palmas', 'Teresina', 'São Luis', 'Fortaleza', 'Natal', 'João Pessoa', 'Maceió', 'Recife', 'Aracaju', 'Salvador' ];
var resposta = ''
var resjugador = ''
var randest = ''
var opciones = []
var bem = 0
var mal = 0
var jugados = []
function gpregunta() {
var rne = Math.round(Math.random()*25);
randest = estados[rne];
resposta = capitais[rne];
for (randest = randest; jugados.indexOf(randest) > -1; rne = Math.round(Math.random()*25)) {
randest = estados[rne];
resposta = capitais[rne];
}
document.getElementById("pregunta").innerHTML=randest;
jugados.push(randest);
//alert(jugados);

}
function generar(){
var op1 = Math.round(Math.random()*25);
var op2 = Math.round(Math.random()*25);
for (op2 = op2 ; op1 == op2; op2 = (Math.round(Math.random()*25))) {
op2 = op2
}
var op3 = Math.round(Math.random()*25);
for (op3 = op3 ;( op3 == op2 || op3 == op1 ); op3 = (Math.round(Math.random()*25))) {
op3 = op3
}
var op4 = Math.round(Math.random()*25);
for (op4 = op4 ;( op4 == op3 || op4 == op2 || op4 == op1); op4 = (Math.round(Math.random()*25))) {
op4 = op4
}

opciones = []
opciones.push(capitais[op1], capitais[op2], capitais[op3], capitais[op4]);
}
function generar2() {
if ((opciones.indexOf(resposta)) < 0) {
var rno = Math.round(Math.random()*3);
opciones[rno] = resposta
}
document.getElementById("op1").innerHTML=opciones[0]
document.getElementById("op2").innerHTML=opciones[1]
document.getElementById("op3").innerHTML=opciones[2]
document.getElementById("op4").innerHTML=opciones[3]
}
function jugar(){
document.getElementById("acertosp").innerHTML=bem
document.getElementById("errosp").innerHTML=mal
if ((bem + mal) == 3){
var acertou = (bem*100)/26;
acertou = Math.round(acertou);
alert("você acertou " + acertou + "%")
$("#qual, #ul, #res, #ja").hide();
//$("#boton").attr("value", "Jogar de novo");
$("#boton").attr("value", "Jogar de novo");
$("#boton").fadeIn(1000);
document.getElementById("muito").innerHTML=" "
document.getElementById("resposta").innerHTML=" "
//document.getElementById("boton").value="Jogar de novo"
resposta = ''
resjugador = ''
randest = ''
opciones = []
bem = 0
mal = 0
jugados = []
 }
else if ((bem + mal) == 0 ){
$("#boton").slideUp(600, function(){
$("#acertos, #erros, #qual").show();
$("ul").hide();
$("ul").css("visibility","visible");
$("ul").slideDown(1000);
});
gpregunta();
generar();
generar2();
}
else {
gpregunta();
generar()
generar2();
}
} // fin de jugar
function analizar(elemento) {
resjugador = elemento.innerHTML;
if (resjugador == resposta) {
document.getElementById("muito").innerHTML="Muito Bem!!!"
bem += 1
}
else {
document.getElementById("muito").innerHTML="Muito Mal!!!"
mal += 1
}
$("#res, #ja").show();
document.getElementById("resposta").innerHTML=resposta;
jugar();
}
$(document).ready(function(){
$("#boton, #mapa, footer, #acertos, #erros, #qual, #res, #ja").hide();
$("#boton, #mapa, footer").fadeIn(1500)
});