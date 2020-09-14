const url = 'https://randomuser.me/api';

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
})
