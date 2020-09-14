// var num = 10;
// var countNum = setInterval(function countDown() {
//       num--;
//       console.log('Timer:', num);
//       if (num === 0) {
//             clearInterval(countNum);
//             console.log('Ring Ring Ring!!!');
//       }
// }, 1000);

function countDown(seconds) {
      var intervalId = setInterval(function () {
            seconds--;
            if (seconds > 0) {
                  console.log("Timer:", seconds);
            } else {
                  console.log("Ring Ring Ring!!!");
                  clearInterval(intervalId);
            }
      }, 1000);
}
