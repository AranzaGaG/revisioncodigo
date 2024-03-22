const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); /* Se agregó el # al elemento porque en el html está como clase */
const $b = document.querySelector('#blog'); 
const $l = document.querySelector('#location'); /* Se agregó el # a location */

// Le coloque el async antes de la funcion
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); /* Agregué el data porque quería el json */
  console.log(data);
  $n.textContent = `${data.name}`; /* Se cambió la comilla que estaba anteriormente*/
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` /* Le aguegue el $ porque así se definió la variable */
}

displayUser('stolinski').catch(handleError);