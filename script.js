alert('ola mundo')

/* primeiro
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
*/

/* segundo
function contagemRegressiva() {
   let contador = 10;
   const intervalo = setInterval(() => {
       if (contador === 0) {
           console.log("Lançamento!");
           clearInterval(intervalo);
       } else {
           console.log(contador);
           contador--;
       }
   }, 1000);
}

contagemRegressiva();
*/

/* terceiro
function balancoFinanceiro() {
   let totalGanhos = 0;
   let totalGastos = 0;
   
   for (let i = 1; i <= 12; i++) {
       let ganho = parseFloat(prompt(`Digite o ganho bruto do mês ${i}:`));
       let gasto = parseFloat(prompt(`Digite o gasto do mês ${i}:`));
       
       if (!isNaN(ganho)) totalGanhos += ganho;
       if (!isNaN(gasto)) totalGastos += gasto;
   }
   
   let saldoFinal = totalGanhos - totalGastos;
   
   console.log("Total de ganhos: R$" + totalGanhos.toFixed(2));
   console.log("Total de gastos: R$" + totalGastos.toFixed(2));
   console.log("Saldo final: R$" + saldoFinal.toFixed(2));
   
   if (saldoFinal > 0) {
       console.log("A empresa teve LUCRO este ano!");
   } else if (saldoFinal < 0) {
       console.log("A empresa teve PREJUÍZO este ano!");
   } else {
       console.log("A empresa ficou no ZERO a ZERO este ano.");
   }
}

balancoFinanceiro();
*/