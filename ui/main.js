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

var submit = document.getElementById('submit-btn');
submit.onclick = function () {
    
    //Create the submit request
        var request = new XMLHttpRequest();
        
    //Capture the response and store it in a variable
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                    for (var a=0; a<names.length; a++ ) {
                        list = list + '<li>' + names[a] + '</li>';
                    }
                     
                //Structure for rendering the list of names    
                    var ul = document.getElementById('nameList');
                    ul.innerHTML = list;
                }
            }
            
        
        };
    
        
    //Capturing the name from the index page and using it to make the request
        var nameInput = document.getElementById('name');
        var name = nameInput.value;
    
    //Making the request to the servar to send the updated namelist
        request.open('GET', 'http://anuraged6.imad.hasura-app.io/submitName/?name=' + name, true);
        request.send(null);
};

//Code for displaying name and comment on article page

var submitComment = document.getElementById("comment-submit");
submitComment.onclick = function () {
    
    //Create submit requests for name and comment
        var request1 = new XMLHttpRequest();
        var request2 = new XMLHttpRequest();
        
    //Capture the response text and store it in the variables
    
        request1.onreadystatechange = function () {
          if(request1.readyState === XMLHttpRequest.DONE) {
                if(request1.status === 200) {
                    request2.onreadystatechange = function () {
                      if(request2.readyState === XMLHttpRequest.DONE) {
                          if(request2.status === 200) {
                              namesOfComment = request1.responseText;
                              namesOfComment = JSON.parse(namesOfComment);
                              comments = request2.responseText;
                              comments = JSON.parse(comments);
                              var list1 = '';
                              for (var a=0; a<namesOfComment; a++) {
                                  list1 = list1 +'<li>'+'<p>'+namesOfComment[a]+'</p>'+'<p>'+comments[a]+'</p>'+'</li>';
                              }
                              var ul1 = document.getElementById('nameCommentList');
                              ul1.innerHTML = list1;
                          }
                    }  
                  };
              }
          }  
        };
        
        //Making the requests
        
        var name1Input = document.getElementById(name1);
        var name1 = name1Input.value;
        var comment1Input = document.getElementById(comments1);
        var comment1 = comment1Input.value;
        
        request1.open('GET', 'http://anuraged6.imad.hasura-app.io/submitNameOfComment/?nameOfComment=' + name1, true);
        request1.send(null);
        request2.open('GET', 'http://anuraged6.imad.hasura-app.io/submitComment/?comment=' + comment1, true);
        request2.send(null);
};