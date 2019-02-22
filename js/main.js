// start with on click function 
function leaveComment() {
    //store value of input and textarea in variables
    var userName = document.getElementById("username").value;
    var userComment = document.getElementById("commentInput").value;
    //create text nodes and store in variables and store userName and userComment variables in them
    var userText = document.createTextNode("UserName: " + userName);
    var userComm = document.createTextNode("Response: " + userComment);
    //create h2 and h3 element nodes
    var newH2 = document.createElement("h2");
    var newH3 = document.createElement("h3");
    //appendChild textNodes into h2 and h3 elements
    newH2.appendChild(userText);
    newH3.appendChild(userComm);
    //create a li element 
    var newLi = document.createElement("li");
    //appendChild h2 and h3 elements into the li elements
    newLi.appendChild(newH2);
    newLi.appendChild(newH3);
    //appendChild li to ul.......
    var comments = document.getElementById("comments");

    comments.appendChild(newLi);
    
}
