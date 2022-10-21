try {
    const qtdBalas = parseInt(prompt("Quantas balas você comprou?"));
    const qtdCriancas = parseInt(prompt("Por quantas crianças deve dividir?"));
    if (qtdCriancas === 0) 
        throw new Error("ZERO crianças");
    else if (qtdCriancas < 0)
        throw new Error("Crianças negativas");
    
    const balaCrianca = qtdBalas / qtdCriancas;
    console.log(`Serão ${balaCrianca} balas por criança`);
} catch (error) {
    console.log("[ERRO] Não foi possível realizar a divisão");
    console.log(error.message);
}
console.log("Esse código será executado normalmente, mesmo com erros");
