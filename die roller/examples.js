const rolld20 = () => {
    const roll20Element = document.getElementById("d20result");
    const d20result = Number(roll20Element.textContent);
    roll20Element.textContent = Math.floor(Math.random() * 20 + 1);
  };
  
  const rolld100 = () => {
    const roll100Element = document.getElementById("d100result");
    const d100result = Number(roll100Element.textContent);
    roll100Element.textContent = Math.floor(Math.random() * 100 + 1);
  };

  const rolld12 = () => {
    const roll12Element = document.getElementById("d12result");
    const d12result = Number(roll12Element.textContent);
    roll12Element.textContent = Math.floor(Math.random() * 12 + 1);
  };

  const rolld10 = () => {
    const roll10Element = document.getElementById("d10result");
    const d10result = Number(roll10Element.textContent);
    roll10Element.textContent = Math.floor(Math.random() * 10 + 1);
  };

  const rolld8 = () => {
    const roll8Element = document.getElementById("d8result");
    const d8result = Number(roll8Element.textContent);
    roll8Element.textContent = Math.floor(Math.random() * 8 + 1);
  };

  const rolld6 = () => {
    const roll6Element = document.getElementById("d6result");
    const d6result = Number(roll6Element.textContent);
    roll6Element.textContent = Math.floor(Math.random() * 6 + 1);
  };

  const rolld4 = () => {
    const roll4Element = document.getElementById("d4result");
    const d4result = Number(roll4Element.textContent);
    roll4Element.textContent = Math.floor(Math.random() * 4 + 1);
  };

  const sneakattack = () => {
    const sneakAttackElement = document.getElementById("result3d6");
    const result3d6 = sneakAttackElement.textContent;
    let a = Math.floor(Math.random() * 6 + 1);
    let b = Math.floor(Math.random() * 6 + 1);
    let c = Math.floor(Math.random() * 6 + 1);
    sneakAttackElement.textContent = a + b + c;
  };

  // const cointoss = () => {
  //   const cointossElement = document.getElementById("d2result");
  //   const d2result = Number(cointossElement.textContent);
  //   cointossElement.textContent = Math.floor(Math.random() * 2 + 1);
  // };

  document.getElementById("d20").addEventListener("click", rolld20);
  document.getElementById("d100").addEventListener("click", rolld100);
  document.getElementById("d12").addEventListener("click", rolld12);
  document.getElementById("d10").addEventListener("click", rolld10);
  document.getElementById("d8").addEventListener("click", rolld8);
  document.getElementById("d6").addEventListener("click", rolld6);
  document.getElementById("d4").addEventListener("click", rolld4);
  //document.getElementById("cointoss").addEventListener("click", cointoss);
  document.getElementById("sneak").addEventListener("click", sneakattack);
  