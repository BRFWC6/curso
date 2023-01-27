const inputForm = document.querySelector("#input-form");
const result = document.querySelector("#result");


// Cripto function


function btnCripto() {
  const stringCripto = criptografar(inputForm.value);
  result.value = stringCripto;
  inputForm.value = "";
}


function criptografar(stringCripto) {
  let conjuntoString = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
  stringCripto = stringCripto.toLowerCase();

  for (let i = 0; i < conjuntoString.length; i++) {
    if (stringCripto.includes(conjuntoString[i][0])) {
      stringCripto = stringCripto.replaceAll(conjuntoString[i][0],conjuntoString[i][1]);
    }
  }
  return stringCripto;
}

// Descripto function


function btnDescripto() {
  const stringDescripto = descriptografar(inputForm.value);
  result.value = stringDescripto;
  inputForm.value = "";
}


function descriptografar(stringDescripto) {
  let conjuntoString = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
  stringDescripto = stringDescripto.toLowerCase();

  for (let i = 0; i < conjuntoString.length; i++) {
    if (stringDescripto.includes(conjuntoString[i][1])) {
      stringDescripto = stringDescripto.replaceAll(conjuntoString[i][1],conjuntoString[i][0]);
    }
  }
  return stringDescripto;
}

// Copy function
document.getElementById('Copiar').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#result").value;
  await navigator.clipboard.writeText(text);
}
