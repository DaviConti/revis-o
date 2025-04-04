alert('ola mundo')

function somador() {
   let total = 0;
   while (true) {
       let num = prompt("Digite um número para somar (ou 'sair' para finalizar):");
       if (num.toLowerCase() === 'sair') {
           break;
       }
       let numero = parseFloat(num);
       if (!isNaN(numero)) {
           total += numero;
       } else {
           alert("Por favor, digite um número válido.");
       }
   }
   alert("Soma total: " + total);
}

somador();
h
