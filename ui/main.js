//Counter increment code

var button = document.getElementById("counter");
var counter =0;
button.onclick = function () {
  
  //Create a request variable
    var request = new XMLHttpRequest();
    
  //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                //Take some action
                counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    
  //Make the request
   request.open('GET', "http://anuraged6.imad.hasura-app.io/counter", true);
   request.send(null);
};

//Name input and display code

