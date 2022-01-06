function send_test() {
    fetch('/test', {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
  
        //make sure to serialize your JSON body
        body: JSON.stringify({
            a: parseFloat(document.getElementById('input-text').value)
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            result_text = document.getElementById("result-text");
            result_text.textContent = "Prediction: " + data.result.toString();
        });
}