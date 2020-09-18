// https://ron-swanson-quotes.herokuapp.com/v2/quotes


const XHR = document.querySelector('#xhr');
const Fetch = document.querySelector('#fetch');
const jQuery = document.querySelector('#jquery');
const Axios = document.querySelector('#axios');

const quote = document.querySelector('#quote');

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

// xhr
XHR.addEventListener('click', function () {
      let XHR = new XMLHttpRequest();

      XHR.onreadystatechange = function () {
            if (XHR.readyState === 4 && XHR.status === 200) {
                  let data = JSON.parse(XHR.responseText)[0];
                  quote.innerText = `"${data}"`;
            }
      }

      XHR.open('GET', url);
      XHR.send();
})

//fetch
Fetch.addEventListener('click', function () {
      fetch(url)
            .then((req) => {
                  return req.json()
            })
            .then((data) => {
                  quote.innerText = `"${data[0]}"`
            })
            .catch((error) => {
                  console.log(error);
            })
})

//jQuery
$(jquery).click(function () {
      $.getJSON(url)
            .done(function (data) {
                  $(quote).text(`"${data[0]}"`);
            })
            .fail(function () {
                  console.log('There was a problem');
            })
})

//axios
Axios.addEventListener('click', function () {
      axios.get(url)
            .then((res) => {
                  quote.innerText = `"${res.data[0]}"`
            })
            .catch((err) => {
                  console.log(err);
            })
})


