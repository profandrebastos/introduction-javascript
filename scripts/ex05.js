function Ok() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    alert("Números informados: "+ a +', ' + b+ ', '+ c);
    if (a>b && a>c) {
        if(b>c) {
            document.write('Crescente: ' +c +' ' +b +' ' +a +'<br>');
            document.write('Decrescente: ' +a +' ' +b +' ' +c);
        }else {
            document.write('Crescente: ' +b +' ' +c +' ' +a +'<br>');
            document.write('Decrescente: ' +a +' ' +c +' ' +b);
        }
    }
       
    if (b>a && b>c) {
        if(a>c) {
            document.write('Crescente: ' +c +' ' +a +' ' +b +'<br>');
            document.write('Decrescente: ' +b +' ' +a +' ' +c);
        }else {
            document.write('Crescente: ' +a +' ' +c +' ' +b +'<br>');
            document.write('Decrescente: ' +b +' ' +c +' ' +a);
        }
    }
    if (c>a && c>b){ 
        if(a>b) {
            document.write('Crescente: ' +c +' ' +a +' ' +b +'<br>');
            document.write('Decrescente: ' +b +' ' +a +' ' +c);
    }else {
        document.write('Crescente: ' +a +' ' +b +' ' +c +'<br>');
        document.write('Decrescente: ' +c +' ' +b +' ' +a);
        }
    }
}