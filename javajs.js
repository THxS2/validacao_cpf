function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i-1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i-1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;
    return true;
}

document.getElementById('cpfForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cpf = document.getElementById('cpf').value;
    const resultado = document.getElementById('resultado');
    if (validarCPF(cpf)) {
        resultado.textContent = 'CPF válido!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'CPF inválido!';
        resultado.style.color = 'red';
    }
});