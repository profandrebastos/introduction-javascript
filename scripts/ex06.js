a=prompt("Digite um valor para ser o multiplicador:")
document.write('Multiplos de ' + a + ' no intervalo de 50 até 10 <br>');
for(i=50;i>=1;i--) {
    if(i*a<=50 && i*a>=10){
        document.write(i*a+"<br>")
    }
}