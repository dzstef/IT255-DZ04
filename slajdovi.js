/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Metoda koja uzima unos korisnika, trazi tu rec u odredjenom tekstu i boji je u crveno
 * Metoda takodje menja izgled teksta
 * @returns {undefined}
 */
function pretragaReci(){
   var text = document.getElementById("tekstZaglavlje").textContent;
   var rec = document.getElementById("recPtr").value;   
   var razdvojeno = text.split(/[ ,]+/);
   var duzina = razdvojeno.length;
   var i;    
   document.getElementById("tekstZaglavlje").textContent="";
   for(i=0;i<duzina;i++){       
       if(razdvojeno[i]==rec){
       document.getElementById("tekstZaglavlje").innerHTML+= '<font color=\"red\">' + razdvojeno[i] + " " + '</font>';             
       }
       else{
       document.getElementById("tekstZaglavlje").innerHTML+=razdvojeno[i] + " ";
       }
       document.getElementById("tekstZaglavlje").style.fontSize = "3";
       document.getElementById("tekstZaglavlje").style.fontFamily = "Impact,Charcoal,sans-serif"
    }
}

var slika1=new Image();
slika1.src="slike/slajd1.jpg";
var slika2=new Image();
slika2.src="slike/slajd2.jpg";
var slika3=new Image();
slika3.src="slike/slajd3.jpg";
var slika4=new Image();
slika4.src="slike/slajd4.jpg";

