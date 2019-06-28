var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositorios(repositorios) {
    for (repo of repositorios) {

      const textElement = document.createTextNode(repo.name);
      const liElement = document.createElement('li');

      liElement.appendChild(textElement);
      listElement.appendChild(liElement);
    }
  }

  function listRepositorios() {

    var user = inputElement.value;

    if (!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
      .then(function (response) {
        renderRepositorios(response.data);
      })
  }