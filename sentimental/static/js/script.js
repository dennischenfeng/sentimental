
console.log("testing")
// const inputText = document.getElementById("input-text")

// // fetch('http://127.0.0.1:5000/?result=' + inputText)
// fetch('http://127.0.0.1:5000')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log("Result is: " + myJson);
//     console.log("hi");
//   });

// let first = 10;
// let second = 20;
// fetch('http://127.0.0.1:5000/add?a='+first+'&b='+second)
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log("When I add "+first+" and "+second+" I get: " + myJson.result);
//   });

// Taken from : https://stackoverflow.com/questions/44233791/fetch-can-you-pass-parameters-to-the-server
function send_test() {
  console.log("sending test function")
  fetch('/test', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
      a: parseFloat(document.getElementById('a').value),
      b: parseFloat(document.getElementById('b').value)
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      result_text = document.getElementById("result-text");
      result_text.textContent = "The result is: " + myJson.sum.toString();
    });
}


// let first = 10;
// let second = 20;
// fetch('http://127.0.0.1:5000/test'+first+'&b='+second, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }
// )
//   .then(async (response) => {
//     try {
//       const data = await response.json();
//       console.log("data is good: ", data);
//     } catch(error) {
//       console.log("error definitely happened lol");
//       console.error(error);
//     }
//   })
//   // .then((myJson) => {
//   //   console.log("When I add "+first+" and "+second+" I get: " + myJson.result);
//   // });