const btn = document.querySelector('#btn');
const inputAno = document.querySelector('#ano');

btn.addEventListener("click", getData);
inputAno.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    getData();
  }
});

function getData() {
  const ano = inputAno.value;
  const url = `http://localhost:8080/?ano=${ano}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert('ANO INVÁLIDO OU DIGITADO INCORRETAMENTE');
      }
      atribuirCampo(data);
    });
}

function atribuirCampo(data) {
  const fato = document.querySelector('#fato');
  fato.innerHTML = data.fato;
}
