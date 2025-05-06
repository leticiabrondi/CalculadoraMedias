document.getElementById('mediaForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    const n4 = parseFloat(document.getElementById('nota4').value);
  
    if ([n1, n2, n3, n4].some(n => isNaN(n) || n < 0 || n > 10)) {
      document.getElementById('resultado').textContent = "Insira notas válidas de 0 a 10.";
      return;
    }
  
    const media = (n1 + n2 + n3 + n4) / 4;
    document.getElementById('resultado').textContent = `Média: ${media.toFixed(2)}`;
  });
  