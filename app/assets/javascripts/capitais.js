var estados = ['do Rio Grande do Sul', 'de Santa Catarina', 'do Paraná', 'do São Paulo', 'do Rio de Janeiro', 'do Espírito Santo', 'de Minas Gerais', 'de Goias', 'do Mato Grosso', 'do Mato Grosso do Sul', 'de Rondônia', 'do Acre', 'de Amazonas', 'do Pará', 'de Roraima', 'de Amapá', 'de Tocantins', 'do Piauí', 'do Maranhão', 'do Ceará', 'do Rio Grande do Norte', 'da Paraiba', 'de Alagoas', 'de Pernambuco', 'de Sergipe', 'da Bahia']
var capitais = ['Porto Alegre', 'Florianópolis', 'Curitiba', 'São Paulo', 'Rio de Janeiro', 'Vitória', 'Belo Horizonte', 'Goiânia', 'Cuiabá', 'Campo Grande', 'Porto Velho', 'Rio Branco', 'Manaus', 'Belém', 'Boa vista', 'Macapá', 'Palmas', 'Teresina', 'São Luis', 'Fortaleza', 'Natal', 'João Pessoa', 'Maceió', 'Recife', 'Aracaju', 'Salvador' ];
var resposta = ''
var resjugador = ''
var randest = ''
var opciones = []
var bem = 0
var mal = 0
var jugados = []
var crono = 5;
var time;
var anli = "";
function reiniciar() {
resposta = ''
resjugador = ''
randest = ''
opciones = []
bem = 0
mal = 0
jugados = []
crono = 0
}
function animar() {
stoptimer();	
for (var i = 0; i < 4; i++){
anli = $("li:eq("+i+")").html();
if (anli == resposta) {	
$("li:eq("+i+")").animate({
"font-size": "150%"	
}, 400, function(){
for (var o = 0; o < 4; o++){
anlo = $("li:eq("+o+")").html();
if (anlo == resposta) {		
$("li:eq("+o+")").animate({
"font-size": "100%"	
}, 400, function(){
if ((bem + mal) > 0 && (bem + mal) < 26){ //probando
gpregunta();
generar()
generar2();
crono = 5
mostrar()}
else if ((bem + mal) == 26)	{ //probando
var acertou = (bem*100)/26;
acertou = Math.round(acertou);

$("#qual, #ul").css("visibility", "hidden");
$("#boton").attr("value", "Jogar de novo");
alert("você acertou " + acertou + "%")
reiniciar();
$("#boton").fadeIn(1000)
}
});//fin del segundo animate
}}
});//fin del primer animate
}}}	
//funciones del cronometro--------------
function quitar(){
time = setTimeout(function(){
$("#crono").hide();
crono -=1;
if (crono == 0){
analizar();
$("#crono").html(crono);
$("#crono").show();	
}
else{
mostrar();
}
}, 1000);
}
function mostrar(){
if (crono > 0){
$("#crono").html(crono);
$("#crono").show();
quitar();
}
}
function stoptimer(){
clearTimeout(time);	
}
//-----------------------------
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
$("#acertosp").html(bem)
$("#errosp").html(mal)
$("#qual, #acertos, #erros").css("visibility", "visible");
if ((bem + mal) == 0 ){
$("#boton").slideUp(600, function(){
$("#acertos, #erros, #qual").show();
$("ul").hide();
$("ul").css("visibility","visible");
crono = 5	
$("#crono").html(crono);
$("ul").slideDown(1000, function(){
crono = 5	
mostrar();
});
});
gpregunta();
generar();
generar2();
}
else {
animar();
}} // fin de jugar
function analizar(elemento) {
function creares() {	
if (crono == 0) {resjugador = "mal"}
else {	
resjugador = elemento.innerHTML;
}
}
creares();
//$("#crono").hide();
//crono = 5;
if (resjugador == resposta) {
bem += 1
}
else {
mal += 1
}
jugar();
}
$(document).ready(function(){
$("#boton, #mapa, footer, #acertos, #erros, #qual").hide();
if($("#Brasil").html() == "Brasil"){$("footer").show()};
$("#mapa").load(function(){
$("#boton, #mapa, footer").fadeIn(1500);
});
});
