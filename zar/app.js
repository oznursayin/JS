function hadi_zar_at(){
 

var RondomOne= Math.ceil(Math.random() * 6);
var RandomSecond=Math.ceil(Math.random() * 6);
console.log(RandomSecond);

document.getElementById("birinci_zar").src="img/"+ RondomOne+ ".svg";
document.getElementById("ikinci_zar").src="img/"+ RandomSecond + ".svg";

}

function birsurebekle(){
    setTimeout(hadi_zar_at,2000)
    document.getElementById("birinci_zar").src="img/1.gif";
    document.getElementById("ikinci_zar").src="img/2.gif";
}
