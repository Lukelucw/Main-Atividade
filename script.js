function calcularMedia() {
    // Variaveis para ce receber o valor das notas
    let nome = document.getElementById('nome').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    // variavel para vc calcular a méda
    let media = (nota1 + nota2 + nota3) / 3;

    // Aqui é onde vc recebe o resultado 
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p><strong>Nome do Aluno:</strong> ${nome}</p>
                              <p><strong>Média das Notas:</strong> ${media.toFixed(2)}</p>`;
    resultadoDiv.style.display = 'block'; // Exibir o resultado

    // Fiz esse para estilizar a mensagem que aparecer
    resultadoDiv.classList.add('resultado-aparece');
}