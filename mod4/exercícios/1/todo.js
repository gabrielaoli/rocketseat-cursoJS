function checaIdade(idade) {
    return new Promise(function(resolve, rejeita) {
      setTimeout(function() {
        return idade >= 18 ? resolve() : rejeita();
      }, 2000);
    });
  }