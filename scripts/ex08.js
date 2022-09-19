let nome = prompt("Qual o seu nome?")
const saudacao = () => {
    
    let h = new Date().getHours();
    switch (true) {
      case h <= 5: return 'Boa madrugada';
      case h < 12: return 'Bom dia';
      case h < 18: return 'Boa tarde';
      default: return 'Boa noite';
    }      
  }
  
  console.log(saudacao() + ', ' +nome+'!')
  document.write('<h1>'+saudacao() + ', ' +nome+'!</h1>');