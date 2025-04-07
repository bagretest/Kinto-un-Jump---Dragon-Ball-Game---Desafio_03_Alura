function jogar() {
  // Escolha de dificuldade
  dificuldade = prompt("Escolha entre as dificuldades: Fácil, Médio ou Dificil")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Nível fácil = 3 pisos
  if (dificuldade == "facil") {
    rodada = 1;
    let acertos = 0;
    let venceu = false;
    while (rodada <= 3) {
      console.log("Rodada:" + rodada);

      let escolhaJogador;
      do {
        escolhaJogador = prompt(
          "Nível " + rodada + " - Escolha uma nuvem (1, 2, 3, 4 ou 5)."
        );
        pisoQuebrado = Math.floor(Math.random() * 5) + 1;

        if (escolhaJogador < 1 || escolhaJogador > 5) {
          alert("Escolha inválida! Por favor, escolha uma nuvem entre 1 e 5");
        }
      } while (escolhaJogador < 1 || escolhaJogador > 5);

      if (escolhaJogador == pisoQuebrado) {
        alert(
          "Você caiu! 😵 Treine mais para dominar a Nuvem Voadora! ☁️💨 Você teve " +
            acertos +
            " acertos."
        );
        rodada = 1000;
      } else {
        alert(
          "Sentiu o Ki aumentar? 🔥 Continue pulando! ⛅ A nuvem que caiu estava no: " +
            pisoQuebrado
        );
        acertos++;
      }
      rodada = rodada + 1;
    }
    if (rodada == 4) {
      venceu = true;
    }
    if (venceu) {
      alert("Incrível! Você dominou a Nuvem Voadora! ☁️⚡");
    }
  }

  // Nível médio = 5 pisos
  if (dificuldade == "medio") {
    rodada = 1;
    let acertos = 0;
    let venceu = false;
    while (rodada <= 5) {
      console.log("Rodada: " + rodada);

      let escolhaJogador;
      do {
        escolhaJogador = prompt(
          "Nível " + rodada + " - Escolha uma nuvem (1, 2, 3 ou 4)."
        );
        pisoQuebrado = Math.floor(Math.random() * 4) + 1;

        if (escolhaJogador < 1 || escolhaJogador > 4) {
          alert("Escolha inválida! Por favor, escolha uma nuvem entre 1 e 4");
        }
      } while (escolhaJogador < 1 || escolhaJogador > 4);

      if (escolhaJogador == pisoQuebrado) {
        alert(
          "Você caiu! 😵 Treine mais para dominar a Nuvem Voadora! ☁️💨 Você teve " +
            acertos +
            " acertos."
        );
        rodada = 1000;
      } else {
        alert(
          "Sentiu o Ki aumentar? 🔥 Continue pulando! ⛅ A nuvem que caiu estava no: " +
            pisoQuebrado
        );
        acertos++;
      }
      rodada = rodada + 1;
    }
    if (rodada == 6) {
      venceu = true;
    }
    if (venceu) {
      alert("Incrível! Você dominou a Nuvem Voadora! ☁️⚡");
    }
  }

  // Nível dificil = 10 pisos
  if (dificuldade == "dificil") {
    rodada = 1;
    let acertos = 0;
    let venceu = false;
    while (rodada <= 10) {
      console.log("Rodada:" + rodada);

      let escolhaJogador;
      do {
        escolhaJogador = prompt(
          "Nível " + rodada + " - Escolha uma nuvem (1, 2 ou 3)."
        );
        pisoQuebrado = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador < 1 || escolhaJogador > 3) {
          alert("Escolha inválida! Por favor, escolha uma nuvem entre 1 e 3");
        }
      } while (escolhaJogador < 1 || escolhaJogador > 3);

      if (escolhaJogador == pisoQuebrado) {
        alert(
          "Você caiu! 😵 Treine mais para dominar a Nuvem Voadora! ☁️💨 Você teve " +
            acertos +
            " acertos."
        );
        rodada = 1000;
      } else {
        alert(
          "Sentiu o Ki aumentar? 🔥 Continue pulando! ⛅ A nuvem que caiu estava no: " +
            pisoQuebrado
        );
        acertos++;
      }
      rodada = rodada + 1;
    }
    if (rodada == 11) {
      venceu = true;
    }
    if (venceu) {
      alert("Incrível! Você dominou a Nuvem Voadora! ☁️⚡");
    }
  }
}
