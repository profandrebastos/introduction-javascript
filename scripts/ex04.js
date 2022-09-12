function Enviar() {
    var Fname = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var Idade = document.getElementById("Idade").value;
    var Sexo = document.getElementById("Sexo").value;
    var Bairro = document.getElementById("Bairro").value;
    document.write('Nome Completo: ' + Fname + ' '  + Lname +'<br>');
    document.write('Idade: ' + Idade + '<br>');
    document.write('Sexo: ' + Sexo + '<br>');
    document.write('Bairro: ' + Bairro + '<br>');

}