function calcularVolume() {
    // Obter os valores de raio e altura
    const raio = parseFloat(document.getElementById("raio").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const resultadoDiv = document.getElementById("resultado");

    // Validar se os valores são válidos
    if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = '<p class="error">Por favor, insira valores válidos para o raio e a altura.</p>';
        return;
    }

    // Calcular o volume
    const volume = 3.14159 * Math.pow(raio, 2) * altura;

    // Exibir o resultado
    resultadoDiv.innerHTML = `O volume da lata de óleo é: <strong>${volume.toFixed(2)} cm³</strong>`;
}
