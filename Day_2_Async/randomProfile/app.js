/* const url = 'https://randomuser.me/api';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
      fetch(url)
            .then((response) => {
                  if (response.status >= 200 && response.status <= 299) {
                        return response.json();
                  }
            })
            .then((data) => {
                  const profileUpdate = data.results[0]

                  const profileImg = document.querySelector('#profile-img');
                  profileImg.src = `${profileUpdate.picture.large}`

                  document.querySelector('#first-name').innerHTML = `${profileUpdate.name.first}`
                  document.querySelector('#last-name').innerHTML = `${profileUpdate.name.last}`
                  document.querySelector('#username').innerHTML = `${profileUpdate.login.username}`
                  document.querySelector('#email').innerHTML = `Email: ${profileUpdate.email}`
                  document.querySelector('#city').innerHTML = `City: ${profileUpdate.location.city}`

            })
            .catch((error) => {
                  console.log('There has been a problem.', error);
            })
}) */



const url = 'https://randomuser.me/api';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
      fetch(url)
            .then(handleErrors)
            .then(parseJSON)
            .then(updateProfile)
            .catch(displayErrors)
});


function handleErrors(res) {
      if (!res.ok) {
            throw Error(res.status);
      }
      return res;
}

function parseJSON(res) {
      return res.json().then(function (parsedData) {
            return parsedData.results[0]
      })
}

function updateProfile(data) {

      const profileImg = document.querySelector('#profile-img');
      profileImg.src = `${data.picture.large}`

      document.querySelector('#first-name').innerHTML = `${data.name.first}`
      document.querySelector('#last-name').innerHTML = `${data.name.last}`
      document.querySelector('#username').innerHTML = `${data.login.username}`
      document.querySelector('#email').innerHTML = `Email: ${data.email}`
      document.querySelector('#city').innerHTML = `City: ${data.location.city}`

}

function displayErrors(error) {
      console.log('There has been a problem.', error);
}