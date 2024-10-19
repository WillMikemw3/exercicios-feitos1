// Exercício 1: Olá Mundo
function olamundo() {
      console.log("Olá Mundo");
  }
  olamundo();
  
  // Exercício 2: Soma e Resultado
  let resultado = 4 + 3 + 5 * 3000;
  if (resultado >= 3000) {
      console.log("Resultado é maior ou igual a 3000.");
  }
  
  // Exercício 3: Chamar Nome
  function chamarNome(nome) {
      console.log(`Olá ${nome}`);
  }
  chamarNome(nome = resultado);
  
  // Exercício 4: Número Dobro
  function numeroDobro(numero) {
      return numero * 2;
  }
  let resultadoDobro = numeroDobro(3);
  console.log(resultadoDobro);
  
  // Exercício 5: Média de Números
  function mediaNumeros(n1, n2, n3) {
      let media = n1 + n2 + n3;
      return media / 3;
  }
  let resultadoDaMedia = mediaNumeros(44, 4, 5);
  console.log(resultadoDaMedia);
  
  // Exercício 6: Maior Número
  function maiorNumero(n1, n2) {
      return n1 > n2 ? n1 : n2; // Se n1 for maior, retorna n1, senão retorna n2
  }
  let resultadoMaiorNumero = maiorNumero(334, 6345);
  console.log(resultadoMaiorNumero);
  
  // Exercício 7: Multiplicação
  function multiplicacao(n1) {
      return n1 * 2;
  }
  let resultadoDaMultiplicacao = multiplicacao(2);
  console.log(resultadoDaMultiplicacao);
  
  // Exercício 8: Calcular Média e Aprovação
  function calcularMedia(nota1, nota2, nota3, nota4) {
      let media = (nota1 + nota2 + nota3 + nota4) / 4; // Média das notas
      if (media < 5) {
          console.log("Reprovado");
      } else {
          console.log("Aprovado");
      }
  }
  let resultadoDaMedia = calcularMedia(7, 6, 3, 5);
  
  // Exercício 9: Cálculo do IMC
  function massaCorporal(peso, altura) {
      let alturaMetros = altura / 100; // Converte altura para metros
      return peso / (alturaMetros * alturaMetros);
  }
  let resultadoDaMassaCorporal = massaCorporal(75, 175);
  console.log(resultadoDaMassaCorporal);
  
  // Exercício 10: Fatorial
  function fatorial(n) {
      if (n < 0) {
          return 0;
      } else if (n === 0) {
          return 1;
      } else {
          return n * fatorial(n - 1);
      }
  }
  let resultadoFatorial = fatorial(5);
  console.log(resultadoFatorial);
  
  // Exercício 11: Conversão de Dólar para Real
  function calculoDolar(valorDolar) {
      let cotacaoDolar = 1 * 5.69; // Cotação do Dólar
      return valorDolar * cotacaoDolar;
  }
  let resultadoReal = calculoDolar(250);
  console.log(resultadoReal);
  
  // Exercício 12: Perímetro de Sala Retangular
  function perimetroCalculo(largura, altura) {
      return 2 * (largura + altura); // P = 2(b + h)
  }
  let ResultadoCalculoPerimetro = perimetroCalculo(33, 40);
  console.log(ResultadoCalculoPerimetro);
  
  // Exercício 13: Perímetro de Sala Circular
  function calcularPerimetroCircular(r) {
      let pi = 3.14;
      return 2 * r * pi; // C = 2πr
  }
  let resultadoDiametroCircular = calcularPerimetroCircular(33);
  console.log(resultadoDiametroCircular);
  
  // Exercício 14: Tabuada
  function tabela(numeroAMultiplicar) {
      for (let i = 1; i <= 10; i++) {
          console.log(`${numeroAMultiplicar} x ${i} = ${numeroAMultiplicar * i}`);
      }
  }
  tabela(4);
  