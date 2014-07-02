/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$("#document").ready()
$("body").html("Du bist dran!");
);
$(document).ready(function(){
    $("body").html("<div class=' ueberschrift'>Mein Spiel</div>");
    $("body").append("Gleich gehts los");
    $("body").append("<br> Mein BMI-Rechner:<br>Größe(in m!):<input id='groesse' type='text'/>");
    $("body").append("<br>Gewicht(in kg!):<input id='gewicht' type='text'/>");
    $("body").append("<br> <input id='button' type='button' value='Berechnen'");
    $("body").append("<div id='ausgabe' />");
    
    $("#button").click(function(){
        var groesse=parseFloat($("#groesse").val(),10);
        var gewicht=parseFloat($("#gewicht").val(),10);
        
        var BMI=gewicht/(groesse*groesse);
        
        $("#ausgabe").html("Dein BMI ist:"+BMI)
        
       });
    
    });    
   
// höhö alle leute sind fett ]:)  bmi formel: gewicht (in kg)/ grösse^2
// bei kommazahlen einen punkt anstatt einem komma nehmen!
