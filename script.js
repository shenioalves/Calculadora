let aux = "";
function calcular(tipo, valor) {
  

  // entra valor
  if (tipo === 'number') {
      aux += valor;
      document.getElementById('resultado').value += valor;
  }

  // entra operação
  else if (tipo === 'opera') {
      // clear
      if (valor === 'c') {
          aux = "";
          document.getElementById('resultado').value = "";
      }
      // operações básicas
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
          aux += valor;
          document.getElementById('resultado').value = ""

      }
      // resultado
      if (valor === '=') {
          let valor_tela = eval(aux)
          document.getElementById('resultado').value = valor_tela;
      }
  }
}
