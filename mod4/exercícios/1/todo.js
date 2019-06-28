function checaIdade(idade) {
    return new Promise(function(resolve, rejeita) {
      setTimeout(function() {
        return idade >= 18 ? resolve() : rejeita();
      }, 2000);
    });
  }

  checaIdade(20)
  .then(function() {
  console.log("Maior que 18");
  })
  .catch(function() {
  console.log("Menor que 18");
  });
 