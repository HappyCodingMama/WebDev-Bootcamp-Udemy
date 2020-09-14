// xhr
/* const btn = document.querySelector('.btn');
const price = document.querySelector('#price');

btn.addEventListener('click', function () {
      let XHR = new XMLHttpRequest();

      XHR.onreadystatechange = function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                  const data = JSON.parse(XHR.responseText).bpi.USD.rate;
                  price.innerHTML = `${data} USD`;
            }
      }

      XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice/CNY.json');
      XHR.send();
}) */


// fetch
const btn = document.querySelector('.btn');
const price = document.querySelector('#price');

var url = 'https://api.coindesk.com/v1/bpi/currentprice/CNY.json';

btn.addEventListener('click', function () {
      fetch(url)
            .then(function (response) {
                  return response.json()
            })
            .then(function (data) {
                  const coindata = data.bpi.USD.rate;
                  price.innerHTML = `${coindata} USD`;
            })
})